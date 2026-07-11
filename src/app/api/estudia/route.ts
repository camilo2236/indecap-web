import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Rate limit (5 req/min por IP), igual que /api/captacion ──────────────────
const rateLimit = new Map<string, { count: number; reset: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim()
    .slice(0, 200);
}

function validarCelular(cel: string): boolean {
  return /^[0-9+\s\-]{7,20}$/.test(cel);
}
function validarCorreo(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length < 100;
}

const REQUISITOS_VALIDOS = ["Sí, cumplo todos", "No estoy seguro"];
const PROGRAMA = "Auxiliar en Sistemas Informáticos";

// ── Guardar en Supabase leads_web ────────────────────────────────────────────
// La tabla tiene DOS índices únicos separados (celular y correo). Un upsert simple
// no puede arbitrar ambos, así que buscamos primero si el lead ya existe por
// cualquiera de los dos y actualizamos; si no, insertamos. Nunca falla por duplicado.
async function guardarLead(s: Record<string, string>) {
  try {
    const datos = {
      nombre:   s.nombre,
      celular:  s.whatsapp,
      correo:   s.correo,
      programa: PROGRAMA,
      sede:     "Medellin",
      fuente:   s.fuente || "Landing ESTUD-IA",
      estado:   "nuevo",
      notas:    `Cumple requisitos: ${s.requisitos}`,
    };

    // ¿Ya existe por teléfono o por correo?
    const { data: existente, error: selErr } = await supabaseAdmin
      .from("leads_web")
      .select("id")
      .or(`celular.eq.${s.whatsapp},correo.eq.${s.correo}`)
      .limit(1)
      .maybeSingle();

    if (selErr) {
      console.error("Error consultando lead existente:", selErr.message);
      return;
    }

    if (existente) {
      const { error: updErr } = await supabaseAdmin
        .from("leads_web")
        .update(datos)
        .eq("id", existente.id);
      if (updErr) console.error("Error actualizando lead ESTUD-IA:", updErr.message);
    } else {
      const { error: insErr } = await supabaseAdmin
        .from("leads_web")
        .insert(datos);
      if (insErr) console.error("Error insertando lead ESTUD-IA:", insErr.message);
    }
  } catch (err) {
    console.error("Error guardando lead ESTUD-IA en leads_web:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type invalido" }, { status: 415 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Espera un momento." }, { status: 429 });
    }

    let body: unknown;
    try { body = await req.json(); } catch {
      return NextResponse.json({ error: "JSON invalido" }, { status: 400 });
    }
    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Cuerpo invalido" }, { status: 400 });
    }

    const { nombre, whatsapp, correo, requisitos, fuente } = body as Record<string, unknown>;

    if (!nombre || !whatsapp || !correo || !requisitos) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }
    if (!validarCelular(String(whatsapp))) {
      return NextResponse.json({ error: "Número de WhatsApp inválido" }, { status: 400 });
    }
    if (!validarCorreo(String(correo))) {
      return NextResponse.json({ error: "Correo electrónico inválido" }, { status: 400 });
    }
    if (!REQUISITOS_VALIDOS.includes(String(requisitos))) {
      return NextResponse.json({ error: "Valor de requisitos inválido" }, { status: 400 });
    }

    const s = {
      nombre:     sanitize(nombre),
      whatsapp:   sanitize(whatsapp),
      correo:     sanitize(correo),
      requisitos: sanitize(requisitos),
      fuente:     sanitize(fuente) || "Landing ESTUD-IA",
    };

    // 1. Guardar en Supabase (leads_web)
    await guardarLead(s);

    // 2. Correo por Resend
    const fila = (label: string, val: string) =>
      val ? `<tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%">${label}</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600">${val}</td></tr>` : "";

    const cumpleBadge = s.requisitos === "Sí, cumplo todos"
      ? `<span style="color:#166534;font-weight:700">✓ Cumple requisitos</span>`
      : `<span style="color:#b45309;font-weight:700">⚠ Por verificar requisitos</span>`;

    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a086e,#312783);padding:28px 32px">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.6)">INDECAP · ESTUD-IA</p>
    <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff">Nuevo inscrito — Sistemas Informáticos</h1>
  </div>
  <div style="padding:28px 32px">
    <table style="width:100%;border-collapse:collapse">
      ${fila("Nombre", s.nombre)}
      ${fila("WhatsApp", s.whatsapp)}
      ${fila("Correo", s.correo)}
      ${fila("Requisitos", s.requisitos)}
      ${fila("Fuente", s.fuente)}
    </table>
    <div style="margin-top:20px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #F0A500">
      <p style="margin:0;font-size:13px">${cumpleBadge}</p>
    </div>
    <div style="margin-top:16px;background:#f9fafb;border-radius:10px;padding:16px;border-left:4px solid #312783">
      <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Acción recomendada</p>
      <p style="margin:6px 0 0;font-size:14px;color:#080F14;font-weight:600">Contactar en las próximas <strong>2 horas</strong>. Guiar al aspirante a registrarse en sapiencia.gov.co/vision4rios-etdh y agendar matrícula.</p>
    </div>
    <div style="margin-top:16px;padding:12px 16px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0">
      <p style="margin:0;font-size:11px;color:#166534;font-weight:700">Guardado en Supabase · tabla leads_web (fuente: Landing ESTUD-IA)</p>
    </div>
    <div style="margin-top:16px;padding:14px;background:#eff6ff;border-radius:10px;border:1px solid #dbeafe">
      <p style="margin:0;font-size:11px;color:#1e40af;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">Para registro</p>
      <p style="margin:6px 0 0;font-size:12px;color:#1e3a8a;font-family:monospace">${s.nombre} | ${s.whatsapp} | ${s.correo} | ${s.requisitos} | ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}</p>
    </div>
  </div>
  <div style="padding:16px 32px;border-top:1px solid #f3f4f6;background:#fafafa">
    <p style="margin:0;font-size:11px;color:#9ca3af;text-align:center">Convocatoria ESTUD-IA · INDECAP en convenio con Sapiencia y la Alcaldía de Medellín</p>
  </div>
</div>
</body>
</html>`;

    await resend.emails.send({
      // onboarding@resend.dev = remitente de pruebas de Resend (solo envía a tu propio correo).
      // Cuando verifiques indecap.edu.co en Resend, cambia a: "INDECAP <notificaciones@indecap.edu.co>"
      from: "INDECAP <onboarding@resend.dev>",
      to: ["camilo2236@gmail.com"],
      subject: `Nuevo inscrito ESTUD-IA: ${s.nombre}`,
      html: htmlEmail,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error estudia:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
