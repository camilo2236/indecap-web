import { Quote, GraduationCap } from "lucide-react";
import { testimoniosPorPrograma } from "@/data/testimoniosPorPrograma";

interface Props {
  programaId: string;
  accent: string;
}

export function MiniTestimonio({ programaId, accent }: Props) {
  const testimonio = testimoniosPorPrograma[programaId];
  if (!testimonio) return null;

  return (
    <div>
      <h2 className="text-4xl font-black mb-10 text-white">Nuestros egresados</h2>

      {/* Cita principal */}
      <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 relative mb-6">
        <Quote className="absolute top-6 right-6 h-10 w-10 opacity-10" style={{ color: accent }} />
        <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white leading-relaxed mb-6">
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
            <p className="text-white font-semibold text-sm">{testimonio.nombre}</p>
            <p className="text-white/40 text-xs">Egresado/a · {testimonio.programa} · INDECAP</p>
          </div>
        </div>
      </div>

      {/* Lista de egresados */}
      {testimonio.egresados && testimonio.egresados.length > 0 && (
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5" style={{ color: accent }} />
            <h3 className="text-lg font-black text-white">También se graduaron</h3>
          </div>
          <div className="space-y-3">
            {testimonio.egresados.map((nombre, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: `${accent}33` }}
                >
                  {nombre.charAt(0)}
                </div>
                <p className="text-white/80 text-sm font-medium">{nombre}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
