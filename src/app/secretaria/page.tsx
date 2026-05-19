// src/app/secretaria/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SecretariaPage() {
  const [doc, setDoc] = useState('')
  const [nombre, setNombre] = useState('')
  const [resultados, setResultados] = useState<any[]>([])
  const [buscandoNombre, setBuscandoNombre] = useState(false)
  const router = useRouter()

  function buscarPorDoc(e: React.FormEvent) {
    e.preventDefault()
    const d = doc.trim()
    if (!d) return
    router.push(`/secretaria/${d}`)
  }

  async function buscarPorNombre(e: React.FormEvent) {
    e.preventDefault()
    const n = nombre.trim()
    if (!n) return
    setBuscandoNombre(true)
    try {
      const res = await fetch(`/api/secretaria/buscar?nombre=${encodeURIComponent(n)}`)
      const data = await res.json()
      setResultados(data.resultados || [])
    } catch {
      setResultados([])
    } finally {
      setBuscandoNombre(false)
    }
  }

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontFamily: 'Newsreader, serif',
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#1a086e',
          letterSpacing: '-0.02em',
          marginBottom: '6px',
        }}>
          Consulta de estudiantes
        </h1>
        <p style={{ fontSize: '13px', color: '#42474e' }}>
          Busca por documento o nombre para ver el historial académico completo.
        </p>
      </div>

      {/* Buscar por documento */}
      <div style={{
        background: '#fff',
        border: '0.5px solid rgba(26,8,110,0.1)',
        borderRadius: '14px',
        padding: '1.25rem',
        marginBottom: '1rem',
      }}>
        <div style={{
          fontFamily: 'Work Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          color: '#42474e',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '10px',
        }}>
          Por número de documento
        </div>
        <form onSubmit={buscarPorDoc} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={doc}
            onChange={e => setDoc(e.target.value.replace(/\D/g, ''))}
            placeholder="Ej: 1000918957"
            inputMode="numeric"
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '0.5px solid rgba(66,71,78,0.2)',
              borderRadius: '9px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
              background: '#f5fafc',
            }}
            onFocus={e => e.target.style.borderColor = '#1a086e'}
            onBlur={e => e.target.style.borderColor = 'rgba(66,71,78,0.2)'}
          />
          <button
            type="submit"
            style={{
              background: '#1a086e',
              color: '#fff',
              border: 'none',
              borderRadius: '9px',
              padding: '10px 20px',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'Work Sans, sans-serif',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Consultar
          </button>
        </form>
      </div>

      {/* Buscar por nombre */}
      <div style={{
        background: '#fff',
        border: '0.5px solid rgba(26,8,110,0.1)',
        borderRadius: '14px',
        padding: '1.25rem',
        marginBottom: '1.5rem',
      }}>
        <div style={{
          fontFamily: 'Work Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          color: '#42474e',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '10px',
        }}>
          Por nombre
        </div>
        <form onSubmit={buscarPorNombre} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Ej: García Quintero"
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '0.5px solid rgba(66,71,78,0.2)',
              borderRadius: '9px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
              background: '#f5fafc',
            }}
            onFocus={e => e.target.style.borderColor = '#1a086e'}
            onBlur={e => e.target.style.borderColor = 'rgba(66,71,78,0.2)'}
          />
          <button
            type="submit"
            disabled={buscandoNombre}
            style={{
              background: buscandoNombre ? '#9ca3af' : '#312783',
              color: '#fff',
              border: 'none',
              borderRadius: '9px',
              padding: '10px 20px',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'Work Sans, sans-serif',
              cursor: buscandoNombre ? 'not-allowed' : 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {buscandoNombre ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {resultados.length > 0 && (
          <div style={{ marginTop: '12px' }}>
            {resultados.map((r: any) => (
              <div
                key={r.doc}
                onClick={() => router.push(`/secretaria/${r.doc}`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  borderBottom: '0.5px solid #eaeff1',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5fafc')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#1a1c1e' }}>{r.nombre}</div>
                  <div style={{ fontSize: '11px', color: '#42474e', marginTop: '2px' }}>
                    {r.tipo_documento} · {r.doc} · {r.municipio_direccion}
                  </div>
                </div>
                <span style={{ fontSize: '12px', color: '#1a086e' }}>Ver →</span>
              </div>
            ))}
          </div>
        )}

        {resultados.length === 0 && nombre && !buscandoNombre && (
          <div style={{ marginTop: '10px', fontSize: '13px', color: '#42474e' }}>
            No se encontraron estudiantes con ese nombre.
          </div>
        )}
      </div>
    </div>
  )
}