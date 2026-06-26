// src/app/api/pagos/comprobante/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Resend } from "resend"

const resend      = new Resend(process.env.RESEND_API_KEY)
const PHONE_ID    = "1167947676398207"
const DESTINATARIOS = ["573182354400", "573002339219"]

// ── Notificación WhatsApp ─────────────────────────────────────────────────────
async function notificarEquipo(data: {
  nombre: string; documento: string; telefono: string
  programa: string; sede: string; tipoPago: string; monto: string
  banco: string; fechaPago: string
}) {
  const token = process.env.WHATSAPP_TOKEN
  if (!token) { console.error("WHATSAPP_TOKEN no configurado"); return }

  const msg = [
    `🧾 *Nuevo comprobante registrado*`,
    ``,
    `👤 ${data.nombre}`,
    `📄 Doc: ${data.documento}`,
    `📱 ${data.telefono}`,
    `🎓 ${data.programa} · ${data.sede}`,
    `💰 ${data.tipoPago}: $${Number(data.monto).toLocaleString("es-CO")} COP`,
    `🏦 ${data.banco}`,
    `📅 Fecha comprobante: ${data.fechaPago}`,
    ``,
    `👉 indecap.edu.co/admin/pagos`,
  ].join("\n")

  await Promise.allSettled(
    DESTINATARIOS.map(numero =>
      fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: numero,
          type: "text",
          text: { body: msg },
        }),
      }).then(async r => {
        if (!r.ok) {
          const err = await r.json()
          console.error(`WA error → ${numero}:`, JSON.stringify(err))
        } else {
          console.log(`WhatsApp enviado ✓ → ${numero}`)
        }
      })
    )
  )
}

// ── Notificación por Email ────────────────────────────────────────────────────
async function notificarEmail(data: {
  nombre: string; documento: string; tipoDoc: string; telefono: string
  correo: string; programa: string; sede: string; tipoPago: string
  monto: string; banco: string; fechaPago: string; notas: string
  comprob_url: string | null; ciclo: string
}) {
  const fila = (label: string, val: string) =>
    val ? `<tr>
      <td style="padding:7px 0;color:#6B7280;font-size:12px;width:40%;border-bottom:1px solid #F3F4F6">${label}</td>
      <td style="padding:7px 0;color:#080F14;font-size:13px;font-weight:600;border-bottom:1px solid #F3F4F6">${val}</td>
    </tr>` : ""

  const html = `
<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#F3F8FA;font-family:Arial,sans-serif">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a086e,#312783);padding:28px 32px">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.6)">INDECAP · Comprobante de pago</p>
    <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#fff">🧾 Nuevo comprobante registrado</h1>
  </div>
  <div style="padding:28px 32px">

    <p style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px">Datos del estudiante</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      ${fila("Nombre", data.nombre)}
      ${fila("Documento", `${data.tipoDoc} ${data.documento}`)}
      ${fila("Celular", data.telefono)}
      ${fila("Correo", data.correo)}
    </table>

    <p style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px">Información académica</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      ${fila("Programa", data.programa)}
      ${fila("Sede", data.sede)}
      ${fila("Ciclo", data.ciclo ? `Ciclo ${data.ciclo}` : "—")}
    </table>

    <p style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px">Detalle del pago</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      ${fila("Tipo de pago", data.tipoPago)}
      ${fila("Banco / Medio", data.banco)}
      ${fila("Fecha comprobante", data.fechaPago)}
      ${fila("Valor", `$${Number(data.monto).toLocaleString("es-CO")} COP`)}
      ${fila("Observaciones", data.notas)}
    </table>

    ${data.comprob_url ? `
    <div style="margin-bottom:20px">
      <p style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px">Comprobante adjunto</p>
      <a href="${data.comprob_url}" target="_blank"
        style="display:inline-block;background:#312783;color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none">
        Ver comprobante →
      </a>
    </div>` : ""}

    <div style="background:#FEF3C7;border-left:4px solid #F0A500;border-radius:8px;padding:14px 16px">
      <p style="margin:0;font-size:12px;color:#92400E;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">Acción recomendada</p>
      <p style="margin:6px 0 0;font-size:13px;color:#78350F;font-weight:600">Verificar y confirmar el pago al estudiante en menos de 24 horas hábiles.</p>
    </div>

  </div>
  <div style="padding:16px 32px;border-top:1px solid #F3F4F6;background:#FAFAFA;text-align:center">
    <p style="margin:0;font-size:11px;color:#9CA3AF">Corporación Educativa INDECAP · indecap.edu.co</p>
  </div>
</div>
</body></html>`

  try {
    await resend.emails.send({
      from:    "INDECAP Pagos <onboarding@resend.dev>",
      to:      ["camilo2236@gmail.com"],
      subject: `🧾 Comprobante: ${data.nombre} — ${data.programa} — $${Number(data.monto).toLocaleString("es-CO")}`,
      html,
    })
    console.log("Email enviado ✓")
  } catch (err) {
    console.error("Email error:", err)
  }
}

