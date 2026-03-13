"use client";

import { useState, useEffect } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Bachillerato", href: "#bachillerato" },
  { label: "Cursos", href: "#cursos" },
  { label: "Noticias", href: "#noticias" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
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
        <a href="#inicio" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://indecap.edu.co/wp-content/uploads/2019/12/LOGO-AI.png"
            alt="INDECAP"
            className="h-11"
          />
        </a>

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
