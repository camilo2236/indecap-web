import { Quote } from "lucide-react";
import { testimoniosPorPrograma } from "@/data/testimoniosPorPrograma";

interface Props {
  programaId: string;
  accent: string;
}

export function MiniTestimonio({ programaId, accent }: Props) {
  const testimonio = testimoniosPorPrograma[programaId];
  if (!testimonio) return null;

  return (
    <section className="py-16 bg-zinc-950 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 lg:p-10 relative">
          <Quote
            className="absolute top-6 right-8 h-12 w-12 opacity-10"
            style={{ color: accent }}
          />
          <p className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-bold text-white leading-relaxed mb-6">
            "{testimonio.texto}"
          </p>
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
              style={{ backgroundColor: accent }}
            >
              {testimonio.nombre.charAt(0)}
            </div>
            <div>
              <p className="text-white font-semibold text-sm font-[family-name:var(--font-dm-sans)]">
                {testimonio.nombre}
              </p>
              <p className="text-white/40 text-xs font-[family-name:var(--font-dm-sans)]">
                Egresado/a · {testimonio.programa} · INDECAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
