"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, MessageCircle, ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const tecnicos = [
  { label: "Ver todos los programas técnicos", href: "/programas" },
  { label: "Auxiliar en Enfermería", href: "/programas/enfermeria" },
  { label: "Cosmetología y Estética Integral", href: "/programas/cosmetologia" },
  { label: "Auxiliar en Veterinaria", href: "/programas/veterinaria" },
  { label: "Administrativo en Salud", href: "/programas/administrativo-salud" },
  { label: "Servicios Farmacéuticos", href: "/programas/farmacia" },
  { label: "Auxiliar en Salud Oral", href: "/programas/salud-oral" },
  { label: "Auxiliar en Salud Pública", href: "/programas/salud-publica" },
  { label: "Atención al Adulto Mayor", href: "/programas/adulto-mayor" },
  { label: "Asistente en Talento Humano", href: "/programas/talento-humano" },
  { label: "Auxiliar Contable", href: "/programas/contable" },
  { label: "Auxiliar en Mercadeo", href: "/programas/mercadeo" },
  { label: "Seguridad y Salud en el Trabajo", href: "/programas/sst" },
  { label: "Entrenamiento Deportivo", href: "/programas/entrenamiento-deportivo" },
  { label: "Auxiliar en Sistemas", href: "/programas/sistemas" },
  { label: "Peluquería Canina", href: "/programas/peluqueria-canina" },
];

const continuos = [
  { label: "Ver todos los cursos", href: "/educacion-continua" },
  { label: "RCP — Reanimación Cardiopulmonar", href: "/educacion-continua" },
  { label: "Inyectología", href: "/educacion-continua" },
  { label: "Vacunación", href: "/educacion-continua" },
  { label: "Toma de Muestras de Laboratorio", href: "/educacion-continua" },
  { label: "Primeros Auxilios", href: "/educacion-continua" },
  { label: "Código Fucsia", href: "/educacion-continua" },
  { label: "Peluquería y Estética Canina", href: "/educacion-continua" },
  { label: "Excel Básico, Intermedio y Avanzado", href: "/educacion-continua" },
  { label: "Word Básico y Avanzado", href: "/educacion-continua" },
  { label: "Calidad + Humanización", href: "/educacion-continua" },
];

