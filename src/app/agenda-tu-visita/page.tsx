"use client";
// src/app/agenda-tu-visita/page.tsx
// La persona escoge sede, programa, día y jornada para conocer la sede.
// Se guarda como cualquier lead (Supabase CRM + correo) por /api/captacion,
// con la visita en el campo "fuente". Al final puede confirmar por WhatsApp
// con el número de su sede, y ese chat le llega al equipo con todos los datos.

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle, Loader2, MapPin, Sun, Sunset, MessageCircle, CalendarDays } from "lucide-react";
import { SEDES } from "@/lib/geo-data";
import { programs } from "@/data/programs";
import { track, getOrigen } from "@/lib/track";

type SedeId = "medellin" | "envigado" | "caldas";
type Franja = "mañana" | "tarde";
type Estado = "idle" | "loading" | "success" | "error";

// Días en que no se agendan visitas (festivos de Colombia).
// Si la sede cierra algún día adicional (vacaciones de diciembre, por ejemplo), agréguelo aquí.
const NO_HABILES = new Set([
  "2026-11-16", "2026-12-08", "2026-12-25",
  "2027-01-01", "2027-01-11", "2027-03-22", "2027-03-25", "2027-03-26",
]);

const DIAS_A_MOSTRAR = 6;

type Dia = { iso: string; corto: string; largo: string };

