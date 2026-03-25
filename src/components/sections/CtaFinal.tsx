import { MessageCircle, Phone } from "lucide-react";
import { CONTACTS } from "@/config/contacts";

export function CtaFinal() {
  return (
    <section
      className="py-20 text-center text-white lg:py-28"
      style={{
        background: "linear-gradient(135deg, #312783 0%, #1a0f5c 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        className="absolute top-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(240,165,0,0.12) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl">
          <div className="mb-3 font-[family-name:var(--font-dm-sans)] text-[0.73rem] font-bold uppercase tracking-widest text-[#FFD166]">
            ¿Listo para transformar tu vida?
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,3vw,2.8rem)] font-bold !text-white">
            Tu carrera profesional{" "}
            <em className="italic text-[#FFD166]">empieza hoy</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-dm-sans)] text-base font-light text-white/65">
            Los cupos son limitados. Escríbenos y recibe asesoría personalizada
            sobre horarios, financiación y proceso de inscripción.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${CONTACTS.MEDELLIN}&text=${encodeURIComponent("Hola INDECAP, quiero inscribirme. Mi nombre es ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#080F14] transition-all duration-250 hover:scale-105 hover:shadow-[0_8px_24px_rgba(240,165,0,0.35)]"
            >
              <MessageCircle className="h-4 w-4" />
              Inscribirme por WhatsApp
            </a>
            <a
              href="tel:+576044484794"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-250 hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
