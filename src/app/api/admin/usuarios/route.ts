// src/app/api/admin/usuarios/route.ts
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const admin = createAdminClient()

  const { data: esAdmin } = await admin
    .from('usuario_roles')
    .select('id')
    .eq('usuario_id', user.id)
    .eq('seccion', 'admin')
    .single()

  if (!esAdmin) return NextResponse.json({ error: 'No autorizado' }, { status: 403 })

  // Traer todos los usuarios
  const { data: usuarios } = await admin
    .from('usuarios')
    .select('*')
    .order('created_at', { ascending: false })

  if (!usuarios) return NextResponse.json({ usuarios: [] })

  // Traer todos los roles
  const { data: roles } = await admin
    .from('usuario_roles')
    .select('usuario_id, seccion')

  // Mapear secciones por usuario
  const rolesPorUsuario: Record<string, string[]> = {}
  for (const r of roles || []) {
    if (!rolesPorUsuario[r.usuario_id]) rolesPorUsuario[r.usuario_id] = []
    rolesPorUsuario[r.usuario_id].push(r.seccion)
  }

  const resultado = usuarios.map(u => ({
    ...u,
    secciones: rolesPorUsuario[u.id] || [],
  }))

  return NextResponse.json({ usuarios: resultado })
}
