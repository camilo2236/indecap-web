"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, MessageCircle, ChevronLeft, ChevronDown } from "lucide-react";
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
  { label: "Auxiliar en Veterinaria",            href: "/programas/veterinaria",             escuela: "Veterinaria" },
  { label: "Peluquería Canina",                  href: "/programas/peluqueria-canina",       escuela: "Veterinaria" },
  { label: "Cosmetología y Estética",            href: "/programas/cosmetologia",            escuela: "Belleza" },
  { label: "Auxiliar Contable",                  href: "/programas/contable",                escuela: "Administrativa" },
  { label: "Talento Humano",                     href: "/programas/talento-humano",          escuela: "Administrativa" },
  { label: "Auxiliar en Mercadeo",               href: "/programas/mercadeo",                escuela: "Administrativa" },
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
  { label: "RCP — Reanimación Cardiopulmonar",  href: "/cursos/rcp",                      categoria: "Salud" },
  { label: "Inyectología",                       href: "/cursos/inyectologia",             categoria: "Salud" },
  { label: "Primeros Auxilios",                  href: "/cursos/primeros-auxilios",        categoria: "Salud" },
  { label: "Vacunación",                         href: "/cursos/vacunacion",               categoria: "Salud" },
  { label: "Toma de Muestras de Laboratorio",    href: "/cursos/toma-muestras",            categoria: "Salud" },
  { label: "Código Fucsia",                      href: "/cursos/codigo-fucsia",            categoria: "Salud" },
  { label: "Calidad y Humanización",             href: "/cursos/calidad-humanizacion",     categoria: "Salud" },
  { label: "Peluquería y Estética Canina",       href: "/cursos/peluqueria-estetica-canina", categoria: "Mascotas" },
  { label: "Excel Básico, Intermedio y Avanzado", href: "/cursos/excel",                   categoria: "Tecnología" },
  { label: "Word Básico y Avanzado",             href: "/cursos/word",                     categoria: "Tecnología" },
];

const categoriasCursos = ["Salud", "Mascotas", "Tecnología"];

const categoriaColors: Record<string, string> = {
  "Salud":      "#1A3A6B",
  "Mascotas":   "#7B1F1F",
  "Tecnología": "#0F4C80",
};

