"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, MessageCircle, ChevronLeft, ChevronDown, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const programas = [
  { label: "Auxiliar en Enfermería",            href: "/programas/enfermeria",              escuela: "Salud" },
  { label: "Servicios Farmacéuticos",            href: "/programas/farmacia",                escuela: "Salud" },
  { label: "Auxiliar en Salud Oral",             href: "/programas/salud-oral",              escuela: "Salud" },
  { label: "Auxiliar en Salud Pública",          href: "/programas/salud-publica",           escuela: "Salud" },
  { label: "Administrativo en Salud",            href: "/programas/administrativo-salud",    escuela: "Salud" },
  { label: "Atención al Adulto Mayor",           href: "/programas/adulto-mayor",            escuela: "Salud" },
  { label: "Atención a la Primera Infancia", href: "/programas/primera-infancia", escuela: "Salud" },
  { label: "Auxiliar en Veterinaria",            href: "/programas/veterinaria",             escuela: "Veterinaria" },
  { label: "Cosmetología y Estética",            href: "/programas/cosmetologia",            escuela: "Belleza" },
  { label: "Auxiliar Contable",                  href: "/programas/contable",                escuela: "Administrativa" },
  { label: "Talento Humano",                     href: "/programas/talento-humano",          escuela: "Administrativa" },
  { label: "Técnico en Marketing Digital",       href: "/programas/mercadeo",                escuela: "Administrativa" },
  { label: "Seguridad y Salud en el Trabajo",    href: "/programas/sst",                     escuela: "Administrativa" },
  { label: "Técnico en Sistemas",                href: "/programas/sistemas",                escuela: "Tecnología" },
  { label: "Auxiliar en Desarrollo de Software", href: "/programas/software",                escuela: "Tecnología" },
  { label: "Entrenamiento Deportivo",            href: "/programas/entrenamiento-deportivo", escuela: "Deportes" },
];

const escuelas = ["Salud", "Veterinaria", "Belleza", "Administrativa", "Tecnología", "Deportes"];

const escuelaColors: Record<string, string> = {
  "Salud":          "#1A3A6B",
  "Veterinaria":    "#7B1F1F",
  "Belleza":        "#C0394B",
  "Administrativa": "#1a086e",
  "Tecnología":     "#0F4C80",
  "Deportes":       "#0F6E56",
};

const cursos = [
  { label: "RCP — Reanimación Cardiopulmonar",   href: "/cursos/rcp",                        categoria: "Salud" },
  { label: "Inyectología",                        href: "/cursos/inyectologia",               categoria: "Salud" },
  { label: "Primeros Auxilios",                   href: "/cursos/primeros-auxilios",          categoria: "Salud" },
  { label: "Vacunación",                          href: "/cursos/vacunacion",                 categoria: "Salud" },
  { label: "Toma de Muestras de Laboratorio",     href: "/cursos/toma-muestras",              categoria: "Salud" },
  { label: "Código Fucsia",                       href: "/cursos/codigo-fucsia",              categoria: "Salud" },
  { label: "Calidad y Humanización",              href: "/cursos/calidad-humanizacion",       categoria: "Salud" },
  { label: "Peluquería y Estética Canina",        href: "/cursos/peluqueria-estetica-canina", categoria: "Mascotas" },
  { label: "Excel Básico, Intermedio y Avanzado", href: "/cursos/excel",                      categoria: "Tecnología" },
  { label: "Word Básico y Avanzado",              href: "/cursos/word",                       categoria: "Tecnología" },
];

const categoriasCursos = ["Salud", "Mascotas", "Tecnología"];

const categoriaColors: Record<string, string> = {
  "Salud":      "#60a5fa",
  "Mascotas":   "#f87171",
  "Tecnología": "#34d399",
};

const sedes = [
  { label: "Sede Medellín",  href: "/sedes/medellin", desc: "Cl. 56 # 45-26" },
  { label: "Sede Envigado",  href: "/sedes/envigado",  desc: "Cl 37 Sur #43A-84" },
  { label: "Sede Caldas",    href: "/sedes/caldas",    desc: "Calle 130 sur # 51-65" },
];

