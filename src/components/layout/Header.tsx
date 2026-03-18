"use client";

import { useState, useEffect } from "react";
import { Menu, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Programas", href: "/#programas" },
  { label: "Educación Continua", href: "/#cursos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Bachillerato", href: "/#bachillerato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgram, setIsProgram] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    setIsProgram(window.location.pathname.startsWith("/programas/"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] border-b border-[#312783]/10 backdrop-blur-[14px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(8,15,20,0.08)]" : ""
      }`}
      style={{ background: "rgba(243,248,250,0.95)" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
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
            <img
              src="/images/logo.png"
              alt="INDECAP"
              className="h-11"
            />
          </a>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#374151] transition-colors hover:text-[#312783]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=573174342783"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className:
                "rounded-full bg-[#312783] px-6 py-2 text-sm font-semibold text-white hover:bg-[#312783]/90",
            })}
          >
            <MessageCircle className="mr-1 h-4 w-4" />
            Inscribirme ahora
          </a>
        </nav>

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
            <nav className="mt-8 flex flex-col gap-4">
              {isProgram && (
                <a
                  href="/#programas"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-lg font-bold text-[#312783]"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Ver todos los programas
                </a>
              )}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-dm-sans)] text-lg font-medium text-[#080F14] transition-colors hover:text-[#312783]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=573174342783"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  className:
                    "mt-4 rounded-full bg-[#312783] px-6 py-2 font-semibold text-white",
                })}
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                Inscribirme ahora
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
