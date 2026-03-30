"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, CheckCircle, ArrowRight, Clock, MapPin, ChevronDown } from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';
import { MiniTestimonio } from './MiniTestimonio';

export function ProgramPage({
  titulo, subtitulo, emWord, accent, escuela,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas, ctaDesc,
  waNum, waText, sedes, programaId, semestres, mercadoTexto,
  pensum1, pensum2, pensum3,
}: any) {

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [cicloAbierto, setCicloAbierto] = useState<number | null>(null);
  const handleOpenSelector = (e: React.MouseEvent) => { e.preventDefault(); setIsSelectorOpen(true); };

  const ciclos = [
    pensum1 && { label: "Ciclo 1 — Fundamentos", items: pensum1 },
    pensum2 && { label: "Ciclo 2 — Profundización", items: pensum2 },
    pensum3 && { label: "Ciclo 3 — Práctica Real", items: pensum3 },
  ].filter(Boolean) as { label: string; items: string[] }[];

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={fotoSrc} alt={fotoAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${accent}cc 0%, ${accent}88 45%, ${accent}22 75%, transparent 100%)` }} />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-16">
          <div className="max-w-xl">
            <span className="inline-block px-5 py-2 mb-6 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
              ✦ {escuela}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-black text-white mb-5 leading-[0.95] tracking-tight">
              {subtitulo}<br />
              <em className="italic" style={{ color: "#ffb21d" }}>{emWord}</em>
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">{descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {salidas.slice(0, 4).map((s: any, i: number) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/15 backdrop-blur-sm border border-white/25 text-white">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
            <button onClick={handleOpenSelector} aria-label={`Iniciar proceso de inscripción en ${titulo}`}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base hover:scale-105 transition-transform shadow-xl" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
              Iniciar mi proceso <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── QUICK INFO BAR — sin horas ──────────────────── */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-4">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: Clock,  label: "Duración",   value: semestres ? `${semestres} ciclos` : "2 ciclos" },
            { icon: MapPin, label: "Modalidad",  value: "Presencial" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-7 flex items-center gap-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
                <Icon size={20} style={{ color: accent }} />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583] mb-0.5">{label}</span>
                <span className="block font-black text-xl tracking-tight" style={{ color: accent }}>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAMPO LABORAL — Bento Grid ──────────────────── */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>¿Dónde vas a trabajar?</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black tracking-tight" style={{ color: accent }}>Campo Laboral</h2>
          <p className="text-[#474551] text-lg mt-3 max-w-xl">{mercadoTexto || "Tu formación te abre puertas en los entornos más demandados de Antioquia."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:row-span-2 rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all shadow-sm border border-black/5 bg-white min-h-[220px]">
            <span className="text-5xl">{salidas[0]?.icon}</span>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2 tracking-tight" style={{ color: accent }}>{salidas[0]?.name}</h3>
              <p className="text-[#474551] text-sm leading-relaxed">{salidas[0]?.desc || "Entorno de alta demanda para técnicos especializados."}</p>
            </div>
          </div>
          {salidas.slice(1, 3).map((s: any, i: number) => (
            <div key={i} className="rounded-2xl p-7 flex flex-col justify-between hover:scale-[1.02] transition-all" style={{ backgroundColor: "#eff4f6" }}>
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black mb-1 tracking-tight" style={{ color: accent }}>{s.name}</h3>
                <p className="text-sm text-[#474551] leading-relaxed">{s.desc || "Oportunidades laborales con alta proyección."}</p>
              </div>
            </div>
          ))}
          {salidas[3] && (
            <div className="md:col-span-2 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.01] transition-all" style={{ backgroundColor: accent }}>
              <div className="flex-1">
                <span className="text-4xl mb-3 block">{salidas[3].icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-white mb-2 tracking-tight">{salidas[3].name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{salidas[3].desc || "Sector con alta demanda de profesionales técnicos."}</p>
              </div>
              {salidas[4] && (
                <div className="w-full md:w-56 rounded-xl p-6 bg-white/10 border border-white/20">
                  <span className="text-3xl mb-2 block">{salidas[4].icon}</span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-black text-white mb-1">{salidas[4].name}</h4>
                  <p className="text-white/60 text-xs">{salidas[4].desc || ""}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── LO QUE APRENDERÁS + PLAN DESPLEGABLE + EGRESADOS ── */}
      <section className="py-20 bg-[#eff4f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>Formación de calidad</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black tracking-tight" style={{ color: accent }}>
              Lo que <em className="italic">aprenderás</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Izquierda — Capacidades */}
            <div>
              <p className="text-[#474551] text-lg mb-8 leading-relaxed">Formación diseñada con estándares reales de la industria, combinando teoría rigurosa con práctica intensiva en entornos laborales auténticos.</p>
              <div className="space-y-3 mb-10">
                {capacidades.map((cap: string, i: number) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border-l-4 shadow-sm flex items-start gap-4" style={{ borderColor: i === 0 ? accent : "#e4e9eb" }}>
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: accent }} />
                    <p className="text-[#171c1e] font-medium leading-relaxed text-sm">{cap}</p>
                  </div>
                ))}
              </div>

              {/* Plan de estudios — acordeón */}
              {ciclos.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#805600" }}>Plan de estudios</p>
                  <div className="space-y-3">
                    {ciclos.map((ciclo, i) => (
                      <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#c8c4d3]/20 shadow-sm">
                        <button
                          onClick={() => setCicloAbierto(cicloAbierto === i ? null : i)}
                          aria-expanded={cicloAbierto === i}
                          className="w-full flex items-center justify-between p-5 text-left font-black text-sm"
                          style={{ color: accent }}
                        >
                          <span>{ciclo.label}</span>
                          <ChevronDown
                            size={18}
                            className="transition-transform duration-300 shrink-0"
                            style={{ transform: cicloAbierto === i ? "rotate(180deg)" : "rotate(0deg)", color: accent }}
                          />
                        </button>
                        {cicloAbierto === i && (
                          <div className="px-5 pb-5 border-t border-[#eaeff1]">
                            <ul className="space-y-2 pt-4">
                              {ciclo.items.map((item: string, j: number) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-[#474551]">
                                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#ffb21d" }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Derecha — Egresados */}
            {programaId && <MiniTestimonio programaId={programaId} accent={accent} />}
          </div>
        </div>
      </section>

      {/* ── SEDES ────────────────────────────────────────── */}
      {sedes && sedes.length > 0 && (
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>Disponible en</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black tracking-tight" style={{ color: accent }}>
              Dónde <em className="italic">estudiar</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sedes.map((sede: any, i: number) => {
              const slug = sede.name.toLowerCase().includes("medellín") || sede.name.toLowerCase().includes("medellin")
                ? "medellin"
                : sede.name.toLowerCase().includes("envigado")
                ? "envigado"
                : "caldas";
              return (
                <a key={i} href={`/sedes/${slug}`} className="bg-[#eff4f6] p-8 rounded-2xl border border-[#c8c4d3]/30 hover:border-[#ffb21d] hover:shadow-md transition-all group block">
                  <div className="text-3xl mb-5">{sede.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2 tracking-tight" style={{ color: accent }}>{sede.name}</h3>
                  <p className="text-[#474551] text-sm mb-1">{sede.address}</p>
                  <p className="text-[#787583] text-xs mb-6">{sede.tag}</p>
                  <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all" style={{ color: accent }}>
                    <span>Ver sede completa</span>
                    <ArrowRight size={14} />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#c8c4d3]/30">
                    <p className="text-xs font-black uppercase tracking-wider" style={{ color: "#805600" }}>Admisiones Abiertas</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden" style={{ backgroundColor: accent }}>
          <div className="absolute inset-0 opacity-10">
            <Image src={fotoSrc} alt="" fill className="object-cover mix-blend-overlay grayscale" sizes="100vw" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Comienza tu <em className="italic">futuro hoy</em>
            </h2>
            <p className="text-white/80 text-xl mb-12">{ctaDesc || "Inscríbete y forma parte de los más de 35.000 egresados INDECAP que trabajan en Antioquia."}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={handleOpenSelector} className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
                Solicitar información
              </button>
              <button onClick={handleOpenSelector} className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
                <MessageCircle size={20} /> Hablar con un asesor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MÓVIL */}
      <div className="fixed bottom-0 left-0 z-[60] w-full border-t border-white/10 bg-black/95 p-4 lg:hidden backdrop-blur-sm">
        <button onClick={handleOpenSelector} className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-black uppercase text-black" style={{ backgroundColor: "#ffb21d" }}>
          <MessageCircle size={20} fill="currentColor" aria-hidden="true" /> Hablar con un asesor
        </button>
      </div>

      <WhatsAppSelector isOpen={isSelectorOpen} onClose={() => setIsSelectorOpen(false)} programaName={titulo} />
    </main>
  );
}
