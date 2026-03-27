"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Loader2, CheckCircle } from "lucide-react";

const sedes = [
  {
    id: "medellin", ciudad: "Medellín", tagline: "Sede Principal",
    address: "Cl. 56 # 45-26, entre Calle El Palo y Carrera Bolivia",
    phone: "(604) 448 4794", whatsapp: "573022389760",
    email: "indecap@indecap.edu.co",
    mapUrl: "https://maps.app.goo.gl/tT3eoj5Yc3KQp17YA",
    image: "/images/sedes/medellin.jpg",
  },
  {
    id: "envigado", ciudad: "Envigado", tagline: "Zona Sur",
    address: "Cl 37 Sur #43A-84, cerca al parque principal",
    phone: "(604) 448 4794", whatsapp: "573174342783",
    email: "sedeenvigado@indecap.edu.co",
    mapUrl: "https://maps.app.goo.gl/3YL91ZWChN7YyRad6",
    image: "/images/sedes/envigado.jpg",
  },
  {
    id: "caldas", ciudad: "Caldas", tagline: "Sur del Valle",
    address: "Calle 130 sur # 51-65, cerca al parque principal",
    phone: "(604) 448 4794", whatsapp: "573008948517",
    email: "indecap@indecap.edu.co",
    mapUrl: "https://maps.app.goo.gl/sYLr8MKC3mvRpvgF8",
    image: "/images/sedes/caldas.jpg",
  },
];

const faqs = [
  { q: "¿Cuáles son los requisitos de admisión?", a: "Necesitas tu documento de identidad, diploma de bachiller (o estar cursando el último grado) y el formulario de inscripción. Para cursos cortos no se requiere diploma." },
  { q: "¿Ofrecen planes de financiamiento?", a: "Sí, contamos con financiación directa con INDECAP. Puedes pagar tu matrícula en cuotas sin intermediarios bancarios." },
  { q: "¿Los programas están avalados oficialmente?", a: "Sí, todos nuestros programas técnicos están avalados por la Secretaría de Educación de Antioquia mediante resolución oficial." },
  { q: "¿Puedo cambiar de sede durante el programa?", a: "Sí, puedes solicitar el traslado de sede siempre que haya disponibilidad en el programa y horario que necesitas." },
];

const programas = [
  "Auxiliar en Enfermería", "Cosmetología y Estética Integral", "Auxiliar en Veterinaria",
  "Administrativo en Salud", "Servicios Farmacéuticos", "Auxiliar en Salud Oral",
  "Salud Pública", "Atención al Adulto Mayor", "Talento Humano",
  "Auxiliar Contable", "Auxiliar en Mercadeo", "SST", "Entrenamiento Deportivo",
  "Sistemas e Informática", "Excel + IA", "Curso / Diplomado",
];

