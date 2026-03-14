import { Metadata } from "next";

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
  pensum1, pensum2, mercadoTexto, waNum, waText,
  sedes, ctaTitulo, ctaDesc
}: ProgramPageProps) {
  const waUrl = `https://api.whatsapp.com/send?phone=${waNum}&text=${waText}`;

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-dm-sans, sans-serif)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 py-3 lg:px-12"
        style={{ background: "rgba(240,245,252,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(26,92,168,0.1)" }}>
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="INDECAP" className="h-10" />
        </a>
        <a href="/#programas" className="text-sm font-medium text-gray-500 hover:text-gray-800">
          ← Todos los programas
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: accent }}>
          💬 Inscribirme ahora
        </a>
      </nav>

      {/* HERO */}
      <div className="grid min-h-screen pt-16 lg:grid-cols-[55%_45%]">
        {/* Foto */}
        <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fotoSrc} alt={fotoAlt}
            className="h-full w-full object-cover object-top" style={{ minHeight: 400 }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(13,26,42,0.15), transparent 60%), linear-gradient(to top, rgba(13,26,42,0.55), transparent 50%)" }} />
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-5 shadow-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Título obtenido</div>
            <div className="mt-1 font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair, serif)" }}>{titulo}</div>
            <div className="mt-1 text-xs font-semibold" style={{ color: accent }}>Calidad Educativa Certificada ✓</div>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-14" style={{ background: "#F0F5FC" }}>
          <div className="mb-6 w-fit rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ background: `${accent}15`, color: accent, borderColor: `${accent}30` }}>
            ✦ {escuela} · INDECAP
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(2.2rem,3.5vw,3.4rem)", fontWeight: 900, lineHeight: 1.08, color: "#0D1B2A" }}>
            {subtitulo}<br />y <em style={{ color: accent, fontStyle: "italic" }}>{emWord}</em>
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-gray-500" style={{ maxWidth: 440 }}>
            {descripcion}
          </p>
          <div className="mt-8 flex gap-6">
            {[{ num: horas, label: "Horas de formación" }, { num: semestres, label: "Semestres" }, { num: sedesNum, label: "Sedes" }].map((s) => (
              <div key={s.label} className="border-l-4 pl-4" style={{ borderColor: "#F0A500" }}>
                <div style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                <div className="mt-1 text-xs font-medium text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-1"
              style={{ backgroundColor: accent, boxShadow: `0 8px 24px ${accent}40` }}>
              💬 Consultar por WhatsApp
            </a>
            <a href="#pensum" className="rounded-full border-2 px-8 py-4 text-base font-semibold transition-all hover:opacity-70"
              style={{ borderColor: accent, color: accent }}>
              Ver plan de estudios ↓
            </a>
          </div>
        </div>
      </div>

      {/* PERFIL OCUPACIONAL */}
      <section className="grid gap-20 px-10 py-20 lg:grid-cols-2 lg:px-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A 55%, #0a1520 100%)" }}>
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#F0A500" }}>¿Qué vas a aprender?</div>
          <h2 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(1.8rem,2.6vw,2.5rem)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
            Un perfil completo para el sector
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.62)", maxWidth: 540 }}>
            {descripcion}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {capacidades.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                  style={{ borderColor: accent, color: accent, background: `${accent}20` }}>✓</div>
                {c}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.48)" }}>¿Dónde puedes trabajar?</div>
          <div className="grid grid-cols-2 gap-3">
            {salidas.map((s, i) => (
              <div key={i} className="rounded-2xl border p-5 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.09)" }}>
                <div className="mb-2 text-2xl">{s.icon}</div>
                <div className="text-sm font-semibold text-white">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENSUM */}
      <section id="pensum" className="bg-white px-10 py-20 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#F0A500" }}>Plan de Estudios</div>
            <h2 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(1.8rem,2.6vw,2.5rem)", fontWeight: 700, color: "#0D1B2A", lineHeight: 1.2 }}>
              {semestres} semestres para convertirte en profesional
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-gray-500">
              {mercadoTexto}
            </p>
            <div className="mt-8">
              <div className="mb-2 text-sm font-bold text-gray-700">Semestre 1</div>
              <div className="flex flex-col gap-2">
                {pensum1.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition-all hover:translate-x-1"
                    style={{ background: "#F0F5FC" }}>
                    <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    {p}
                  </div>
                ))}
              </div>
              <div className="mb-2 mt-6 text-sm font-bold text-gray-700">Semestre 2</div>
              <div className="flex flex-col gap-2">
                {pensum2.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition-all hover:translate-x-1"
                    style={{ background: "#F0F5FC" }}>
                    <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 rounded-2xl p-6 text-center" style={{ background: "#0D3A6E" }}>
                <div style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "2rem", fontWeight: 700, color: "#FFD166", lineHeight: 1 }}>{horas}</div>
                <div className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Horas totales</div>
              </div>
              <div className="flex-1 rounded-2xl p-6 text-center" style={{ background: `linear-gradient(135deg, ${accentDark}, ${accent})` }}>
                <div style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "2rem", fontWeight: 700, color: "#FFD166", lineHeight: 1 }}>{semestres}</div>
                <div className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Semestres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDES */}
      <section className="px-10 py-20 lg:px-20" style={{ background: "#F0F5FC" }}>
        <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#F0A500" }}>Nuestras Sedes</div>
        <h2 className="mb-10" style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(1.8rem,2.6vw,2.5rem)", fontWeight: 700, color: "#0D1B2A" }}>
          Medellín, Envigado y Caldas te esperan
        </h2>
        <div className="flex flex-col gap-4 lg:max-w-xl">
          {sedes.map((s, i) => (
            <div key={i} className="flex items-center gap-5 rounded-2xl bg-white px-6 py-5 transition-all hover:translate-x-1 hover:shadow-md"
              style={{ borderLeft: `4px solid ${accent}` }}>
              <div className="text-2xl">{s.icon}</div>
              <div>
                <div className="font-bold text-gray-900">{s.name}</div>
                <div className="text-sm text-gray-500">{s.address}</div>
                <div className="mt-1 text-xs font-semibold" style={{ color: accent }}>{s.tag}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-5 rounded-2xl bg-white px-6 py-5" style={{ borderLeft: "4px solid #F0A500" }}>
            <div className="text-2xl">📱</div>
            <div>
              <div className="font-bold text-gray-900">WhatsApp Directo</div>
              <div className="text-sm text-gray-500">Resuelve tus dudas en minutos</div>
              <div className="mt-1 text-xs font-semibold text-[#F0A500]">+57 302 238 9760</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-10 py-24 text-center lg:px-20"
        style={{ background: `linear-gradient(135deg, ${accentDark} 0%, ${accent} 100%)` }}>
        <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FFD166" }}>
          ¿Listo para transformar tu vida?
        </div>
        <h2 className="mx-auto mb-4" style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "clamp(1.8rem,2.6vw,2.5rem)", fontWeight: 700, color: "white", maxWidth: 640 }}>
          {ctaTitulo}
        </h2>
        <p className="mx-auto mb-12 text-base font-light" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480 }}>
          {ctaDesc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="rounded-full px-10 py-5 text-base font-bold text-gray-900 transition-all hover:-translate-y-1"
            style={{ backgroundColor: "#F0A500", boxShadow: "0 8px 24px rgba(240,165,0,0.35)" }}>
            💬 Escribir por WhatsApp ahora
          </a>
          <a href="tel:6044484794"
            className="rounded-full border-2 border-white/40 px-10 py-5 text-base font-semibold text-white transition-all hover:bg-white/10">
            📞 Llamar: (604) 448 4794
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-14 lg:px-20" style={{ background: "#0D1B2A", color: "rgba(255,255,255,0.55)" }}>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="INDECAP" className="mb-4 h-10 brightness-0 invert" />
            <p className="text-sm leading-relaxed" style={{ maxWidth: 280 }}>
              Instituto de Ciencias Aplicadas. Más de 15 años formando técnicos con vocación y excelencia en Antioquia.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Programas</div>
            <div className="flex flex-col gap-2 text-sm">
              {["Auxiliar en Enfermería","Cosmetología y Estética","Servicios Farmacéuticos","Auxiliar en Veterinaria","Salud Oral","Peluquería Canina","Excel + IA"].map((p) => (
                <a key={p} href="/#programas" className="transition-colors hover:text-yellow-400">{p}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Contacto</div>
            <div className="flex flex-col gap-2 text-sm">
              <span>📧 indecap@indecap.edu.co</span>
              <span>📞 (604) 448 4794</span>
              <span>💬 +57 302 238 9760</span>
              <span>📍 Medellín · Envigado · Caldas</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          © 2026 Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas ®
        </div>
      </footer>
    </main>
  );
}
