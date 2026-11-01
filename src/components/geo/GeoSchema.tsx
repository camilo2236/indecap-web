import { ORG, PROGRAMAS, SEDES, SITE_URL, TRAYECTORIA } from '@/lib/geo-data';

const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Datos para buscadores e IA: organización, sitio web, sedes y programas.
 * Reemplaza el schemaOrg que estaba escrito dentro de layout.tsx (conserva sus mismos datos e @id).
 */
export default function GeoSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': ORG_ID,
        name: ORG.nombre,
        alternateName: ORG.otrosNombres,
        url: SITE_URL,
        logo: `${SITE_URL}${ORG.logo}`,
        foundingDate: ORG.fundacion,
        telephone: ORG.telefono,
        email: ORG.email,
        description: ORG.descripcion,
        award: [TRAYECTORIA.reconocimiento],
        knowsAbout: ['Educación para el Trabajo y el Desarrollo Humano', 'Técnicos laborales en salud', 'Enfermería', 'Veterinaria', 'Cosmetología', 'Servicios farmacéuticos', 'Salud oral', 'Responsabilidad social'],
        areaServed: ['Medellín', 'Envigado', 'Caldas', 'Itagüí', 'Sabaneta', 'La Estrella', 'Bello', 'Valle de Aburrá', 'Antioquia'],
        sameAs: ['https://www.instagram.com/instindecap/'],
        department: SEDES.map((s) => ({
          '@type': 'EducationalOrganization',
          '@id': `${SITE_URL}/#sede-${s.id}`,
          name: `${ORG.nombreCorto} ${s.nombre}`,
          url: `${SITE_URL}/sedes/${s.id}`,
          telephone: `+${s.whatsapp}`,
          description: s.cobertura,
          address: {
            '@type': 'PostalAddress',
            addressLocality: s.ciudad,
            addressRegion: 'Antioquia',
            addressCountry: 'CO',
          },
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Programas técnicos laborales ${ORG.nombreCorto}`,
          itemListElement: PROGRAMAS.map((p) => ({
            '@type': 'Course',
            name: p.nombre,
            url: `${SITE_URL}${p.url}`,
            description: `${p.resumen} Duración: ${ORG.duracion}.`,
            provider: { '@id': ORG_ID },
            educationalCredentialAwarded: 'Certificado de Técnico Laboral por Competencias',
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'INDECAP — Instituto de Ciencias Aplicadas',
        inLanguage: 'es-CO',
        publisher: { '@id': ORG_ID },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Evita que un "</script>" dentro de un texto rompa el HTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
