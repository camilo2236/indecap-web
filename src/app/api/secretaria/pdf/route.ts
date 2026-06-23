// src/app/api/secretaria/pdf/route.ts
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { getEstudiante } from '@/lib/secretaria'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

// ── Colores ───────────────────────────────────────────────────────────────────
const C = {
  azul:      rgb(0.098, 0.031, 0.431),  // #1a086e
  azulClaro: rgb(0.925, 0.925, 0.996),  // #eeedfe
  gris:      rgb(0.961, 0.980, 0.980),  // #f5fafc
  grisBorde: rgb(0.918, 0.937, 0.945),  // #eaeff1
  negro:     rgb(0.102, 0.110, 0.118),  // #1a1c1e
  grisText:  rgb(0.259, 0.278, 0.306),  // #42474e
  grisLight: rgb(0.471, 0.459, 0.514),  // #787583
  verde:     rgb(0.231, 0.427, 0.067),  // #3b6d11
  rojo:      rgb(0.639, 0.176, 0.176),  // #a32d2d
  blanco:    rgb(1, 1, 1),
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmt(n: number | null): string {
  if (n === null || n === undefined) return '—'
  return n.toFixed(2).replace('.', ',')
}

function ordenarPeriodo(p: string): number {
  const clean = p.replace(/\s+/g, '-').toUpperCase()
  const year = parseInt(clean.substring(0, 4)) || 0
  let sub = 0
  if (clean.includes('FUNDACION')) sub = 0
  else if (clean.includes('1A') || clean.includes('1B')) sub = 1
  else if (clean.includes('2A') || clean.includes('2B')) sub = 2
  else sub = 0.5
  return year * 10 + sub
}

const CLEI_LABELS = ['CLEI 3', 'CLEI 4', 'CLEI 5', 'CLEI 6', 'CLEI 7', 'CLEI 8']

// ── Generador PDF ─────────────────────────────────────────────────────────────
async function generarPDF(data: Awaited<ReturnType<typeof getEstudiante>>) {
  if (!data) throw new Error('Sin datos')

  const { estudiante, matriculas, promedio_general } = data
  const fecha = new Date().toLocaleDateString('es-CO', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  })

  const doc = await PDFDocument.create()
  const fontR = await doc.embedFont(StandardFonts.Helvetica)
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold)

  const W = 612  // letter width pts
  const H = 792  // letter height pts
  const ML = 42  // margin left
  const MR = 42  // margin right
  const CW = W - ML - MR  // content width

  let page = doc.addPage([W, H])
  let y = H - 40

  // ── Helpers de dibujo ──
  function newPage() {
    drawFooter()
    page = doc.addPage([W, H])
    y = H - 40
    drawHeader()
    y -= 8
  }

  function ensureSpace(needed: number) {
    if (y - needed < 50) newPage()
  }

  function drawHeader() {
    // Línea superior azul
    page.drawRectangle({ x: ML, y: H - 38, width: CW, height: 3, color: C.azul })

    // INDECAP texto
    page.drawText('INDECAP', {
      x: ML, y: H - 54, size: 16, font: fontB, color: C.azul
    })
    page.drawText('Reporte Academico - Notas Definitivas', {
      x: ML, y: H - 68, size: 9, font: fontR, color: C.grisText
    })

    // Fecha derecha
    page.drawText(`Generado: ${fecha}`, {
      x: W - MR - 100, y: H - 54, size: 9, font: fontR, color: C.grisLight
    })

    // Línea separadora
    page.drawLine({
      start: { x: ML, y: H - 78 },
      end:   { x: W - MR, y: H - 78 },
      thickness: 0.5, color: C.grisBorde
    })

    y = H - 90
  }

  function drawFooter() {
    page.drawLine({
      start: { x: ML, y: 42 },
      end:   { x: W - MR, y: 42 },
      thickness: 0.5, color: C.grisBorde
    })
    page.drawText('INDECAP · Medellin · Envigado · Caldas · indecap.edu.co', {
      x: ML, y: 28, size: 8, font: fontR, color: C.grisLight
    })
    page.drawText(`Impresion: ${fecha}`, {
      x: W - MR - 90, y: 28, size: 8, font: fontR, color: C.grisLight
    })
  }

  // ── Página 1 ──
  drawHeader()

  // Card estudiante
  const cardH = 72
  page.drawRectangle({ x: ML, y: y - cardH, width: CW, height: cardH, color: C.gris })
  page.drawRectangle({ x: ML, y: y - cardH, width: CW, height: cardH, borderColor: C.grisBorde, borderWidth: 0.5, color: C.gris })

  page.drawText('ESTUDIANTE', { x: ML + 12, y: y - 16, size: 8, font: fontB, color: C.grisText })
  page.drawText(estudiante.nombre, { x: ML + 12, y: y - 28, size: 13, font: fontB, color: C.negro })

  page.drawText('DOCUMENTO', { x: ML + 12, y: y - 44, size: 8, font: fontB, color: C.grisText })
  page.drawText(`${estudiante.tipo_documento || 'CC'} ${estudiante.doc}`, { x: ML + 12, y: y - 56, size: 11, font: fontR, color: C.negro })

  page.drawText('MUNICIPIO', { x: ML + 260, y: y - 44, size: 8, font: fontB, color: C.grisText })
  page.drawText(estudiante.municipio_direccion || '—', { x: ML + 260, y: y - 56, size: 11, font: fontR, color: C.negro })

  page.drawText('PROMEDIO GENERAL', { x: W - MR - 100, y: y - 16, size: 8, font: fontB, color: C.grisText })
  page.drawText(fmt(promedio_general), { x: W - MR - 100, y: y - 34, size: 20, font: fontB, color: C.azul })

  y -= cardH + 16

  // ── Notas por período ──
  // Reordenar matriculas por período usando la misma lógica de secretaria.ts
  const periodosGlobal = Array.from(
    new Set(matriculas.flatMap(m => m.notas.map(n => n.periodo || '')).filter(Boolean))
  ).sort((a, b) => ordenarPeriodo(a) - ordenarPeriodo(b))

  // Agrupar notas por período
  const notasPorPeriodo: Record<string, Array<{ asignatura: string | null; definitiva: number | null }>> = {}
  for (const m of matriculas) {
    for (const n of m.notas) {
      const p = n.periodo || 'Sin periodo'
      if (!notasPorPeriodo[p]) notasPorPeriodo[p] = []
      notasPorPeriodo[p].push({ asignatura: n.asignatura, definitiva: n.definitiva })
    }
  }

  // Ordenar asignaturas dentro de cada período
  for (const p of Object.keys(notasPorPeriodo)) {
    notasPorPeriodo[p].sort((a, b) => (a.asignatura || '').localeCompare(b.asignatura || ''))
  }

  const ROW_H = 18
  const HEADER_H = 24
  const PERIOD_LABEL_H = 22

  for (let i = 0; i < periodosGlobal.length; i++) {
    const periodo = periodosGlobal[i]
    const cleiLabel = CLEI_LABELS[i] || `Periodo ${i + 3}`
    const notas = notasPorPeriodo[periodo] || []

    const notasValidas = notas.filter(n => n.definitiva !== null)
    const promPeriodo = notasValidas.length > 0
      ? notasValidas.reduce((a, b) => a + (b.definitiva || 0), 0) / notasValidas.length
      : null

    const blockH = PERIOD_LABEL_H + HEADER_H + notas.length * ROW_H + 12
    ensureSpace(blockH)

    // Label período — fondo azul claro
    page.drawRectangle({ x: ML, y: y - PERIOD_LABEL_H, width: CW, height: PERIOD_LABEL_H, color: C.azulClaro })
    page.drawText(`${cleiLabel}  ·  ${periodo}`, {
      x: ML + 10, y: y - 15, size: 11, font: fontB, color: C.azul
    })
    if (promPeriodo !== null) {
      const promTxt = `Prom. ${fmt(promPeriodo)}`
      page.drawText(promTxt, {
        x: W - MR - 60, y: y - 15, size: 10, font: fontB, color: C.azul
      })
    }
    y -= PERIOD_LABEL_H

    // Header tabla
    page.drawRectangle({ x: ML, y: y - HEADER_H, width: CW, height: HEADER_H, color: C.azul })
    page.drawText('Asignatura', { x: ML + 10, y: y - 16, size: 9, font: fontB, color: C.blanco })
    page.drawText('Definitiva', { x: W - MR - 55, y: y - 16, size: 9, font: fontB, color: C.blanco })
    y -= HEADER_H

    // Filas
    for (let j = 0; j < notas.length; j++) {
      const n = notas[j]
      const bg = j % 2 === 0 ? C.blanco : C.gris
      page.drawRectangle({ x: ML, y: y - ROW_H, width: CW, height: ROW_H, color: bg })

      // Línea separadora
      page.drawLine({
        start: { x: ML, y: y - ROW_H },
        end:   { x: W - MR, y: y - ROW_H },
        thickness: 0.3, color: C.grisBorde
      })

      page.drawText(n.asignatura || '—', {
        x: ML + 10, y: y - 13, size: 10, font: fontR, color: C.negro
      })

      const nota = n.definitiva
      const notaColor = nota !== null && nota >= 3.0 ? C.verde : C.rojo
      const notaTxt = fmt(nota)
      page.drawText(notaTxt, {
        x: W - MR - 10 - (notaTxt.length * 6), y: y - 13,
        size: 10, font: fontB, color: nota !== null ? notaColor : C.grisLight
      })

      y -= ROW_H
    }

    y -= 14  // espacio entre períodos
  }

  drawFooter()

  const pdfBytes = await doc.save()
  return pdfBytes
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const admin = createAdminClient()
  const { data: usuario } = await admin
    .from('usuarios')
    .select('rol')
    .eq('id', user.id)
    .single()

  if (!usuario || usuario.rol !== 'admin') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const doc = req.nextUrl.searchParams.get('doc') || ''
  if (!doc) return NextResponse.json({ error: 'Falta documento' }, { status: 400 })

  const data = await getEstudiante(doc)
  if (!data) return NextResponse.json({ error: 'Estudiante no encontrado' }, { status: 404 })

  try {
    const pdfBytes = await generarPDF(data)

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="INDECAP_Reporte_${doc}.pdf"`,
        'Content-Length': pdfBytes.length.toString(),
      },
    })
  } catch (err) {
    console.error('PDF error:', err)
    return NextResponse.json({ error: 'Error generando PDF' }, { status: 500 })
  }
}
