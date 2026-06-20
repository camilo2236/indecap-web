// src/app/api/bandeja/conversations/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient }         from "@/lib/supabase/admin"
import { verifyBandejaToken }        from "@/lib/bandeja/verify-token"

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "").trim() || ""
  if (!verifyBandejaToken(token))
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const sb = createAdminClient()
  const { data, error } = await sb
    .from("conversations")
    .select("id,phone,name,last_message,last_message_at,last_message_direction,unread_count,status,stage,program,referral_source,referral_headline")
    .order("last_message_at", { ascending: false })
    .limit(100)  // ← de 300 a 100

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}