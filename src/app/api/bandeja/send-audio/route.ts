// src/app/api/bandeja/send-audio/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

const PHONE_ID = "1167947676398207"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file    = formData.get("file") as File
    const to      = formData.get("to") as string
    const convId  = formData.get("conversation_id") as string
    const agentName = formData.get("agent_name") as string | null

    if (!file || !to) return NextResponse.json({ error: "Faltan campos" }, { status: 400 })

    const supabase = createAdminClient()

    // 1. Subir audio a Supabase Storage
    const fileName = `audio_${Date.now()}.webm`
    const { data: upload, error: uploadErr } = await supabase.storage
      .from("comprobantes")
      .upload(`audios/${fileName}`, file, { contentType: file.type, upsert: false })

    if (uploadErr) throw new Error("Error subiendo audio: " + uploadErr.message)

    const { data: { publicUrl } } = supabase.storage
      .from("comprobantes")
      .getPublicUrl(`audios/${fileName}`)

    // 2. Enviar como audio por WhatsApp
    const waRes = await fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "audio",
        audio: { link: publicUrl },
      }),
    })

    if (!waRes.ok) {
      const err = await waRes.json()
      throw new Error(JSON.stringify(err))
    }

    // 3. Guardar en Supabase → Realtime lo mostrará
    if (convId) {
      await supabase.from("messages").insert({
        conversation_id: convId,
        phone: to,
        body: "[Audio enviado]",
        direction: "outgoing",
        status: "sent",
        media_url: publicUrl,
        media_type: "audio/webm",
        agent_name: agentName,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
