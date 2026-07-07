"use client";

import { useState } from "react";
import {
  Terminal, ArrowRight, ShieldCheck, Award, BadgeDollarSign,
  Code2, UsersRound, Check, Send, CheckCircle2, MessageCircle,
  Phone, Mail, Info, MapPin,
} from "lucide-react";

// Meta Pixel typing (el pixel ya está cargado en layout.tsx)
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; }
}

const WA_NUMBER = "573022389760"; // WhatsApp Medellín INDECAP

type FormState = {
  nombre: string;
  whatsapp: string;
  correo: string;
  requisitos: string;
  privacidad: boolean;
};

const EMPTY: FormState = {
  nombre: "", whatsapp: "", correo: "", requisitos: "", privacidad: false,
};

export function EstudiaLanding() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [waUrl, setWaUrl] = useState(`https://wa.me/${WA_NUMBER}`);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const tel = form.whatsapp.replace(/\D/g, "");
    if (!form.nombre.trim()) return setError("Escribe tu nombre completo.");
    if (tel.length < 7) return setError("Escribe un número de WhatsApp válido.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) return setError("Escribe un correo válido.");
    if (!form.requisitos) return setError("Indícanos si cumples los requisitos.");
    if (!form.privacidad) return setError("Debes autorizar el tratamiento de datos.");

    setLoading(true);
    try {
      await fetch("/api/estudia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          whatsapp: form.whatsapp,
          correo: form.correo,
          requisitos: form.requisitos,
          fuente: "Landing ESTUD-IA",
        }),
      });

      // Evento de conversión para optimizar tus anuncios de Meta
      window.fbq?.("track", "Lead", { content_name: "ESTUD-IA Sistemas Informáticos" });

      const msg =
        `Hola INDECAP, quiero inscribirme al Técnico GRATIS de Auxiliar en Sistemas Informáticos (ESTUD-IA).%0A%0A` +
        `Nombre: ${encodeURIComponent(form.nombre)}%0A` +
        `WhatsApp: ${encodeURIComponent(form.whatsapp)}%0A` +
        `Correo: ${encodeURIComponent(form.correo)}%0A` +
        `Cumplo requisitos: ${encodeURIComponent(form.requisitos)}`;
      const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
      setWaUrl(url);
      setSuccess(true);
      window.open(url, "_blank");
    } catch {
      // Aunque falle el guardado, dejamos continuar por WhatsApp
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#050B1F] text-slate-200 min-h-screen">
      {/* Fondo con grid tenue */}
      <div
        className="pointer-events-none fixed inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% -20%, #181f33 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-16 md:pt-24 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6 flex-wrap opacity-90 text-sm">
              <span className="font-semibold text-white">INDECAP</span>
              <span className="w-px h-4 bg-slate-600" />
              <span className="text-slate-400">SAPIENCIA</span>
              <span className="w-px h-4 bg-slate-600" />
              <span className="text-slate-400">Alcaldía de Medellín</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-3 py-1 rounded-full border border-[var(--indecap-blue)]/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dbe9] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dbe9]" />
              </span>
              <span className="text-[#00dbe9] uppercase tracking-widest text-xs font-medium font-mono">
                ¡Inició la convocatoria ESTUD-IA!
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-none text-white mb-4">
              ESTUDIA <span className="text-[#2E7BFF]">GRATIS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">
              Técnico Laboral<br />
              <span className="text-[#00dbe9]">Auxiliar en Sistemas Informáticos</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-md">
              Prepárate para trabajar en uno de los sectores con{" "}
              <span className="text-white font-semibold">mayor demanda laboral</span>. Beca del 100% de la
              Alcaldía de Medellín y Sapiencia.
            </p>

            <a
              href="#registro"
              className="inline-flex items-center gap-3 bg-[#2E7BFF] text-white font-semibold text-lg py-4 px-8 rounded-lg transition-transform active:scale-95 hover:shadow-[0_0_28px_rgba(46,123,255,0.6)]"
            >
              Quiero mi cupo <ArrowRight size={22} />
            </a>
            <p className="mt-4 text-sm text-slate-400 flex items-center gap-2">
              <ShieldCheck size={16} /> Programa 100% gratuito · Cupos limitados
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--indecap-blue)]/30 to-[#00dbe9]/10 rounded-2xl blur-3xl -rotate-6 scale-105" />
            <div className="relative rounded-2xl border border-[var(--indecap-blue)]/40 bg-white/5 backdrop-blur p-2">
              <img
                src="/images/estudia/estudia-hero.jpg"
                alt="Convocatoria ESTUD-IA: Estudia gratis Auxiliar en Sistemas Informáticos con INDECAP"
                className="w-full h-auto rounded-xl object-cover aspect-square"
              />
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-[var(--indecap-blue)]/40 bg-[#0c1227]/90 backdrop-blur px-4 py-3 shadow-2xl">
                <div className="bg-[var(--indecap-blue)]/30 p-2 rounded text-[#00dbe9]">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">40 años</p>
                  <p className="text-[#00dbe9] text-xs">+35.000 egresados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-16">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-14">
            ¿Qué vas a <span className="text-[#2E7BFF]">lograr?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Certificación oficial", desc: "Título como Técnico Laboral, respaldado por INDECAP, institución certificada por ICONTEC." },
              { icon: BadgeDollarSign, title: "Beca 100%", desc: "Estudias totalmente gratis gracias al convenio con la Alcaldía de Medellín y Sapiencia." },
              { icon: Code2, title: "Empleo en TI", desc: "Habilidades digitales entre las más demandadas de la industria 4.0 en Medellín.", highlight: true },
              { icon: UsersRound, title: "Acompañamiento", desc: "Un asesor de INDECAP te guía en la inscripción, la matrícula y todo el proceso." },
            ].map((b, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-2 backdrop-blur ${
                  b.highlight
                    ? "border-[#00dbe9]/30 bg-[#00dbe9]/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <b.icon className={b.highlight ? "text-[#00dbe9]" : "text-[#00dbe9]"} size={36} />
                <h3 className={`mt-6 mb-3 text-xl font-semibold ${b.highlight ? "text-[#00dbe9]" : "text-white"}`}>
                  {b.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUÉ VAS A APRENDER */}
        <section id="aprender" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="/images/estudia/estudia-programa.jpg"
              alt="Técnico Laboral Auxiliar en Sistemas Informáticos: fórmate sin costo"
              className="w-full h-auto rounded-2xl object-cover border border-white/10"
            />
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00dbe9] mb-3">Fórmate sin costo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Qué vas a <span className="text-[#2E7BFF]">aprender?</span>
              </h2>
              <p className="text-slate-300 mb-6">
                En el Técnico Laboral Auxiliar en Sistemas Informáticos aprenderás a:
              </p>
              <ul className="space-y-3">
                {[
                  "Desarrollar soluciones tecnológicas para necesidades reales.",
                  "Gestionar y organizar información de forma segura.",
                  "Dar soporte técnico a equipos y sistemas informáticos.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#2E7BFF]/20 border border-[#2E7BFF]">
                      <Check size={14} className="text-[#2E7BFF]" />
                    </span>
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-400">
                Modalidad diurna, de lunes a viernes. Al terminar te certificas como técnico laboral.
              </p>
            </div>
          </div>
        </section>

        {/* REQUISITOS */}
        <section id="requisitos" className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#2E7BFF] mb-6">
                  ¿Cumples los <br /><span className="text-white">requisitos?</span>
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  Verifica si aplicas para esta beca del 100%. Son solo tres condiciones:
                </p>
                <img
                  src="/images/estudia/estudia-requisitos.jpg"
                  alt="¿Quiénes pueden participar en ESTUD-IA? Requisitos de la convocatoria"
                  className="w-full h-auto rounded-xl object-cover aspect-square border border-white/10"
                />
              </div>
              <div className="space-y-4">
                {[
                  <>Haber nacido en Medellín o residir en la ciudad hace mínimo <b className="text-white">1 año</b> (comprobable con recibo de servicios públicos).</>,
                  <>Tener aprobado como mínimo <b className="text-white">9° grado</b> de bachillerato, o ser bachiller.</>,
                  <>Ser <b className="text-white">mayor de 15 años</b> al momento de la inscripción.</>,
                ].map((txt, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg bg-[#050B1F]/60 border border-white/10 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#00dbe9]/20 border border-[#00dbe9]">
                      <Check size={14} className="text-[#00dbe9]" />
                    </span>
                    <span className="text-slate-200 text-sm">{txt}</span>
                  </div>
                ))}

                <div className="mt-6 rounded-lg bg-[#050B1F]/60 border border-white/10 p-5">
                  <p className="text-xs font-mono uppercase tracking-wide text-[#00dbe9] mb-3">Documentos que necesitas (PDF, máx 10 MB)</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-[#00dbe9]">›</span> Documento de identidad. Si eres menor: tarjeta de identidad + cédula del tutor.</li>
                    <li className="flex gap-2"><span className="text-[#00dbe9]">›</span> Certificado de aprobación de 9° grado o diploma de bachiller.</li>
                    <li className="flex gap-2"><span className="text-[#00dbe9]">›</span> Cuenta de servicios públicos de Medellín.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <a href="#registro" className="inline-flex items-center gap-2 rounded-lg border border-[#2E7BFF] text-[#2E7BFF] font-mono uppercase tracking-wider text-sm px-8 py-3 hover:bg-[#2E7BFF]/10 transition-colors">
                Sí cumplo, quiero inscribirme
              </a>
            </div>
          </div>
        </section>

        {/* PASO A PASO OFICIAL (Sapiencia) */}
        <section id="pasos" className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <img
                src="/images/estudia/estudia-pasos.jpg"
                alt="Paso a paso para inscribirte en la convocatoria ESTUD-IA en el portal de Sapiencia"
                className="w-full h-auto rounded-xl object-cover border border-white/10"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Así te inscribes en <span className="text-[#00dbe9]">Sapiencia</span>
                </h2>
                <p className="text-slate-300 mb-6">
                  El registro oficial se hace en el portal de fondos de Sapiencia. Un asesor de INDECAP te acompaña en cada paso:
                </p>
                <ol className="space-y-3 text-sm text-slate-200">
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7BFF]/20 border border-[#2E7BFF] text-[#2E7BFF] text-xs font-bold">1</span> Ingresa a <b className="text-white">fondos.sapiencia.gov.co</b> y entra a la pestaña "Conoce la oferta".</li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7BFF]/20 border border-[#2E7BFF] text-[#2E7BFF] text-xs font-bold">2</span> Dirígete a "Inscripciones" y revisa los requisitos.</li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7BFF]/20 border border-[#2E7BFF] text-[#2E7BFF] text-xs font-bold">3</span> Diligencia el formulario y carga los documentos solicitados.</li>
                </ol>
                <a href="https://fondos.sapiencia.gov.co" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-[#00dbe9] underline underline-offset-2 hover:text-white text-sm">
                  Ir al portal oficial de Sapiencia <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="py-16">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-3">Cómo funciona el proceso</h2>
          <p className="text-center text-[#00dbe9] text-lg mb-14">INDECAP te acompaña en cada paso</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { n: "1", title: "Déjanos tus datos", desc: "Completa el formulario. Un asesor de INDECAP te contacta, valida tus requisitos y te guía en la inscripción oficial en Sapiencia.", cyan: false },
              { n: "2", title: "Formaliza tu matrícula", desc: "Formalizas la matrícula con INDECAP como entidad tutora. Solo así se asegura tu cupo y tu beca.", cyan: true },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center">
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${p.cyan ? "border border-[#00dbe9] bg-[#00dbe9]/10 text-[#00dbe9]" : "border border-[var(--indecap-blue)] bg-[var(--indecap-blue)]/20 text-[#b0c6ff]"}`}>
                  {p.n}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center max-w-2xl mx-auto mt-10 text-sm text-slate-400">
            <Info size={14} className="inline align-middle text-[#00dbe9] mr-1" />
            El registro en el portal de Sapiencia es obligatorio para acceder a la beca. INDECAP te acompaña en todo el proceso.{" "}
            <a href="https://fondos.sapiencia.gov.co" target="_blank" rel="noopener" className="text-[#00dbe9] underline underline-offset-2 hover:text-white">
              Portal de inscripción
            </a>.
          </p>
        </section>

        {/* REGISTRO */}
        <section id="registro" className="py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--indecap-blue)]/50 bg-white/5 backdrop-blur p-8 md:p-12 shadow-[0_0_40px_rgba(46,123,255,0.1)]">
            {!success ? (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#2E7BFF] mb-2">Reserva tu cupo</h2>
                  <p className="text-slate-300">Déjanos tus datos y un asesor de INDECAP te contacta hoy mismo.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">Nombre completo *</label>
                      <input
                        value={form.nombre} onChange={(e) => update("nombre", e.target.value)}
                        placeholder="Tu nombre" type="text"
                        className="w-full rounded-lg border border-white/15 bg-[#050B1F] px-4 py-3 text-white outline-none focus:border-[#00dbe9] focus:ring-1 focus:ring-[#00dbe9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">WhatsApp *</label>
                      <input
                        value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)}
                        placeholder="Ej: 300 123 4567" type="tel" inputMode="tel"
                        className="w-full rounded-lg border border-white/15 bg-[#050B1F] px-4 py-3 text-white outline-none focus:border-[#00dbe9] focus:ring-1 focus:ring-[#00dbe9]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">Correo electrónico *</label>
                    <input
                      value={form.correo} onChange={(e) => update("correo", e.target.value)}
                      placeholder="tu@correo.com" type="email"
                      className="w-full rounded-lg border border-white/15 bg-[#050B1F] px-4 py-3 text-white outline-none focus:border-[#00dbe9] focus:ring-1 focus:ring-[#00dbe9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">¿Cumples con los requisitos? *</label>
                    <select
                      value={form.requisitos} onChange={(e) => update("requisitos", e.target.value)}
                      className="w-full appearance-none rounded-lg border border-white/15 bg-[#050B1F] px-4 py-3 text-white outline-none focus:border-[#00dbe9] focus:ring-1 focus:ring-[#00dbe9]"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Sí, cumplo todos">Sí, cumplo todos los requisitos</option>
                      <option value="No estoy seguro">No estoy seguro / me falta alguno</option>
                    </select>
                  </div>
                  <label className="flex items-start gap-3 text-sm text-slate-400">
                    <input
                      type="checkbox" checked={form.privacidad}
                      onChange={(e) => update("privacidad", e.target.checked)}
                      className="mt-1 rounded border-white/20 bg-[#050B1F] text-[#2E7BFF] focus:ring-[#2E7BFF]"
                    />
                    <span>
                      Autorizo a INDECAP el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y su{" "}
                      <a href="/privacy-policy" className="text-[#00dbe9] underline underline-offset-2">política de tratamiento de datos</a>, para ser contactado sobre este programa.
                    </span>
                  </label>

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <button
                    type="submit" disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2E7BFF] py-4 text-lg font-semibold text-white transition-transform active:scale-95 hover:shadow-[0_0_28px_rgba(46,123,255,0.6)] disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : <>Enviar y reservar mi cupo <Send size={18} /></>}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Al enviar, se abrirá WhatsApp para confirmar tu registro con un asesor.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#25D366] bg-[#25D366]/15">
                  <CheckCircle2 size={40} className="text-[#25D366]" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">¡Listo! Tu registro fue enviado</h2>
                <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
                  Un asesor de INDECAP te contactará muy pronto. Si WhatsApp no se abrió automáticamente, escríbenos directo:
                </p>
                <a href={waUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-transform active:scale-95 hover:shadow-[0_0_28px_rgba(37,211,102,0.6)]">
                  <MessageCircle size={20} /> Escríbenos por WhatsApp
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CONTACTO */}
        <section className="py-16">
          <h2 className="text-center text-2xl font-semibold text-white mb-10">¿Prefieres hablar directo con nosotros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20info%20del%20t%C3%A9cnico%20GRATIS%20de%20Sistemas%20Inform%C3%A1ticos`} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:-translate-y-1 transition-transform">
              <MessageCircle size={28} className="text-[#25D366]" />
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">WhatsApp Medellín</p>
                <p className="text-white">+57 302 238 9760</p>
              </div>
            </a>
            <a href="tel:+576044484794" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:-translate-y-1 transition-transform">
              <Phone size={28} className="text-[#00dbe9]" />
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Teléfono</p>
                <p className="text-white">(604) 448 4794</p>
              </div>
            </a>
            <a href="mailto:indecap@indecap.edu.co" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:-translate-y-1 transition-transform">
              <Mail size={28} className="text-[#00dbe9]" />
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Correo</p>
                <p className="text-white break-all">indecap@indecap.edu.co</p>
              </div>
            </a>
          </div>
          <p className="text-center text-sm text-slate-500 mt-10 flex flex-col items-center gap-1">
            <span className="flex items-center gap-2"><MapPin size={14} /> Sede Medellín: Cl. 56 # 45-26 (cerca al Metro Prado)</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Sede Envigado: Cl. 37 Sur #43A-84</span>
          </p>
        </section>

      </div>
    </main>
  );
}