const navLinks = [
  { label: "Contacto",     href: "/contacto" },
  { label: "Pagos",        href: "/pagos" },
  { label: "Nosotros",     href: "/#nosotros" },
  { label: "Bachillerato", href: "/#bachillerato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgram, setIsProgram] = useState(false);
  const [progDropdown, setProgDropdown] = useState(false);
  const [cursosDropdown, setCursosDropdown] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const [mobileCursosOpen, setMobileCursosOpen] = useState(false);
  const progRef = useRef<HTMLDivElement>(null);
  const cursosRef = useRef<HTMLDivElement>(null);

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
            <Image src="/images/logo.png" alt="INDECAP — Instituto de Ciencias Aplicadas" width={160} height={56} className="h-14 w-auto" priority />
          </a>
        </div>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 lg:flex">

          {/* Dropdown Programas */}
          <div className="relative" ref={progRef}>
            <button
              onClick={() => { setProgDropdown(!progDropdown); setCursosDropdown(false); }}
              aria-expanded={progDropdown}
              className="flex items-center gap-1 text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]"
            >
              Programas
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${progDropdown ? "rotate-180" : ""}`} />
            </button>

            {progDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded-2xl shadow-2xl border border-[#e4e9eb] p-6 z-50">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {escuelas.map((escuela) => (
                    <div key={escuela} className="mb-4">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 pb-1 border-b border-[#eaeff1]" style={{ color: escuelaColors[escuela] }}>
                        {escuela}
                      </p>
                      {programas.filter((p) => p.escuela === escuela).map((prog) => (
                        <a key={prog.href} href={prog.href} onClick={() => setProgDropdown(false)} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783] hover:translate-x-1 transition-all">
                          {prog.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#eaeff1] flex justify-between items-center">
                  <a href="/programas" onClick={() => setProgDropdown(false)} className="text-sm font-bold text-[#312783] hover:underline">Ver todos los programas →</a>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown Cursos */}
          <div className="relative" ref={cursosRef}>
            <button
              onClick={() => { setCursosDropdown(!cursosDropdown); setProgDropdown(false); }}
              aria-expanded={cursosDropdown}
              className="flex items-center gap-1 text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]"
            >
              Cursos
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${cursosDropdown ? "rotate-180" : ""}`} />
            </button>

            {cursosDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] bg-white rounded-2xl shadow-2xl border border-[#e4e9eb] p-6 z-50">
                <div className="space-y-4">
                  {categoriasCursos.map((cat) => (
                    <div key={cat}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 pb-1 border-b border-[#eaeff1]" style={{ color: categoriaColors[cat] }}>
                        {cat}
                      </p>
                      {cursos.filter((c) => c.categoria === cat).map((curso) => (
                        <a key={curso.href} href={curso.href} onClick={() => setCursosDropdown(false)} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783] hover:translate-x-1 transition-all">
                          {curso.label}
                        </a>
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

          {/* Otros links */}
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]">
              {link.label}
            </a>
          ))}

          <a href="/admision" className={buttonVariants({ className: "rounded-full bg-[#F0A500] px-7 py-3 text-sm font-black text-[#080F14] hover:bg-[#FFD166] shadow-[0_4px_20px_rgba(240,165,0,0.4)] hover:shadow-[0_4px_28px_rgba(240,165,0,0.6)] transition-all" })}>
            <MessageCircle className="mr-1 h-4 w-4" aria-hidden="true" />
            Formulario de admisión
          </a>
        </nav>

        {/* Menú móvil */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" />}>
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              {isProgram && (
                <a href="/#programas" onClick={() => setOpen(false)} className="flex items-center gap-2 text-lg font-bold text-[#312783] mb-2">
                  <ChevronLeft className="h-5 w-5" />
                  Ver todos los programas
                </a>
              )}

              {/* Programas acordeón */}
              <button onClick={() => setMobileProgOpen(!mobileProgOpen)} className="flex items-center justify-between w-full text-lg font-medium text-[#080F14] py-2 border-b border-[#eaeff1]">
                Programas
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileProgOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProgOpen && (
                <div className="pl-3 pb-2">
                  {escuelas.map((escuela) => (
                    <div key={escuela}>
                      <p className="text-[10px] font-black uppercase tracking-widest mt-3 mb-1" style={{ color: escuelaColors[escuela] }}>{escuela}</p>
                      {programas.filter((p) => p.escuela === escuela).map((prog) => (
                        <a key={prog.href} href={prog.href} onClick={() => { setOpen(false); setMobileProgOpen(false); }} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783]">
                          {prog.label}
                        </a>
                      ))}
                    </div>
                  ))}
                  <a href="/programas" onClick={() => { setOpen(false); setMobileProgOpen(false); }} className="block mt-3 text-sm font-bold text-[#312783]">Ver todos →</a>
                </div>
              )}

              {/* Cursos acordeón */}
              <button onClick={() => setMobileCursosOpen(!mobileCursosOpen)} className="flex items-center justify-between w-full text-lg font-medium text-[#080F14] py-2 border-b border-[#eaeff1]">
                Cursos
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileCursosOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCursosOpen && (
                <div className="pl-3 pb-2">
                  {categoriasCursos.map((cat) => (
                    <div key={cat}>
                      <p className="text-[10px] font-black uppercase tracking-widest mt-3 mb-1" style={{ color: categoriaColors[cat] }}>{cat}</p>
                      {cursos.filter((c) => c.categoria === cat).map((curso) => (
                        <a key={curso.href} href={curso.href} onClick={() => { setOpen(false); setMobileCursosOpen(false); }} className="block py-1.5 text-sm text-[#374151] hover:text-[#312783]">
                          {curso.label}
                        </a>
                      ))}
                    </div>
                  ))}
                  <a href="/educacion-continua" onClick={() => { setOpen(false); setMobileCursosOpen(false); }} className="block mt-3 text-sm font-bold text-[#805600]">Ver todos →</a>
                </div>
              )}

              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-[#080F14] transition-colors hover:text-[#312783] py-2 border-b border-[#eaeff1]">
                  {link.label}
                </a>
              ))}

              <a href="/admision" onClick={() => setOpen(false)} className={buttonVariants({ className: "mt-4 rounded-full bg-[#312783] px-6 py-2 font-semibold text-white" })}>
                <MessageCircle className="mr-1 h-4 w-4" />
                Formulario de admisión
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
