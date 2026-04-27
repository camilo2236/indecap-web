// src/app/api/admin/crear-usuario/route.ts — v2 con roles múltiples

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Verificar que quien llama es admin
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

  const { cedula, nombre, email, rolPrincipal, sede, programa, secciones, password } = await req.json()

  if (!cedula || !nombre || !rolPrincipal || !password || !secciones?.length) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  const emailInterno = `${cedula}@indecap.edu.co`

  // Crear en Supabase Auth
  const { data: authUser, error: authError } = await admin.auth.admin.createUser({
    email: emailInterno,
    password,
    email_confirm: true,
  })

  if (authError) return NextResponse.json({ error: authError.message }, { status: 400 })

  // Usar función SQL para crear usuario completo
  const { error: fnError } = await admin.rpc('crear_usuario_completo', {
    p_id: authUser.user.id,
    p_cedula: cedula,
    p_nombre: nombre,
    p_email: email || emailInterno,
    p_rol: rolPrincipal,
    p_sede: sede || null,
    p_programa: programa || null,
    p_secciones: secciones,
  })

  if (fnError) {
    await admin.auth.admin.deleteUser(authUser.user.id)
    return NextResponse.json({ error: fnError.message }, { status: 400 })
  }

  return NextResponse.json({
    success: true,
    message: `Usuario ${nombre} creado con acceso a: ${secciones.join(', ')}`,
  })
}
