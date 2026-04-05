import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting en memoria — funciona por instancia serverless
// Para produccion seria mejor usar Upstash Redis, pero esto cubre la mayoria de casos
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

const PROGRAMAS_VALIDOS = [
  "Auxiliar en Enfermeria",
  "Cosmetologia y Estetica Integral",
  "Auxiliar en Veterinaria",
  "Administrativo en Salud",
  "Servicios Farmaceuticos",
  "Auxiliar en Salud Oral",
  "Salud Publica",
  "Atencion al Adulto Mayor",
  "Talento Humano",
  "Auxiliar Contable",
  "Tecnico en Marketing Digital",
  "SST — Seguridad y Salud en el Trabajo",
  "Entrenamiento Deportivo",
  "Tecnico en Sistemas",
  "Auxiliar en Desarrollo de Software",
  "Peluqueria y Estetica Canina",
  "Otro / No se aun",
];

const SEDES_VALIDAS = ["Medellin", "Envigado", "Caldas"];

export async function POST(req: NextRequest) {
  try {
    // Validar Content-Type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type invalido" }, { status: 415 });
    }

    // Validar tamano del body (max 10KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10240) {
      return NextResponse.json({ error: "Solicitud demasiado grande" }, { status: 413 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Espera un momento e intenta de nuevo." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "JSON invalido" }, { status: 400 });
    }

    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Cuerpo invalido" }, { status: 400 });
    }

    const { nombres, apellidos, correo, celular, programa, sede } = body as Record<string, unknown>;

    // Validar campos obligatorios
    if (!nombres || !apellidos || !celular || !sede) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (!validarCelular(String(celular))) {
      return NextResponse.json({ error: "Numero de celular invalido" }, { status: 400 });
    }

    if (correo && !validarCorreo(String(correo))) {
      return NextResponse.json({ error: "Correo electronico invalido" }, { status: 400 });
    }

    // Sanitizar
    const sNombres   = sanitize(nombres);
    const sApellidos = sanitize(apellidos);
    const sCelular   = sanitize(celular);
    const sCorreo    = sanitize(correo);
    const sPrograma  = sanitize(programa);
    const sSede      = sanitize(sede);

    // Validar valores contra listas blancas (ignorar mayusculas/tildes)
    const sedeNorm = sSede.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const sedeValida = SEDES_VALIDAS.some(s => s.toLowerCase() === sedeNorm);
    if (sSede && !sedeValida) {
      return NextResponse.json({ error: "Sede invalida" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "INDECAP Web <onboarding@resend.dev>",
      to: ["camilo2236@gmail.com"],
      subject: `Nueva inscripcion — ${sNombres} ${sApellidos} | ${sPrograma || "Sin programa"}`,
      html: `
        <!DOCTYPE html><html><head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                <tr><td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:32px 40px;text-align:center;">
                  <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;">INDECAP</h1>
                  <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:2px;text-transform:uppercase;">Instituto de Ciencias Aplicadas</p>
                </td></tr>
                <tr><td style="padding:32px 40px 0;text-align:center;">
                  <span style="display:inline-block;background:#FEF3C7;color:#92400E;font-size:11px;font-weight:700;padding:6px 16px;border-radius:99px;text-transform:uppercase;">Nueva Solicitud de Inscripcion</span>
                </td></tr>
                <tr><td style="padding:24px 40px 32px;">
                  <h2 style="margin:0 0 24px;color:#080F14;font-size:20px;">${sNombres} ${sApellidos}</h2>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${sCelular ? `<tr><td style="padding:12px 0;border-bottom:1px solid #F3F4F6;"><span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;">Celular</span><br><span style="color:#080F14;font-size:16px;font-weight:600;">${sCelular}</span></td></tr>` : ""}
                    ${sCorreo ? `<tr><td style="padding:12px 0;border-bottom:1px solid #F3F4F6;"><span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;">Correo</span><br><span style="color:#080F14;font-size:16px;font-weight:600;">${sCorreo}</span></td></tr>` : ""}
                    ${sPrograma ? `<tr><td style="padding:12px 0;border-bottom:1px solid #F3F4F6;"><span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;">Programa</span><br><span style="color:#080F14;font-size:16px;font-weight:600;">${sPrograma}</span></td></tr>` : ""}
                    <tr><td style="padding:12px 0;"><span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;">Sede</span><br><span style="color:#080F14;font-size:16px;font-weight:600;">${sSede}</span></td></tr>
                  </table>
                  <div style="margin-top:28px;text-align:center;">
                    <a href="https://wa.me/57${sCelular.replace(/\D/g, "")}" style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;">Responder por WhatsApp</a>
                  </div>
                </td></tr>
                <tr><td style="background:#F8FAFC;padding:20px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                  <p style="margin:0;color:#9CA3AF;font-size:11px;">Formulario enviado desde indecap.edu.co</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body></html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}