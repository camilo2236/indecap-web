import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombres, apellidos, correo, celular, programa, sede } = body;

    // Validación básica
    if (!nombres || !apellidos || !celular || !sede) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "INDECAP Web <onboarding@resend.dev>",
      to: ["usuarioindecap15@gmail.com"],
      subject: `🎓 Nueva inscripción — ${nombres} ${apellidos} | ${programa || "Sin programa"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:0;background:#F3F8FA;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F8FA;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#312783 0%,#1a0f5c 100%);padding:32px 40px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                        INDECAP
                      </h1>
                      <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                        Instituto de Ciencias Aplicadas
                      </p>
                    </td>
                  </tr>

                  <!-- Badge -->
                  <tr>
                    <td style="padding:32px 40px 0;text-align:center;">
                      <span style="display:inline-block;background:#FEF3C7;color:#92400E;font-size:11px;font-weight:700;padding:6px 16px;border-radius:99px;text-transform:uppercase;letter-spacing:1px;">
                        🎓 Nueva Solicitud de Inscripción
                      </span>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding:24px 40px 32px;">
                      <h2 style="margin:0 0 24px;color:#080F14;font-size:20px;font-weight:700;">
                        ${nombres} ${apellidos}
                      </h2>

                      <!-- Datos -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${celular ? `
                        <tr>
                          <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
                            <span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Celular</span><br>
                            <span style="color:#080F14;font-size:16px;font-weight:600;margin-top:2px;display:block;">
                              <a href="tel:${celular}" style="color:#312783;text-decoration:none;">${celular}</a>
                            </span>
                          </td>
                        </tr>` : ""}
                        ${correo ? `
                        <tr>
                          <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
                            <span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Correo</span><br>
                            <span style="color:#080F14;font-size:16px;font-weight:600;margin-top:2px;display:block;">
                              <a href="mailto:${correo}" style="color:#312783;text-decoration:none;">${correo}</a>
                            </span>
                          </td>
                        </tr>` : ""}
                        ${programa ? `
                        <tr>
                          <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
                            <span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Programa de interés</span><br>
                            <span style="color:#080F14;font-size:16px;font-weight:600;margin-top:2px;display:block;">${programa}</span>
                          </td>
                        </tr>` : ""}
                        <tr>
                          <td style="padding:12px 0;">
                            <span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Sede de interés</span><br>
                            <span style="color:#080F14;font-size:16px;font-weight:600;margin-top:2px;display:block;">${sede}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <div style="margin-top:28px;text-align:center;">
                        <a href="https://wa.me/57${celular}?text=${encodeURIComponent(`Hola ${nombres}, te contactamos de INDECAP. Vimos tu solicitud de inscripción para ${programa || "nuestros programas"}. ¿Tienes un momento para hablar?`)}"
                          style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:99px;text-decoration:none;">
                          💬 Responder por WhatsApp
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#F8FAFC;padding:20px 40px;text-align:center;border-top:1px solid #E5E7EB;">
                      <p style="margin:0;color:#9CA3AF;font-size:11px;">
                        Formulario enviado desde indecap-web.vercel.app · ${new Date().toLocaleDateString("es-CO", { dateStyle: "full" })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
