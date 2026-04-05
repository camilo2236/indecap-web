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
    // Validar Content-Type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type invalido" }, { status: 415 });
    }

    // Limitar tamano del body (max 50KB para admision que tiene mas campos)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 51200) {
      return NextResponse.json({ error: "Solicitud demasiado grande" }, { status: 413 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Espera un momento." },
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

    const {
      nombres, apellidos, cedula, fechaNacimiento,
      direccion, barrio, municipio, telefono, celular, correo,
      nombreMadre, telefonoMadre, ocupacionMadre,
      nombrePadre, telefonoPadre, ocupacionPadre,
      nombreAcudiente, telefonoAcudiente, ocupacionAcudiente,
      programa, sede, horario, ultimoGrado, comoSeEntero, esCurso,
    } = body as Record<string, unknown>;

    // Validar campos obligatorios
    if (!nombres || !apellidos || !celular || !programa || !sede) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (!validarCelular(String(celular))) {
      return NextResponse.json({ error: "Numero de celular invalido" }, { status: 400 });
    }

    if (correo && !validarCorreo(String(correo))) {
      return NextResponse.json({ error: "Correo electronico invalido" }, { status: 400 });
    }

    // Sanitizar todos los campos
    const s = {
      nombres:      sanitize(nombres),
      apellidos:    sanitize(apellidos),
      cedula:       sanitize(cedula),
      fechaNac:     sanitize(fechaNacimiento),
      direccion:    sanitize(direccion),
      barrio:       sanitize(barrio),
      municipio:    sanitize(municipio),
      telefono:     sanitize(telefono),
      celular:      sanitize(celular),
      correo:       sanitize(correo),
      nombreMadre:  sanitize(nombreMadre),
      telMadre:     sanitize(telefonoMadre),
      ocuMadre:     sanitize(ocupacionMadre),
      nombrePadre:  sanitize(nombrePadre),
      telPadre:     sanitize(telefonoPadre),
      ocuPadre:     sanitize(ocupacionPadre),
      nombreAcud:   sanitize(nombreAcudiente),
      telAcud:      sanitize(telefonoAcudiente),
      ocuAcud:      sanitize(ocupacionAcudiente),
      programa:     sanitize(programa),
      sede:         sanitize(sede),
      horario:      sanitize(horario),
      ultimoGrado:  sanitize(ultimoGrado),
      comoSeEntero: sanitize(comoSeEntero),
    };

    // Validar sede contra lista blanca
    const sedeNorm = s.sede.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const sedeValida = SEDES_VALIDAS.some(sv => sv.toLowerCase() === sedeNorm);
    if (s.sede && !sedeValida) {
      return NextResponse.json({ error: "Sede invalida" }, { status: 400 });
    }

    const valorMatricula = esCurso ? "Sin costo" : "$50.000 COP";

    const fila = (label: string, val: string) =>
      val ? `<tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%;">${label}</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${val}</td></tr>` : "";

    const seccion = (titulo: string) =>
      `<p style="margin:16px 0 8px;color:#312783;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8E6F8;padding-bottom:8px;">${titulo}</p>`;

    // Correo a INDECAP
    await resend.emails.send({
      from: "INDECAP Admisiones <onboarding@resend.dev>",
      to: ["camilo2236@gmail.com"],
      subject: `Nueva Solicitud de Admision — ${s.nombres} ${s.apellidos} | ${s.programa}`,
      html: `
        <!DOCTYPE html><html><head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                <tr><td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:28px 40px;">
                  <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;">INDECAP</h1>
                  <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Nueva Solicitud de Admision</p>
                </td></tr>
                <tr><td style="padding:24px 40px;">
                  <span style="display:inline-block;background:#FEF3C7;color:#92400E;font-size:11px;font-weight:700;padding:6px 16px;border-radius:99px;text-transform:uppercase;">Admision — ${valorMatricula}</span>
                  <h2 style="margin:16px 0 20px;color:#080F14;font-size:20px;">${s.nombres} ${s.apellidos}</h2>
                  ${seccion("Datos del Aspirante")}
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${fila("Cedula/TI", s.cedula)}
                    ${fila("Fecha nacimiento", s.fechaNac)}
                    ${fila("Direccion", [s.direccion, s.barrio, s.municipio].filter(Boolean).join(", "))}
                    ${fila("Telefono", s.telefono)}
                    ${fila("Celular", s.celular)}
                    ${fila("Correo", s.correo)}
                  </table>
                  ${seccion("Datos Familiares")}
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${fila("Madre", [s.nombreMadre, s.ocuMadre, s.telMadre].filter(Boolean).join(" · "))}
                    ${fila("Padre", [s.nombrePadre, s.ocuPadre, s.telPadre].filter(Boolean).join(" · "))}
                    ${fila("Acudiente", [s.nombreAcud, s.ocuAcud, s.telAcud].filter(Boolean).join(" · "))}
                  </table>
                  ${seccion("Datos Academicos")}
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                    ${fila("Programa", s.programa)}
                    ${fila("Sede", s.sede)}
                    ${fila("Horario", s.horario)}
                    ${fila("Ultimo grado", s.ultimoGrado)}
                    ${fila("Como se entero", s.comoSeEntero)}
                    ${fila("Valor matricula", valorMatricula)}
                  </table>
                  <div style="text-align:center;margin-bottom:28px;">
                    <a href="https://wa.me/57${s.celular.replace(/\D/g, "")}"
                      style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;">
                      Responder por WhatsApp
                    </a>
                  </div>
                </td></tr>
                <tr><td style="background:#F8FAFC;padding:16px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                  <p style="margin:0;color:#9CA3AF;font-size:11px;">Formulario enviado desde indecap.edu.co</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body></html>
      `,
    });

    // Correo de confirmacion al estudiante
    if (s.correo) {
      await resend.emails.send({
        from: "INDECAP <onboarding@resend.dev>",
        to: [s.correo],
        subject: `Solicitud de admision recibida — INDECAP ${s.sede}`,
        html: `
          <!DOCTYPE html><html><head><meta charset="utf-8"></head>
          <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  <tr><td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:28px 40px;text-align:center;">
                    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;">INDECAP</h1>
                    <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Instituto de Ciencias Aplicadas</p>
                  </td></tr>
                  <tr><td style="padding:36px 40px;text-align:center;">
                    <h2 style="margin:0 0 8px;color:#080F14;font-size:22px;">Solicitud recibida, ${s.nombres}!</h2>
                    <p style="margin:0 0 24px;color:#6B7280;font-size:15px;line-height:1.6;">
                      Recibimos tu solicitud para <strong style="color:#312783;">${s.programa}</strong> en la sede <strong style="color:#312783;">${s.sede}</strong>.
                    </p>
                    <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:12px;padding:20px;text-align:left;margin-bottom:24px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${fila("Nombre", `${s.nombres} ${s.apellidos}`)}
                        ${fila("Programa", s.programa)}
                        ${fila("Sede", s.sede)}
                        ${fila("Horario", s.horario)}
                      </table>
                    </div>
                    ${!esCurso ? `
                    <div style="background:#FEF3C7;border:1px solid #F0A500;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
                      <p style="margin:0 0 8px;color:#92400E;font-size:14px;font-weight:700;">Valor de matricula: $50.000 COP</p>
                      <p style="margin:0;color:#92400E;font-size:12px;line-height:1.5;">
                        Realiza el pago a traves de <a href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00003179&origen=buscar" style="color:#92400E;font-weight:700;">Aval Pay</a> o en la sede.
                      </p>
                    </div>` : `
                    <div style="background:#E8F5E9;border:1px solid #0F6E56;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
                      <p style="margin:0;color:#0F6E56;font-size:14px;font-weight:700;">Este curso no tiene costo de matricula</p>
                    </div>`}
                    <p style="margin:0 0 20px;color:#6B7280;font-size:13px;line-height:1.6;">Un asesor INDECAP te contactara pronto para confirmar tu cupo.</p>
                    <a href="https://wa.me/573022389760"
                      style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;">
                      Escribir por WhatsApp
                    </a>
                  </td></tr>
                  <tr><td style="background:#F8FAFC;padding:16px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                    <p style="margin:0;color:#9CA3AF;font-size:11px;">Corporacion Educativa INDECAP · (604) 448 4794 · indecap@indecap.edu.co</p>
                  </td></tr>
                </table>
              </td></tr>
            </table>
          </body></html>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}