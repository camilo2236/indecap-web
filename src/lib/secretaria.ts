// src/lib/secretaria.ts
import { createAdminClient } from './supabase/admin'

export interface Estudiante {
  doc: string
  nombre: string
  tipo_documento: string | null
  genero: string | null
  fecha_nacimiento: string | null
  celular: string | null
  correo: string | null
  municipio_nacimiento: string | null
  municipio_direccion: string | null
  barrio: string | null
}

export interface Matricula {
  codigo_matricula: string
  doc: string
  periodo: string | null
  programa_jornada: string | null
  sede: string | null
  estado_matricula: string | null
  nivel: string | null
  notas: Nota[]
}

export interface Nota {
  id: string
  codigo_matricula: string
  periodo: string | null
  asignatura: string | null
  definitiva: number | null
}

export interface EstudianteCompleto {
  estudiante: Estudiante
  matriculas: Matricula[]
  promedio_general: number | null
  total_periodos: number
}

export async function getEstudiante(doc: string): Promise<EstudianteCompleto | null> {
  const sb = createAdminClient()

  const { data: estudiante, error: errEst } = await sb
    .from('estudiantes_q10')
    .select('*')
    .eq('doc', doc.trim())
    .single()

  if (errEst || !estudiante) return null

  const { data: matriculas } = await sb
    .from('matriculas_q10')
    .select('*')
    .eq('doc', doc.trim())
    .order('periodo', { ascending: true })

  if (!matriculas || matriculas.length === 0) {
    return {
      estudiante,
      matriculas: [],
      promedio_general: null,
      total_periodos: 0,
    }
  }

  const codigos = matriculas.map(m => m.codigo_matricula)

  const { data: notas } = await sb
    .from('notas_q10')
    .select('*')
    .in('codigo_matricula', codigos)
    .order('asignatura', { ascending: true })

  const notasPorMatricula: Record<string, Nota[]> = {}
  for (const nota of notas || []) {
    if (!notasPorMatricula[nota.codigo_matricula]) {
      notasPorMatricula[nota.codigo_matricula] = []
    }
    notasPorMatricula[nota.codigo_matricula].push(nota)
  }

  const matriculasConNotas: Matricula[] = matriculas.map(m => ({
    ...m,
    notas: notasPorMatricula[m.codigo_matricula] || [],
  }))

  // Calcular promedio general
  const todasLasNotas = (notas || [])
    .map(n => n.definitiva)
    .filter((n): n is number => n !== null && n !== undefined)

  const promedio_general = todasLasNotas.length > 0
    ? Math.round((todasLasNotas.reduce((a, b) => a + b, 0) / todasLasNotas.length) * 100) / 100
    : null

  return {
    estudiante,
    matriculas: matriculasConNotas,
    promedio_general,
    total_periodos: matriculas.length,
  }
}

export async function buscarPorNombre(nombre: string) {
  const sb = createAdminClient()

  const { data } = await sb
    .from('estudiantes_q10')
    .select('doc, nombre, tipo_documento, municipio_direccion')
    .ilike('nombre', `%${nombre.trim()}%`)
    .limit(10)

  return data || []
}

export function getIniciales(nombre: string): string {
  const partes = nombre.trim().split(' ')
  if (partes.length >= 2) {
    return (partes[0][0] + partes[1][0]).toUpperCase()
  }
  return partes[0].substring(0, 2).toUpperCase()
}

export function formatNota(nota: number | null): string {
  if (nota === null || nota === undefined) return '—'
  return nota.toFixed(2).replace('.', ',')
}

export function getColorNota(nota: number | null): string {
  if (nota === null) return 'inherit'
  if (nota >= 3.0) return '#3b6d11'
  return '#a32d2d'
}