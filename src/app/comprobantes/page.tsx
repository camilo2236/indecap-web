import RegistrarComprobante from "@/components/RegistrarComprobante";
import { FileCheck } from "lucide-react";

export const metadata = {
  title: "Registrar comprobante de pago — INDECAP",
  description: "Adjunta tu comprobante de pago y nuestro equipo lo verificará en menos de 24 horas.",
};

export default function ComprobantesPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#312783]/30 border border-[#312783]/50 mb-6 mx-auto">
            <FileCheck className="h-8 w-8 text-[#FFD166]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] font-black text-white mb-4">
            Registrar comprobante
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
            Adjunta la foto de tu comprobante de pago y te confirmamos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <RegistrarComprobante />
          <p className="text-center text-sm text-[#9CA3AF] mt-6">
            ¿Prefieres pagar en línea?{" "}
            <a href="/pagos" className="text-[#312783] font-semibold hover:underline">
              Ir a Pagos en línea
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
