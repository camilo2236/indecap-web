import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Clock, Building2, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sede Envigado | INDECAP – Cerca al Parque Principal de Envigado",
  description: "INDECAP Sede Envigado. Cl 37 Sur #43A-84, cerca al parque principal. 1.446 m², 8 aulas, sala de cómputo. Programas técnicos y bachillerato privado.",
  openGraph: {
    images: [{ url: "/images/sedes/og-sede-envigado.jpg", width: 1200, height: 630 }],
  },
};

export default function SedesEnvigadoPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #1a086e 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/sedes/envigado.jpg" alt="Sede Envigado INDECAP" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
              ✦ Zona Sur
            </span>
            <span className="text-white/50 text-sm">En el corazón de Envigado</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Sede<br /><em className="italic" style={{ color: "#ffb21d" }}>Envigado</em>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            A pasos del Parque Cultural Débora Arango y la iglesia principal de Envigado. Zona comercial, acceso por la Avenida El Poblado y excelentes rutas de transporte.
          </p>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-16">
        <div className="bg-white grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: Building2,     label: "Área",       value: "1.446 m²" },
            { icon: GraduationCap, label: "Aulas",      value: "8 aulas" },
            { icon: Users,         label: "Egresados",  value: "10.000+" },
            { icon: Building2,     label: "Acceso",     value: "Metro + bus" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A3A6B10] flex items-center justify-center shrink-0">
                <Icon size={18} color="#1A3A6B" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583]">{label}</span>
                <span className="block font-black text-lg tracking-tight text-[#1A3A6B]">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-10">

            {/* Sobre la sede */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">La sede</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-[#1A3A6B] mb-6 tracking-tight">
                En el corazón <em className="italic">de Envigado</em>
              </h2>
              <p className="text-[#474551] text-lg leading-relaxed mb-4">
                La Sede Envigado está ubicada en la Cl 37 Sur #43A-84, cerca al parque principal de Envigado — rodeada del Parque Cultural Débora Arango y la Iglesia del parque, en una zona completamente comercial y de alto tránsito. Con 1.446 metros cuadrados, es una sede moderna con infraestructura completa para la formación técnica.
              </p>
              <p className="text-[#474551] text-lg leading-relaxed">
                Los estudiantes acceden fácilmente por la Avenida del Poblado en sentido norte-sur, con excelentes rutas de transporte público y conexión con el Metro de Medellín.
              </p>
            </div>

            {/* Instalaciones */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Instalaciones</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { emoji: "🖥️", titulo: "Aula de Cómputo", desc: "Sala equipada para formación en tecnología y herramientas digitales" },
                  { emoji: "🏫", titulo: "8 Aulas Académicas", desc: "Espacios acondicionados para el ejercicio pedagógico" },
                  { emoji: "👩‍💼", titulo: "Dos Sectores Administrativos", desc: "Oficinas de gestión institucional y atención a estudiantes" },
                  { emoji: "👩‍🏫", titulo: "Sala de Profesores", desc: "Espacio de preparación y coordinación docente" },
                  { emoji: "🎭", titulo: "Aula Múltiple", desc: "Espacio para eventos, talleres y actividades colectivas" },
                  { emoji: "🌿", titulo: "Zonas Comunes", desc: "Espacios de descanso, tres baterías de baños y zona de esparcimiento" },
                ].map((item) => (
                  <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm flex gap-4">
                    <span className="text-3xl shrink-0">{item.emoji}</span>
                    <div>
                      <h4 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#1A3A6B] mb-1">{item.titulo}</h4>
                      <p className="text-[#474551] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programas */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Oferta académica</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1A3A6B] mb-6 tracking-tight">¿Qué puedes estudiar aquí?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Auxiliar en Enfermería", "Servicios Farmacéuticos", "Auxiliar en Salud Oral",
                  "Auxiliar en Veterinaria", "Cosmetología y Estética Integral",
                  "Auxiliar Contable", "Talento Humano", "Técnico en Sistemas",
                  "Bachillerato Privado para Adultos",
                ].map((prog) => (
                  <div key={prog} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-[#c8c4d3]/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#ffb21d" }} />
                    <span className="text-sm font-semibold text-[#171c1e]">{prog}</span>
                  </div>
                ))}
              </div>
              <a href="/programas" className="inline-flex items-center gap-2 mt-6 font-bold text-sm text-[#1A3A6B] hover:gap-4 transition-all">
                Ver todos los programas <ArrowRight size={14} />
              </a>
            </div>

            {/* Cómo llegar */}
            <div className="bg-[#eff4f6] rounded-2xl p-8 border border-[#c8c4d3]/20">
              <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">Entorno y referencia</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1A3A6B] mb-5 tracking-tight">Puntos de referencia cercanos</h3>
              <div className="space-y-3">
                {[
                  { icon: "🎨", texto: "Parque Cultural Débora Arango — a pasos" },
                  { icon: "⛪", texto: "Iglesia del Parque Principal de Envigado — a pasos" },
                  { icon: "🚌", texto: "Rutas de bus por la Avenida El Poblado" },
                  { icon: "🚇", texto: "Conexión con el Metro de Medellín" },
                  { icon: "🛍️", texto: "Zona comercial con todos los servicios" },
                ].map((item) => (
                  <div key={item.texto} className="flex items-center gap-3 text-[#474551]">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — contacto */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-[#c8c4d3]/20 shadow-sm sticky top-24">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1A3A6B] mb-6 tracking-tight">Información de contacto</h3>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Dirección",  value: "Cl 37 Sur #43A-84",               sub: "Cerca al Parque Principal de Envigado" },
                  { icon: Phone,  label: "Teléfono",   value: "(604) 448 4794",                   sub: "317 434 2783", href: "tel:6044484794" },
                  { icon: Clock,  label: "Horario",    value: "Lunes a viernes",                  sub: "8:00 a.m. – 5:00 p.m." },
                  { icon: Mail,   label: "Correo",     value: "sedeenvigado@indecap.edu.co",      href: "mailto:sedeenvigado@indecap.edu.co" },
                ].map(({ icon: Icon, label, value, sub, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A3A6B10] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} color="#1A3A6B" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#787583] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-[#1A3A6B] hover:underline block">{value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-[#171c1e]">{value}</p>
                      )}
                      {sub && <p className="text-xs text-[#474551]">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/573174342783?text=Hola%20INDECAP%20Envigado%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20disponibles%20en%20la%20sede%20de%20Envigado.%20%C2%BFMe%20pueden%20orientar%3F"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-black text-white bg-[#25D366] hover:scale-105 transition-transform"
                >
                  <MessageCircle size={18} /> WhatsApp: 317 434 2783
                </a>
                <a
                  href="https://maps.app.goo.gl/3YL91ZWChN7YyRad6"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[#1A3A6B] border-2 border-[#1A3A6B] hover:bg-[#1A3A6B] hover:text-white transition-colors"
                >
                  <MapPin size={16} /> Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#c8c4d3]/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6944440921548!2d-75.59156622428259!3d6.171651093815698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46824dfe6f017b%3A0x19ac0f58cf3397cb!2sINDECAP%20ENVIGADO%20Instituto%20de%20Ciencias%20Aplicadas!5e1!3m2!1sen!2sco!4v1774831242450!5m2!1sen!2sco"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Ubicación INDECAP Envigado"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #1a086e 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              Estudia en <em className="italic">Envigado</em>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-xl mx-auto">Cupos limitados. Contáctanos hoy y asegura tu lugar en la sede más cercana a ti.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/admision" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
                Formulario de admisión <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/573174342783?text=Hola%20INDECAP%20Envigado%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20disponibles%20en%20la%20sede%20de%20Envigado.%20%C2%BFMe%20pueden%20orientar%3F"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={20} /> Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
