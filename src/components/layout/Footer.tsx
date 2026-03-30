import { MapPin, Phone, Mail, CreditCard } from "lucide-react";
import Image from "next/image";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-[#111627] text-white">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="INDECAP — Instituto de Ciencias Aplicadas"
              width={160}
              height={80}
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-sm font-light text-white/70">
              Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas ®
              <br />
              Calidad Educativa Certificada
            </p>
            <div className="mt-5 flex gap-4 font-[family-name:var(--font-dm-sans)]">
              <a href="https://www.facebook.com/indecapedu/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-[#FACC15]">Facebook</a>
              <a href="https://www.instagram.com/instindecap/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-[#FACC15]">Instagram</a>
              <a href="https://www.youtube.com/@CorporacionEducativaINDECAP" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-[#FACC15]">YouTube</a>
            </div>

            {/* Links rápidos */}
            <div className="mt-6 space-y-2 font-[family-name:var(--font-dm-sans)]">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Enlaces</p>
              <a href="/admision" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FACC15] transition-colors">
                → Formulario de admisión
              </a>
              <a href="/pagos" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FACC15] transition-colors">
                <CreditCard className="h-3.5 w-3.5" />
                Pagos en línea
              </a>
              <a href="/contacto" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FACC15] transition-colors">
                → Contacto y sedes
              </a>
            </div>
          </div>

          {locations.map((location) => (
            <div key={location.id}>
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-white">
                {location.name}
              </h3>
              <ul className="mt-3 space-y-2 font-[family-name:var(--font-dm-sans)] text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F0A500]" />
                  <span>{location.address}, {location.city}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#F0A500]" />
                  <a href="tel:6044484794" className="hover:text-white">{location.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#F0A500]" />
                  <a href={`mailto:${location.email}`} className="hover:text-white">{location.email}</a>
                </li>
                {location.resolution && (
                  <li className="text-xs text-white/40">{location.resolution}</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center font-[family-name:var(--font-dm-sans)] text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Corporación Educativa INDECAP —
            Instituto de Ciencias Aplicadas ®. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}