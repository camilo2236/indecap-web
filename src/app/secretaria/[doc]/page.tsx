'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface Nota {
  id: string
  codigo_matricula: string
  periodo: string | null
  asignatura: string | null
  definitiva: number | null
}

interface Matricula {
  codigo_matricula: string
  doc: string
  periodo: string | null
  programa_jornada: string | null
  sede: string | null
  estado_matricula: string | null
  nivel: string | null
  notas: Nota[]
}

interface Pago {
  id: string
  doc: string
  periodo: string | null
  grado: string | null
  fecha_pago: string | null
  observacion: string | null
  valor_pagado: number | null
  estado: string | null
  forma_pago: string | null
}

interface EstudianteData {
  estudiante: {
    doc: string
    nombre: string
    tipo_documento: string | null
    municipio_direccion: string | null
  }
  matriculas: Matricula[]
  promedio_general: number | null
  total_periodos: number
  pagos: {
    total_pagado: number
    total_pagos: number
    ultimo_pago: string | null
    pagos: Pago[]
  }
}

function formatNota(nota: number | null): string {
  if (nota === null || nota === undefined) return '—'
  return nota.toFixed(2).replace('.', ',')
}

function getColorNota(nota: number | null): string {
  if (nota === null) return 'inherit'
  return nota >= 3.0 ? '#3b6d11' : '#a32d2d'
}

function formatPesos(valor: number | null): string {
  if (valor === null || valor === undefined) return '—'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}

function formatFecha(fecha: string | null): string {
  if (!fecha) return '—'
  const [year, month, day] = fecha.split('-')
  return `${day}/${month}/${year}`
}

function getIniciales(nombre: string): string {
  const partes = nombre.trim().split(' ')
  if (partes.length >= 2) return (partes[0][0] + partes[1][0]).toUpperCase()
  return partes[0].substring(0, 2).toUpperCase()
}

