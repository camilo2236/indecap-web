// src/app/secretaria/layout.tsx
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'

export default async function SecretariaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const admin = createAdminClient()
  const { data: usuario } = await admin
    .from('usuarios')
    .select('rol, nombre')
    .eq('id', user.id)
    .single()

  const { data: tieneAcceso } = await admin
  .from('usuario_roles')
  .select('id')
  .eq('usuario_id', user.id)
  .in('seccion', ['admin', 'secretaria'])
  .limit(1)
  .single()

if (!tieneAcceso) redirect('/plataforma')

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5fafc',
      fontFamily: 'Inter, sans-serif',
    }}>
      <nav style={{
        background: '#1a086e',
        padding: '0 2rem',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontFamily: 'Newsreader, serif',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.01em',
          }}>
            IN<span style={{ color: '#ffddb3' }}>D</span>ECAP
          </span>
          <span style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            background: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.85)',
            padding: '3px 10px',
            borderRadius: '999px',
          }}>
            Secretaría académica
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.6)',
          }}>
            {usuario.nombre?.split(' ')[0]}
          </span>
          <form action="/api/auth/logout" method="POST">
            <button style={{
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.7)',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '6px',
              padding: '4px 12px',
              cursor: 'pointer',
            }}>
              Salir
            </button>
          </form>
        </div>
      </nav>
      {children}
    </div>
  )
}