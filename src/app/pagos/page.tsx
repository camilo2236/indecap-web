"use client";

import { ExternalLink, CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const pasos = [
  "Haz clic en el boton Pagar en linea",
  "Ingresa tu numero de documento de identidad",
  "Selecciona el valor a pagar",
  "Elige tu metodo de pago (PSE o tarjeta debito)",
  "Confirma el pago y guarda el comprobante",
];

const metodos = [
  { name: "PSE", desc: "Debito directo desde tu cuenta bancaria" },
  { name: "Tarjeta debito", desc: "Visa, Mastercard" },
];

const cuentas = [
  { banco: "AV Villas", tipo: "Cuenta Corriente", numero: "477007363" },
  { banco: "Davivienda", tipo: "Cuenta de Ahorros", numero: "036370192084" },
];

function FlipCard({ cuenta }: { cuenta: typeof cuentas[0] }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cuenta.numero);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: "800px", cursor: "pointer", height: "110px", flex: 1, minWidth: "140px" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: "12px",
            padding: "16px",
            boxSizing: "border-box",
            background: "#1a086e",
          }}
        >
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 6px" }}>
            {cuenta.banco}
          </p>
          <p style={{ fontSize: "16px", fontWeight: 500, color: "white", margin: 0 }}>
            {cuenta.tipo}
          </p>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: "8px 0 0" }}>
            Toca para ver
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: "12px",
            padding: "16px",
            boxSizing: "border-box",
            transform: "rotateY(180deg)",
            background: "#f4f4ff",
            border: "1px solid #1a086e20",
          }}
        >
          <p style={{ fontSize: "10px", color: "#1a086e", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px" }}>
            Num. de cuenta
          </p>
          <p style={{ fontSize: cuenta.numero.length > 10 ? "17px" : "20px", fontWeight: 500, color: "#1a086e", margin: 0, letterSpacing: "1px" }}>
            {cuenta.numero}
          </p>
          <button
            onClick={handleCopy}
            style={{
              marginTop: "8px",
              fontSize: "11px",
              padding: "4px 12px",
              borderRadius: "99px",
              border: "1px solid #1a086e30",
              background: "transparent",
              color: "#1a086e",
              cursor: "pointer",
            }}
          >
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PagosPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#312783]/30 border border-[#312783]/50 mb-6 mx-auto">
            <CreditCard className="h-8 w-8 text-[#FFD166]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] font-black text-white mb-4">
            Pagos en Linea
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
            Paga tu matricula o cuotas de forma rapida y segura desde cualquier lugar.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

          {/* Tarjeta principal con PSE + cuentas integradas */}
          <div className="rounded-[28px] bg-white border border-gray-100 shadow-sm p-10 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-[#0F6E56]" />
              <span className="text-sm font-semibold text-[#0F6E56]">Plataforma segura — Aval Pay Center</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-2">
              Portal de pagos INDECAP
            </h2>
            <p className="text-[#6B7280] text-sm mb-6 max-w-md">
              Ingresa con tu numero de documento y realiza tu pago en pocos minutos. Recibiras un comprobante inmediato.
            </p>
            <a
              href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00003179&origen=buscar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#312783] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#312783]/90 hover:shadow-lg mb-8"
            >
              <CreditCard className="h-4 w-4" />
              Pagar en linea
              <ExternalLink className="h-4 w-4" />
            </a>

            {/* Divisor */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#9CA3AF] mb-4">
                Cuentas bancarias — toca para ver el numero
              </p>
              <div className="flex gap-3 flex-wrap">
                {cuentas.map((c) => (
                  <FlipCard key={c.banco} cuenta={c} />
                ))}
              </div>
              <p className="text-xs text-[#6B7280] mt-4 leading-relaxed">
  A nombre de: Corporacion Educativa INDECAP Envia comprobante por WhatsApp
</p>
<p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
  Siempre que hagas una consignacion, envia el comprobante a la sede con: nombre completo, numero de documento, programa que estas estudiando y motivo del pago (mensualidad, uniforme, certificado de estudio, derechos de grado, etc.)
</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-[24px] bg-white border border-gray-100 shadow-sm p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14] mb-6">
                Como pagar
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
                    <p className="text-sm text-[#374151] leading-relaxed pt-0.5">{paso}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[24px] bg-white border border-gray-100 shadow-sm p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14] mb-6">
                  Metodos de pago
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
                    <p className="text-sm font-semibold text-[#92400E] mb-1">Tienes dudas con tu pago?</p>
                    <p className="text-xs text-[#92400E]/80 leading-relaxed">
                      Contactanos por WhatsApp o llamanos al{" "}
                      <a href="tel:6044484794" className="font-bold underline">(604) 448 4794</a>{" "}
                      y un asesor te ayudara.
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