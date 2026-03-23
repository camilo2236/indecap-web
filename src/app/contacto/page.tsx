import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto y Sedes | INDECAP — Medellín, Envigado, Caldas",
  description:
    "Encuentra la sede INDECAP más cercana. Medellín, Envigado y Caldas. Contáctanos por WhatsApp, teléfono o correo. Formación técnica laboral con 40 años de experiencia.",
};

const sedes = [
  {
    id: "medellin",
    name: "Sede Medellín",
    ciudad: "Medellín",
    tagline: "Sede Principal · 40 años",
    address: "Cl. 56 # 45-26, entre Calle El Palo y Carrera Bolivia",
    metro: "A 1 cuadra del Metro Prado",
    phone: "(604) 448 4794",
    whatsapp: "573022389760",
    whatsappText: "Hola INDECAP Medellín, quiero información sobre los programas",
    email: "indecap@indecap.edu.co",
    horario: "Lunes a viernes 7:00 a.m. – 6:00 p.m.",
    aulas: "20 aulas · 5 pisos · 1.500 m²",
    resolution: "Res. N° 016022",
    mapUrl: "https://maps.app.goo.gl/tT3eoj5Yc3KQp17YA",
    image: "/images/sedes/medellin.jpg",
    color: "#312783",
    colorLight: "#E8E6F8",
  },
  {
    id: "envigado",
    name: "Sede Envigado",
    ciudad: "Envigado",
    tagline: "Zona Sur · Edificio propio",
    address: "Cl 37 Sur #43A-84, cerca al parque principal",
    metro: "Acceso por Avenida El Poblado",
    phone: "(604) 448 4794",
    whatsapp: "573174342783",
    whatsappText: "Hola INDECAP Envigado, quiero información sobre los programas",
    email: "sedeenvigado@indecap.edu.co",
    horario: "Lunes a viernes 7:00 a.m. – 6:00 p.m.",
    aulas: "8 aulas · Laboratorio · Sala de cómputo",
    resolution: "Res. N° 3534",
    mapUrl: "https://maps.app.goo.gl/3YL91ZWChN7YyRad6",
    image: "/images/sedes/envigado.jpg",
    color: "#1A3A6B",
    colorLight: "#E3EAF4",
  },
  {
    id: "caldas",
    name: "Sede Caldas",
    ciudad: "Caldas",
    tagline: "Sur del Valle · Bachillerato",
    address: "Calle 130 sur # 51-65, cerca al parque principal",
    metro: "10 aulas en 4 niveles",
    phone: "(604) 448 4794",
    whatsapp: "573008948517",
    whatsappText: "Hola INDECAP Caldas, quiero información sobre los programas",
    email: "indecap@indecap.edu.co",
    horario: "Lunes a viernes 7:00 a.m. – 6:00 p.m.",
    aulas: "10 aulas · Lab. química · Biblioteca",
    resolution: "Res. N° 2016060054726",
    mapUrl: "https://maps.app.goo.gl/sYLr8MKC3mvRpvgF8",
    image: "/images/sedes/caldas.jpg",
    color: "#0F6E56",
    colorLight: "#E1F2EE",
  },
];

const redes = [
  { name: "Facebook", url: "https://www.facebook.com/indecapedu/", icon: "f", color: "#1877F2" },
  { name: "Instagram", url: "https://www.instagram.com/instindecap/", icon: "ig", color: "#E1306C" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCDqQs0jzf-Zy-nsCBFnLmEA", icon: "yt", color: "#FF0000" },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080F14] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 30% 50%, #312783 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #1A3A6B 0%, transparent 50%)" }}
        />
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F0A500] animate-pulse" />
            Inscripciones abiertas 2026
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-tight mb-4">
            Encuentra tu sede<br />
            <em className="italic text-[#FFD166]">más cercana</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto font-[family-name:var(--font-dm-sans)] font-light">
            3 sedes en el área metropolitana de Medellín. Escríbenos directamente a la sede que más te quede cerca.
          </p>

          {/* Stats rápidos */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { num: "3", label: "Sedes" },
              { num: "40", label: "Años" },
              { num: "25.000+", label: "Egresados" },
              { num: "16", label: "Programas" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#FFD166]">{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEDES — Cards grandes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 lg:gap-10">
            {sedes.map((sede, idx) => (
              <div
                key={sede.id}
                className={`group grid overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Foto */}
                <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[420px]">
                  <img
                    src={sede.image}
                    alt={`${sede.name} INDECAP`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Ciudad encima de la foto */}
                  <div className="absolute bottom-6 left-6">
                    <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{sede.tagline}</div>
                    <div className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white drop-shadow-lg">
                      {sede.ciudad}
                    </div>
                  </div>

                  {/* Resolución */}
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[0.65rem] font-semibold text-white backdrop-blur-sm">
                      {sede.resolution}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between p-8 lg:p-10">
                  <div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-6">
                      {sede.name}
                    </h2>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 shrink-0 mt-0.5" style={{ color: sede.color }} />
                        <div>
                          <p className="text-sm font-medium text-[#080F14]">{sede.address}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{sede.metro}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Clock className="h-5 w-5 shrink-0 mt-0.5" style={{ color: sede.color }} />
                        <p className="text-sm text-[#374151]">{sede.horario}</p>
                      </div>

                      <div className="flex gap-3">
                        <Phone className="h-5 w-5 shrink-0 mt-0.5" style={{ color: sede.color }} />
                        <p className="text-sm text-[#374151]">{sede.phone}</p>
                      </div>

                      <div className="flex gap-3">
                        <Mail className="h-5 w-5 shrink-0 mt-0.5" style={{ color: sede.color }} />
                        <a href={`mailto:${sede.email}`} className="text-sm text-[#374151] hover:underline">
                          {sede.email}
                        </a>
                      </div>
                    </div>

                    {/* Chip de aulas */}
                    <div
                      className="mt-6 inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold"
                      style={{ backgroundColor: sede.colorLight, color: sede.color }}
                    >
                      {sede.aulas}
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(sede.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
                      style={{ backgroundColor: sede.color }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp {sede.ciudad}
                    </a>
                    <a
                      href={sede.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border py-3.5 px-6 text-sm font-semibold transition-all hover:bg-gray-50"
                      style={{ borderColor: sede.color, color: sede.color }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver mapa
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="py-16 bg-[#080F14]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD166]">
            Síguenos
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Redes Sociales
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {redes.map((red) => (
              <a
                key={red.name}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                {red.name}
              </a>
            ))}
          </div>

          {/* Email general */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-white/50 text-sm mb-2">Correo general</p>
            <a
              href="mailto:indecap@indecap.edu.co"
              className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white hover:text-[#FFD166] transition-colors"
            >
              indecap@indecap.edu.co
            </a>
            <p className="text-white/40 text-xs mt-2">PBX: (604) 448 4794</p>

            {/* Pagos */}
            <div className="mt-8">
              <a
                href="/pagos"
                className="inline-flex items-center gap-2 rounded-full border border-[#F0A500]/40 bg-[#F0A500]/10 px-6 py-3 text-sm font-semibold text-[#FFD166] transition-all hover:bg-[#F0A500]/20"
              >
                💳 Pagar en línea
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
