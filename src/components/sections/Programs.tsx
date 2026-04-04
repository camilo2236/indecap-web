"use client";

import Link from "next/link";
import Image from "next/image";
import { programs } from "@/data/programs";
import { ArrowUpRight } from "lucide-react";

const TOP_SLUGS = ["enfermeria", "cosmetologia", "veterinaria", "salud-oral", "farmaceuticos", "mercadeo"];

export function Programs() {
  const topPrograms = TOP_SLUGS
    .map(slug => programs.find(p => p.id === slug))
    .filter(Boolean) as typeof programs;

  const restPrograms = programs.filter(p => !TOP_SLUGS.includes(p.id));

  return (
    <section id="programas" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb21d] mb-3">
              Oferta académica INDECAP
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-[#1a086e] leading-[0.9] tracking-tight">
              Programas<br />
              <em className="italic" style={{ color: "#ffb21d" }}>Técnicos</em>
            </h2>
          </div>
          <Link
            href="/programas"
            className="inline-flex items-center gap-2 text-sm font-black text-[#1a086e] border-b-2 border-[#ffb21d] pb-0.5 hover:gap-4 transition-all self-start sm:self-end"
          >
            Ver todos <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* BENTO GRID — mismo en móvil y desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">

          {/* 01 Enfermería — grande, 2 cols en móvil, 2 cols en desktop */}
          {topPrograms[0] && (
            <Link
              href={topPrograms[0].pageUrl || `/programas/${topPrograms[0].id}`}
              className="col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={topPrograms[0].image}
                alt={topPrograms[0].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ffb21d] mb-2">01</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-2xl lg:text-3xl font-black text-white leading-tight mb-1">
                  {topPrograms[0].name}
                </p>
                <p className="text-white/50 text-xs">{topPrograms[0].horas} · Aval Sec. Educación</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#ffb21d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-[#281800]" />
              </div>
            </Link>
          )}

          {/* 02 Cosmetología — 1 col, tall */}
          {topPrograms[1] && (
            <Link
              href={topPrograms[1].pageUrl || `/programas/${topPrograms[1].id}`}
              className="col-span-1 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={topPrograms[1].image}
                alt={topPrograms[1].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-black text-[#ffb21d] block mb-1">02</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-base font-black text-white leading-tight">
                  {topPrograms[1].name}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{topPrograms[1].horas}</p>
              </div>
            </Link>
          )}

          {/* 03 Veterinaria — 1 col */}
          {topPrograms[2] && (
            <Link
              href={topPrograms[2].pageUrl || `/programas/${topPrograms[2].id}`}
              className="col-span-1 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={topPrograms[2].image}
                alt={topPrograms[2].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-black text-[#ffb21d] block mb-1">03</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-base font-black text-white leading-tight">
                  {topPrograms[2].name}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{topPrograms[2].horas}</p>
              </div>
            </Link>
          )}

          {/* 04 Salud Oral — 1 col */}
          {topPrograms[3] && (
            <Link
              href={topPrograms[3].pageUrl || `/programas/${topPrograms[3].id}`}
              className="col-span-1 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={topPrograms[3].image}
                alt={topPrograms[3].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-black text-[#ffb21d] block mb-1">04</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-base font-black text-white leading-tight">
                  {topPrograms[3].name}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{topPrograms[3].horas}</p>
              </div>
            </Link>
          )}

          {/* 05 Farmacia + 06 Marketing — fila final */}
          {topPrograms[4] && (
            <Link
              href={topPrograms[4].pageUrl || `/programas/${topPrograms[4].id}`}
              className="col-span-1 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={topPrograms[4].image}
                alt={topPrograms[4].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-black text-[#ffb21d] block mb-1">05</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-sm font-black text-white leading-tight">
                  {topPrograms[4].name}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{topPrograms[4].horas}</p>
              </div>
            </Link>
          )}

          {topPrograms[5] && (
            <Link
              href={topPrograms[5].pageUrl || `/programas/${topPrograms[5].id}`}
              className="col-span-1 relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={topPrograms[5].image}
                alt={topPrograms[5].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/90 via-[#1a086e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] font-black text-[#ffb21d] block mb-1">06</span>
                <p className="font-[family-name:var(--font-playfair)] italic text-sm font-black text-white leading-tight">
                  {topPrograms[5].name}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{topPrograms[5].horas}</p>
              </div>
            </Link>
          )}
        </div>

        {/* Más programas — grilla compacta */}
        {restPrograms.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffb21d]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#787583]">Más programas</span>
              <div className="flex-1 h-px bg-[#1a086e]/8" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {restPrograms.map((program) => (
                <Link
                  key={program.id}
                  href={program.pageUrl || `/programas/${program.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-[#eaeff1] border border-[#1a086e]/8 hover:border-[#1a086e]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/85 via-[#1a086e]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-[family-name:var(--font-playfair)] italic text-sm font-black text-white leading-tight">
                      {program.name}
                    </p>
                    <p className="text-[10px] text-white/50 mt-0.5">{program.horas}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-12 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}
        >
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-white italic mb-1">
              ¿No sabes cuál elegir?
            </h3>
            <p className="text-white/55 text-sm">Un asesor INDECAP te orienta sin costo ni compromiso.</p>
          </div>
          <a
            href="https://wa.me/573174342783?text=Hola%20INDECAP%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20t%C3%A9cnicos.%20%C2%BFMe%20pueden%20orientar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-xl"
            style={{ backgroundColor: "#ffb21d", color: "#281800" }}
          >
            Solicitar orientación <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}