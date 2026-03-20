import { MessageCircle, Clock, MapPin, Briefcase, GraduationCap, CheckCircle, Phone } from "lucide-react";

export interface ProgramPageProps {
  titulo: string;
  subtitulo: string;
  emWord: string;
  accent: string;
  accentDark: string;
  escuela: string;
  horas: string;
  semestres: string;
  sedesNum: string;
  fotoAlt: string;
  fotoSrc: string;
  descripcion: string;
  capacidades: string[];
  salidas: { icon: string; name: string }[];
  pensum1: string[];
  pensum2: string[];
  pensum3?: string[]; // 🔥 NUEVO: Tercer semestre opcional
  mercadoTexto: string;
  waNum: string;
  waText: string;
  sedes: { icon: string; name: string; address: string; tag: string }[];
  ctaTitulo: string;
  ctaDesc: string;
}

export function ProgramPage({
  titulo, subtitulo, emWord, accent, accentDark,
  escuela, horas, semestres, sedesNum,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas,
  pensum1, pensum2, pensum3, mercadoTexto, waNum, waText,
  sedes, ctaTitulo, ctaDesc
}: ProgramPageProps) {
  const waUrl = `https://api.whatsapp.com/send?phone=${waNum}&text=${encodeURIComponent(waText)}`;

  return (
    <main className="min-h-screen pb-20 lg:pb-0" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>

      {/* HERO */}
      <div className="grid min-h-screen pt-16 lg:grid-cols-[55%_45%]">
        <div className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
          <img src={fotoSrc} alt={fotoAlt} className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(13,26,42,0.2), transparent 70%), linear-gradient(to top, rgba(13,26,42,0.8), transparent 60%)" }} />
          
          <div className="absolute bottom-8 left-6 right-6 rounded-[24px] bg-white/95 p-6 shadow-2xl backdrop-blur-md lg:left-12 lg:right-auto">
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-500">Título obtenido</div>
            <div className="mt-1 text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair, serif)" }}>{titulo}</div>
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold" style={{ color: accent }}>
              <CheckCircle className="h-4 w-4" />
              Calidad Educativa Certificada
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-[#F8FAFC] px-8 py-16 lg:px-16">
          <div className="mb-6 w-fit rounded-full border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest shadow-sm"
            style={{ background: `${accent}10`, color: accent, borderColor: `${accent}20` }}>
            ✦ {escuela} · INDECAP
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 900, lineHeight: 1.05, color: "#080F14" }}>
            {subtitulo} <br />
            <em className="font-style: italic" style={{ color: accent }}>{emWord}</em>
          </h1>
          <p className="mt-6 max-w-[480px] text-lg font-light leading-relaxed text-gray-500">
            {descripcion}
          </p>
          
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
            {[
              { num: horas, label: "Horas totales", icon: <Clock className="mb-2 h-5 w-5" style={{ color: accent }} /> },
              { num: semestres, label: "Semestres", icon: <GraduationCap className="mb-2 h-5 w-5" style={{ color: accent }} /> },
              { num: sedesNum, label: "Sedes", icon: <MapPin className="mb-2 h-5 w-5" style={{ color: accent }} /> }
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                {s.icon}
                <div style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "1.7rem", fontWeight: 700, lineHeight: 1, color: "#080F14" }}>{s.num}</div>
                <div className="mt-1 text-xs font-medium text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: accent, boxShadow: `0 10px 25px ${accent}40` }}>
              <MessageCircle className="h-5 w-5" />
              Consultar programa
            </a>
            <a href="#pensum" className="flex items-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:bg-gray-50"
              style={{ borderColor: `${accent}30`, color: accent }}>
              Ver plan de estudios
            </a>
          </div>
        </div>
      </div>

      {/* PERFIL OCUPACIONAL */}
      <section className="grid gap-16 px-8 py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-24"
        style={{ background: "linear-gradient(135deg, #080F14 0%, #111827 100%)" }}>
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F0A500]">¿Qué vas a aprender?</div>
          <h2 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 700, color: "white", lineHeight: 1.1 }}>
            Un perfil completo y <br className="hidden lg:block"/> enfocado al sector
          </h2>
          <div className="mt-10 flex flex-col gap-4">
            {capacidades.map((c, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm leading-relaxed text-white/80 transition-colors hover:bg-white/10">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: accent }} />
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50">
            <Briefcase className="h-4 w-4" />
            ¿Dónde puedes trabajar?
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {salidas.map((s, i) => (
              <div key={i} className="group rounded-[20px] border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                <div className="mb-4 text-3xl opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100">{s.icon}</div>
                <div className="text-sm font-semibold text-white/90">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENSUM */}
      <section id="pensum" className="bg-[#F8FAFC] px-8 py-24 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#F0A500]">Plan de Estudios</div>
          <h2 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 700, color: "#080F14", lineHeight: 1.2 }}>
            {semestres} semestres para convertirte en profesional
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-gray-500">
            {mercadoTexto}
          </p>
        </div>

        {/* 🔥 Magia dinámica: Si hay pensum3 usamos 3 columnas, si no, 2 columnas */}
        <div className={`mx-auto mt-16 grid max-w-6xl gap-8 ${pensum3 && pensum3.length > 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          
          {/* Semestre 1 */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: accent }}>1</div>
              <h3 className="text-xl font-bold text-gray-900">Primer Semestre</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {pensum1.map((p, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Semestre 2 */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: accentDark }}>2</div>
              <h3 className="text-xl font-bold text-gray-900">Segundo Semestre</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {pensum2.map((p, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accentDark }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Semestre 3 (Condicional) */}
          {pensum3 && pensum3.length > 0 && (
            <div className="rounded-[24px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: accent }}>3</div>
                <h3 className="text-xl font-bold text-gray-900">Tercer Semestre</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {pensum3.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </section>

      {/* CTA FINAL DE PÁGINA */}
      <section className="px-8 py-24 text-center lg:px-24"
        style={{ background: `linear-gradient(135deg, ${accentDark} 0%, ${accent} 100%)` }}>
        <h2 className="mx-auto mb-6 max-w-[700px] font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,3vw,3.5rem)] font-bold leading-[1.1] text-white">
          {ctaTitulo}
        </h2>
        <p className="mx-auto mb-12 max-w-[540px] text-lg font-light text-white/80">
          {ctaDesc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-10 py-4 text-sm font-bold text-gray-900 transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: "#F0A500", boxShadow: "0 10px 30px rgba(240,165,0,0.3)" }}>
            <MessageCircle className="h-5 w-5" />
            Hablar con un asesor
          </a>
          <a href="tel:6044484794"
            className="flex items-center gap-2 rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10">
            <Phone className="h-4 w-4" />
            Llamar: (604) 448 4794
          </a>
        </div>
      </section>

      {/* STICKY CTA MÓVIL (Magia CRO) */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white/95 p-4 shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden">
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-transform active:scale-95"
          style={{ backgroundColor: accent }}>
          <MessageCircle className="h-5 w-5" />
          Hablar con un asesor
        </a>
      </div>

    </main>
  );
}