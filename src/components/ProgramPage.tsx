"use client";
import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Zap } from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';

interface Salida {
  icon: string;
  name: string;
}

interface Sede {
  icon: string;
  name: string;
  address: string;
  tag: string;
}

interface ProgramPageProps {
  titulo: string;
  subtitulo: string;
  emWord: string;
  accent: string;
  accentDark?: string;
  escuela: string;
  horas: string;
  semestres: string;
  sedesNum: string;
  fotoAlt: string;
  fotoSrc: string;
  descripcion: string;
  capacidades: string[];
  salidas: Salida[];
  ctaTitulo: string;
  ctaDesc?: string;
  pensum1?: string[];
  pensum2?: string[];
  pensum3?: string[];
  mercadoTexto?: string;
  waNum?: string;
  waText?: string;
  sedes?: Sede[];
}

export function ProgramPage({
  titulo, subtitulo, emWord, accent, escuela,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas, ctaTitulo,
}: ProgramPageProps) {
  
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleOpenSelector = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelectorOpen(true);
  };

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20 blur-[120px] rounded-full" style={{ backgroundColor: accent }} />
        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
              {escuela}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
              {subtitulo} <br />
              <span style={{ color: accent }}>{emWord}</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed italic">{descripcion}</p>
            <button onClick={handleOpenSelector} className="flex items-center gap-3 px-8 py-5 rounded-2xl font-black uppercase text-black transition-all hover:scale-105" style={{ backgroundColor: accent }}>
              ¡Inscríbete ahora! <Zap size={18} fill="currentColor" />
            </button>
          </div>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
            <img src={fotoSrc} alt={fotoAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CONTENIDO TÉCNICO */}
      <section className="py-20 bg-zinc-950 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black mb-12">Lo que aprenderás</h2>
            <div className="grid gap-4">
              {capacidades.map((cap, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <CheckCircle style={{ color: accent }} size={20} className="shrink-0" />
                  <p className="text-sm text-zinc-300 font-medium">{cap}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-12">Campo Laboral</h2>
            <div className="grid grid-cols-2 gap-4">
              {salidas.map((salida, i) => (
                <div key={i} className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <span className="text-3xl mb-3 block">{salida.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{salida.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-black text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8">{ctaTitulo}</h2>
          <button onClick={handleOpenSelector} className="flex mx-auto items-center gap-3 px-10 py-5 rounded-full font-bold text-black transition-all hover:scale-105 shadow-xl" style={{ backgroundColor: accent }}>
            <MessageCircle size={22} /> Hablar con un asesor
          </button>
        </div>
      </section>

      {/* STICKY CTA MÓVIL */}
      <div className="fixed bottom-0 left-0 z-[60] w-full border-t border-zinc-800 bg-black/90 p-4 lg:hidden">
        <button onClick={handleOpenSelector} className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-black uppercase text-black" style={{ backgroundColor: accent }}>
          <MessageCircle size={20} fill="currentColor" /> ¡Inscribirme Ahora!
        </button>
      </div>

      <WhatsAppSelector isOpen={isSelectorOpen} onClose={() => setIsSelectorOpen(false)} programaName={titulo} />
    </main>
  );
}