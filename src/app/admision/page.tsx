"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Phone, Mail, MapPin, BookOpen, ArrowRight, GraduationCap } from "lucide-react";

const programasTecnicos = [
  "Auxiliar en Enfermería",
  "Cosmetología y Estética Integral",
  "Auxiliar en Veterinaria",
  "Administrativo en Salud",
  "Servicios Farmacéuticos",
  "Auxiliar en Salud Oral",
  "Salud Pública",
  "Atención al Adulto Mayor",
  "Atención a la Primera Infancia",
  "Talento Humano",
  "Auxiliar Contable y Financiero",
  "Marketing Digital",
  "Seguridad y Salud en el Trabajo (SST)",
  "Entrenamiento Deportivo",
  "Técnico en Sistemas",
  "Auxiliar en Desarrollo de Software",
];

const cursosCortos = [
  "RCP – Reanimación Cardiopulmonar",
  "Primeros Auxilios",
  "Inyectología",
  "Vacunación",
  "Toma de Muestras de Laboratorio",
  "Código Fucsia",
  "Calidad y Humanización",
  "Peluquería y Estética Canina",
  "Excel Básico, Intermedio y Avanzado",
  "Word Básico y Avanzado",
];

export default function AdmisionPage() {
  const [tipo, setTipo] = useState<"tecnico" | "curso">("tecnico");
  const [form, setForm] = useState({ nombre: "", celular: "", correo: "", programa: "", sede: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const programas = tipo === "tecnico" ? programasTecnicos : cursosCortos;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.nombre.trim() || !form.celular.trim() || !form.programa || !form.sede) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/captacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setSuccess(true);
if (typeof window !== "undefined" && window.fbq) {
  window.fbq("track", "Lead", { content_name: form.programa, content_category: form.sede });
}
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg,#0f0c2e 0%,#1a086e 100%)" }}>
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-9 h-9 text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-[#080F14] mb-3" style={{ fontFamily: "Newsreader, serif" }}>
            ¡Listo, te contactamos hoy!
          </h2>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
            Recibimos tu solicitud. Uno de nuestros asesores te llamará en las próximas horas para darte toda la información sobre <strong className="text-[#1a086e]">{form.programa}</strong>.
          </p>
          <p className="text-xs text-[#9CA3AF] mb-6">
            ¿Prefieres hablar ahora mismo?
          </p>
          <a
            href="https://wa.me/573174342783?text=Hola%2C%20acabo%20de%20solicitar%20información%20sobre%20INDECAP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribir por WhatsApp ahora
          </a>
          <a href="/" className="block mt-4 text-xs text-[#9CA3AF] hover:text-[#1a086e] transition-colors">
            Volver al inicio
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "linear-gradient(135deg,#0f0c2e 0%,#1a086e 100%)" }}>
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-bold" style={{ background: "rgba(245,189,101,0.15)", color: "#f5bd65", border: "1px solid rgba(245,189,101,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5bd65] animate-pulse"></span>
            Inscripciones abiertas 2026
          </div>
          <h1 className="text-3xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "Newsreader, serif", letterSpacing: "-0.02em" }}>
            Solicita información<br /><em>gratis y sin compromiso</em>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Cuéntanos qué te interesa. Un asesor te contacta hoy mismo con toda la información que necesitas.
          </p>
        </div>

        {/* Card formulario */}
        <div className="bg-white rounded-3xl p-7 shadow-2xl">

          {/* Tipo selector */}
          <div className="flex rounded-xl overflow-hidden border border-[#e4e9eb] mb-6">
            <button
              type="button"
              onClick={() => { setTipo("tecnico"); setForm(f => ({ ...f, programa: "" })); }}
              className={`flex-1 py-2.5 text-sm font-bold transition-all ${tipo === "tecnico" ? "text-white" : "text-[#6B7280] hover:text-[#1a086e]"}`}
              style={{ background: tipo === "tecnico" ? "#1a086e" : "transparent" }}
            >
              Programas técnicos
            </button>
            <button
              type="button"
              onClick={() => { setTipo("curso"); setForm(f => ({ ...f, programa: "" })); }}
              className={`flex-1 py-2.5 text-sm font-bold transition-all ${tipo === "curso" ? "text-white" : "text-[#6B7280] hover:text-[#1a086e]"}`}
              style={{ background: tipo === "curso" ? "#1a086e" : "transparent" }}
            >
              Cursos cortos
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Nombre */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tu nombre *"
                value={form.nombre}
                onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                className="w-full border border-[#e4e9eb] rounded-xl px-4 py-3 text-sm text-[#080F14] outline-none transition-all placeholder:text-[#9CA3AF] focus:border-[#1a086e] focus:ring-2 focus:ring-[#1a086e]/10"
                maxLength={100}
              />
            </div>

            {/* Celular */}
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
              <input
                type="tel"
                placeholder="Celular *"
                value={form.celular}
                onChange={e => setForm(f => ({ ...f, celular: e.target.value }))}
                className="w-full border border-[#e4e9eb] rounded-xl pl-10 pr-4 py-3 text-sm text-[#080F14] outline-none transition-all placeholder:text-[#9CA3AF] focus:border-[#1a086e] focus:ring-2 focus:ring-[#1a086e]/10"
                maxLength={20}
              />
            </div>

            {/* Correo */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
              <input
                type="email"
                placeholder="Correo electrónico (opcional)"
                value={form.correo}
                onChange={e => setForm(f => ({ ...f, correo: e.target.value }))}
                className="w-full border border-[#e4e9eb] rounded-xl pl-10 pr-4 py-3 text-sm text-[#080F14] outline-none transition-all placeholder:text-[#9CA3AF] focus:border-[#1a086e] focus:ring-2 focus:ring-[#1a086e]/10"
                maxLength={100}
              />
            </div>

            {/* Programa */}
            <div className="relative">
              <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
              <select
                value={form.programa}
                onChange={e => setForm(f => ({ ...f, programa: e.target.value }))}
                className="w-full border border-[#e4e9eb] rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-all appearance-none bg-white focus:border-[#1a086e] focus:ring-2 focus:ring-[#1a086e]/10"
                style={{ color: form.programa ? "#080F14" : "#9CA3AF" }}
              >
                <option value="" disabled>Programa de interés *</option>
                {programas.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* Sede */}
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
              <select
                value={form.sede}
                onChange={e => setForm(f => ({ ...f, sede: e.target.value }))}
                className="w-full border border-[#e4e9eb] rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-all appearance-none bg-white focus:border-[#1a086e] focus:ring-2 focus:ring-[#1a086e]/10"
                style={{ color: form.sede ? "#080F14" : "#9CA3AF" }}
              >
                <option value="" disabled>Sede más cercana *</option>
                <option value="Medellin">Medellín — Calle 56 #45-26</option>
                <option value="Envigado">Envigado — Cl 37 Sur #43A-84</option>
                <option value="Caldas">Caldas — Calle 130 Sur #51-65</option>
              </select>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-600 text-xs font-medium bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-[#080F14] text-sm transition-all hover:opacity-90 disabled:opacity-60 shadow-lg"
              style={{ background: "#F0A500", boxShadow: "0 4px 20px rgba(240,165,0,0.4)" }}
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
              ) : (
                <><ArrowRight className="h-4 w-4" /> Quiero información gratis</>
              )}
            </button>

            <p className="text-center text-xs text-[#9CA3AF]">
              Tus datos son confidenciales. Solo te contactamos para orientarte.
            </p>
          </form>

          {/* WhatsApp alternativo */}
          <div className="mt-5 pt-5 border-t border-[#f3f4f6] text-center">
            <a
              href="https://wa.me/573174342783?text=Hola%20INDECAP%2C%20quiero%20información%20sobre%20sus%20programas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:opacity-80 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              O escríbenos por WhatsApp →
            </a>
          </div>

          {/* Link formulario completo */}
          <div className="mt-4 text-center">
            <a
              href="/inscripcion"
              className="inline-flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#1a086e] transition-colors"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              ¿Ya decidiste matricularte? → Formulario completo de inscripción
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
          <div className="text-center">
            <p className="text-xl font-black text-white" style={{ fontFamily: "Newsreader, serif" }}>40</p>
            <p className="text-xs text-white/40">Años</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-xl font-black text-white" style={{ fontFamily: "Newsreader, serif" }}>35.000+</p>
            <p className="text-xs text-white/40">Egresados</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-xl font-black text-white" style={{ fontFamily: "Newsreader, serif" }}>71.4%</p>
            <p className="text-xs text-white/40">Empleados</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-xl font-black text-white" style={{ fontFamily: "Newsreader, serif" }}>3</p>
            <p className="text-xs text-white/40">Sedes</p>
          </div>
        </div>
      </div>
    </main>
  );
}