const simpleLinks = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Bachillerato", href: "/#bachillerato" },
  { label: "Pagos", href: "/pagos" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgram, setIsProgram] = useState(false);
  const [showProgramas, setShowProgramas] = useState(false);
  const [showTecnicos, setShowTecnicos] = useState(false);
  const [showContinuos, setShowContinuos] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"programas" | "tecnicos" | "continuos" | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setIsProgram(window.location.pathname.startsWith("/programas/"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowProgramas(false);
        setShowTecnicos(false);
        setShowContinuos(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setShowProgramas(false);
    setShowTecnicos(false);
    setShowContinuos(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] border-b border-[#312783]/10 backdrop-blur-[14px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(8,15,20,0.08)]" : ""
      }`}
      style={{ background: "rgba(243,248,250,0.95)" }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          {isProgram && (
            <a
              href="/#programas"
              className="flex items-center gap-1 rounded-full border border-[#E4F1F6] bg-white px-3 py-1.5 font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#374151] transition-all hover:border-[#312783] hover:text-[#312783]"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Programas
            </a>
          )}
          <a href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="INDECAP" className="h-14" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex" ref={dropdownRef}>

          {/* DROPDOWN PROGRAMAS */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowProgramas(true)}
              onMouseLeave={() => { if (!showTecnicos && !showContinuos) setShowProgramas(false); }}
              onClick={() => setShowProgramas(!showProgramas)}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xl font-semibold text-[#374151] transition-all hover:bg-[#312783]/8 hover:text-[#312783]"
            >
              Programas
              <ChevronDown className={`h-4 w-4 transition-transform ${showProgramas ? "rotate-180" : ""}`} />
            </button>

            {showProgramas && (
              <div
                className="absolute left-0 top-full pt-2 z-50"
                onMouseEnter={() => setShowProgramas(true)}
                onMouseLeave={() => { setShowProgramas(false); setShowTecnicos(false); setShowContinuos(false); }}
              >
                <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-2 min-w-[220px]">

                  {/* Técnicos */}
                  <div
                    className="relative"
                    onMouseEnter={() => { setShowTecnicos(true); setShowContinuos(false); }}
                    onMouseLeave={() => setShowTecnicos(false)}
                  >
                    <button className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#312783]/8 hover:text-[#312783] transition-all">
                      Técnicos Laborales
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    {showTecnicos && (
                      <div className="absolute left-full top-0 pl-2 z-50">
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-2 min-w-[260px] max-h-[70vh] overflow-y-auto">
                          {tecnicos.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={closeAll}
                              className="block rounded-xl px-4 py-2.5 text-sm text-[#374151] hover:bg-[#312783]/8 hover:text-[#312783] transition-all font-medium"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Educación Continua */}
                  <div
                    className="relative"
                    onMouseEnter={() => { setShowContinuos(true); setShowTecnicos(false); }}
                    onMouseLeave={() => setShowContinuos(false)}
                  >
                    <button className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#312783]/8 hover:text-[#312783] transition-all">
                      Educación Continua
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    {showContinuos && (
                      <div className="absolute left-full top-0 pl-2 z-50">
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-2 min-w-[260px]">
                          {continuos.map((item, i) => (
                            <a
                              key={i}
                              href={item.href}
                              onClick={closeAll}
                              className="block rounded-xl px-4 py-2.5 text-sm text-[#374151] hover:bg-[#312783]/8 hover:text-[#312783] transition-all font-medium"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* LINKS SIMPLES */}
          {simpleLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xl font-medium text-[#374151] transition-all hover:bg-[#312783]/8 hover:text-[#312783]"
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="/admision"
            className={buttonVariants({
              className:
                "ml-2 rounded-full bg-[#F0A500] px-7 py-3 text-xl font-black text-[#080F14] hover:bg-[#FFD166] shadow-[0_4px_20px_rgba(240,165,0,0.4)] hover:shadow-[0_4px_28px_rgba(240,165,0,0.6)] transition-all",
            })}
          >
            <MessageCircle className="mr-1 h-4 w-4" />
            Formulario de admisión
          </a>
        </nav>

        {/* MÓVIL */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menú</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">

              {/* Programas móvil */}
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "programas" ? null : "programas")}
                className="flex items-center justify-between w-full font-[family-name:var(--font-dm-sans)] text-lg font-bold text-[#080F14] py-2"
              >
                Programas
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === "programas" ? "rotate-180" : ""}`} />
              </button>

              {mobileExpanded === "programas" && (
                <div className="pl-4 flex flex-col gap-1">
                  <button
                    onClick={() => setMobileExpanded(prev => prev === "tecnicos" ? "programas" : "tecnicos")}
                    className="flex items-center justify-between w-full text-sm font-bold text-[#312783] py-2"
                  >
                    Técnicos Laborales
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "tecnicos" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "tecnicos" && (
                    <div className="pl-4 flex flex-col gap-1 mb-2">
                      {tecnicos.map((item) => (
                        <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-[#374151] py-1.5 hover:text-[#312783]">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setMobileExpanded(prev => prev === "continuos" ? "programas" : "continuos")}
                    className="flex items-center justify-between w-full text-sm font-bold text-[#312783] py-2"
                  >
                    Educación Continua
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "continuos" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "continuos" && (
                    <div className="pl-4 flex flex-col gap-1 mb-2">
                      {continuos.map((item, i) => (
                        <a key={i} href={item.href} onClick={() => setOpen(false)} className="text-sm text-[#374151] py-1.5 hover:text-[#312783]">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {simpleLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-dm-sans)] text-lg font-medium text-[#080F14] py-2 hover:text-[#312783]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/admision"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  className: "mt-4 rounded-full bg-[#F0A500] px-6 py-3 font-black text-[#080F14]",
                })}
              >
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