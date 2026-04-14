import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Train, Clock, Building2, Users, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sede Medellín | INDECAP – Calle 56 cerca al Metro Prado",
  description: "INDECAP Sede Medellín. Calle 56 N° 45-26, a una cuadra del Metro Prado. 1.500 m², 5 pisos, 20 aulas. Programas técnicos y bachillerato semipresencial.",
  openGraph: {
    images: [{ url: "/images/sedes/og-sede-medellin.jpg", width: 1200, height: 630 }],
  },
};

export default function SedesMedellinPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/sedes/medellin.jpg" alt="Sede Medellín INDECAP" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
              ✦ Sede Principal
            </span>
            <span className="text-white/50 text-sm">40 años en el corazón de Medellín</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Sede<br /><em className="italic" style={{ color: "#ffb21d" }}>Medellín</em>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            El corazón académico de INDECAP. A una cuadra del Metro Prado, en el centro de Medellín, formando técnicos que mueven a Antioquia desde 1986.
          </p>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-16">
        <div className="bg-white grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: Building2, label: "Área",        value: "1.500 m²" },
            { icon: Users,     label: "Egresados",   value: "15.000+" },
            { icon: GraduationCap, label: "Aulas",   value: "20 aulas" },
            { icon: Train,     label: "Metro",       value: "1 cuadra" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0">
                <Icon size={18} color="#1a086e" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583]">{label}</span>
                <span className="block font-black text-lg tracking-tight text-[#1a086e]">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Columna izquierda — descripción */}
          <div className="lg:col-span-2 space-y-10">

            {/* Sobre la sede */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">La sede</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-[#1a086e] mb-6 tracking-tight">
                40 años en el <em className="italic">centro de Medellín</em>
              </h2>
              <p className="text-[#474551] text-lg leading-relaxed mb-4">
                La Sede Medellín está ubicada en la Calle 56 N° 45-26, entre la Calle El Palo y la Carrera Bolivia — a una cuadra del Metro Prado y de la Avenida Oriental. Su ubicación central la convierte en la sede más accesible de INDECAP, con múltiples rutas de transporte público que llegan directamente.
              </p>
              <p className="text-[#474551] text-lg leading-relaxed">
                Con 1.500 metros cuadrados distribuidos en cinco pisos, esta es la sede insignia de INDECAP. Aquí funciona la administración central y el mayor volumen de programas técnicos laborales de la institución.
              </p>
            </div>

            {/* Instalaciones */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Instalaciones</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { emoji: "🖥️", titulo: "2 Salas de Cómputo", desc: "Equipadas con computadores para formación en sistemas y herramientas digitales" },
                  { emoji: "📚", titulo: "Sala de Lectura", desc: "Espacio académico para consulta, estudio y preparación de trabajos" },
                  { emoji: "☕", titulo: "Cafetería", desc: "Zona de alimentación y descanso para estudiantes y docentes" },
                  { emoji: "🌳", titulo: "Zona de Esparcimiento", desc: "Espacios comunes para el descanso entre clases" },
                  { emoji: "👩‍💼", titulo: "Módulo Administrativo", desc: "Recepción, sala de espera, gerencia, dirección, coordinación académica" },
                  { emoji: "👩‍🏫", titulo: "Sala de Profesores", desc: "Espacio de preparación y reuniones del equipo docente" },
                ].map((item) => (
                  <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm flex gap-4">
                    <span className="text-3xl shrink-0">{item.emoji}</span>
                    <div>
                      <h4 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#1a086e] mb-1">{item.titulo}</h4>
                      <p className="text-[#474551] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programas */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Oferta académica</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-6 tracking-tight">¿Qué puedes estudiar aquí?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Auxiliar en Enfermería", "Servicios Farmacéuticos", "Auxiliar en Salud Oral",
                  "Auxiliar en Veterinaria", "Cosmetología y Estética Integral", "Técnico en Sistemas",
                  "Auxiliar Contable", "Talento Humano", "Auxiliar en Mercadeo",
                  "Bachillerato Semipresencial para Adultos",
                ].map((prog) => (
                  <div key={prog} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-[#c8c4d3]/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#ffb21d" }} />
                    <span className="text-sm font-semibold text-[#171c1e]">{prog}</span>
                  </div>
                ))}
              </div>
              <a href="/programas" className="inline-flex items-center gap-2 mt-6 font-bold text-sm text-[#1a086e] hover:gap-4 transition-all">
                Ver todos los programas <ArrowRight size={14} />
              </a>
            </div>

            {/* Cómo llegar */}
            <div className="bg-[#eff4f6] rounded-2xl p-8 border border-[#c8c4d3]/20">
              <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">Cómo llegar</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] mb-5 tracking-tight">Acceso y transporte</h3>
              <div className="space-y-3">
                {[
                  { icon: "🚇", texto: "Metro línea A — Estación Prado (1 cuadra a pie)" },
                  { icon: "🚌", texto: "Múltiples rutas de bus por la Avenida Oriental" },
                  { icon: "🚕", texto: "Acceso fácil por la Calle El Palo y la Carrera Bolivia" },
                  { icon: "🏍️", texto: "Zona con amplia oferta de transporte informal" },
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

            {/* Tarjeta contacto */}
            <div className="bg-white rounded-2xl p-8 border border-[#c8c4d3]/20 shadow-sm sticky top-24">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] mb-6 tracking-tight">Información de contacto</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} color="#1a086e" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#787583] mb-1">Dirección</p>
                    <p className="text-sm font-semibold text-[#171c1e]">Calle 56 N° 45-26</p>
                    <p className="text-xs text-[#474551]">Entre Calle El Palo y Cra. Bolivia, Medellín</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} color="#1a086e" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#787583] mb-1">Teléfono</p>
                    <a href="tel:6044484794" className="text-sm font-semibold text-[#1a086e] hover:underline">(604) 448 4794</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} color="#1a086e" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#787583] mb-1">Horario de atención</p>
                    <p className="text-sm font-semibold text-[#171c1e]">Lunes a viernes</p>
                    <p className="text-xs text-[#474551]">8:00 a.m. – 5:00 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} color="#1a086e" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#787583] mb-1">Correo</p>
                    <a href="mailto:indecap@indecap.edu.co" className="text-sm font-semibold text-[#1a086e] hover:underline">indecap@indecap.edu.co</a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="https://wa.me/573022389760?text=Hola%20INDECAP%20Medell%C3%ADn%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20disponibles%20en%20la%20sede%20del%20centro.%20%C2%BFMe%20pueden%20orientar%3F"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-black text-white bg-[#25D366] hover:scale-105 transition-transform">
                  <MessageCircle size={18} /> WhatsApp: 302 238 9760
                </a>
                <a href="https://maps.app.goo.gl/tT3eoj5Yc3KQp17YA"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[#1a086e] border-2 border-[#1a086e] hover:bg-[#1a086e] hover:text-white transition-colors">
                  <MapPin size={16} /> Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Mapa embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#c8c4d3]/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0882055587904!2d-75.56423852428196!3d6.252108093736369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f769c8da39%3A0xdab00e96cee9b0cb!2sINDECAP!5e1!3m2!1sen!2sco!4v1774831217383!5m2!1sen!2sco"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Ubicación INDECAP Medellín"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              Tu futuro empieza <em className="italic">aquí</em>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-xl mx-auto">Visítanos en la Sede Medellín o contáctanos hoy. Los cupos son limitados.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/admision" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
                Formulario de admisión <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/573022389760?text=Hola%20INDECAP%20Medell%C3%ADn%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20disponibles%20en%20la%20sede%20del%20centro.%20%C2%BFMe%20pueden%20orientar%3F" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
                <MessageCircle size={20} /> Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
