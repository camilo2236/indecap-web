// src/lib/secretaria.ts
// FIX v2: CLEI asignado por orden cronológico del estudiante, no por campo nivel
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
  clei_real: string | null  // ← NUEVO: CLEI calculado por orden
  notas: Nota[]
}

export interface Nota {
  id: string
  codigo_matricula: string
  periodo: string | null
  asignatura: string | null
  definitiva: number | null
}

export interface Pago {
  id: string
  doc: string
  periodo: string | null
  grado: string | null
  recibo_caja: string | null
  fecha_pago: string | null
  observacion: string | null
  valor_pagado: number | null
  estado: string | null
  forma_pago: string | null
}

export interface ResumenPagos {
  total_pagado: number
  total_pagos: number
  ultimo_pago: string | null
  pagos: Pago[]
}

export interface EstudianteCompleto {
  estudiante: Estudiante
  matriculas: Matricula[]
  promedio_general: number | null
  total_periodos: number
  pagos: ResumenPagos
}

// Ordenar períodos cronológicamente
// Formatos: "2017", "2017-1A", "2017-2A", "2018-FUNDACION", "2022 1A", "2022-2A Antiguos", etc.
function ordenarPeriodo(p: string): number {
  const clean = p.replace(/\s+/g, '-').toUpperCase()
  const year = parseInt(clean.substring(0, 4)) || 0
  let sub = 0
  if (clean.includes('FUNDACION')) sub = 0
  else if (clean.includes('1A') || clean.includes('1B')) sub = 1
  else if (clean.includes('2A') || clean.includes('2B')) sub = 2
  else sub = 0.5 // período anual sin sufijo va entre 1A y 2A
  return year * 10 + sub
}

// CLEI empieza en 3 para bachillerato CLEI colombiano
const CLEI_LABELS = ['CLEI 3', 'CLEI 4', 'CLEI 5', 'CLEI 6', 'CLEI 7', 'CLEI 8']

export async function getEstudiante(doc: string): Promise<EstudianteCompleto | null> {
  const sb = createAdminClient()

  const { data: estudiante, error: errEst } = await sb
    .from('estudiantes_q10')
    .select('*')
    .eq('doc', doc.trim())
    .single()

  if (errEst || !estudiante) return null

  // Matrículas
  const { data: matriculas } = await sb
    .from('matriculas_q10')
    .select('*')
    .eq('doc', doc.trim())

  let matriculasConNotas: Matricula[] = []
  const periodosUnicos = new Set<string>()

  if (matriculas && matriculas.length > 0) {
    const codigos = matriculas.map(m => m.codigo_matricula)
    const { data: notas } = await sb
      .from('notas_q10')
      .select('*')
      .in('codigo_matricula', codigos)

    // Agrupar notas por período
    const notasPorPeriodo: Record<string, Nota[]> = {}
    for (const nota of notas || []) {
      const key = nota.periodo || 'sin-periodo'
      if (!notasPorPeriodo[key]) notasPorPeriodo[key] = []
      notasPorPeriodo[key].push(nota)
      if (nota.periodo) periodosUnicos.add(nota.periodo)
    }

    // Ordenar períodos cronológicamente
    const periodosOrdenados = Object.keys(notasPorPeriodo)
      .sort((a, b) => ordenarPeriodo(a) - ordenarPeriodo(b))

    const matriculaBase = matriculas[0]

    // Asignar CLEI por orden (CLEI 3 = primero, CLEI 4 = segundo, etc.)
    matriculasConNotas = periodosOrdenados.map((periodo, index) => ({
      ...matriculaBase,
      periodo,
      clei_real: CLEI_LABELS[index] || `CLEI ${index + 3}`,
      notas: notasPorPeriodo[periodo].sort((a, b) =>
        (a.asignatura || '').localeCompare(b.asignatura || '')
      ),
    }))
  }

  // Promedio general
  const todasLasNotas = matriculasConNotas
    .flatMap(m => m.notas)
    .map(n => n.definitiva)
    .filter((n): n is number => n !== null && n !== undefined)

  const promedio_general = todasLasNotas.length > 0
    ? Math.round((todasLasNotas.reduce((a, b) => a + b, 0) / todasLasNotas.length) * 100) / 100
    : null

  // Pagos
  const { data: pagosData } = await sb
    .from('pagos_q10')
    .select('*')
    .eq('doc', doc.trim())
    .order('fecha_pago', { ascending: true })

  const pagos = pagosData || []
  const total_pagado = pagos.reduce((sum, p) => sum + (p.valor_pagado || 0), 0)
  const ultimo_pago = pagos.length > 0 ? pagos[pagos.length - 1].fecha_pago : null

  return {
    estudiante,
    matriculas: matriculasConNotas,
    promedio_general,
    total_periodos: periodosUnicos.size,
    pagos: {
      total_pagado: Math.round(total_pagado),
      total_pagos: pagos.length,
      ultimo_pago,
      pagos,
    },
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
  if (partes.length >= 2) return (partes[0][0] + partes[1][0]).toUpperCase()
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

export function formatPesos(valor: number | null): string {
  if (valor === null || valor === undefined) return '—'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor)
}

export function formatFecha(fecha: string | null): string {
  if (!fecha) return '—'
  const [year, month, day] = fecha.split('-')
  return `${day}/${month}/${year}`
}
