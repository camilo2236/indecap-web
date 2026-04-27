// src/app/admin/page.tsx
// Panel de administrador — solo accesible para rol admin

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const admin = createAdminClient()
  const { data: usuario } = await admin
    .from('usuarios')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!usuario || usuario.rol !== 'admin') redirect('/login')

  // Obtener todos los usuarios y su progreso
  const { data: usuarios } = await admin
    .from('usuarios')
    .select('*, progreso(*)')
    .order('created_at', { ascending: false })

  const asesores = usuarios?.filter(u => u.rol === 'asesor') || []
  const profesores = usuarios?.filter(u => u.rol === 'profesor') || []
  const estudiantes = usuarios?.filter(u => u.rol === 'estudiante') || []

  // Stats de progreso
  const totalModulosVentas = 7
  function getPct(u: any, seccion: string, total: number) {
    const completados = u.progreso?.filter(
      (p: any) => p.seccion === seccion && p.completado
    ).length || 0
    return Math.round((completados / total) * 100)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5fafc',
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* NAV */}
      <nav style={{
        background: '#fff',
        borderBottom: '1px solid rgba(26,8,110,0.08)',
        padding: '0 2rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          fontFamily: 'Newsreader, serif',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#1a086e',
        }}>
          IN<span style={{ color: '#805600' }}>D</span>ECAP
          <span style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            background: 'rgba(26,8,110,0.1)',
            color: '#1a086e',
            padding: '3px 10px',
            borderRadius: '100px',
            marginLeft: '10px',
          }}>Admin</span>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#42474e',
            background: 'none',
            border: '1px solid rgba(66,71,78,0.15)',
            borderRadius: '6px',
            padding: '5px 12px',
            cursor: 'pointer',
          }}>Cerrar sesión</button>
        </form>
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* ACCESO RÁPIDO */}
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'2rem'}}>
          <a href="/academia" style={{padding:'10px 20px', background:'#1a086e', color:'#fff', borderRadius:'8px', textDecoration:'none', fontFamily:'Work Sans,sans-serif', fontSize:'13px', fontWeight:600}}>
            🎯 Academia de Ventas
          </a>
          <a href="/profesores" style={{padding:'10px 20px', background:'#166534', color:'#fff', borderRadius:'8px', textDecoration:'none', fontFamily:'Work Sans,sans-serif', fontSize:'13px', fontWeight:600}}>
            👨‍🏫 Inducción Profesores
          </a>
          <a href="/estudiantes" style={{padding:'10px 20px', background:'#0369a1', color:'#fff', borderRadius:'8px', textDecoration:'none', fontFamily:'Work Sans,sans-serif', fontSize:'13px', fontWeight:600}}>
            📚 Portal Estudiantes
          </a>
        </div>

        {/* HEADER */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: 'Newsreader, serif',
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#1a086e',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}>Panel de administración</h1>
          <p style={{ fontSize: '13.5px', color: '#42474e' }}>
            Progreso en tiempo real de todos los usuarios de la plataforma.
          </p>
        </div>

        {/* STATS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {[
            { label: 'Asesores activos', value: asesores.length, color: '#1a086e' },
            { label: 'Profesores activos', value: profesores.length, color: '#166534' },
            { label: 'Estudiantes activos', value: estudiantes.length, color: '#0369a1' },
            { label: 'Total usuarios', value: (usuarios?.length || 0) - 1, color: '#805600' },
          ].map(s => (
            <div key={s.label} style={{
              background: '#fff',
              borderRadius: '13px',
              padding: '1.1rem',
              boxShadow: '0 4px 24px rgba(26,8,110,0.06)',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'Newsreader, serif',
                fontSize: '2rem',
                fontWeight: 600,
                color: s.color,
                letterSpacing: '-0.02em',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '11.5px',
                color: '#42474e',
                marginTop: '3px',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* TABLA ASESORES */}
        {asesores.length > 0 && (
          <div style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 4px 24px rgba(26,8,110,0.06)',
            marginBottom: '1.5rem',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid #eaeff1',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ fontSize: '16px' }}>🎯</span>
              <span style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                color: '#42474e',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>Equipo comercial — Academia de Ventas</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5fafc' }}>
                  {['Nombre', 'Cédula', 'Sede', 'Progreso', 'Último acceso'].map(h => (
                    <th key={h} style={{
                      padding: '10px 16px',
                      textAlign: 'left',
                      fontFamily: 'Work Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#42474e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {asesores.map((u: any, i: number) => {
                  const pct = getPct(u, 'ventas', totalModulosVentas)
                  return (
                    <tr key={u.id} style={{
                      borderTop: '1px solid #eaeff1',
                      background: i % 2 === 0 ? '#fff' : '#fafbff',
                    }}>
                      <td style={{ padding: '12px 16px', fontSize: '13.5px', fontWeight: 500 }}>{u.nombre}</td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e', fontFamily: 'monospace' }}>{u.cedula}</td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e' }}>
                        {u.sede ? u.sede.charAt(0).toUpperCase() + u.sede.slice(1) : '—'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            flex: 1,
                            height: '6px',
                            background: '#eaeff1',
                            borderRadius: '3px',
                            overflow: 'hidden',
                            minWidth: '80px',
                          }}>
                            <div style={{
                              width: pct + '%',
                              height: '100%',
                              background: pct === 100
                                ? '#4ade80'
                                : 'linear-gradient(90deg, #1a086e, #312783)',
                              borderRadius: '3px',
                              transition: 'width 0.4s',
                            }} />
                          </div>
                          <span style={{
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: pct === 100 ? '#166534' : '#1a086e',
                            minWidth: '35px',
                          }}>{pct}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '12px', color: '#787583' }}>
                        {u.progreso?.length > 0
                          ? new Date(u.progreso[u.progreso.length-1].updated_at).toLocaleDateString('es-CO')
                          : 'Nunca'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* TABLA PROFESORES */}
        {profesores.length > 0 && (
          <div style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 4px 24px rgba(26,8,110,0.06)',
            marginBottom: '1.5rem',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid #eaeff1',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ fontSize: '16px' }}>👨‍🏫</span>
              <span style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                color: '#42474e',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>Profesores — Inducción Docente</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5fafc' }}>
                  {['Nombre', 'Cédula', 'Sede', 'Progreso', 'Último acceso'].map(h => (
                    <th key={h} style={{
                      padding: '10px 16px',
                      textAlign: 'left',
                      fontFamily: 'Work Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#42474e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {profesores.map((u: any, i: number) => {
                  const pct = getPct(u, 'profesores', 8)
                  return (
                    <tr key={u.id} style={{
                      borderTop: '1px solid #eaeff1',
                      background: i % 2 === 0 ? '#fff' : '#fafbff',
                    }}>
                      <td style={{ padding: '12px 16px', fontSize: '13.5px', fontWeight: 500 }}>{u.nombre}</td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e', fontFamily: 'monospace' }}>{u.cedula}</td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e' }}>
                        {u.sede ? u.sede.charAt(0).toUpperCase() + u.sede.slice(1) : '—'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            flex: 1,
                            height: '6px',
                            background: '#eaeff1',
                            borderRadius: '3px',
                            overflow: 'hidden',
                            minWidth: '80px',
                          }}>
                            <div style={{
                              width: pct + '%',
                              height: '100%',
                              background: pct === 100 ? '#4ade80' : 'linear-gradient(90deg, #166534, #14532d)',
                              borderRadius: '3px',
                            }} />
                          </div>
                          <span style={{
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: pct === 100 ? '#166534' : '#1a086e',
                            minWidth: '35px',
                          }}>{pct}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '12px', color: '#787583' }}>
                        {u.progreso?.length > 0
                          ? new Date(u.progreso[u.progreso.length-1].updated_at).toLocaleDateString('es-CO')
                          : 'Nunca'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* CREAR USUARIO */}
        <div style={{
          background: '#fff',
          borderRadius: '14px',
          padding: '1.25rem',
          boxShadow: '0 4px 24px rgba(26,8,110,0.06)',
        }}>
          <div style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            color: '#42474e',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.75rem',
          }}>Crear usuario nuevo</div>
          <p style={{ fontSize: '13px', color: '#42474e', marginBottom: '0.75rem' }}>
            Para crear usuarios ve a{' '}
            <a
              href="https://supabase.com/dashboard/project/cjjkdeqbntplofgzfgma/auth/users"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a086e', fontWeight: 500 }}
            >
              Supabase → Authentication → Users → Invite user
            </a>
            {' '}y luego actualiza la tabla <code style={{ background: '#eaeff1', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>usuarios</code> con el rol y cédula correspondientes.
          </p>
        </div>

      </div>
    </div>
  )
}
