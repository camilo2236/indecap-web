// src/app/api/secretaria/pdf/route.ts
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { getEstudiante, formatNota } from '@/lib/secretaria'

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

  const { estudiante, matriculas, promedio_general } = data
  const fecha = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' })

  // Generar HTML del PDF
  const periodosHTML = matriculas.map(m => {
    const promPeriodo = m.notas.filter(n => n.definitiva !== null).length > 0
      ? m.notas.filter(n => n.definitiva !== null).reduce((a, b) => a + (b.definitiva || 0), 0) / m.notas.filter(n => n.definitiva !== null).length
      : null

    const notasHTML = m.notas.map(n => `
      <tr>
        <td style="padding:7px 12px; border-bottom:1px solid #eaeff1; font-size:12px; color:#1a1c1e;">${n.asignatura}</td>
        <td style="padding:7px 12px; border-bottom:1px solid #eaeff1; font-size:12px; font-weight:600; text-align:right; color:${(n.definitiva || 0) >= 3.0 ? '#3b6d11' : '#a32d2d'};">${formatNota(n.definitiva)}</td>
      </tr>
    `).join('')

    return `
      <div style="margin-bottom:20px; border:1px solid #eaeff1; border-radius:8px; overflow:hidden; page-break-inside:avoid;">
        <div style="background:#eeedfe; padding:8px 14px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:13px; font-weight:600; color:#3c3489;">${m.periodo} — ${m.programa_jornada}</span>
          ${promPeriodo !== null ? `<span style="font-size:12px; font-weight:600; color:#3c3489;">Promedio: ${formatNota(promPeriodo)}</span>` : ''}
        </div>
        <table style="width:100%; border-collapse:collapse;">
          <thead>
            <tr style="background:#fafbff;">
              <th style="padding:7px 12px; text-align:left; font-size:11px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em;">Asignatura</th>
              <th style="padding:7px 12px; text-align:right; font-size:11px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em;">Definitiva</th>
            </tr>
          </thead>
          <tbody>${notasHTML}</tbody>
        </table>
      </div>
    `
  }).join('')

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Reporte Académico — ${estudiante.nombre}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #fff; color: #1a1c1e; padding: 32px; }
        @media print { body { padding: 16px; } }
      </style>
    </head>
    <body>
      <div style="border-bottom:2px solid #1a086e; padding-bottom:16px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;">
        <div>
          <div style="font-size:10px; color:#42474e; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px;">Corporación Educativa</div>
          <div style="font-size:22px; font-weight:700; color:#1a086e; letter-spacing:-0.01em;">INDECAP</div>
          <div style="font-size:11px; color:#42474e;">Instituto de Ciencias Aplicadas · Calidad Educativa Certificada</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:13px; font-weight:600; color:#1a086e;">REPORTE ACADÉMICO OFICIAL</div>
          <div style="font-size:11px; color:#42474e; margin-top:4px;">Bachillerato por Ciclos CLEI</div>
          <div style="font-size:10px; color:#787583; margin-top:4px;">Generado: ${fecha}</div>
        </div>
      </div>

      <div style="background:#f5fafc; border:1px solid #eaeff1; border-radius:8px; padding:14px 16px; margin-bottom:20px;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <div style="font-size:10px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:3px;">Estudiante</div>
            <div style="font-size:14px; font-weight:600; color:#1a1c1e;">${estudiante.nombre}</div>
          </div>
          <div>
            <div style="font-size:10px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:3px;">Documento</div>
            <div style="font-size:14px; font-weight:600; color:#1a1c1e;">${estudiante.tipo_documento || 'CC'} ${estudiante.doc}</div>
          </div>
          <div>
            <div style="font-size:10px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:3px;">Municipio</div>
            <div style="font-size:13px; color:#1a1c1e;">${estudiante.municipio_direccion || '—'}</div>
          </div>
          <div>
            <div style="font-size:10px; color:#42474e; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:3px;">Promedio general</div>
            <div style="font-size:20px; font-weight:700; color:#1a086e;">${formatNota(promedio_general)}</div>
          </div>
        </div>
      </div>

      ${periodosHTML}

      <div style="margin-top:24px; padding-top:12px; border-top:1px solid #eaeff1; display:flex; justify-content:space-between; font-size:10px; color:#787583;">
        <span>INDECAP · Medellín · Envigado · Caldas · indecap.edu.co</span>
        <span>Generado: ${fecha}</span>
      </div>
    </body>
    </html>
  `

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `inline; filename="INDECAP_${estudiante.doc}.html"`,
    },
  })
}