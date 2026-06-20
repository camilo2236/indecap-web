// src/app/api/bandeja/messages/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient }         from "@/lib/supabase/admin"
import { verifyBandejaToken }        from "@/lib/bandeja/verify-token"

export async function GET(req: NextRequest) {
  const token  = req.headers.get("authorization")?.replace("Bearer ", "").trim() || ""
  if (!verifyBandejaToken(token))
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const convId = req.nextUrl.searchParams.get("conversation_id")
  if (!convId)
    return NextResponse.json({ error: "Falta conversation_id" }, { status: 400 })

  const sb = createAdminClient()
  const { data, error } = await sb
    .from("messages")
    .select("id,conversation_id,phone,body,direction,status,created_at,media_url,media_type,agent_name")
    .eq("conversation_id", convId)
    .order("created_at", { ascending: true })
    .limit(200)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}