"use client";
import React, { useState } from 'react';
import { MessageCircle, CheckCircle } from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';
import { MiniTestimonio } from './MiniTestimonio';

export function ProgramPage({
  titulo, subtitulo, emWord, accent, escuela,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas, ctaTitulo, ctaDesc,
  pensum1, pensum2, mercadoTexto, waNum, waText, sedes, programaId
}: any) {

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleOpenSelector = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelectorOpen(true);
  };

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden px-4">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-15 blur-[140px] rounded-full"
          style={{ backgroundColor: accent }}
        />

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {/* Badge escuela — prominente */}
            <div
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 mb-8 text-lg font-black uppercase tracking-widest"
              style={{ backgroundColor: `${accent}25`, borderColor: `${accent}60`, color: accent }}
            >
              ✦ {escuela}
            </div>

            {/* Título */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
              <span className="text-white">{subtitulo}</span>
              <br />
              <span style={{ color: accent }}>{emWord}</span>
            </h1>

            {/* Descripción */}
            <p className="text-white/80 text-xl mb-10 max-w-xl leading-relaxed">
              {descripcion}
            </p>

            {/* Campo laboral — sube aquí */}
            <div className="mb-10">
              <p className="text-2xl font-black uppercase tracking-widest text-white mb-6">
                Campo laboral
              </p>
              <div className="grid grid-cols-2 gap-3">
                {salidas.map((salida: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/10"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <span className="text-3xl shrink-0">{salida.icon}</span>
                    <p className="text-base font-bold text-white/90 leading-snug">
                      {salida.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foto */}
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src={fotoSrc} alt={fotoAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* LO QUE APRENDERÁS + EGRESADOS — lado a lado */}
      <section className="py-20 bg-zinc-950 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* IZQUIERDA — Lo que aprenderás */}
            <div>
              <h2 className="text-4xl font-black mb-10 text-white">Lo que aprenderás</h2>
              <div className="grid gap-4">
                {capacidades.map((cap: any, i: number) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle style={{ color: accent }} size={22} className="shrink-0 mt-0.5" />
                    <p className="text-base text-white/85 font-medium leading-relaxed">{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DERECHA — Egresados */}
            {programaId && <MiniTestimonio programaId={programaId} accent={accent} />}
          </div>
        </div>
      </section>

      {/* SEDES */}
      {sedes && sedes.length > 0 && (
        <section className="py-16 bg-black px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black mb-10 text-white text-center">
              ¿Dónde estudiar?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {sedes.map((sede: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl mb-3">{sede.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-1">{sede.name}</h3>
                  <p className="text-sm text-white/60">{sede.address}</p>
                  {sede.tag && <p className="text-xs text-white/40 mt-1">{sede.tag}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white leading-tight">
            {ctaTitulo}
          </h2>
          {ctaDesc && (
            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">{ctaDesc}</p>
          )}
          <button
            onClick={handleOpenSelector}
            className="flex mx-auto items-center gap-3 px-10 py-5 rounded-full font-bold text-black transition-all hover:scale-105 shadow-xl text-lg"
            style={{ backgroundColor: accent }}
          >
            <MessageCircle size={22} /> Hablar con un asesor
          </button>
        </div>
      </section>

      {/* STICKY CTA MÓVIL */}
      <div className="fixed bottom-0 left-0 z-[60] w-full border-t border-white/10 bg-black/95 p-4 lg:hidden backdrop-blur-sm">
        <button
          onClick={handleOpenSelector}
          className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-black uppercase text-black"
          style={{ backgroundColor: accent }}
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
