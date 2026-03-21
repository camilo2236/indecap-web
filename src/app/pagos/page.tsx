import type { Metadata } from "next";
import { ExternalLink, CreditCard, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagos en Línea | INDECAP",
  description:
    "Realiza el pago de tu matrícula o cuotas de INDECAP de forma segura en línea a través de Aval Pay Center.",
};

const pasos = [
  "Haz clic en el botón 'Pagar en línea'",
  "Ingresa tu número de documento de identidad",
  "Selecciona el valor a pagar",
  "Elige tu método de pago (PSE, tarjeta débito o crédito)",
  "Confirma el pago y guarda el comprobante",
];

const metodos = [
  { name: "PSE", desc: "Débito directo desde tu cuenta bancaria" },
  { name: "Tarjeta débito", desc: "Visa, Mastercard, American Express" },
  { name: "Tarjeta crédito", desc: "Todas las franquicias aceptadas" },
];

export default function PagosPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#312783]/30 border border-[#312783]/50 mb-6 mx-auto">
            <CreditCard className="h-8 w-8 text-[#FFD166]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] font-black text-white mb-4">
            Pagos en Línea
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-[family-name:var(--font-dm-sans)] font-light">
            Paga tu matrícula o cuotas de forma rápida y segura desde cualquier lugar.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

          {/* CTA Principal */}
          <div className="rounded-[28px] bg-white border border-gray-100 shadow-sm p-10 text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-[#0F6E56]" />
              <span className="text-sm font-semibold text-[#0F6E56]">Plataforma segura — Aval Pay Center</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-3">
              Portal de pagos INDECAP
            </h2>
            <p className="text-[#6B7280] text-sm mb-8 max-w-md mx-auto font-[family-name:var(--font-dm-sans)]">
              Ingresa con tu número de documento y realiza tu pago en pocos minutos. Recibirás un comprobante inmediato.
            </p>
            <a
              href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00003179&origen=buscar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#312783] px-10 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-white transition-all hover:bg-[#312783]/90 hover:shadow-lg"
            >
              <CreditCard className="h-4 w-4" />
              Pagar en línea
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Pasos */}
            <div className="rounded-[24px] bg-white border border-gray-100 shadow-sm p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14] mb-6">
                ¿Cómo pagar?
              </h3>
              <div className="space-y-4">
                {pasos.map((paso, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: "#312783" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#374151] font-[family-name:var(--font-dm-sans)] leading-relaxed pt-0.5">
                      {paso}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Métodos + Info */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[24px] bg-white border border-gray-100 shadow-sm p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14] mb-6">
                  Métodos de pago
                </h3>
                <div className="space-y-4">
                  {metodos.map((m) => (
                    <div key={m.name} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0F6E56] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#080F14]">{m.name}</p>
                        <p className="text-xs text-[#6B7280]">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#FEF9E7] border border-[#F0A500]/20 p-6">
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-[#F0A500] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#92400E] mb-1">¿Tienes dudas con tu pago?</p>
                    <p className="text-xs text-[#92400E]/80 leading-relaxed">
                      Contáctanos por WhatsApp o llámanos al{" "}
                      <a href="tel:6044484794" className="font-bold underline">(604) 448 4794</a>{" "}
                      y un asesor te ayudará.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
