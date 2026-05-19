// src/app/api/secretaria/buscar/route.ts
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { buscarPorNombre } from '@/lib/secretaria'

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const admin = createAdminClient()
  const { data: usuario } = await admin
    .from('usuarios')
    .select('rol')
    .eq('id', user.id)
    .single()

  if (!usuario || usuario.rol !== 'admin') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  const nombre = req.nextUrl.searchParams.get('nombre') || ''
  if (!nombre.trim()) {
    return NextResponse.json({ resultados: [] })
  }

  const resultados = await buscarPorNombre(nombre)
  return NextResponse.json({ resultados })
}