type Estado = "idle" | "loading" | "success" | "error";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", programa: "", mensaje: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("loading");
    try {
      const res = await fetch("/api/inscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombres: form.nombre, correo: form.correo, celular: form.telefono, programa: form.programa, sede: "Por definir" }),
      });
      setEstado(res.ok ? "success" : "error");
    } catch { setEstado("error"); }
  };

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* HERO */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/images/sedes/medellin.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <span className="font-bold text-xs uppercase tracking-[0.3em] mb-4 block" style={{ color: "#ffb21d" }}>Contacto Institucional</span>
          <h1 className="font-[family-name:var(--font-playfair)] italic text-6xl md:text-8xl text-white tracking-tight leading-none mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-white/70 max-w-2xl font-light">
            Estamos listos para guiarte en tu camino profesional. Nuestro equipo de admisiones te brindará toda la información que necesitas.
          </p>
        </div>
      </section>

      {/* FORMULARIO + CANALES */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Formulario */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#c8c4d3]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 bg-[#ffb21d]/10" />
            {estado === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#474551]">Un asesor te contactará pronto.</p>
                <button onClick={() => setEstado("idle")} className="mt-6 text-sm text-[#1a086e] underline underline-offset-4">Enviar otro mensaje</button>
              </div>
            ) : (
              <>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-2 tracking-tight">Inicia tu Proceso</h2>
                <p className="text-[#474551] mb-10">Déjanos tus datos y un asesor se comunicará contigo.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Nombre Completo</label>
                      <input type="text" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="Ej. Juan Pérez" required className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] placeholder:text-[#787583] outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Correo Electrónico</label>
                      <input type="email" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} placeholder="nombre@ejemplo.com" className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] placeholder:text-[#787583] outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Teléfono / WhatsApp</label>
                      <input type="tel" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} placeholder="+57 300 000 0000" required className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] placeholder:text-[#787583] outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Programa de Interés</label>
                      <select value={form.programa} onChange={e => setForm({ ...form, programa: e.target.value })} className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] outline-none appearance-none focus:ring-2 focus:ring-[#1a086e]/20">
                        <option value="">Selecciona una opción</option>
                        {programas.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#787583] mb-2">Mensaje</label>
                    <textarea value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full bg-[#eff4f6] rounded-xl p-4 text-[#171c1e] placeholder:text-[#787583] resize-none outline-none focus:ring-2 focus:ring-[#1a086e]/20" />
                  </div>
                  {estado === "error" && <p className="text-red-500 text-sm text-center">Hubo un error. Por favor intenta de nuevo.</p>}
                  <button type="submit" disabled={estado === "loading"} className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm text-white hover:opacity-90 transition-all shadow-xl disabled:opacity-60 flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
                    {estado === "loading" ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : "Enviar Mensaje"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Canales + FAQ */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="bg-[#eaeff1] p-8 rounded-2xl">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a086e] mb-6 tracking-tight">Canales Directos</h3>
              <div className="space-y-3">
                {[
                  { href: "https://wa.me/573022389760", label: "WhatsApp Medellín", value: "+57 302 238 9760", icon: <MessageCircle size={20} className="text-green-600" />, bg: "bg-green-100" },
                  { href: "mailto:indecap@indecap.edu.co", label: "Correo", value: "indecap@indecap.edu.co", icon: <Mail size={20} style={{ color: "#1a086e" }} />, bg: "bg-[#1a086e]/10" },
                  { href: "tel:6044484794", label: "Teléfono", value: "(604) 448 4794", icon: <Phone size={20} style={{ color: "#1a086e" }} />, bg: "bg-[#1a086e]/10" },
                ].map(({ href, label, value, icon, bg }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-white/80 transition-colors group">
                    <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>{icon}</div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-[#787583]">{label}</span>
                      <span className="font-semibold text-[#1a086e] group-hover:text-[#805600] transition-colors">{value}</span>
                    </div>
                  </a>
                ))}
                <div className="flex gap-3 pt-2">
                  {[
                    { href: "https://www.instagram.com/instindecap/", label: "Instagram" },
                    { href: "https://www.facebook.com/indecapedu/", label: "Facebook" },
                    { href: "https://www.youtube.com/@CorporacionEducativaINDECAP", label: "YouTube" },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-3 bg-white rounded-xl hover:bg-white/80 transition-colors text-xs font-bold uppercase text-[#474551]">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a086e] tracking-tight">Preguntas Frecuentes</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-[#eff4f6] rounded-xl overflow-hidden">
                    <button onClick={() => setFaqAbierta(faqAbierta === i ? null : i)} className="w-full p-4 flex justify-between items-center text-left font-semibold text-sm text-[#171c1e]">
                      {faq.q}
                      <ChevronDown size={16} className={`text-[#787583] transition-transform shrink-0 ml-2 ${faqAbierta === i ? "rotate-180" : ""}`} />
                    </button>
                    {faqAbierta === i && <div className="px-4 pb-4 text-sm text-[#474551] leading-relaxed">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDES */}
      <section className="py-24 bg-[#eaeff1]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block text-[#805600]">Sedes Físicas</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] tracking-tight">
                Nuestros <em className="italic">Campus</em>
              </h2>
            </div>
            <p className="text-[#474551] max-w-sm">Instalaciones modernas en puntos estratégicos del Valle de Aburrá.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sedes.map((sede) => (
              <div key={sede.id} className="bg-white rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform group shadow-sm">
                <div className="h-56 relative bg-[#eaeff1] overflow-hidden">
                  <img src={sede.image} alt={sede.ciudad} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#1a086e]/10" />
                  <div className="absolute top-4 left-4 bg-[#1a086e] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{sede.tagline}</div>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <h4 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] italic tracking-tight">{sede.ciudad}</h4>
                  <div className="space-y-3 text-[#474551] text-sm">
                    <div className="flex items-start gap-3"><MapPin size={16} className="shrink-0 mt-0.5 text-[#805600]" /><span>{sede.address}</span></div>
                    <div className="flex items-center gap-3"><Phone size={16} className="shrink-0 text-[#805600]" /><span>{sede.phone}</span></div>
                    <div className="flex items-center gap-3"><Mail size={16} className="shrink-0 text-[#805600]" /><span>{sede.email}</span></div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href={sede.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border-2 border-[#1a086e] text-[#1a086e] hover:bg-[#1a086e] hover:text-white transition-colors">
                      Ver mapa <ArrowRight size={14} />
                    </a>
                    <a href={`https://wa.me/${sede.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366]">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGOS */}
      <section className="py-16 px-8 max-w-7xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-10 border border-[#c8c4d3]/20 shadow-sm inline-block">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-3 tracking-tight">¿Necesitas pagar en línea?</h3>
          <p className="text-[#474551] mb-6">Realiza tu pago de matrícula de forma segura a través de Aval Pay.</p>
          <a href="/pagos" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#281800] hover:scale-105 transition-transform shadow-lg bg-[#ffb21d]">
            💳 Ir a Pagos en línea <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}