// src/app/api/pagos/comprobante/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const PHONE_CAMILO = "573182354400";
const PHONE_ID = "1167947676398207";

async function notificarCamilo(
  nombre: string, documento: string, telefono: string,
  programa: string, sede: string, tipoPago: string, monto: string
) {
  const token = process.env.WHATSAPP_TOKEN;
  if (!token) return;

  const msg =
    `🎓 *Nueva inscripción INDECAP*\n\n` +
    `👤 ${nombre}\n` +
    `📄 Doc: ${documento}\n` +
    `📱 ${telefono}\n` +
    `🎓 ${programa}\n` +
    `📍 ${sede}\n` +
    `💰 ${tipoPago}: $${Number(monto).toLocaleString("es-CO")} COP\n\n` +
    `Ver en: indecap.edu.co/admin/pagos`;

  await fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: PHONE_CAMILO,
      type: "text",
      text: { body: msg },
    }),
  }).catch(e => console.error("WA notify error:", e.message));
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const formData = await req.formData();

    const g = (k: string) => (formData.get(k) as string) ?? "";

    const nombre   = g("nombre");
    const documento = g("documento");
    const tipoDoc  = g("tipo_doc") || "CC";
    const telefono = g("telefono");
    const programa = g("programa");
    const sede     = g("sede");
    const tipoPago = g("tipo_pago");
    const monto    = g("monto");
    const notas    = g("notas");

    if (!nombre || !documento || !telefono || !programa || !sede || !monto) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // ── 1. Subir comprobante a Supabase Storage ──────────────────────────────
    let comprob_url: string | null = null;
    const file = formData.get("comprobante") as File | null;

    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = file.name.split(".").pop() ?? "jpg";
      const fileName = `${Date.now()}_${documento}.${ext}`;

      const { error: storageErr } = await supabase.storage
        .from("comprobantes")
        .upload(fileName, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (!storageErr) {
        const { data } = supabase.storage
          .from("comprobantes")
          .getPublicUrl(fileName);
        comprob_url = data.publicUrl;
      }
    }

    // ── 2. Guardar estudiante (upsert por documento) ─────────────────────────
    const { data: student, error: studentErr } = await supabase
      .from("students")
      .upsert(
        {
          nombre,
          documento,
          tipo_documento: tipoDoc,
          telefono,
          programa,
          sede,
          estado: "pre_inscrito",
        },
        { onConflict: "documento" }
      )
      .select("id")
      .single();

    if (studentErr || !student) {
      console.error("Student error:", studentErr);
      return NextResponse.json({ error: "Error guardando estudiante" }, { status: 500 });
    }

    // ── 3. Guardar matrícula ─────────────────────────────────────────────────
    const { data: enrollment, error: enrollErr } = await supabase
      .from("enrollments")
      .insert({
        student_id: student.id,
        ciclo: 1,
        valor_ciclo: Number(monto),
        modalidad_pago: "financiado",
        estado: "pendiente",
      })
      .select("id")
      .single();

    if (enrollErr || !enrollment) {
      console.error("Enrollment error:", enrollErr);
      return NextResponse.json({ error: "Error guardando matrícula" }, { status: 500 });
    }

    // ── 4. Guardar pago ──────────────────────────────────────────────────────
    await supabase.from("payments").insert({
      enrollment_id: enrollment.id,
      student_id: student.id,
      monto: Number(monto),
      comprobante_url: comprob_url,
      estado: "pendiente",
      notas: `${tipoPago}${notas ? ` · ${notas}` : ""}`,
    });

    // ── 5. Notificar a Camilo ─────────────────────────────────────────────────
    await notificarCamilo(nombre, documento, telefono, programa, sede, tipoPago, monto);

    return NextResponse.json({ ok: true, student_id: student.id });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    console.error("pagos/comprobante error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
