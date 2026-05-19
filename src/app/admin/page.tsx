'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Usuario {
  id: string
  cedula: string
  nombre: string
  email: string
  rol: string
  sede: string | null
  activo: boolean
  created_at: string
  secciones: string[]
}

const SECCIONES_DISPONIBLES = [
  { key: 'admin', label: 'Administración' },
  { key: 'ventas', label: 'Equipo comercial' },
  { key: 'profesores', label: 'Profesores' },
  { key: 'estudiantes', label: 'Estudiantes' },
  { key: 'egresados', label: 'Egresados' },
]

const COLORES: Record<string, string> = {
  admin:      '#805600',
  ventas:     '#1a086e',
  profesores: '#166534',
  estudiantes:'#0369a1',
  egresados:  '#7c3aed',
}

function Badge({ seccion }: { seccion: string }) {
  const color = COLORES[seccion] || '#42474e'
  return (
    <span style={{
      fontSize: '10px',
      fontWeight: 600,
      padding: '2px 8px',
      borderRadius: '999px',
      background: color + '15',
      color,
      fontFamily: 'Work Sans, sans-serif',
    }}>
      {seccion}
    </span>
  )
}

export default function AdminPage() {
  const router = useRouter()
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [creando, setCreando] = useState(false)
  const [mensaje, setMensaje] = useState<{ tipo: 'ok' | 'error', texto: string } | null>(null)

  const [form, setForm] = useState({
    cedula: '',
    nombre: '',
    password: '',
    sede: '',
    secciones: [] as string[],
  })

  useEffect(() => {
    fetch('/api/admin/usuarios')
      .then(r => r.json())
      .then(d => {
        setUsuarios(d.usuarios || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  function toggleSeccion(s: string) {
    setForm(f => ({
      ...f,
      secciones: f.secciones.includes(s)
        ? f.secciones.filter(x => x !== s)
        : [...f.secciones, s],
    }))
  }

  async function crearUsuario(e: React.FormEvent) {
    e.preventDefault()
    if (!form.cedula || !form.nombre || !form.password || form.secciones.length === 0) {
      setMensaje({ tipo: 'error', texto: 'Completa todos los campos y selecciona al menos una sección.' })
      return
    }
    setCreando(true)
    setMensaje(null)
    try {
      const res = await fetch('/api/admin/crear-usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cedula: form.cedula,
          nombre: form.nombre,
          password: form.password,
          rolPrincipal: form.secciones.includes('admin') ? 'admin' : 'usuario',
          sede: form.sede || null,
          secciones: form.secciones,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMensaje({ tipo: 'error', texto: data.error || 'Error al crear usuario' })
      } else {
        setMensaje({ tipo: 'ok', texto: data.message })
        setForm({ cedula: '', nombre: '', password: '', sede: '', secciones: [] })
        setShowForm(false)
        // Recargar usuarios
        fetch('/api/admin/usuarios').then(r => r.json()).then(d => setUsuarios(d.usuarios || []))
      }
    } catch {
      setMensaje({ tipo: 'error', texto: 'Error de conexión' })
    } finally {
      setCreando(false)
    }
  }

  const porSeccion = (s: string) => usuarios.filter(u => u.secciones.includes(s))

  const stats = [
    { label: 'Equipo comercial', value: porSeccion('ventas').length, color: '#1a086e' },
    { label: 'Profesores', value: porSeccion('profesores').length, color: '#166534' },
    { label: 'Estudiantes', value: porSeccion('estudiantes').length, color: '#0369a1' },
    { label: 'Total usuarios', value: usuarios.length, color: '#805600' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f5fafc', fontFamily: 'Inter, sans-serif' }}>

      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(26,8,110,0.08)', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1a086e' }}>
            IN<span style={{ color: '#805600' }}>D</span>ECAP
          </span>
          <span style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '11px', fontWeight: 600, background: 'rgba(26,8,110,0.08)', color: '#1a086e', padding: '3px 10px', borderRadius: '100px' }}>
            Admin
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="/secretaria" style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '12px', color: '#1a086e', textDecoration: 'none', padding: '5px 12px', border: '1px solid rgba(26,8,110,0.2)', borderRadius: '6px' }}>
            Secretaría
          </a>
          <form action="/api/auth/logout" method="POST">
            <button style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '12px', color: '#42474e', background: 'none', border: '1px solid rgba(66,71,78,0.15)', borderRadius: '6px', padding: '5px 12px', cursor: 'pointer' }}>
              Cerrar sesión
            </button>
          </form>
        </div>
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.8rem', fontWeight: 600, color: '#1a086e', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Panel de administración
            </h1>
            <p style={{ fontSize: '13.5px', color: '#42474e' }}>
              Gestión de usuarios y accesos de la plataforma.
            </p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setMensaje(null) }}
            style={{ background: '#1a086e', color: '#fff', border: 'none', borderRadius: '9px', padding: '10px 20px', fontSize: '13px', fontWeight: 600, fontFamily: 'Work Sans, sans-serif', cursor: 'pointer' }}>
            {showForm ? 'Cancelar' : '+ Crear usuario'}
          </button>
        </div>

        {/* Mensaje */}
        {mensaje && (
          <div style={{ padding: '12px 16px', borderRadius: '10px', marginBottom: '1.5rem', fontSize: '13px', background: mensaje.tipo === 'ok' ? 'rgba(74,173,96,0.1)' : 'rgba(239,68,68,0.08)', color: mensaje.tipo === 'ok' ? '#166534' : '#991b1b', border: `1px solid ${mensaje.tipo === 'ok' ? 'rgba(74,173,96,0.2)' : 'rgba(239,68,68,0.15)'}` }}>
            {mensaje.texto}
          </div>
        )}

        {/* Formulario crear usuario */}
        {showForm && (
          <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', marginBottom: '2rem', border: '0.5px solid rgba(26,8,110,0.15)' }}>
            <div style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Nuevo usuario
            </div>
            <form onSubmit={crearUsuario}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontFamily: 'Work Sans, sans-serif' }}>
                    Número de cédula
                  </label>
                  <input
                    type="text"
                    value={form.cedula}
                    onChange={e => setForm(f => ({ ...f, cedula: e.target.value.replace(/\D/g, '') }))}
                    placeholder="Ej: 1234567890"
                    required
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid rgba(66,71,78,0.2)', borderRadius: '9px', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', background: '#f5fafc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontFamily: 'Work Sans, sans-serif' }}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    placeholder="Ej: María García"
                    required
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid rgba(66,71,78,0.2)', borderRadius: '9px', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', background: '#f5fafc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontFamily: 'Work Sans, sans-serif' }}>
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="Mínimo 8 caracteres"
                    required
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid rgba(66,71,78,0.2)', borderRadius: '9px', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', background: '#f5fafc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontFamily: 'Work Sans, sans-serif' }}>
                    Sede (opcional)
                  </label>
                  <select
                    value={form.sede}
                    onChange={e => setForm(f => ({ ...f, sede: e.target.value }))}
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid rgba(66,71,78,0.2)', borderRadius: '9px', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', background: '#f5fafc' }}>
                    <option value="">Sin sede específica</option>
                    <option value="caldas">Caldas</option>
                    <option value="envigado">Envigado</option>
                    <option value="medellin">Medellín</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', fontFamily: 'Work Sans, sans-serif' }}>
                  Secciones con acceso
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {SECCIONES_DISPONIBLES.map(s => {
                    const activo = form.secciones.includes(s.key)
                    const color = COLORES[s.key] || '#42474e'
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => toggleSeccion(s.key)}
                        style={{
                          padding: '7px 16px',
                          borderRadius: '999px',
                          border: `1.5px solid ${activo ? color : 'rgba(66,71,78,0.2)'}`,
                          background: activo ? color + '12' : '#fff',
                          color: activo ? color : '#42474e',
                          fontSize: '12px',
                          fontWeight: activo ? 600 : 400,
                          fontFamily: 'Work Sans, sans-serif',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}>
                        {activo ? '✓ ' : ''}{s.label}
                      </button>
                    )
                  })}
                </div>
                {form.secciones.length === 0 && (
                  <p style={{ fontSize: '11px', color: '#a32d2d', marginTop: '6px' }}>
                    Selecciona al menos una sección
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="submit"
                  disabled={creando}
                  style={{ background: creando ? '#9ca3af' : '#1a086e', color: '#fff', border: 'none', borderRadius: '9px', padding: '10px 24px', fontSize: '13px', fontWeight: 600, fontFamily: 'Work Sans, sans-serif', cursor: creando ? 'not-allowed' : 'pointer' }}>
                  {creando ? 'Creando...' : 'Crear usuario'}
                </button>
                <p style={{ fontSize: '12px', color: '#42474e' }}>
                  El email será <strong>{form.cedula || 'cedula'}@indecap.edu.co</strong>
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: '#fff', borderRadius: '13px', padding: '1.1rem', boxShadow: '0 2px 12px rgba(26,8,110,0.06)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Newsreader, serif', fontSize: '2rem', fontWeight: 600, color: s.color, letterSpacing: '-0.02em' }}>
                {loading ? '—' : s.value}
              </div>
              <div style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '11.5px', color: '#42474e', marginTop: '3px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tabla usuarios */}
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px rgba(26,8,110,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #eaeff1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Usuarios de la plataforma
            </span>
            <span style={{ fontSize: '12px', color: '#42474e' }}>
              {usuarios.length} usuarios
            </span>
          </div>

          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#42474e', fontSize: '13px' }}>
              Cargando...
            </div>
          ) : usuarios.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#42474e', fontSize: '13px' }}>
              No hay usuarios registrados.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5fafc' }}>
                  {['Nombre', 'Cédula', 'Sede', 'Secciones', 'Creado'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontFamily: 'Work Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#42474e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u, i) => (
                  <tr key={u.id} style={{ borderTop: '1px solid #eaeff1', background: i % 2 === 0 ? '#fff' : '#fafbff' }}>
                    <td style={{ padding: '12px 16px', fontSize: '13.5px', fontWeight: 500, color: '#1a1c1e' }}>
                      {u.nombre}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e', fontFamily: 'monospace' }}>
                      {u.cedula}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#42474e' }}>
                      {u.sede ? u.sede.charAt(0).toUpperCase() + u.sede.slice(1) : '—'}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {u.secciones.map(s => <Badge key={s} seccion={s} />)}
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '12px', color: '#787583' }}>
                      {new Date(u.created_at).toLocaleDateString('es-CO')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  )
}