export default function EstudiantePage() {
  const params = useParams()
  const doc = params.doc as string
  const [data, setData] = useState<EstudianteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'notas' | 'pagos'>('notas')

  useEffect(() => {
    fetch(`/api/secretaria/estudiante?doc=${doc}`)
      .then(r => r.json())
      .then(d => {
        setData(d.data || null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [doc])

  if (loading) return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center', color: '#42474e', fontSize: '14px' }}>
      Cargando estudiante...
    </div>
  )

  if (!data) return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center', color: '#42474e', fontSize: '14px' }}>
      Estudiante no encontrado.{' '}
      <Link href="/secretaria" style={{ color: '#1a086e' }}>Volver</Link>
    </div>
  )

  const { estudiante, matriculas, promedio_general, total_periodos, pagos } = data
  const iniciales = getIniciales(estudiante.nombre)

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1.5rem' }}>

      <div style={{ marginBottom: '1.25rem' }}>
        <Link href="/secretaria" style={{ fontSize: '13px', color: '#1a086e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', width: 'fit-content' }}>
          &larr; Volver a búsqueda
        </Link>
      </div>

      {/* Card estudiante */}
      <div style={{ background: '#fff', border: '0.5px solid rgba(26,8,110,0.1)', borderRadius: '14px', padding: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '0.5px solid #eaeff1' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eeedfe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 600, color: '#3c3489', flexShrink: 0 }}>
            {iniciales}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a1c1e' }}>{estudiante.nombre}</div>
            <div style={{ fontSize: '12px', color: '#42474e', marginTop: '3px' }}>
              {estudiante.tipo_documento} &middot; {estudiante.doc}
              {estudiante.municipio_direccion ? ` · ${estudiante.municipio_direccion}` : ''}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={`/api/secretaria/pdf?doc=${estudiante.doc}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#1a086e', color: '#fff', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, fontFamily: 'Work Sans, sans-serif', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Descargar PDF
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {[
            { label: 'Periodos', value: String(total_periodos) },
            { label: 'Promedio', value: formatNota(promedio_general) },
            { label: 'Total pagado', value: formatPesos(pagos.total_pagado) },
            { label: 'Pagos', value: String(pagos.total_pagos) },
          ].map(s => (
            <div key={s.label} style={{ background: '#f5fafc', borderRadius: '10px', padding: '10px 12px' }}>
              <div style={{ fontSize: '10px', color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a086e' }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2px', background: '#eaeff1', borderRadius: '10px', padding: '3px', marginBottom: '1.25rem' }}>
        {([
          { key: 'notas', label: 'Historial académico' },
          { key: 'pagos', label: 'Pagos' },
        ] as const).map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: 'none',
              background: tab === t.key ? '#fff' : 'transparent',
              color: tab === t.key ? '#1a086e' : '#42474e',
              fontWeight: tab === t.key ? 500 : 400,
              fontSize: '13px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              border: tab === t.key ? '0.5px solid rgba(26,8,110,0.1)' : 'none',
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB NOTAS */}
      {tab === 'notas' && (
        <>
          {matriculas.map(m => {
            const notasValidas = m.notas.filter(n => n.definitiva !== null)
            const promPeriodo = notasValidas.length > 0
              ? notasValidas.reduce((a, b) => a + (b.definitiva || 0), 0) / notasValidas.length
              : null

            return (
              <div key={m.codigo_matricula} style={{ background: '#fff', border: '0.5px solid rgba(26,8,110,0.1)', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem' }}>
                <div style={{ background: '#eeedfe', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#3c3489' }}>
                      {m.periodo} &mdash; {m.programa_jornada}
                    </span>
                    {m.sede && (
                      <span style={{ fontSize: '11px', color: '#534ab7', marginLeft: '8px' }}>
                        &middot; {m.sede}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {promPeriodo !== null && (
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#3c3489' }}>
                        Prom. {formatNota(promPeriodo)}
                      </span>
                    )}
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '999px', background: m.estado_matricula === 'ACTIVO' ? '#eaf3de' : 'rgba(83,74,183,0.1)', color: m.estado_matricula === 'ACTIVO' ? '#3b6d11' : '#534ab7', fontWeight: 500 }}>
                      {m.estado_matricula}
                    </span>
                  </div>
                </div>

                {m.notas.length === 0 ? (
                  <div style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e' }}>
                    Sin notas registradas para este periodo.
                  </div>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                    <thead>
                      <tr style={{ background: '#fafbff' }}>
                        <th style={{ padding: '8px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.04em', width: '75%' }}>Asignatura</th>
                        <th style={{ padding: '8px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.04em', width: '25%' }}>Definitiva</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m.notas.map((n, i) => (
                        <tr key={n.id} style={{ borderTop: '0.5px solid #eaeff1', background: i % 2 === 0 ? '#fff' : '#fafbff' }}>
                          <td style={{ padding: '9px 16px', fontSize: '13px', color: '#1a1c1e' }}>{n.asignatura}</td>
                          <td style={{ padding: '9px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 600, color: getColorNota(n.definitiva) }}>{formatNota(n.definitiva)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )
          })}

          {matriculas.length === 0 && (
            <div style={{ background: '#fff', border: '0.5px solid rgba(26,8,110,0.1)', borderRadius: '14px', padding: '2rem', textAlign: 'center', color: '#42474e', fontSize: '14px' }}>
              Este estudiante no tiene matrículas registradas.
            </div>
          )}
        </>
      )}

      {/* TAB PAGOS */}
      {tab === 'pagos' && (
        <>
          {/* Resumen */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '1rem' }}>
            {[
              { label: 'Total pagado', value: formatPesos(pagos.total_pagado) },
              { label: 'Pagos registrados', value: String(pagos.total_pagos) },
              { label: 'Último pago', value: formatFecha(pagos.ultimo_pago) },
            ].map(s => (
              <div key={s.label} style={{ background: '#f5fafc', borderRadius: '10px', padding: '10px 12px' }}>
                <div style={{ fontSize: '10px', color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a086e' }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Lista de pagos */}
          {pagos.pagos.length === 0 ? (
            <div style={{ background: '#fff', border: '0.5px solid rgba(26,8,110,0.1)', borderRadius: '14px', padding: '2rem', textAlign: 'center', color: '#42474e', fontSize: '14px' }}>
              Este estudiante no tiene pagos registrados.
            </div>
          ) : (
            <div style={{ background: '#fff', border: '0.5px solid rgba(26,8,110,0.1)', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ background: '#eaf3de', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#3b6d11' }}>
                  Historial de pagos válidos
                </span>
                <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '999px', background: '#3b6d11', color: '#fff', fontWeight: 500 }}>
                  {pagos.total_pagos} pagos
                </span>
              </div>

              {pagos.pagos.map((p, i) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: i < pagos.pagos.length - 1 ? '0.5px solid #eaeff1' : 'none', background: i % 2 === 0 ? '#fff' : '#fafbff' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#1a1c1e' }}>
                      {p.grado} &mdash; {p.observacion || 'Pensión'}
                    </div>
                    <div style={{ fontSize: '11px', color: '#42474e', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {formatFecha(p.fecha_pago)}
                      {p.forma_pago && (
                        <span style={{ color: '#787583' }}>&middot; {p.forma_pago}</span>
                      )}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#3b6d11' }}>
                      {formatPesos(p.valor_pagado)}
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ padding: '10px 14px', background: '#f5fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '0.5px solid #eaeff1' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#42474e' }}>Total pagado</span>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#3b6d11' }}>{formatPesos(pagos.total_pagado)}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
