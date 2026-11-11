"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, CheckCircle, ArrowRight, Clock, MapPin, ChevronDown, Wallet, CalendarDays } from "lucide-react";
import { WhatsAppSelector } from './WhatsAppSelector';
import { MiniTestimonio } from './MiniTestimonio';
import { usePathname } from 'next/navigation';
import { ORG } from '@/lib/geo-data';
import { programs } from '@/data/programs';

const SITE_URL = 'https://indecap.edu.co';

// Une una lista en español: "Medellín, Envigado y Caldas"
const unir = (xs: string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} y ${xs[xs.length - 1]}`);

export function ProgramPage({
  titulo, subtitulo, emWord, accent, escuela,
  fotoAlt, fotoSrc, fotos, fotoPosition, descripcion, capacidades, salidas, ctaDesc,
  waNum, waText, sedes, programaId, semestres, horas, mercadoTexto,
  pensum1, pensum2, pensum3,
}: any) {

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [cicloAbierto, setCicloAbierto] = useState<number | null>(null);
  const [volteada, setVolteada] = useState<number | null>(null);
  const [fotoActiva, setFotoActiva] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Normalizar: acepta fotoSrc (string) o fotos (array)
  // Si pasan fotoSrc solo, lo convierte en array de 1 elemento
  const imagenes: string[] = fotos?.length
    ? fotos
    : fotoSrc
    ? [fotoSrc]
    : [];

  // Rotar automáticamente cada 4 segundos si hay más de 1 foto
  useEffect(() => {
    if (imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setFotoActiva((prev) => (prev + 1) % imagenes.length);
        setFadeIn(true);
      }, 400); // 400ms fade out, luego cambia
    }, 4500);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  const handleOpenSelector = (e: React.MouseEvent) => { e.preventDefault(); setIsSelectorOpen(true); };

  // ── Preguntas frecuentes y datos estructurados (Google y asistentes de IA) ──
  const pathname = usePathname() || '';
  const nombre: string = String(titulo || '').replace(/^Técnico Laboral (en )?/, '').replace(/^Técnico en /, '');
  const ciudades: string[] = (sedes || []).map((sd: any) => String(sd.name).replace(/^Sede /, ''));
  const horasNum = Number(String(horas || '0').replace(/\./g, ''));
  const nCiclos = Number(semestres || 2);
  const conFaq = horasNum >= 700 && ciudades.length > 0;
  const faqs: { q: string; a: string }[] = conFaq
    ? [
        {
          q: `¿Dónde puedo estudiar ${nombre}?`,
          a: `En INDECAP puedes estudiar ${nombre} en ${unir((sedes || []).map((sd: any) => `${String(sd.name).replace(/^Sede /, 'la sede ')} (${sd.address})`))}. Es presencial y con práctica desde el primer semestre.`,
        },
        {
          q: `¿Cuánto dura el técnico en ${nombre}?`,
          a: `El programa tiene ${semestres || 2} ciclos y ${horas} horas de formación entre teoría y práctica en ambientes propios de cada programa.`,
        },
        ...(salidas?.length
          ? [{
              q: `¿Dónde puedo trabajar al graduarme?`,
              a: `Como ${nombre} puedes trabajar en ${unir(salidas.map((x: any) => String(x.name).toLowerCase()))}.`,
            }]
          : []),
        { q: '¿Qué requisitos necesito para inscribirme?', a: ORG.requisitos },
        { q: '¿Hay financiación?', a: `Sí. ${ORG.financiacion}` },
        {
          q: '¿Qué certificado recibo?',
          a: 'Al aprobar el programa recibes tu certificado de Técnico Laboral por Competencias, de un programa con registro aprobado por la Secretaría de Educación.',
        },
        {
          q: '¿Cuándo empiezan las clases?',
          a: 'Las inscripciones para 2027 están abiertas. Escríbenos por WhatsApp y te confirmamos la fecha de inicio y los horarios del grupo en tu sede.',
        },
      ]
    : [];

  // Enlace a "Agenda tu visita" con el programa ya escogido
  const nombreEnLista = programs.find((p) => p.id === programaId)?.name;
  const agendaHref = `/agenda-tu-visita${nombreEnLista ? `?programa=${encodeURIComponent(nombreEnLista)}` : ''}`;

  const url = `${SITE_URL}${pathname}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Programas', item: `${SITE_URL}/programas` },
          { '@type': 'ListItem', position: 3, name: nombre, item: url },
        ],
      },
      {
        '@type': 'Course',
        name: nombre,
        description: descripcion,
        url,
        inLanguage: 'es-CO',
        provider: { '@type': 'EducationalOrganization', name: 'Corporación Educativa INDECAP', url: SITE_URL },
        ...(conFaq ? { educationalCredentialAwarded: 'Técnico Laboral por Competencias' } : {}),
        hasCourseInstance: (sedes || []).map((sd: any) => ({
          '@type': 'CourseInstance',
          courseMode: 'onsite',
          location: { '@type': 'Place', name: `INDECAP ${sd.name}`, address: sd.address },
        })),
      },
      ...(faqs.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }]
        : []),
    ],
  };

  const ciclos = [
    pensum1 && { label: "Ciclo 1 — Fundamentos", items: pensum1 },
    pensum2 && { label: "Ciclo 2 — Profundización", items: pensum2 },
    pensum3 && { label: "Ciclo 3 — Práctica Real", items: pensum3 },
  ].filter(Boolean) as { label: string; items: string[] }[];

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* ── HERO con carousel ─────────────────────────────────── */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">

          {/* Foto activa con fade */}
          {imagenes.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={fotoAlt}
              fill
              className="object-cover transition-opacity duration-500"
              style={{
                objectPosition: fotoPosition || "center",
                opacity: i === fotoActiva && fadeIn ? 1 : 0,
              }}
              priority={i === 0}
              sizes="100vw"
            />
          ))}

          {/* Gradiente de color del programa */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(105deg, ${accent}cc 0%, ${accent}88 45%, ${accent}22 75%, transparent 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Indicadores de foto — solo si hay más de 1 */}
          {imagenes.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setFadeIn(false); setTimeout(() => { setFotoActiva(i); setFadeIn(true); }, 400); }}
                  aria-label={`Ver foto ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === fotoActiva ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: i === fotoActiva ? "#ffb21d" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-16">
          <div className="max-w-xl">
            <span
              className="inline-block px-5 py-2 mb-6 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              ✦ {escuela}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-black text-white mb-5 leading-[0.95] tracking-tight">
              {subtitulo}<br />
              <em className="italic" style={{ color: "#ffb21d" }}>{emWord}</em>
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">{descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {salidas.slice(0, 4).map((s: any, i: number) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/15 backdrop-blur-sm border border-white/25 text-white"
                >
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
            <button
              onClick={handleOpenSelector}
              aria-label={`Iniciar proceso de inscripción en ${titulo}`}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              Iniciar mi proceso <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── QUICK INFO BAR ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-4">
        <div className="bg-white grid grid-cols-2 lg:grid-cols-4 rounded-2xl shadow-xl border border-[#c8c4d3]/20 overflow-hidden">
          {[
            { icon: Clock,        label: "Duración",       value: `${nCiclos} ciclo${nCiclos === 1 ? '' : 's'}`, sub: horas ? `${horas} horas · ver plan` : 'Ver plan de estudios', href: '#plan-de-estudios' },
            { icon: CheckCircle,  label: "Modalidad",      value: "Presencial", sub: "Práctica desde el inicio", href: '#lo-que-aprenderas' },
            { icon: MapPin,       label: ciudades.length === 1 ? "Sede" : "Sedes", value: ciudades.length > 1 ? `${ciudades.length} sedes` : (ciudades[0] || "Medellín"), sub: ciudades.length > 1 ? ciudades.join(' · ') : 'Ver dirección', href: '#sedes' },
            { icon: CalendarDays, label: "Inscripciones",  value: "Abiertas 2027", sub: "Agenda tu visita", href: agendaHref },
          ].map(({ icon: Icon, label, value, sub, href }) => (
            <a key={label} href={href} className="p-4 md:p-6 flex items-start gap-3 md:gap-4 border-[#c8c4d3]/20 [&:nth-child(odd)]:border-r lg:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 lg:last:border-r-0 hover:bg-[#eff4f6] transition-colors">
              <div className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                <Icon size={18} style={{ color: accent }} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583] mb-0.5">{label}</span>
                <span className="block font-black text-base md:text-lg tracking-tight leading-tight" style={{ color: accent }}>{value}</span>
                {sub && <span className="block text-xs text-[#787583] mt-0.5">{sub}</span>}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FINANCIACIÓN DIRECTA (franja) ───────────────────────── */}
      {conFaq && (
        <section className="max-w-7xl mx-auto px-8 mt-6 mb-2">
          <div className="rounded-2xl px-5 py-4 md:px-7 md:py-5 text-white flex flex-col md:flex-row md:items-center gap-4" style={{ background: `linear-gradient(135deg, ${accent} 0%, #312783 100%)` }}>
            <Wallet size={26} className="hidden md:block shrink-0" style={{ color: "#ffb21d" }} aria-hidden="true" />
            <div className="flex-1">
              <p className="font-black text-base md:text-lg leading-snug text-white">
                Crédito directo con INDECAP: <span style={{ color: "#ffb21d" }}>sin codeudor, sin papeles y sin bancos.</span>
              </p>
              <p className="text-sm text-white/80 mt-1">Cuota inicial desde $350.000 y el resto mes a mes. Si un mes se complica, acomodamos el pago contigo.</p>
            </div>
            <a href="#" onClick={handleOpenSelector} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-black text-white text-sm shrink-0">
              <MessageCircle size={18} aria-hidden="true" /> Pregunta por tu cuota
            </a>
          </div>
        </section>
      )}

      {/* ── CAMPO LABORAL ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 px-8 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>¿Dónde vas a trabajar?</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black tracking-tight" style={{ color: accent }}>Campo Laboral</h2>
          <p className="text-[#474551] text-lg mt-3 max-w-xl">{mercadoTexto || "Tu formación te abre puertas en los entornos más demandados de Antioquia."}</p>
        </div>
        <p className="text-sm text-[#787583] mb-4">Toca cada tarjeta para ver más.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {salidas.map((sl: any, i: number) => {
            const abierta = volteada === i;
            const destacada = i === 0;
            return (
              <div key={i} className={`relative h-48 md:h-52 [perspective:1000px] ${destacada ? 'col-span-2 lg:col-span-1' : ''}`}>
                <div className={`relative h-full w-full transition-transform duration-500 motion-reduce:transition-none [transform-style:preserve-3d] ${abierta ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Frente */}
                  <button
                    type="button"
                    onClick={() => setVolteada(abierta ? null : i)}
                    aria-expanded={abierta}
                    aria-label={`${sl.name}: ver más información`}
                    className="absolute inset-0 rounded-2xl p-4 md:p-5 text-left border border-black/5 flex flex-col justify-between [backface-visibility:hidden] hover:shadow-md transition-shadow"
                    style={{ backgroundColor: destacada ? accent : "#eff4f6" }}
                  >
                    <span className="text-3xl" aria-hidden="true">{sl.icon}</span>
                    <span>
                      <span className={`block font-black text-base md:text-lg leading-tight ${destacada ? 'text-white' : ''}`} style={destacada ? undefined : { color: accent }}>{sl.name}</span>
                      <span className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${destacada ? 'text-white/80' : 'text-[#787583]'}`}>
                        Ver más <ArrowRight size={12} aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                  {/* Reverso */}
                  <div
                    className="absolute inset-0 rounded-2xl p-4 md:p-5 flex flex-col justify-between text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{ backgroundColor: accent }}
                    aria-hidden={!abierta}
                  >
                    <button type="button" onClick={() => setVolteada(null)} tabIndex={abierta ? 0 : -1} aria-label="Volver" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/15 text-white text-sm font-black flex items-center justify-center">
                      ✕
                    </button>
                    <div className="pr-8">
                      <span className="block font-black text-sm leading-tight mb-1.5">{sl.name}</span>
                      <p className="text-xs md:text-sm leading-snug text-white/85">{sl.desc || 'Uno de los entornos donde trabajan nuestros egresados.'}</p>
                    </div>
                    <button type="button" onClick={handleOpenSelector} tabIndex={abierta ? 0 : -1} className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2.5 text-xs font-black text-white">
                      <MessageCircle size={14} aria-hidden="true" /> Pregúntanos
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── LO QUE APRENDERÁS ───────────────────────────────────── */}
      <section id="lo-que-aprenderas" className="py-14 md:py-20 bg-[#eff4f6] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>Formación de calidad</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black tracking-tight" style={{ color: accent }}>
              Lo que <em className="italic">aprenderás</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
              {ciclos.length > 0 && (
                <div id="plan-de-estudios" className="scroll-mt-28">
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
            {programaId && <MiniTestimonio programaId={programaId} accent={accent} />}
          </div>
        </div>
      </section>

      {/* ── SEDES ───────────────────────────────────────────────── */}
      {sedes && sedes.length > 0 && (
        <section id="sedes" className="py-14 md:py-20 px-8 max-w-7xl mx-auto scroll-mt-24">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>Disponible en</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black tracking-tight" style={{ color: accent }}>
              Dónde <em className="italic">estudiar</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sedes.map((sede: any, i: number) => {
              const n = sede.name.toLowerCase();
              const slug = n.includes("medell") ? "medellin" : n.includes("envigado") ? "envigado" : "caldas";
              return (
                <div key={i} className="relative bg-[#eff4f6] p-5 rounded-2xl border border-[#c8c4d3]/30 hover:border-[#ffb21d] hover:shadow-md transition-all">
                  {/* Enlace que cubre todo el recuadro */}
                  <a href={`/sedes/${slug}`} className="absolute inset-0 rounded-2xl" aria-label={`Ver ${sede.name}`} />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">{sede.icon}</span>
                    <h3 className="font-black text-lg tracking-tight" style={{ color: accent }}>{sede.name}</h3>
                  </div>
                  <p className="text-[#474551] text-sm mb-4">{sede.address}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
                    <a href={`/agenda-tu-visita?sede=${slug}${nombreEnLista ? `&programa=${encodeURIComponent(nombreEnLista)}` : ''}`} className="relative z-10 inline-flex items-center gap-1.5" style={{ color: accent }}>
                      <CalendarDays size={15} aria-hidden="true" /> Agenda tu visita
                    </a>
                    <span className="inline-flex items-center gap-1.5 text-[#474551]" aria-hidden="true">
                      Ver sede <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20 bg-[#eff4f6]">
          <div className="max-w-4xl mx-auto px-8">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "#805600" }}>Resolvemos tus dudas</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black tracking-tight" style={{ color: accent }}>
                Preguntas frecuentes sobre <em className="italic">{nombre}</em>
              </h2>
              <p className="text-[#474551] text-lg mt-3">Estudia {nombre} en {unir(ciudades)}.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#c8c4d3]/30 shadow-sm open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-black text-sm md:text-base" style={{ color: accent }}>
                    <span>{f.q}</span>
                    <ChevronDown size={18} className="shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="px-5 pb-5 text-sm md:text-base leading-relaxed text-[#474551]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ── CTA FINAL ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 md:p-20 text-center relative overflow-hidden" style={{ backgroundColor: accent }}>
          <div className="absolute inset-0 opacity-10">
            <Image src={imagenes[0]} alt="" fill className="object-cover mix-blend-overlay grayscale" sizes="100vw" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Comienza tu <em className="italic">futuro hoy</em>
            </h2>
            <p className="text-white/80 text-xl mb-12">{ctaDesc || "Inscríbete y forma parte de los más de 35.000 egresados INDECAP que trabajan en Antioquia."}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={handleOpenSelector} className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
                <MessageCircle size={20} aria-hidden="true" /> Hablar con un asesor
              </button>
              <a href={agendaHref} className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
                <CalendarDays size={20} aria-hidden="true" /> Agenda tu visita
              </a>
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
