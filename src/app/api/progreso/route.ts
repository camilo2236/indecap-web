// src/app/api/progreso/route.ts
// API para guardar y cargar progreso de módulos

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'

// GET — cargar progreso del usuario actual
export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const seccion = req.nextUrl.searchParams.get('seccion')
  if (!seccion) return NextResponse.json({ error: 'Falta seccion' }, { status: 400 })

  const admin = createAdminClient()
  const { data, error } = await admin
    .from('progreso')
    .select('modulo_id, completado, puntaje, intentos, fecha_completado')
    .eq('usuario_id', user.id)
    .eq('seccion', seccion)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Convert to object { modulo_id: true/false }
  const progressMap: Record<string, boolean> = {}
  const scoreMap: Record<string, number> = {}
  for (const row of data || []) {
    if (row.completado) {
      progressMap[row.modulo_id] = true
      scoreMap[row.modulo_id] = row.puntaje || 0
    }
  }

  return NextResponse.json({ progress: progressMap, scores: scoreMap })
}

// POST — guardar progreso de un módulo
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { seccion, modulo_id, puntaje = 0, intentos = 1 } = await req.json()
  if (!seccion || !modulo_id) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin
    .from('progreso')
    .upsert({
      usuario_id: user.id,
      seccion,
      modulo_id,
      completado: true,
      puntaje,
      intentos,
      fecha_completado: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'usuario_id,seccion,modulo_id'
    })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
