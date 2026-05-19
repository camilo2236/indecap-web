// src/app/secretaria/[doc]/page.tsx
import { getEstudiante, getIniciales, formatNota, getColorNota } from '@/lib/secretaria'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function EstudiantePage({
  params,
}: {
  params: Promise<{ doc: string }>
}) {
  const { doc } = await params
  const data = await getEstudiante(doc)

  if (!data) notFound()

  const { estudiante, matriculas, promedio_general, total_periodos } = data
  const iniciales = getIniciales(estudiante.nombre)

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1.5rem' }}>

      <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/secretaria" style={{ fontSize: '13px', color: '#1a086e', textDecoration: 'none' }}>
          &larr; Volver a búsqueda
        </Link>
      </div>

      <div style={{
        background: '#fff',
        border: '0.5px solid rgba(26,8,110,0.1)',
        borderRadius: '14px',
        padding: '1.25rem',
        marginBottom: '1.25rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '0.5px solid #eaeff1',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#eeedfe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: 600,
            color: '#3c3489',
            flexShrink: 0,
          }}>
            {iniciales}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a1c1e' }}>
              {estudiante.nombre}
            </div>
            <div style={{ fontSize: '12px', color: '#42474e', marginTop: '3px' }}>
              {estudiante.tipo_documento} &middot; {estudiante.doc}
              {estudiante.municipio_direccion ? ` · ${estudiante.municipio_direccion}` : ''}
            </div>
          </div>
          <a
            href={`/api/secretaria/pdf?doc=${estudiante.doc}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#1a086e',
              color: '#fff',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'Work Sans, sans-serif',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
            }}>
            Descargar PDF
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            { label: 'Periodos cursados', value: String(total_periodos) },
            {
              label: 'Último programa',
              value: matriculas[matriculas.length - 1]?.programa_jornada?.split(' - ')[0] || '—',
            },
            { label: 'Promedio general', value: formatNota(promedio_general) },
          ].map(s => (
            <div key={s.label} style={{
              background: '#f5fafc',
              borderRadius: '10px',
              padding: '10px 12px',
            }}>
              <div style={{
                fontSize: '10px',
                color: '#42474e',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '4px',
                fontFamily: 'Work Sans, sans-serif',
              }}>
                {s.label}
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#1a086e' }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {matriculas.map(m => {
        const notasValidas = m.notas.filter(n => n.definitiva !== null)
        const promPeriodo = notasValidas.length > 0
          ? notasValidas.reduce((a, b) => a + (b.definitiva || 0), 0) / notasValidas.length
          : null

        return (
          <div key={m.codigo_matricula} style={{
            background: '#fff',
            border: '0.5px solid rgba(26,8,110,0.1)',
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <div style={{
              background: '#eeedfe',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
                <span style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: m.estado_matricula === 'ACTIVO' ? '#eaf3de' : 'rgba(83,74,183,0.1)',
                  color: m.estado_matricula === 'ACTIVO' ? '#3b6d11' : '#534ab7',
                  fontWeight: 500,
                }}>
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
                    <th style={{
                      padding: '8px 16px',
                      textAlign: 'left',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#42474e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      width: '75%',
                    }}>
                      Asignatura
                    </th>
                    <th style={{
                      padding: '8px 16px',
                      textAlign: 'right',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#42474e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      width: '25%',
                    }}>
                      Definitiva
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {m.notas.map((n, i) => (
                    <tr key={n.id} style={{
                      borderTop: '0.5px solid #eaeff1',
                      background: i % 2 === 0 ? '#fff' : '#fafbff',
                    }}>
                      <td style={{ padding: '9px 16px', fontSize: '13px', color: '#1a1c1e' }}>
                        {n.asignatura}
                      </td>
                      <td style={{
                        padding: '9px 16px',
                        textAlign: 'right',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: getColorNota(n.definitiva),
                      }}>
                        {formatNota(n.definitiva)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )
      })}

      {matriculas.length === 0 && (
        <div style={{
          background: '#fff',
          border: '0.5px solid rgba(26,8,110,0.1)',
          borderRadius: '14px',
          padding: '2rem',
          textAlign: 'center',
          color: '#42474e',
          fontSize: '14px',
        }}>
          Este estudiante no tiene matrículas registradas.
        </div>
      )}
    </div>
  )
}