// src/app/api/pagos/comprobante/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

const PHONE_ID      = "1167947676398207"
const DESTINATARIOS = ["573182354400", "573002339219"]

// ── Notificación WhatsApp ─────────────────────────────────────────────────
async function notificarEquipo(data: {
  nombre: string; documento: string; telefono: string
  programa: string; sede: string; tipoPago: string; monto: string
}) {
  const token = process.env.WHATSAPP_TOKEN
  if (!token) {
    console.error("WHATSAPP_TOKEN no configurado en indecap-web")
    return
  }

  const msg = [
    `🎓 *Nuevo comprobante registrado*`,
    ``,
    `👤 ${data.nombre}`,
    `📄 Doc: ${data.documento}`,
    `📱 ${data.telefono}`,
    `🎓 ${data.programa} · ${data.sede}`,
    `💰 ${data.tipoPago}: $${Number(data.monto).toLocaleString("es-CO")} COP`,
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

// ── Handler principal ─────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient()
    const formData = await req.formData()
    const g        = (k: string) => (formData.get(k) as string ?? "").trim()

    // ── Extraer campos ────────────────────────────────────────────────────
    const nombre    = g("nombre")
    const documento = g("documento")
    const tipoDoc   = g("tipo_doc") || "CC"
    const telefono  = g("telefono")
    const correo    = g("correo")
    const programa  = g("programa")
    const sede      = g("sede")
    const tipoPago  = g("tipo_pago") || "Cuota inicial"
    const monto     = g("monto")
    const notas     = g("notas")

    // ── Validación ────────────────────────────────────────────────────────
    if (!nombre || !documento || !telefono || !programa || !sede || !monto) {
      return NextResponse.json(
        { error: "Faltan campos: nombre, documento, teléfono, programa, sede y monto" },
        { status: 400 }
      )
    }

    if (isNaN(Number(monto)) || Number(monto) <= 0) {
      return NextResponse.json(
        { error: "El monto debe ser un número mayor a 0" },
        { status: 400 }
      )
    }

    // ── 1. Subir comprobante a Supabase Storage ───────────────────────────
    let comprob_url: string | null = null
    const file = formData.get("comprobante") as File | null

    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "El comprobante no puede pesar más de 10MB" },
          { status: 400 }
        )
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

    // ── 2. Upsert estudiante ──────────────────────────────────────────────
    const { data: student, error: studentErr } = await supabase
      .from("students")
      .upsert(
        {
          nombre,
          documento,
          tipo_documento: tipoDoc,
          telefono,
          email:          correo || null,
          programa,
          sede,
          estado:         "pre_inscrito",
        },
        { onConflict: "documento" }
      )
      .select("id")
      .single()

    if (studentErr || !student) {
      console.error("Student error:", studentErr)
      return NextResponse.json({ error: "Error guardando estudiante" }, { status: 500 })
    }

    // ── 3. Crear matrícula ────────────────────────────────────────────────
    const { data: enrollment, error: enrollErr } = await supabase
      .from("enrollments")
      .insert({
        student_id:     student.id,
        ciclo:          1,
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

    // ── 4. Registrar pago ─────────────────────────────────────────────────
    await supabase.from("payments").insert({
      enrollment_id:   enrollment.id,
      student_id:      student.id,
      monto:           Number(monto),
      comprobante_url: comprob_url,
      estado:          "pendiente",
      notas:           [tipoPago, notas].filter(Boolean).join(" · "),
    })

    // ── 5. Notificar al equipo por WhatsApp ───────────────────────────────
    await notificarEquipo({ nombre, documento, telefono, programa, sede, tipoPago, monto })

    return NextResponse.json({
      ok:         true,
      student_id: student.id,
      has_file:   !!comprob_url,
    })

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error desconocido"
    console.error("pagos/comprobante error:", msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}