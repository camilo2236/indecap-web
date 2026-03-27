"use client";
import React, { useState } from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';
import { MiniTestimonio } from './MiniTestimonio';

export function ProgramPage({
  titulo, subtitulo, emWord, accent, escuela,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas, ctaTitulo, ctaDesc,
  waNum, waText, sedes, programaId
}: any) {

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const handleOpenSelector = (e: React.MouseEvent) => { e.preventDefault(); setIsSelectorOpen(true); };

  // Color tokens basados en accent
  const accentLight = `${accent}18`;
  const accentMid = `${accent}30`;

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[780px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={fotoSrc} alt={fotoAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${accent}f0 0%, ${accent}99 50%, transparent 100%)` }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-20">
          <div className="max-w-2xl">
            {/* Badge escuela */}
            <span
              className="inline-block px-5 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              ✦ {escuela}
            </span>

            {/* Título grande */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
              {subtitulo}<br />
              <em className="italic" style={{ color: "#ffb21d" }}>{emWord}</em>
            </h1>

            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              {descripcion}
            </p>

            {/* Campo laboral mini — sube al hero */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Campo laboral</p>
              <div className="flex flex-wrap gap-3">
                {salidas.slice(0, 4).map((salida: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                    <span className="text-lg">{salida.icon}</span>
                    {salida.name}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleOpenSelector}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              Iniciar mi proceso <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CAMPO LABORAL — Bento Grid ───────────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black mb-4 tracking-tight" style={{ color: accent }}>
              Campo Laboral
            </h2>
            <p className="text-[#474551] text-lg">Tu formación te permitirá desempeñarte con excelencia en múltiples entornos profesionales.</p>
          </div>
          <div className="hidden md:block h-px flex-grow ml-12 mb-4" style={{ backgroundColor: `${accent}20` }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:h-[480px]">
          {/* Primera tarjeta grande */}
          <div
            className="md:row-span-2 group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-end hover:scale-[1.02] transition-all shadow-sm border border-black/5"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="absolute top-8 left-8 text-4xl">{salidas[0]?.icon}</div>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-2 tracking-tight" style={{ color: accent }}>{salidas[0]?.name}</h3>
            <p className="text-[#474551] leading-relaxed text-sm">Entorno profesional de alta demanda para técnicos especializados.</p>
          </div>

          {/* Tarjetas medianas */}
          {salidas.slice(1, 3).map((salida: any, i: number) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all" style={{ backgroundColor: "#eff4f6" }}>
              <span className="text-3xl">{salida.icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-1 tracking-tight" style={{ color: accent }}>{salida.name}</h3>
                <p className="text-sm text-[#474551]">Oportunidades laborales con alta proyección profesional.</p>
              </div>
            </div>
          ))}

          {/* Tarjeta ancha con color */}
          {salidas[3] && (
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.01] transition-all" style={{ backgroundColor: accent }}>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-3 tracking-tight">{salidas[3]?.name}</h3>
                <p className="text-white/70 text-sm">Sector en expansión con alta demanda de profesionales técnicos.</p>
              </div>
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden opacity-60">
                <img src={fotoSrc} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── LO QUE APRENDERÁS + EGRESADOS ───────────────── */}
      <section className="py-24 bg-[#eff4f6]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Izquierda — Currículo */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black mb-4 leading-tight tracking-tight" style={{ color: accent }}>
              Lo que <br /><em className="italic">aprenderás</em>
            </h2>
            <p className="text-[#474551] text-lg mb-10">Formación diseñada con estándares de alta calidad, combinando teoría rigurosa con práctica intensiva.</p>
            <div className="space-y-4">
              {capacidades.map((cap: string, i: number) => (
                <div key={i} className="bg-white p-5 rounded-2xl border-l-4 shadow-sm flex items-start gap-4" style={{ borderColor: i === 0 ? accent : "#e4e9eb" }}>
                  <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: accent }} />
                  <p className="text-[#171c1e] font-medium leading-relaxed">{cap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — Egresados */}
          {programaId && <MiniTestimonio programaId={programaId} accent={accent} />}
        </div>
      </section>

      {/* ── SEDES ────────────────────────────────────────── */}
      {sedes && sedes.length > 0 && (
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-center mb-16 tracking-tight" style={{ color: accent }}>
            Dónde <em className="italic">estudiar</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sedes.map((sede: any, i: number) => (
              <div key={i} className="bg-[#eff4f6] p-8 rounded-2xl border border-[#c8c4d3]/30 hover:border-[#ffb21d] transition-colors group">
                <div className="text-3xl mb-4">{sede.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2 tracking-tight" style={{ color: accent }}>{sede.name}</h3>
                <p className="text-[#474551] text-sm mb-6">{sede.address}</p>
                <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all" style={{ color: accent }}>
                  <span>Ver ubicación</span>
                  <ArrowRight size={14} />
                </div>
                <div className="mt-4 pt-4 border-t border-[#c8c4d3]/30">
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#805600" }}>Admisiones Abiertas</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden" style={{ backgroundColor: accent }}>
          <div className="absolute inset-0 opacity-10">
            <img src={fotoSrc} alt="" className="w-full h-full object-cover mix-blend-overlay grayscale" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Comienza tu <em className="italic">futuro hoy</em>
            </h2>
            <p className="text-white/80 text-xl mb-12">{ctaDesc || "Estamos listos para acompañarte en tu formación. Inscríbete y forma parte de la nueva generación INDECAP."}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={handleOpenSelector}
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
                style={{ backgroundColor: "#ffb21d", color: "#281800" }}
              >
                Solicitar información
              </button>
              <button
                onClick={handleOpenSelector}
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={20} /> Hablar con un asesor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MÓVIL */}
      <div className="fixed bottom-0 left-0 z-[60] w-full border-t border-white/10 bg-black/95 p-4 lg:hidden backdrop-blur-sm">
        <button
          onClick={handleOpenSelector}
          className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-black uppercase text-black"
          style={{ backgroundColor: "#ffb21d" }}
        >
          <MessageCircle size={20} fill="currentColor" /> Hablar con un asesor
        </button>
      </div>

      <WhatsAppSelector
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        programaName={titulo}
      />
    </main>
  );
}