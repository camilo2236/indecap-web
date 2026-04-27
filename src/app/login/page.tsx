// src/app/login/page.tsx
// Página de login con cédula

'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [cedula, setCedula] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // El email interno es cedula@indecap.edu.co
    const email = `${cedula.trim()}@indecap.edu.co`

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Cédula o contraseña incorrecta. Verifica tus datos.')
      setLoading(false)
      return
    }

    router.push('/plataforma')
    router.refresh()
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a086e 0%, #312783 60%, #1a086e 100%)',
      fontFamily: 'Inter, sans-serif',
      padding: '1.5rem',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '18px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 24px 80px rgba(26,8,110,0.3)',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'Newsreader, serif',
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#1a086e',
          marginBottom: '4px',
          letterSpacing: '-0.01em',
        }}>
          IN<span style={{ color: '#805600' }}>D</span>ECAP
        </div>
        <p style={{
          fontSize: '13px',
          color: '#42474e',
          marginBottom: '2rem',
          fontFamily: 'Work Sans, sans-serif',
        }}>
          Plataforma de Formación · Acceso institucional
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '12px', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#42474e',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '6px',
            }}>
              Número de cédula
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={cedula}
              onChange={e => setCedula(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 1234567890"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1px solid rgba(66,71,78,0.2)',
                borderRadius: '9px',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.18s',
              }}
              onFocus={e => e.target.style.borderColor = '#1a086e'}
              onBlur={e => e.target.style.borderColor = 'rgba(66,71,78,0.2)'}
            />
          </div>

          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#42474e',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '6px',
            }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1px solid rgba(66,71,78,0.2)',
                borderRadius: '9px',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.18s',
              }}
              onFocus={e => e.target.style.borderColor = '#1a086e'}
              onBlur={e => e.target.style.borderColor = 'rgba(66,71,78,0.2)'}
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.07)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '8px',
              padding: '10px 13px',
              fontSize: '13px',
              color: '#991b1b',
              marginBottom: '14px',
              textAlign: 'left',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#9ca3af' : 'linear-gradient(135deg, #1a086e, #312783)',
              color: '#fff',
              border: 'none',
              borderRadius: '9px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Work Sans, sans-serif',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.18s',
            }}
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '12px',
          color: '#787583',
          fontFamily: 'Work Sans, sans-serif',
          lineHeight: 1.6,
        }}>
          ¿Problemas para ingresar? Contacta a coordinación de tu sede.
        </p>
      </div>
    </div>
  )
}
