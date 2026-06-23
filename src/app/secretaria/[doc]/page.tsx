// src/app/secretaria/[doc]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  EstudianteCompleto,
  formatNota,
  getColorNota,
  formatPesos,
  formatFecha,
  getIniciales,
} from '@/lib/secretaria'

export default function EstudiantePage() {
  const { doc } = useParams<{ doc: string }>()
  const router = useRouter()
  const [data, setData] = useState<EstudianteCompleto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tabActiva, setTabActiva] = useState<'notas' | 'pagos'>('notas')

  useEffect(() => {
    if (!doc) return
    fetch(`/api/secretaria/estudiante?doc=${encodeURIComponent(doc)}`)
      .then(r => r.json())
      .then(json => {
        if (json.error) setError(json.error)
        else setData(json.data)
      })
      .catch(() => setError('Error de conexion'))
      .finally(() => setLoading(false))
  }, [doc])

  const s = {
    wrap: {
      maxWidth: '720px',
      margin: '0 auto',
      padding: '2rem 1.5rem',
      fontFamily: 'Inter, sans-serif',
    } as React.CSSProperties,
    card: {
      background: '#fff',
      border: '0.5px solid rgba(26,8,110,0.1)',
      borderRadius: '14px',
      padding: '1.25rem',
      marginBottom: '1rem',
    } as React.CSSProperties,
    sectionTitle: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#42474e',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.06em',
      marginBottom: '12px',
    },
    label: { fontSize: '11px', color: '#6b7280' },
    value: { fontSize: '14px', color: '#1a1c1e', fontWeight: 500, marginTop: '2px' },
  }

  if (loading) return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
      <div style={{ fontSize: '13px', color: '#6b7280' }}>Cargando expediente...</div>
    </div>
  )

  if (error) return (
    <div style={s.wrap}>
      <button
        onClick={() => router.push('/secretaria')}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#312783', cursor: 'pointer', marginBottom: '1.5rem', background: 'none', border: 'none', padding: 0 }}
      >
        Volver
      </button>
      <div style={{ ...s.card, background: '#FCEBEB', borderColor: '#E24B4A' }}>
        <div style={{ fontSize: '14px', color: '#A32D2D', fontWeight: 500 }}>
          {error === 'No autorizado' ? 'No tienes permisos para ver esta informacion.' : 'Estudiante no encontrado.'}
        </div>
        <div style={{ fontSize: '12px', color: '#791F1F', marginTop: '4px' }}>Documento: {doc}</div>
      </div>
    </div>
  )

  if (!data) return null

  const { estudiante, matriculas, promedio_general, total_periodos, pagos } = data
  const iniciales = getIniciales(estudiante.nombre)

  return (
    <div style={s.wrap}>

      {/* Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button
          onClick={() => router.push('/secretaria')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#312783', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          Volver a busqueda
        </button>
        <a
          href={`/api/secretaria/pdf?doc=${doc}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#1a086e',
            color: '#fff',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Descargar PDF
        </a>
      </div>

      {/* Header estudiante */}
      <div style={{ ...s.card, display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
          background: '#E8E6F8', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', fontWeight: 600, color: '#312783',
        }}>
          {iniciales}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#1a086e', margin: '0 0 4px', fontFamily: 'Newsreader, serif' }}>
            {estudiante.nombre}
          </h1>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            {estudiante.tipo_documento} · {estudiante.doc}
            {estudiante.municipio_direccion ? ` · ${estudiante.municipio_direccion}` : ''}
          </div>
        </div>
        {promedio_general !== null && (
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '26px', fontWeight: 600, color: promedio_general >= 3 ? '#3b6d11' : '#a32d2d', lineHeight: 1 }}>
              {formatNota(promedio_general)}
            </div>
            <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '3px' }}>Promedio general</div>
          </div>
        )}
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '1rem' }}>
        {[
          { val: total_periodos, lbl: 'Periodos cursados' },
          { val: formatPesos(pagos.total_pagado), lbl: 'Total pagado' },
          { val: pagos.total_pagos, lbl: 'Pagos registrados' },
        ].map((k, i) => (
          <div key={i} style={{ background: '#F3F8FA', borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#1a086e' }}>{k.val}</div>
            <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '3px' }}>{k.lbl}</div>
          </div>
        ))}
      </div>

      {/* Datos personales */}
      <div style={s.card}>
        <div style={s.sectionTitle}>Datos personales</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {[
            { l: 'Genero', v: estudiante.genero },
            { l: 'Fecha de nacimiento', v: formatFecha(estudiante.fecha_nacimiento) },
            { l: 'Celular', v: estudiante.celular },
            { l: 'Correo', v: estudiante.correo },
            { l: 'Municipio nacimiento', v: estudiante.municipio_nacimiento },
            { l: 'Barrio', v: estudiante.barrio },
          ].map((f, i) => f.v ? (
            <div key={i}>
              <div style={s.label}>{f.l}</div>
              <div style={s.value}>{f.v}</div>
            </div>
          ) : null)}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {(['notas', 'pagos'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setTabActiva(tab)}
            style={{
              padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
              border: '0.5px solid',
              borderColor: tabActiva === tab ? '#312783' : 'rgba(66,71,78,0.2)',
              background: tabActiva === tab ? '#312783' : 'transparent',
              color: tabActiva === tab ? '#fff' : '#42474e',
              cursor: 'pointer',
            }}
          >
            {tab === 'notas' ? `Notas (${matriculas.length} periodos)` : `Pagos (${pagos.total_pagos})`}
          </button>
        ))}
      </div>

      {/* Tab Notas */}
      {tabActiva === 'notas' && (
        <div>
          {matriculas.length === 0 && (
            <div style={{ ...s.card, color: '#6b7280', fontSize: '13px' }}>No hay matriculas registradas.</div>
          )}
          {matriculas.map((m, i) => (
            <div key={i} style={{ ...s.card, marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a086e' }}>
                    {m.clei_real || m.nivel} — Periodo {m.periodo}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>
                    {[m.programa_jornada, m.sede, m.estado_matricula].filter(Boolean).join(' · ')}
                  </div>
                </div>
                {m.notas.length > 0 && (() => {
                  const vals = m.notas.map(n => n.definitiva).filter((n): n is number => n !== null)
                  const prom = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null
                  return prom !== null ? (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '18px', fontWeight: 600, color: getColorNota(prom) }}>{formatNota(prom)}</div>
                      <div style={{ fontSize: '10px', color: '#6b7280' }}>Promedio</div>
                    </div>
                  ) : null
                })()}
              </div>

              {m.notas.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ borderBottom: '0.5px solid rgba(66,71,78,0.15)' }}>
                      <th style={{ textAlign: 'left', padding: '6px 0', color: '#6b7280', fontWeight: 500, fontSize: '11px' }}>Asignatura</th>
                      <th style={{ textAlign: 'right', padding: '6px 0', color: '#6b7280', fontWeight: 500, fontSize: '11px' }}>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {m.notas.map((n, j) => (
                      <tr key={j} style={{ borderBottom: '0.5px solid rgba(66,71,78,0.08)' }}>
                        <td style={{ padding: '7px 0', color: '#1a1c1e' }}>{n.asignatura || '—'}</td>
                        <td style={{ padding: '7px 0', textAlign: 'right', fontWeight: 600, color: getColorNota(n.definitiva) }}>
                          {formatNota(n.definitiva)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>Sin notas registradas en este periodo.</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab Pagos */}
      {tabActiva === 'pagos' && (
        <div style={s.card}>
          {pagos.pagos.length === 0 ? (
            <div style={{ fontSize: '13px', color: '#6b7280' }}>No hay pagos registrados.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '0.5px solid rgba(66,71,78,0.15)' }}>
                  {['Fecha', 'Periodo', 'Nivel', 'Descripcion', 'Forma', 'Valor'].map(h => (
                    <th key={h} style={{ textAlign: h === 'Valor' ? 'right' : 'left', padding: '6px 8px 6px 0', color: '#6b7280', fontWeight: 500, fontSize: '11px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pagos.pagos.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '0.5px solid rgba(66,71,78,0.08)' }}>
                    <td style={{ padding: '8px 8px 8px 0', color: '#1a1c1e', whiteSpace: 'nowrap' }}>{formatFecha(p.fecha_pago)}</td>
                    <td style={{ padding: '8px 8px 8px 0', color: '#42474e' }}>{p.periodo || '—'}</td>
                    <td style={{ padding: '8px 8px 8px 0', color: '#42474e' }}>{p.grado || '—'}</td>
                    <td style={{ padding: '8px 8px 8px 0', color: '#42474e', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.observacion || '—'}</td>
                    <td style={{ padding: '8px 8px 8px 0', color: '#42474e' }}>{p.forma_pago || '—'}</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 600, color: '#1a086e', whiteSpace: 'nowrap' }}>{formatPesos(p.valor_pagado)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ borderTop: '1px solid rgba(26,8,110,0.15)' }}>
                  <td colSpan={5} style={{ padding: '10px 8px 4px 0', fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>Total pagado</td>
                  <td style={{ padding: '10px 0 4px', textAlign: 'right', fontSize: '16px', fontWeight: 700, color: '#1a086e' }}>{formatPesos(pagos.total_pagado)}</td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      )}

    </div>
  )
}