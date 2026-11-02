import { CALIDAD, resolucionSede, ORG, PROGRAMAS, SEDES, SITE_URL, TRAYECTORIA } from '@/lib/geo-data';

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
        image: `${SITE_URL}${ORG.imagen}`,
        telephone: ORG.telefono,
        email: ORG.email,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: ORG.telefono,
          email: ORG.email,
          availableLanguage: 'es',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: SEDES.find((s) => s.id === 'envigado')!.direccion,
          addressLocality: 'Envigado',
          addressRegion: 'Antioquia',
          addressCountry: 'CO',
        },
        description: ORG.descripcion,
        slogan: CALIDAD.lema,
        award: [TRAYECTORIA.reconocimiento],
        knowsAbout: ['Educación para el Trabajo y el Desarrollo Humano', 'Técnicos laborales en salud', 'Enfermería', 'Veterinaria', 'Cosmetología', 'Servicios farmacéuticos', 'Salud oral', 'Responsabilidad social'],
        areaServed: ['Medellín', 'Envigado', 'Caldas', 'Itagüí', 'Sabaneta', 'La Estrella', 'Bello', 'Valle de Aburrá', 'Antioquia'],
        sameAs: ['https://www.instagram.com/instindecap/'],
        department: SEDES.map((s) => ({
          '@type': 'EducationalOrganization',
          '@id': `${SITE_URL}/#sede-${s.id}`,
          name: `${ORG.nombreCorto} ${s.nombre}`,
          url: `${SITE_URL}/sedes/${s.id}`,
          image: `${SITE_URL}${ORG.imagen}`,
          telephone: `+${s.whatsapp}`,
          ...(s.email ? { email: s.email } : {}),
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'admissions',
            telephone: `+${s.whatsapp}`,
            availableLanguage: 'es',
            url: `https://wa.me/${s.whatsapp}`,
          },
          description: `${s.referencia} ${s.cobertura}${resolucionSede(s.id) ? ` Licencia de funcionamiento: ${resolucionSede(s.id)}.` : ''}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: s.direccion,
            addressLocality: s.ciudad,
            addressRegion: 'Antioquia',
            addressCountry: 'CO',
          },
          ...(s.geo ? { geo: { '@type': 'GeoCoordinates', latitude: s.geo.lat, longitude: s.geo.lng } } : {}),
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Programas técnicos laborales ${ORG.nombreCorto}`,
          itemListElement: PROGRAMAS.map((p) => ({
            '@type': 'Course',
            name: p.nombre,
            url: `${SITE_URL}${p.url}`,
            description: `${p.resumen} Duración: ${p.duracion}.`,
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
