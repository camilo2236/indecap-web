// src/app/plataforma/page.tsx
// Portal con 4 tarjetas — muestra solo las del rol del usuario

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'

const SECCIONES: Record<string, {
  icon: string
  label: string
  desc: string
  href: string
  tag: string
  color: string
}> = {
  admin: {
    icon: '⚙️',
    label: 'Administración',
    desc: 'Panel de control, usuarios y reportes',
    href: '/admin',
    tag: 'Panel admin',
    color: '#805600',
  },
  ventas: {
    icon: '🎯',
    label: 'Equipo Comercial',
    desc: 'Entrenamiento en ventas, técnicas de cierre y manejo de objeciones',
    href: '/academia',
    tag: 'Acceso disponible',
    color: '#1a086e',
  },
  profesores: {
    icon: '👨‍🏫',
    label: 'Profesores',
    desc: 'Inducción docente, metodología y protocolos institucionales',
    href: '/profesores',
    tag: 'Acceso disponible',
    color: '#166534',
  },
  estudiantes: {
    icon: '📚',
    label: 'Estudiantes',
    desc: 'Pensum digital, materiales de clase y recursos académicos',
    href: '/estudiantes',
    tag: 'Acceso disponible',
    color: '#0369a1',
  },
  egresados: {
    icon: '🎓',
    label: 'Egresados',
    desc: 'Cursos gratuitos de actualización y comunidad de egresados',
    href: '/egresados',
    tag: 'Próximamente',
    color: '#7c3aed',
  },
}

export default async function PlataformaPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const admin = createAdminClient()

  const { data: usuario } = await admin
    .from('usuarios')
    .select('nombre')
    .eq('id', user.id)
    .single()

  const { data: roles } = await admin
    .from('usuario_roles')
    .select('seccion')
    .eq('usuario_id', user.id)

  if (!roles || roles.length === 0) redirect('/login')

  // Si solo tiene admin, ir directo
  if (roles.length === 1 && roles[0].seccion === 'admin') redirect('/admin')

  // Si solo tiene un rol que no es admin, ir directo
  if (roles.length === 1) {
    const destinos: Record<string, string> = {
      ventas: '/academia',
      profesores: '/profesores',
      estudiantes: '/estudiantes',
      egresados: '/egresados',
    }
    redirect(destinos[roles[0].seccion] || '/login')
  }

  const secciones = roles.map((r: any) => r.seccion)
  const nombre = usuario?.nombre?.split(' ')[0] || 'Bienvenido'

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a086e 0%, #312783 60%, #1a086e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      padding: '2rem',
      position: 'relative',
    }}>
      {/* Logout */}
      <form action="/api/auth/logout" method="POST" style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem'
      }}>
        <button style={{
          fontFamily: 'Work Sans, sans-serif',
          fontSize: '12px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.7)',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          padding: '6px 14px',
          cursor: 'pointer',
        }}>Salir</button>
      </form>

      {/* Brand */}
      <div style={{
        fontFamily: 'Newsreader, serif',
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '4px',
        letterSpacing: '-0.01em',
      }}>
        IN<span style={{ color: '#ffddb3' }}>D</span>ECAP
      </div>
      <p style={{
        fontSize: '13px',
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '0.5rem',
        fontFamily: 'Work Sans, sans-serif',
      }}>
        Plataforma de Formación
      </p>
      <p style={{
        fontSize: '15px',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: '2.5rem',
        fontFamily: 'Newsreader, serif',
        fontStyle: 'italic',
      }}>
        Bienvenido, {nombre}
      </p>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(secciones.length, 2)}, 1fr)`,
        gap: '1rem',
        width: '100%',
        maxWidth: secciones.length <= 2 ? '520px' : '680px',
      }}>
        {secciones.map((s: string) => {
          const cfg = SECCIONES[s]
          if (!cfg) return null
          const isComingSoon = cfg.tag === 'Próximamente'
          return (
            <a
              key={s}
              href={isComingSoon ? '#' : cfg.href}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                cursor: isComingSoon ? 'default' : 'pointer',
                opacity: isComingSoon ? 0.7 : 1,
                transition: 'all 0.22s',
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{cfg.icon}</div>
              <div style={{
                fontFamily: 'Newsreader, serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '0.3rem',
              }}>{cfg.label}</div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.5,
                marginBottom: '0.75rem',
              }}>{cfg.desc}</div>
              <div style={{
                display: 'inline-block',
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '10.5px',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '100px',
                background: isComingSoon
                  ? 'rgba(255,193,7,0.2)'
                  : 'rgba(255,255,255,0.12)',
                color: isComingSoon ? '#ffc107' : 'rgba(255,255,255,0.8)',
              }}>{cfg.tag}</div>
            </a>
          )
        })}
      </div>

      <p style={{
        marginTop: '2rem',
        fontSize: '11.5px',
        color: 'rgba(255,255,255,0.35)',
        fontFamily: 'Work Sans, sans-serif',
      }}>
        INDECAP · Medellín · Envigado · Caldas
      </p>
    </div>
  )
}
