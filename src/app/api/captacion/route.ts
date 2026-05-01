import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

const SEDES_VALIDAS = ["Medellin", "Envigado", "Caldas"];

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

    const { nombre, celular, correo, programa, sede } = body as Record<string, unknown>;

    // Validar campos obligatorios
    if (!nombre || !celular || !programa || !sede) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }
    if (!validarCelular(String(celular))) {
      return NextResponse.json({ error: "Número de celular inválido" }, { status: 400 });
    }
    if (correo && !validarCorreo(String(correo))) {
      return NextResponse.json({ error: "Correo electrónico inválido" }, { status: 400 });
    }

    const s = {
      nombre:   sanitize(nombre),
      celular:  sanitize(celular),
      correo:   sanitize(correo),
      programa: sanitize(programa),
      sede:     sanitize(sede),
    };

    const sedeNorm = s.sede.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const sedeValida = SEDES_VALIDAS.some(sv => sv.toLowerCase() === sedeNorm);
    if (s.sede && !sedeValida) {
      return NextResponse.json({ error: "Sede inválida" }, { status: 400 });
    }

    const fila = (label: string, val: string) =>
      val ? `<tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%">${label}</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600">${val}</td></tr>` : "";

    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
  <div style="background:linear-gradient(135deg,#1a086e,#312783);padding:28px 32px">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.6)">INDECAP · Nuevo prospecto</p>
    <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff">📥 Solicitud de información</h1>
  </div>
  <div style="padding:28px 32px">
    <table style="width:100%;border-collapse:collapse">
      ${fila("Nombre", s.nombre)}
      ${fila("Celular", s.celular)}
      ${fila("Correo", s.correo)}
      ${fila("Programa de interés", s.programa)}
      ${fila("Sede más cercana", s.sede)}
    </table>
    <div style="margin-top:24px;background:#f9fafb;border-radius:10px;padding:16px;border-left:4px solid #F0A500">
      <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Acción recomendada</p>
      <p style="margin:6px 0 0;font-size:14px;color:#080F14;font-weight:600">Contactar en las próximas <strong>2 horas</strong> para maximizar conversión.</p>
    </div>
    <div style="margin-top:20px;padding:14px;background:#eff6ff;border-radius:10px;border:1px solid #dbeafe">
      <p style="margin:0;font-size:11px;color:#1e40af;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">📊 Para Google Sheets</p>
      <p style="margin:6px 0 0;font-size:12px;color:#1e3a8a;font-family:monospace">${s.nombre} | ${s.celular} | ${s.correo || "—"} | ${s.programa} | ${s.sede} | ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}</p>
    </div>
  </div>
  <div style="padding:16px 32px;border-top:1px solid #f3f4f6;background:#fafafa">
    <p style="margin:0;font-size:11px;color:#9ca3af;text-align:center">Corporación Educativa INDECAP · indecap.edu.co</p>
  </div>
</div>
</body>
</html>`;

    await resend.emails.send({
      from: "INDECAP <onboarding@resend.dev>",
to: ["camilo2236@gmail.com"],
      subject: `📥 Nuevo prospecto: ${s.nombre} — ${s.programa}`,
      html:    htmlEmail,
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("Error captacion:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
