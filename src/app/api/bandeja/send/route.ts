// src/app/api/bandeja/send/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient }         from "@/lib/supabase/admin"
import { verifyBandejaToken }        from "@/lib/bandeja/verify-token"

const PHONE_ID = "1167947676398207"

const rl = new Map<string, { n: number; t: number }>()
function checkRL(email: string): boolean {
  const now = Date.now(), d = rl.get(email)
  if (!d || now > d.t) { rl.set(email, { n: 1, t: now + 60000 }); return true }
  if (d.n >= 60) return false
  d.n++; return true
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "").trim() || ""
  const agentEmail = verifyBandejaToken(token)
  if (!agentEmail)
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  if (!checkRL(agentEmail))
    return NextResponse.json({ error: "Demasiados mensajes" }, { status: 429 })

  try {
    const { to, message, template, template_params, conversation_id, agent_name } = await req.json()
    if (!to) return NextResponse.json({ error: "Falta destinatario" }, { status: 400 })

    const phone = to.replace(/\D/g, "")
    if (phone.length < 10 || phone.length > 15)
      return NextResponse.json({ error: "Número inválido" }, { status: 400 })

    let waBody: object

    if (template) {
      // Construir componentes si hay parámetros ({{program_name}}, {{nombre}})
      const components = template_params?.length
        ? [{
            type: "body",
            parameters: template_params.map((p: string) => ({ type: "text", text: p }))
          }]
        : undefined

      waBody = {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: {
          name: template,
          language: { code: "es_CO" },
          ...(components ? { components } : {}),
        },
      }
    } else {
      waBody = {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message, preview_url: false },
      }
    }

    const waRes = await fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waBody),
    })

    if (!waRes.ok) {
      const err = await waRes.json()
      console.error("WA error:", JSON.stringify(err))
      return NextResponse.json({ error: err }, { status: 400 })
    }

    if (conversation_id) {
      const sb = createAdminClient()
      const bodyText = template
        ? `[plantilla: ${template}${template_params?.length ? ` — ${template_params[0]}` : ""}]`
        : message
      await sb.from("messages").insert({
        conversation_id,
        phone,
        body: bodyText,
        direction: "outgoing",
        status: "sent",
        agent_name: agent_name ?? null,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}