import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      // Paso 1 — Aspirante
      nombres, apellidos, cedula, fechaNacimiento,
      direccion, barrio, municipio, telefono, celular, correo,
      // Paso 2 — Familiar
      nombreMadre, telefonoMadre, ocupacionMadre,
      nombrePadre, telefonoPadre, ocupacionPadre,
      nombreAcudiente, telefonoAcudiente, ocupacionAcudiente,
      // Paso 3 — Académico
      programa, sede, horario, ultimoGrado, comoSeEntero,
      esCurso,
    } = body;

    if (!nombres || !apellidos || !celular || !programa || !sede) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const valorMatricula = esCurso ? "Sin costo" : "$50.000 COP";

    // ── CORREO A INDECAP ─────────────────────────────────
    await resend.emails.send({
      from: "INDECAP Admisiones <onboarding@resend.dev>",
      to: ["usuarioindecap15@gmail.com"],
      subject: `📋 Nueva Solicitud de Admisión — ${nombres} ${apellidos} | ${programa}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                
                <tr><td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:28px 40px;">
                  <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;">INDECAP</h1>
                  <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Nueva Solicitud de Admisión</p>
                </td></tr>

                <tr><td style="padding:28px 40px 0;">
                  <span style="display:inline-block;background:#FEF3C7;color:#92400E;font-size:11px;font-weight:700;padding:6px 16px;border-radius:99px;text-transform:uppercase;">
                    📋 Solicitud de Admisión — ${valorMatricula}
                  </span>
                </td></tr>

                <tr><td style="padding:20px 40px 0;">
                  <h2 style="margin:0 0 20px;color:#080F14;font-size:20px;">${nombres} ${apellidos}</h2>
                  
                  <p style="margin:0 0 16px;color:#312783;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8E6F8;padding-bottom:8px;">Datos del Aspirante</p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%;">Cédula/TI</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${cedula || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Fecha nacimiento</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${fechaNacimiento || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Dirección</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${direccion || "—"}, ${barrio || "—"}, ${municipio || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Teléfono</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${telefono || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Celular</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;"><a href="tel:${celular}" style="color:#312783;">${celular}</a></td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Correo</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;"><a href="mailto:${correo}" style="color:#312783;">${correo || "—"}</a></td></tr>
                  </table>

                  <p style="margin:0 0 16px;color:#312783;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8E6F8;padding-bottom:8px;">Datos Familiares</p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%;">Madre</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${nombreMadre || "—"} ${ocupacionMadre ? `· ${ocupacionMadre}` : ""} ${telefonoMadre ? `· ${telefonoMadre}` : ""}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Padre</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${nombrePadre || "—"} ${ocupacionPadre ? `· ${ocupacionPadre}` : ""} ${telefonoPadre ? `· ${telefonoPadre}` : ""}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Acudiente</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${nombreAcudiente || "—"} ${ocupacionAcudiente ? `· ${ocupacionAcudiente}` : ""} ${telefonoAcudiente ? `· ${telefonoAcudiente}` : ""}</td></tr>
                  </table>

                  <p style="margin:0 0 16px;color:#312783;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8E6F8;padding-bottom:8px;">Datos Académicos</p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;width:40%;">Programa</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${programa}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Sede</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${sede}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Horario</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${horario || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Último grado</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${ultimoGrado || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Cómo se enteró</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:600;">${comoSeEntero || "—"}</td></tr>
                    <tr><td style="padding:6px 0;color:#6B7280;font-size:12px;">Valor matrícula</td><td style="padding:6px 0;color:#080F14;font-size:13px;font-weight:700;">${valorMatricula}</td></tr>
                  </table>

                  <div style="text-align:center;margin-bottom:28px;">
                    <a href="https://wa.me/57${celular}?text=${encodeURIComponent(`Hola ${nombres}, te contactamos de INDECAP sobre tu solicitud de admisión para ${programa} en la sede ${sede}. ¿Tienes un momento?`)}"
                      style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;">
                      💬 Responder por WhatsApp
                    </a>
                  </div>
                </td></tr>

                <tr><td style="background:#F8FAFC;padding:16px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                  <p style="margin:0;color:#9CA3AF;font-size:11px;">
                    Formulario enviado desde indecap-web.vercel.app · ${new Date().toLocaleDateString("es-CO", { dateStyle: "full" })}
                  </p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    // ── CORREO DE CONFIRMACIÓN AL ESTUDIANTE ─────────────
    if (correo) {
      await resend.emails.send({
        from: "INDECAP <onboarding@resend.dev>",
        to: [correo],
        subject: `✅ Solicitud de admisión recibida — INDECAP ${sede}`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  
                  <tr><td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:28px 40px;text-align:center;">
                    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;">INDECAP</h1>
                    <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Instituto de Ciencias Aplicadas</p>
                  </td></tr>

                  <tr><td style="padding:36px 40px;text-align:center;">
                    <div style="width:64px;height:64px;background:#E8F5E9;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:32px;">✅</div>
                    <h2 style="margin:0 0 8px;color:#080F14;font-size:22px;font-weight:700;">¡Solicitud recibida, ${nombres}!</h2>
                    <p style="margin:0 0 24px;color:#6B7280;font-size:15px;line-height:1.6;">
                      Hemos recibido tu solicitud de admisión para el programa de<br>
                      <strong style="color:#312783;">${programa}</strong> en la sede <strong style="color:#312783;">${sede}</strong>.
                    </p>

                    <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:12px;padding:20px;text-align:left;margin-bottom:24px;">
                      <p style="margin:0 0 12px;color:#374151;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Resumen de tu solicitud</p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr><td style="padding:5px 0;color:#6B7280;font-size:13px;width:40%;">Nombre</td><td style="padding:5px 0;color:#080F14;font-size:13px;font-weight:600;">${nombres} ${apellidos}</td></tr>
                        <tr><td style="padding:5px 0;color:#6B7280;font-size:13px;">Programa</td><td style="padding:5px 0;color:#080F14;font-size:13px;font-weight:600;">${programa}</td></tr>
                        <tr><td style="padding:5px 0;color:#6B7280;font-size:13px;">Sede</td><td style="padding:5px 0;color:#080F14;font-size:13px;font-weight:600;">${sede}</td></tr>
                        ${horario ? `<tr><td style="padding:5px 0;color:#6B7280;font-size:13px;">Horario</td><td style="padding:5px 0;color:#080F14;font-size:13px;font-weight:600;">${horario}</td></tr>` : ""}
                      </table>
                    </div>

                    ${!esCurso ? `
                    <div style="background:#FEF3C7;border:1px solid #F0A500;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
                      <p style="margin:0 0 8px;color:#92400E;font-size:14px;font-weight:700;">💳 Valor de matrícula: $50.000 COP</p>
                      <p style="margin:0;color:#92400E;font-size:12px;line-height:1.5;">
                        Para completar tu inscripción, realiza el pago escaneando el código QR de Davivienda en la sede o a través de <a href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00003179&origen=buscar" style="color:#92400E;font-weight:700;">Aval Pay</a>.
                      </p>
                    </div>
                    ` : `
                    <div style="background:#E8F5E9;border:1px solid #0F6E56;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
                      <p style="margin:0;color:#0F6E56;font-size:14px;font-weight:700;">✅ Este curso no tiene costo de matrícula</p>
                    </div>
                    `}

                    <p style="margin:0 0 20px;color:#6B7280;font-size:13px;line-height:1.6;">
                      Un asesor INDECAP te contactará pronto para confirmar tu cupo y orientarte sobre los próximos pasos.
                    </p>

                    <a href="https://wa.me/573022389760?text=${encodeURIComponent(`Hola INDECAP, soy ${nombres} ${apellidos} y acabo de enviar mi solicitud de admisión para ${programa}`)}"
                      style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;margin-bottom:8px;">
                      💬 Escribir por WhatsApp
                    </a>
                  </td></tr>

                  <tr><td style="background:#F8FAFC;padding:16px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                    <p style="margin:0;color:#9CA3AF;font-size:11px;">
                      Corporación Educativa INDECAP · (604) 448 4794 · indecap@indecap.edu.co
                    </p>
                  </td></tr>
                </table>
              </td></tr>
            </table>
          </body>
          </html>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
