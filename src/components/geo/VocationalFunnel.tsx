'use client';

import { useState } from 'react';
import { JORNADAS, PROGRAMAS, SEDES, urlWhatsApp, type Programa, type Sede } from '@/lib/geo-data';

type Rastreo = { fbq?: (...args: unknown[]) => void; gtag?: (...args: unknown[]) => void };

const PASOS = 3;

/**
 * Orientador en 3 pasos: sede, área de interés y jornada.
 * Termina en el WhatsApp de la sede elegida con un mensaje que nombra programa y sede.
 */
export default function VocationalFunnel() {
  const [sede, setSede] = useState<Sede | null>(null);
  const [programa, setPrograma] = useState<Programa | null>(null);
  const [jornada, setJornada] = useState<string | null>(null);

  const paso = !sede ? 1 : !programa ? 2 : !jornada ? 3 : 4;

  const reiniciar = () => {
    setSede(null);
    setPrograma(null);
    setJornada(null);
  };

  const atras = () => {
    if (jornada) setJornada(null);
    else if (programa) setPrograma(null);
    else setSede(null);
  };

  const registrarClic = () => {
    // Si el sitio tiene el Pixel de Meta o Google Analytics, queda registrado como contacto
    const w = window as unknown as Rastreo;
    w.fbq?.('track', 'Contact', { content_name: programa?.corto, content_category: sede?.ciudad });
    w.gtag?.('event', 'orientador_whatsapp', { programa: programa?.id, sede: sede?.id });
  };

  const opcion =
    'w-full rounded-xl border border-white/15 bg-white/5 p-4 text-left text-sm font-medium text-white transition hover:border-gold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

  return (
    <section
      id="orientador"
      aria-labelledby="orientador-titulo"
      className="mx-auto my-16 max-w-3xl scroll-mt-24 rounded-3xl bg-primary p-6 text-white shadow-xl sm:p-10"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="section-label">Orientador vocacional</span>
        {paso <= PASOS && (
          <span className="text-xs text-white/60">
            Paso {paso} de {PASOS}
          </span>
        )}
      </div>

      <div aria-live="polite">
        {paso === 1 && (
          <>
            <h2 id="orientador-titulo" className="mb-2 text-3xl font-bold text-white">
              ¿Qué técnico laboral va contigo?
            </h2>
            <p className="mb-6 text-sm text-white/75">Responde 3 preguntas. Primero: ¿dónde te queda más fácil estudiar?</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {SEDES.map((s) => (
                <button key={s.id} type="button" className={opcion} onClick={() => setSede(s)}>
                  <span className="block font-bold">{s.ciudad}</span>
                  <span className="block text-xs text-white/65">{s.zona}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {paso === 2 && (
          <>
            <h2 id="orientador-titulo" className="mb-5 text-2xl font-bold text-white">
              ¿En qué te gustaría trabajar?
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PROGRAMAS.map((p) => (
                <button key={p.id} type="button" className={opcion} onClick={() => setPrograma(p)}>
                  {p.interes}
                </button>
              ))}
            </div>
          </>
        )}

        {paso === 3 && (
          <>
            <h2 id="orientador-titulo" className="mb-5 text-2xl font-bold text-white">
              ¿En qué horario puedes estudiar?
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {JORNADAS.map((j) => (
                <button key={j} type="button" className={opcion} onClick={() => setJornada(j)}>
                  {j}
                </button>
              ))}
            </div>
          </>
        )}

        {paso === 4 && sede && programa && jornada && (
          <div>
            <p className="section-label mb-1">Tu programa</p>
            <h2 id="orientador-titulo" className="mb-3 text-3xl font-bold text-white">
              {programa.nombre}
            </h2>
            <p className="mb-4 text-sm text-white/85">{programa.porQue}</p>
            <dl className="mb-6 grid gap-2 rounded-xl bg-white/5 p-4 text-sm">
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Sede:</dt>
                <dd className="text-white/80">{sede.ciudad}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Horario:</dt>
                <dd className="text-white/80">{jornada}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Dónde puedes trabajar:</dt>
                <dd className="text-white/80">{programa.dondeTrabaja}</dd>
              </div>
            </dl>
            <a
              href={urlWhatsApp(programa, sede, jornada)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={registrarClic}
              className="block w-full rounded-xl bg-[#25D366] px-5 py-4 text-center text-sm font-bold text-white transition hover:brightness-110"
            >
              Pedir información y agendar visita por WhatsApp
            </a>
            <p className="mt-2 text-center text-xs text-white/55">Te responde la sede {sede.ciudad}.</p>
          </div>
        )}
      </div>

      {paso > 1 && (
        <div className="mt-6 flex justify-between text-xs">
          <button type="button" onClick={atras} className="text-white/70 underline-offset-4 hover:underline">
            ← Atrás
          </button>
          <button type="button" onClick={reiniciar} className="text-white/70 underline-offset-4 hover:underline">
            Empezar de nuevo
          </button>
        </div>
      )}
    </section>
  );
}
