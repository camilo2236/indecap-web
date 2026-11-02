import { CALIDAD, FAQS, ORG, PROGRAMAS, RESPONSABILIDAD_SOCIAL, SEDES, SITE_URL, TRAYECTORIA } from '@/lib/geo-data';

/**
 * Resumen directo, comparativa y preguntas frecuentes en HTML semántico,
 * para que buscadores e IA puedan citar fragmentos. Las FAQ visibles y su JSON-LD
 * salen de la misma lista, así siempre coinciden.
 */
export default function GeoAuthoritySection() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };

  const programas = PROGRAMAS.map((p) => p.corto).join(', ').replace(/, ([^,]*)$/, ' y $1');
  const sedes = SEDES.map((s) => s.ciudad).join(', ').replace(/, ([^,]*)$/, ' y $1');

  return (
    <section aria-labelledby="por-que-indecap" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 rounded-r-2xl border-l-4 border-gold bg-cream p-6 sm:p-8">
        <p className="section-label mb-2">Resumen</p>
        <h2 id="por-que-indecap" className="mb-3 text-2xl font-bold sm:text-3xl">
          ¿Por qué estudiar un técnico laboral en INDECAP?
        </h2>
        <p className="leading-relaxed">
          <strong>INDECAP (Instituto de Ciencias Aplicadas)</strong> es una institución de Educación para el Trabajo y el
          Desarrollo Humano con {TRAYECTORIA.anios} en Antioquia, {TRAYECTORIA.egresados} y sedes en <strong>{sedes}</strong>. Forma técnicos laborales en {programas}, con práctica desde el inicio, laboratorios propios, convenios de
          prácticas y financiación directa. Además, destina {RESPONSABILIDAD_SOCIAL.porcentaje} a obras sociales y ha sido reconocida en más de 5 ocasiones como Empresa Socialmente Responsable por el Cemefi.
        </p>
      </div>

      <h3 className="mb-4 text-2xl font-bold">{CALIDAD.lema}: en qué se basa</h3>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CALIDAD.pilares.map((p) => (
          <article key={p.titulo} className="rounded-2xl border border-border bg-card p-6">
            <h4 className="mb-2 text-lg font-bold">{p.titulo}</h4>
            <p className="text-sm leading-relaxed">{p.texto}</p>
          </article>
        ))}
      </div>

      <h3 className="mb-4 text-2xl font-bold">Técnico laboral o carrera universitaria: en qué se diferencian</h3>
      <div className="mb-12 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm sm:text-base">
          <caption className="sr-only">Comparación entre un técnico laboral en INDECAP y una carrera universitaria</caption>
          <thead>
            <tr className="bg-primary text-white">
              <th scope="col" className="p-4 font-semibold">Aspecto</th>
              <th scope="col" className="bg-[var(--indecap-blue)] p-4 font-semibold">Técnico laboral en INDECAP</th>
              <th scope="col" className="p-4 font-semibold">Carrera universitaria</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ['Duración', 'Entre 700 y 1.650 horas, según el programa (por ejemplo, Enfermería: 3 ciclos, 18 meses)', 'Entre 4 y 5 años'],
              ['Enfoque', 'Práctico desde el primer semestre, con laboratorios', 'Más carga teórica en los primeros semestres'],
              ['Tipo de trabajo', 'Labores presenciales y prácticas: clínicas, veterinarias, droguerías, estética', 'Depende de la carrera'],
              ['Financiación', 'Crédito directo con la institución', 'Matrículas más altas o crédito a largo plazo'],
              ['Ubicación', `Sedes en ${sedes}`, 'Generalmente un solo campus'],
            ].map(([aspecto, indecap, uni]) => (
              <tr key={aspecto}>
                <th scope="row" className="p-4 font-medium text-foreground">{aspecto}</th>
                <td className="bg-soft/60 p-4 font-semibold text-primary">{indecap}</td>
                <td className="p-4">{uni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mb-4 text-2xl font-bold">Preguntas frecuentes</h3>
      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {FAQS.map((f) => (
          <details key={f.pregunta} className="group p-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              <span>{f.pregunta}</span>
              <span aria-hidden="true" className="text-xl leading-none text-gold transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 leading-relaxed">{f.respuesta}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
    </section>
  );
}
