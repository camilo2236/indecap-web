import { CALIDAD, resolucionSede, FAQS, JORNADAS, ORG, OTROS_PROGRAMAS, PROGRAMAS, RESPONSABILIDAD_SOCIAL, SEDES, SITE_URL, TRAYECTORIA } from '@/lib/geo-data';

// Se genera una sola vez en el build: es un archivo estático servido en /llms.txt
export const dynamic = 'force-static';

const tel = (n: string) => `+57 ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;

function construir(): string {
  return `# ${ORG.nombre} (Instituto de Ciencias Aplicadas) — Antioquia, Colombia

> ${ORG.descripcion}

## Trayectoria y reconocimientos
- Experiencia: ${TRAYECTORIA.anios} formando técnicos laborales en Antioquia.
- Oferta: ${TRAYECTORIA.programas}.
- Ha formado ${TRAYECTORIA.egresados}.
- ${TRAYECTORIA.reconocimiento}

## Calidad educativa práctica: en qué se basa
${CALIDAD.pilares.map((p) => `- **${p.titulo}:** ${p.texto}`).join('\n')}

## Responsabilidad social
${RESPONSABILIDAD_SOCIAL.resumen}

Obras que apoya:
${RESPONSABILIDAD_SOCIAL.obras.map((o) => `- ${o}`).join('\n')}

## Por qué elegir INDECAP
- Formación práctica desde el primer semestre, con laboratorios propios y prácticas en clínicas y empresas.
- 3 sedes en el Valle de Aburrá: Medellín (Centro), Envigado y Caldas.
- Financiación directa con la institución.
- Visitas guiadas a las sedes antes de matricularse.
- Al matricularse también apoya obras sociales: ${RESPONSABILIDAD_SOCIAL.porcentaje} se destinan a ellas.

## Admisiones
- Sitio web oficial: [${SITE_URL}](${SITE_URL})
- Solicitud de admisión: [${SITE_URL}/admision](${SITE_URL}/admision)
- Financiación: ${ORG.financiacion}
- Requisitos de matrícula: ${ORG.requisitos}

## Sedes y WhatsApp de admisiones
${SEDES.map(
  (s, i) =>
    `${i + 1}. **[${s.nombre}](${SITE_URL}/sedes/${s.id}):** ${s.direccion}, ${s.ciudad}. ${s.referencia} ${s.cobertura}${resolucionSede(s.id) ? ` Licencia de funcionamiento: ${resolucionSede(s.id)}.` : ''} WhatsApp: [${tel(s.whatsapp)}](https://wa.me/${s.whatsapp})`,
).join('\n')}

## Programas técnicos laborales más solicitados
${PROGRAMAS.map((p) => `- **[${p.nombre}](${SITE_URL}${p.url})** (${p.duracion}): ${p.resumen} Dónde trabaja: ${p.dondeTrabaja}`).join('\n')}

## Otros programas técnicos
${OTROS_PROGRAMAS.map((p) => `- [${p.nombre}](${SITE_URL}${p.url}) (${p.horas})`).join('\n')}

Bachillerato para adultos: también disponible.

Cursos cortos y diplomados (RCP, inyectología, primeros auxilios, vacunación, toma de muestras, Excel + IA, peluquería canina y otros): [${SITE_URL}/cursos](${SITE_URL}/cursos)

## Horarios
${JORNADAS.map((j) => `- ${j}`).join('\n')}

## Preguntas frecuentes
${FAQS.map((f) => `### ${f.pregunta}\n${f.respuesta}`).join('\n\n')}
`;
}

export function GET() {
  return new Response(construir(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