const navLinks = [
  { label: "Contacto",     href: "/contacto" },
  { label: "Pagos",        href: "/pagos" },
  { label: "Bachillerato", href: "/#bachillerato" },
  { label: "Q10",          href: "https://site6.q10.com/login?ReturnUrl=%2F&aplentId=7e530e5a-0d5d-4bfe-a7af-27bd57d9964c", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgram, setIsProgram] = useState(false);
  const [progDropdown, setProgDropdown] = useState(false);
  const [cursosDropdown, setCursosDropdown] = useState(false);
  const [sedesDropdown, setSedesDropdown] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const [mobileCursosOpen, setMobileCursosOpen] = useState(false);
  const [mobileSedesOpen, setMobileSedesOpen] = useState(false);
  const progRef = useRef<HTMLDivElement>(null);
  const cursosRef = useRef<HTMLDivElement>(null);
  const sedesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setIsProgram(window.location.pathname.startsWith("/programas/"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (progRef.current && !progRef.current.contains(e.target as Node)) setProgDropdown(false);
      if (cursosRef.current && !cursosRef.current.contains(e.target as Node)) setCursosDropdown(false);
      if (sedesRef.current && !sedesRef.current.contains(e.target as Node)) setSedesDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] border-b border-[#312783]/10 backdrop-blur-[14px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(8,15,20,0.08)]" : ""
      }`}
      style={{ background: "rgba(243,248,250,0.95)" }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-4">
          {isProgram && (
            <a href="/#programas" className="flex items-center gap-1 rounded-full border border-[#E4F1F6] bg-white px-3 py-1.5 text-xs font-semibold text-[#374151] transition-all hover:border-[#312783] hover:text-[#312783]">
              <ChevronLeft className="h-3.5 w-3.5" />
              Programas
            </a>
          )}
          <a href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="INDECAP" width={160} height={56} className="h-14 w-auto" priority />
          </a>
        </div>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-5 lg:flex">
          <div className="relative" ref={progRef}>
            <button onClick={() => { setProgDropdown(!progDropdown); setCursosDropdown(false); setSedesDropdown(false); }} aria-expanded={progDropdown} className="flex items-center gap-1 text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]">
              Programas <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${progDropdown ? "rotate-180" : ""}`} />
            </button>
            {progDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded-2xl shadow-2xl border border-[#e4e9eb] p-6 z-50">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {escuelas.map((escuela) => (
                    <div key={escuela} className="mb-4">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 pb-1 border-b border-[#eaeff1]" style={{ color: escuelaColors[escuela] }}>{escuela}</p>
                      {programas.filter((p) => p.escuela === escuela).map((prog) => (
                        <a key={prog.href} href={prog.href} onClick={() => setProgDropdown(false)} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783] hover:translate-x-1 transition-all">{prog.label}</a>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#eaeff1]">
                  <a href="/programas" onClick={() => setProgDropdown(false)} className="text-sm font-bold text-[#312783] hover:underline">Ver todos los programas →</a>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={cursosRef}>
            <button onClick={() => { setCursosDropdown(!cursosDropdown); setProgDropdown(false); setSedesDropdown(false); }} aria-expanded={cursosDropdown} className="flex items-center gap-1 text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]">
              Cursos <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${cursosDropdown ? "rotate-180" : ""}`} />
            </button>
            {cursosDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] bg-white rounded-2xl shadow-2xl border border-[#e4e9eb] p-6 z-50">
                <div className="space-y-4">
                  {categoriasCursos.map((cat) => (
                    <div key={cat}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 pb-1 border-b border-[#eaeff1]" style={{ color: escuelaColors["Salud"] }}>{cat}</p>
                      {cursos.filter((c) => c.categoria === cat).map((curso) => (
                        <a key={curso.href} href={curso.href} onClick={() => setCursosDropdown(false)} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783] hover:translate-x-1 transition-all">{curso.label}</a>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#eaeff1]">
                  <a href="/educacion-continua" onClick={() => setCursosDropdown(false)} className="text-sm font-bold text-[#805600] hover:underline">Ver todos los cursos →</a>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={sedesRef}>
            <button onClick={() => { setSedesDropdown(!sedesDropdown); setProgDropdown(false); setCursosDropdown(false); }} aria-expanded={sedesDropdown} className="flex items-center gap-1 text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]">
              Sedes <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${sedesDropdown ? "rotate-180" : ""}`} />
            </button>
            {sedesDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[280px] bg-white rounded-2xl shadow-2xl border border-[#e4e9eb] p-5 z-50">
                {sedes.map((sede) => (
                  <a key={sede.href} href={sede.href} onClick={() => setSedesDropdown(false)} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f5fafc] transition-colors group">
                    <div>
                      <p className="text-sm font-bold text-[#1A3A6B] group-hover:text-[#312783]">{sede.label}</p>
                      <p className="text-xs text-[#787583]">{sede.desc}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-[#c8c4d3] group-hover:text-[#312783]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} target={"external" in link && link.external ? "_blank" : undefined} rel={"external" in link && link.external ? "noopener noreferrer" : undefined} className="text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]">
              {link.label}
            </a>
          ))}

          <a href="/admision" className={buttonVariants({ className: "rounded-full bg-[#F0A500] px-7 py-3 text-sm font-black text-[#080F14] hover:bg-[#FFD166] shadow-[0_4px_20px_rgba(240,165,0,0.4)] transition-all" })}>
            <MessageCircle className="mr-1 h-4 w-4" />
            Formulario de admisión
          </a>
        </nav>

        {/* Botón menú móvil */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" />}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>

          {/* PANEL MÓVIL — fondo azul INDECAP */}
          <SheetContent
            side="right"
            className="w-full sm:w-[380px] p-0 border-0"
            style={{ background: "#0f0c2e" }}
          >
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

            {/* Header del panel */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Image
                src="/images/logo.png"
                alt="INDECAP"
                width={120}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="overflow-y-auto h-[calc(100vh-80px)] pb-8">

              {/* CTA principal */}
              <div className="px-6 py-5 border-b border-white/8">
                <a
                  href="/admision"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-sm text-[#1a086e] transition-all hover:opacity-90"
                  style={{ backgroundColor: "#ffb21d" }}
                >
                  <MessageCircle size={16} />
                  Formulario de admisión
                </a>
                <a
                  href="https://wa.me/573174342783?text=Hola%20INDECAP%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20programas"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-2xl font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Programas */}
              <div className="px-6 pt-5">
                <button
                  onClick={() => setMobileProgOpen(!mobileProgOpen)}
                  className="flex items-center justify-between w-full py-3 border-b border-white/10"
                >
                  <span className="text-base font-black text-white">Programas</span>
                  <ChevronDown className={`h-5 w-5 text-white/40 transition-transform ${mobileProgOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileProgOpen && (
                  <div className="pt-3 pb-4">
                    {escuelas.map((escuela) => (
                      <div key={escuela} className="mb-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: categoriaColors["Salud"] || "#60a5fa" }}>
                          {escuela}
                        </p>
                        {programas.filter((p) => p.escuela === escuela).map((prog) => (
                          <a
                            key={prog.href}
                            href={prog.href}
                            onClick={() => { setOpen(false); setMobileProgOpen(false); }}
                            className="flex items-center justify-between py-2 text-sm text-white/70 hover:text-white transition-colors border-b border-white/5"
                          >
                            {prog.label}
                            <ArrowUpRight size={12} className="text-white/20 shrink-0" />
                          </a>
                        ))}
                      </div>
                    ))}
                    <a
                      href="/programas"
                      onClick={() => { setOpen(false); setMobileProgOpen(false); }}
                      className="flex items-center gap-2 mt-2 text-sm font-black text-[#ffb21d]"
                    >
                      Ver todos los programas <ArrowUpRight size={12} />
                    </a>
                  </div>
                )}

                {/* Cursos */}
                <button
                  onClick={() => setMobileCursosOpen(!mobileCursosOpen)}
                  className="flex items-center justify-between w-full py-3 border-b border-white/10"
                >
                  <span className="text-base font-black text-white">Cursos</span>
                  <ChevronDown className={`h-5 w-5 text-white/40 transition-transform ${mobileCursosOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCursosOpen && (
                  <div className="pt-3 pb-4">
                    {cursos.map((curso) => (
                      <a
                        key={curso.href}
                        href={curso.href}
                        onClick={() => { setOpen(false); setMobileCursosOpen(false); }}
                        className="flex items-center justify-between py-2 text-sm text-white/70 hover:text-white transition-colors border-b border-white/5"
                      >
                        {curso.label}
                        <ArrowUpRight size={12} className="text-white/20 shrink-0" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Sedes */}
                <button
                  onClick={() => setMobileSedesOpen(!mobileSedesOpen)}
                  className="flex items-center justify-between w-full py-3 border-b border-white/10"
                >
                  <span className="text-base font-black text-white">Sedes</span>
                  <ChevronDown className={`h-5 w-5 text-white/40 transition-transform ${mobileSedesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileSedesOpen && (
                  <div className="pt-3 pb-4 space-y-1">
                    {sedes.map((sede) => (
                      <a
                        key={sede.href}
                        href={sede.href}
                        onClick={() => { setOpen(false); setMobileSedesOpen(false); }}
                        className="flex items-center justify-between py-2 text-sm text-white/70 hover:text-white transition-colors border-b border-white/5"
                      >
                        <div>
                          <p className="font-semibold text-white">{sede.label}</p>
                          <p className="text-xs text-white/40">{sede.desc}</p>
                        </div>
                        <ArrowUpRight size={12} className="text-white/20 shrink-0" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Links simples */}
                <div className="mt-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 text-base font-black text-white border-b border-white/10 hover:text-[#ffb21d] transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight size={14} className="text-white/20" />
                    </a>
                  ))}
                </div>

                {/* Footer del menú */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/25 text-center">
                    Corporación Educativa INDECAP<br />
                    (604) 448 4794 · indecap@indecap.edu.co
                  </p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}