// ── Handler principal ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient()
    const formData = await req.formData()
    const g        = (k: string) => (formData.get(k) as string ?? "").trim()

    const nombre    = g("nombre")
    const documento = g("documento")
    const tipoDoc   = g("tipo_doc") || "CC"
    const telefono  = g("telefono")
    const correo    = g("correo")
    const programa  = g("programa")
    const sede      = g("sede")
    const tipoPago  = g("tipo_pago") || "Cuota inicial"
    const banco     = g("banco")
    const fechaPago = g("fecha_pago")
    const ciclo     = g("ciclo")
    const monto     = g("monto")
    const notas     = g("notas")

    if (!nombre || !documento || !telefono || !programa || !sede || !monto) {
      return NextResponse.json(
        { error: "Faltan campos: nombre, documento, teléfono, programa, sede y monto" },
        { status: 400 }
      )
    }

    if (isNaN(Number(monto)) || Number(monto) <= 0) {
      return NextResponse.json({ error: "El monto debe ser un número mayor a 0" }, { status: 400 })
    }

    // ── 1. Subir comprobante ──
    let comprob_url: string | null = null
    const file = formData.get("comprobante") as File | null

    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "El comprobante no puede pesar más de 10MB" }, { status: 400 })
      }
      const buffer   = Buffer.from(await file.arrayBuffer())
      const ext      = file.name.split(".").pop()?.toLowerCase() ?? "jpg"
      const fileName = `${Date.now()}_${documento}.${ext}`

      const { error: storageErr } = await supabase.storage
        .from("comprobantes")
        .upload(fileName, buffer, { contentType: file.type, upsert: false })

      if (storageErr) {
        console.error("Storage error:", storageErr.message)
      } else {
        const { data } = supabase.storage.from("comprobantes").getPublicUrl(fileName)
        comprob_url = data.publicUrl
      }
    }

    // ── 2. Upsert estudiante ──
    const { data: student, error: studentErr } = await supabase
      .from("students")
      .upsert(
        { nombre, documento, tipo_documento: tipoDoc, telefono, email: correo || null, programa, sede, estado: "pre_inscrito" },
        { onConflict: "documento" }
      )
      .select("id")
      .single()

    if (studentErr || !student) {
      console.error("Student error:", studentErr)
      return NextResponse.json({ error: "Error guardando estudiante" }, { status: 500 })
    }

    // ── 3. Crear matrícula ──
    const { data: enrollment, error: enrollErr } = await supabase
      .from("enrollments")
      .insert({
        student_id:     student.id,
        ciclo:          ciclo ? Number(ciclo) : 1,
        valor_ciclo:    Number(monto),
        modalidad_pago: "financiado",
        estado:         "pendiente",
      })
      .select("id")
      .single()

    if (enrollErr || !enrollment) {
      console.error("Enrollment error:", enrollErr)
      return NextResponse.json({ error: "Error guardando matrícula" }, { status: 500 })
    }

    // ── 4. Registrar pago ──
    await supabase.from("payments").insert({
      enrollment_id:   enrollment.id,
      student_id:      student.id,
      monto:           Number(monto),
      comprobante_url: comprob_url,
      estado:          "pendiente",
      notas:           [tipoPago, banco, fechaPago, notas].filter(Boolean).join(" · "),
    })

    // ── 5. Notificar WhatsApp + Email en paralelo ──
    await Promise.allSettled([
      notificarEquipo({ nombre, documento, telefono, programa, sede, tipoPago, monto, banco, fechaPago }),
      notificarEmail({ nombre, documento, tipoDoc, telefono, correo, programa, sede, tipoPago, monto, banco, fechaPago, notas, comprob_url, ciclo }),
    ])

    return NextResponse.json({ ok: true, student_id: student.id, has_file: !!comprob_url })

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error desconocido"
    console.error("pagos/comprobante error:", msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}