import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Clock, Building2, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sede Caldas | INDECAP – Cerca al Parque Principal de Caldas",
  description: "INDECAP Sede Caldas. Calle 130 sur N° 51-65. 10 aulas, laboratorio de química y física, biblioteca. 420+ egresados. Programas técnicos y bachillerato.",
};

export default function SedesCaldasPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0F4C35 0%, #1a086e 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/images/sedes/caldas.jpg" alt="Sede Caldas INDECAP" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
              ✦ Sur del Valle
            </span>
            <span className="text-white/50 text-sm">Formando líderes del municipio de Caldas</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Sede<br /><em className="italic" style={{ color: "#ffb21d" }}>Caldas</em>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Seis años transformando vidas en el sur del Valle de Aburrá. Convenios con INPROQUIN, FRIKO, COMFAMA y más de 420 egresados que hoy son líderes de su comunidad.
          </p>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-16">
        <div className="bg-white grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: GraduationCap, label: "Aulas",      value: "10 aulas" },
            { icon: Building2,    label: "Niveles",     value: "4 niveles" },
            { icon: Users,        label: "Egresados",   value: "420+" },
            { icon: Building2,    label: "Convenios",   value: "COMFAMA y más" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0F4C3510] flex items-center justify-center shrink-0">
                <Icon size={18} color="#0F4C35" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583]">{label}</span>
                <span className="block font-black text-lg tracking-tight text-[#0F4C35]">{value}</span>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-[#1a086e] mb-6 tracking-tight">
                Una historia de impacto <em className="italic">en Caldas</em>
              </h2>
              <p className="text-[#474551] text-lg leading-relaxed mb-4">
                La Sede Caldas está ubicada en la Calle 130 sur N° 51-65, cerca al Parque Principal del Municipio — un referente para la comunidad caldense. Con 10 aulas distribuidas en cuatro niveles, la sede ofrece infraestructura moderna y conveniente para los estudiantes del sur del Valle de Aburrá.
              </p>
              <p className="text-[#474551] text-lg leading-relaxed">
                En sus años de funcionamiento, por esta sede han pasado grandes personalidades del municipio: rectores, docentes y figuras del sector público y privado. Hoy cuenta con convenios estratégicos con empresas como INPROQUIN, FRIKO, COMFAMA y COOPER PLAZA, manteniendo relaciones sólidas con secretarías, cooperativas, centros de salud y empresas productivas del municipio.
              </p>
            </div>

            {/* Logro clave */}
            <div className="bg-[#1a086e] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-[family-name:var(--font-playfair)] font-black text-[#ffb21d] leading-none shrink-0">420+</div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-3 tracking-tight">Egresados que hacen historia</h3>
                  <p className="text-white/70 leading-relaxed">Más de 420 personas graduadas que se identifican como miembros de INDECAP y demuestran gran sentido de responsabilidad social en su comunidad. Rectores, docentes y líderes del municipio de Caldas pasaron por estas aulas.</p>
                </div>
              </div>
            </div>

            {/* Instalaciones */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Instalaciones</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { emoji: "🖥️", titulo: "Aula de Cómputo", desc: "Sala equipada para formación en tecnología y herramientas digitales" },
                  { emoji: "🔬", titulo: "Laboratorio de Química y Física", desc: "Espacio experimental para el aprendizaje de ciencias" },
                  { emoji: "📚", titulo: "Biblioteca", desc: "Servicio de biblioteca en convenio con el Municipio de Caldas" },
                  { emoji: "👩‍🏫", titulo: "Sala de Profesores", desc: "Espacio de preparación y coordinación docente" },
                  { emoji: "☕", titulo: "Cafetería y Terraza", desc: "Zona de alimentación y descanso con espacio al aire libre" },
                  { emoji: "🏫", titulo: "10 Aulas Académicas", desc: "Distribuidas en 4 niveles para todos los programas" },
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

            {/* Convenios */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Alianzas estratégicas</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-6 tracking-tight">Convenios con empresas del sector</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["INPROQUIN", "FRIKO", "COMFAMA", "COOPER PLAZA"].map((empresa) => (
                  <div key={empresa} className="bg-white rounded-xl p-4 text-center border border-[#c8c4d3]/20 shadow-sm">
                    <p className="font-black text-sm text-[#1a086e]">{empresa}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#474551] text-sm mt-4 leading-relaxed">Además de convenios con Secretarías municipales, Cooperativas, Centros de Salud y empresas productivas de la región.</p>
            </div>

            {/* Programas */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#805600]">Oferta académica</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-6 tracking-tight">¿Qué puedes estudiar aquí?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Auxiliar en Enfermería", "Servicios Farmacéuticos", "Auxiliar en Salud Oral",
                  "Auxiliar en Veterinaria", "Peluquería y Estética Canina",
                  "Auxiliar Contable", "Auxiliar en Salud Pública",
                  "Bachillerato Privado para Adultos",
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
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-[#c8c4d3]/20 shadow-sm sticky top-24">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] mb-6 tracking-tight">Información de contacto</h3>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Dirección", value: "Calle 130 sur N° 51-65", sub: "Cerca al Parque Principal de Caldas" },
                  { icon: Phone,  label: "Teléfono",  value: "(604) 448 4794", sub: "300 894 8517", href: "tel:6044484794" },
                  { icon: Clock,  label: "Horario",   value: "Lunes a viernes", sub: "7:00 a.m. – 6:00 p.m." },
                  { icon: Mail,   label: "Correo",    value: "sedecaldas@indecap.edu.co", href: "mailto:sedecaldas@indecap.edu.co" },
                ].map(({ icon: Icon, label, value, sub, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a086e10] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} color="#1a086e" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#787583] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-[#1a086e] hover:underline block">{value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-[#171c1e]">{value}</p>
                      )}
                      {sub && <p className="text-xs text-[#474551]">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <a href="https://wa.me/573008948517?text=Hola%20INDECAP%20Caldas%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-black text-white bg-[#25D366] hover:scale-105 transition-transform">
                  <MessageCircle size={18} /> WhatsApp: 300 894 8517
                </a>
                <a href="https://maps.app.goo.gl/sYLr8MKC3mvRpvgF8" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[#1a086e] border-2 border-[#1a086e] hover:bg-[#1a086e] hover:text-white transition-colors">
                  <MapPin size={16} /> Ver en Google Maps
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#c8c4d3]/20 h-64">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d-75.641!3d6.094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDUnMzkuNiJOIDc1wrAzOCczNC42Ilc!5e0!3m2!1ses!2sco!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="INDECAP Caldas" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: "linear-gradient(135deg, #0F4C35 0%, #1a086e 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              Estudia en <em className="italic">Caldas</em>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-xl mx-auto">Sé parte de los más de 420 egresados que transformaron su vida estudiando en INDECAP Caldas.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/admision" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
                Formulario de admisión <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/573008948517" target="_blank" rel="noopener noreferrer"
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