function proximosDias(): Dia[] {
  const dias: Dia[] = [];
  // Fecha de hoy en Colombia
  const hoy = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
  const d = new Date(hoy);
  d.setDate(d.getDate() + 1); // desde mañana
  while (dias.length < DIAS_A_MOSTRAR) {
    const dow = d.getDay(); // 0 domingo, 6 sábado
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (dow !== 0 && dow !== 6 && !NO_HABILES.has(iso)) {
      dias.push({
        iso,
        corto: d.toLocaleDateString("es-CO", { weekday: "short", day: "numeric" }).replace(".", ""),
        largo: d.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return dias;
}

const mapa = (direccion: string, ciudad: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`INDECAP ${direccion}, ${ciudad}`)}`;

export default function AgendaTuVisitaPage() {
  const [dias, setDias] = useState<Dia[]>([]);
  const [sede, setSede] = useState<SedeId | "">("");
  const [programa, setPrograma] = useState("");
  const [dia, setDia] = useState<Dia | null>(null);
  const [franja, setFranja] = useState<Franja | "">("");
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [estado, setEstado] = useState<Estado>("idle");
  const tarjeta = useRef<HTMLDivElement>(null);

  // Los días se calculan en el navegador para que siempre sean "desde mañana"
  useEffect(() => {
    setDias(proximosDias());
    // Preselección desde la URL: /agenda-tu-visita?sede=caldas&programa=Auxiliar%20en%20Enfermería
    const q = new URLSearchParams(window.location.search);
    const s = q.get("sede");
    if (s === "medellin" || s === "envigado" || s === "caldas") setSede(s);
    const p = q.get("programa");
    if (p) setPrograma(p);
  }, []);

  const sedeInfo = useMemo(() => SEDES.find((x) => x.id === sede), [sede]);
  const nombreSede = sedeInfo ? sedeInfo.ciudad : "";

  const listo = sede && programa && dia && franja && nombre.trim().length > 2 && celular.replace(/\D/g, "").length >= 10;

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!listo || !dia || !sedeInfo) return;
    setEstado("loading");
    try {
      const res = await fetch("/api/captacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          celular,
          programa,
          sede: nombreSede,
          fuente: `Agenda tu visita · ${dia.largo} · en la ${franja}`,
          origen: getOrigen(),
        }),
      });
      if (!res.ok) throw new Error();
      setEstado("success");
      // Llevar a la persona a la confirmación (en el celular quedaba abajo, en el pie de página)
      setTimeout(() => tarjeta.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      track("Lead", { content_name: programa, content_category: `Visita ${nombreSede}` });
    } catch {
      setEstado("error");
    }
  };

  const mensajeWa = sedeInfo && dia
    ? `Hola, soy ${nombre.trim()}. Agendé una visita a la sede ${nombreSede} el ${dia.largo} en la ${franja} para conocer ${programa}.`
    : "";

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">
      {/* ENCABEZADO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-32 pb-16">
          <span className="font-bold text-xs uppercase tracking-[0.3em] mb-4 block" style={{ color: "#ffb21d" }}>Sin compromiso</span>
          <h1 className="font-[family-name:var(--font-playfair)] italic text-5xl md:text-7xl text-white tracking-tight leading-none mb-5">
            Agenda tu visita
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl font-light">
            Ven a conocer los salones, los laboratorios y a los docentes antes de decidir. Escoge la sede, el día y la jornada: te esperamos.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div ref={tarjeta} className="bg-white rounded-2xl shadow-sm border border-[#c8c4d3]/30 p-6 md:p-10 scroll-mt-28">
          {estado === "success" && sedeInfo && dia ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-green-600" aria-hidden="true" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#1a086e] mb-3">
                ¡Listo, {nombre.trim().split(" ")[0]}! Te esperamos
              </h2>
              <p className="text-lg text-[#474551] mb-1">
                El <strong className="text-[#1a086e]">{dia.largo}</strong> en la <strong className="text-[#1a086e]">{franja}</strong>
              </p>
              <p className="text-[#474551] mb-6">
                {sedeInfo.nombre}: {sedeInfo.direccion}. {sedeInfo.referencia}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${sedeInfo.whatsapp}?text=${encodeURIComponent(mensajeWa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-black text-white"
                >
                  <MessageCircle size={20} aria-hidden="true" /> Confirmar por WhatsApp
                </a>
                <a
                  href={mapa(sedeInfo.direccion, sedeInfo.ciudad)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1a086e] px-6 py-4 font-black text-[#1a086e]"
                >
                  <MapPin size={20} aria-hidden="true" /> Cómo llegar
                </a>
              </div>
              <p className="text-sm text-[#787583] mt-6">Si necesitas cambiar el día, escríbenos por WhatsApp y lo acomodamos.</p>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-10">
              {/* 1. SEDE */}
              <fieldset>
                <legend className="font-black text-lg text-[#1a086e] mb-4">1. ¿Qué sede quieres conocer?</legend>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {SEDES.map((s) => {
                    const activa = sede === s.id;
                    return (
                      <label
                        key={s.id}
                        className={`cursor-pointer rounded-2xl border-2 p-5 transition-colors ${activa ? "border-[#1a086e] bg-[#1a086e]/5" : "border-[#c8c4d3]/50 hover:border-[#1a086e]/40"}`}
                      >
                        <input type="radio" name="sede" value={s.id} checked={activa} onChange={() => setSede(s.id as SedeId)} className="sr-only" />
                        <span className="block font-black text-[#1a086e] text-lg">{s.ciudad}</span>
                        <span className="block text-sm text-[#474551] mt-1">{s.direccion}</span>
                        <span className="block text-xs text-[#787583] mt-2 leading-relaxed">{s.referencia}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* 2. PROGRAMA */}
              <div>
                <label htmlFor="programa" className="block font-black text-lg text-[#1a086e] mb-4">2. ¿Qué programa te interesa?</label>
                <select
                  id="programa"
                  value={programa}
                  onChange={(e) => setPrograma(e.target.value)}
                  required
                  className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] outline-none focus:ring-2 focus:ring-[#1a086e]/20"
                >
                  <option value="">Selecciona un programa</option>
                  {programs.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Aún no sé, quiero orientación">Aún no sé, quiero orientación</option>
                </select>
              </div>

              {/* 3. DÍA Y JORNADA */}
              <fieldset>
                <legend className="font-black text-lg text-[#1a086e] mb-4">3. ¿Qué día y en qué jornada?</legend>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                  {dias.map((d) => {
                    const activo = dia?.iso === d.iso;
                    return (
                      <button
                        type="button"
                        key={d.iso}
                        onClick={() => setDia(d)}
                        aria-pressed={activo}
                        className={`rounded-xl border-2 py-3 px-2 text-center font-bold capitalize min-h-[56px] ${activo ? "border-[#1a086e] bg-[#1a086e] text-white" : "border-[#c8c4d3]/50 text-[#1a086e] hover:border-[#1a086e]/40"}`}
                      >
                        <CalendarDays size={16} className="mx-auto mb-1 opacity-70" aria-hidden="true" />
                        {d.corto}
                      </button>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {([
                    { id: "mañana", icono: Sun },
                    { id: "tarde", icono: Sunset },
                  ] as const).map(({ id, icono: Icono }) => {
                    const activa = franja === id;
                    return (
                      <button
                        type="button"
                        key={id}
                        onClick={() => setFranja(id)}
                        aria-pressed={activa}
                        className={`rounded-xl border-2 py-4 font-black flex items-center justify-center gap-2 min-h-[56px] ${activa ? "border-[#1a086e] bg-[#1a086e] text-white" : "border-[#c8c4d3]/50 text-[#1a086e] hover:border-[#1a086e]/40"}`}
                      >
                        <Icono size={18} aria-hidden="true" /> En la {id}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* 4. DATOS */}
              <fieldset>
                <legend className="font-black text-lg text-[#1a086e] mb-4">4. ¿A quién esperamos?</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Nombre completo</label>
                    <input id="nombre" type="text" autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Laura Gómez" required className="w-full bg-[#eff4f6] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                  </div>
                  <div>
                    <label htmlFor="celular" className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Celular / WhatsApp</label>
                    <input id="celular" type="tel" inputMode="tel" autoComplete="tel" value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="300 000 0000" required className="w-full bg-[#eff4f6] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                  </div>
                </div>
              </fieldset>

              {estado === "error" && (
                <p className="text-sm font-semibold text-red-700" role="alert">
                  No pudimos guardar tu visita. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={!listo || estado === "loading"}
                className="w-full rounded-xl bg-[#1a086e] py-5 font-black text-lg text-white disabled:opacity-40 flex items-center justify-center gap-2"
              >
                {estado === "loading" ? <Loader2 size={20} className="animate-spin" aria-hidden="true" /> : null}
                {estado === "loading" ? "Agendando…" : "Agendar mi visita"}
              </button>
              <p className="text-xs text-center text-[#787583]">
                La visita es gratuita y sin compromiso. Al agendar aceptas nuestra{" "}
                <a href="/privacy-policy" className="underline">política de privacidad</a>.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
