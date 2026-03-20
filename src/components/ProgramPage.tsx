"use client"; // 🔥 Añadido para permitir el uso de useState

import React, { useState } from 'react';
import { 
  MessageCircle, 
  Clock, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle, 
  Phone,
  Zap,
  ShieldCheck,
  BookOpen
} from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';

export interface ProgramPageProps {
  titulo: string;
  subtitulo: string;
  emWord: string;
  accent: string;
  accentDark: string;
  escuela: string;
  horas: string;
  semestres: string;
  sedesNum: string;
  fotoAlt: string;
  fotoSrc: string;
  descripcion: string;
  capacidades: string[];
  salidas: { icon: string; name: string }[];
  pensum1: string[];
  pensum2: string[];
  pensum3?: string[];
  mercadoTexto: string;
  waNum: string;
  waText: string;
  sedes: { icon: string; name: string; address: string; tag: string }[];
  ctaTitulo: string;
  ctaDesc: string;
}

export function ProgramPage({
  titulo, subtitulo, emWord, accent, accentDark,
  escuela, horas, semestres, sedesNum,
  fotoAlt, fotoSrc, descripcion, capacidades, salidas,
  pensum1, pensum2, pensum3, mercadoTexto, waNum, waText,
  sedes, ctaTitulo, ctaDesc
}: ProgramPageProps) {
  
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-black text-white selection:bg-zinc-800">
      
      {/* 1. HERO SECTION (Diseño Premium) */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20 blur-[120px] rounded-full"
          style={{ backgroundColor: accent }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{escuela}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                {subtitulo} <br />
                <span style={{ color: accent }}>{emWord}</span>
              </h1>
              
              <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
                {descripcion}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button 
                  onClick={() => setIsSelectorOpen(true)}
                  className="group flex items-center gap-3 px-8 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  style={{ backgroundColor: accent }}
                >
                  ¡Inscríbete ahora!
                  <Zap size={18} fill="currentColor" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-10">
                <div>
                  <p className="text-2xl font-black">{horas}</p>
                  <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Horas</p>
                </div>
                <div>
                  <p className="text-2xl font-black">{semestres}</p>
                  <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Semestres</p>
                </div>
                <div>
                  <p className="text-2xl font-black">{sedesNum}</p>
                  <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Sedes</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <img src={fotoSrc} alt={fotoAlt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPACIDADES Y PENSUM */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-12">Lo que aprenderás</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capacidades.map((cap, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <CheckCircle style={{ color: accent }} size={20} className="shrink-0" />
                <p className="text-sm text-zinc-300">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA FINAL */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8">{ctaTitulo}</h2>
          <p className="text-zinc-400 mb-12 text-lg">{ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setIsSelectorOpen(true)}
              className="flex items-center gap-3 px-10 py-5 rounded-full font-bold text-black transition-all hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              <MessageCircle size={22} />
              Hablar con un asesor
            </button>
            <a href="tel:6044484794" className="flex items-center gap-3 px-10 py-5 rounded-full border border-zinc-700 font-bold">
              <Phone size={20} />
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* STICKY CTA MÓVIL (Para celulares) */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-black/90 backdrop-blur-lg p-4 lg:hidden">
        <button 
          onClick={() => setIsSelectorOpen(true)}
          className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-black uppercase tracking-widest text-black transition-transform active:scale-95 shadow-xl"
          style={{ backgroundColor: accent }}
        >
          <MessageCircle className="h-5 w-5 fill-current" />
          ¡Inscribirme Ahora!
        </button>
      </div>

      {/* MODAL DEL SELECTOR */}
      <WhatsAppSelector 
        isOpen={isSelectorOpen} 
        onClose={() => setIsSelectorOpen(false)} 
        programaName={titulo}
      />
    </main>
  );
}