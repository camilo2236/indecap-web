// src/lib/seo.ts
// Metadatos de cada página en un solo formato: título, descripción,
// dirección oficial (canónica), Open Graph y Twitter.
// El título NO lleva "INDECAP": la plantilla del layout raíz lo agrega
// ("%s | INDECAP"), así Google no muestra la marca dos veces.

import type { Metadata } from "next";

export const SITE_URL = "https://indecap.edu.co";
const OG_DEFAULT = "/images/og-image.jpg";

type PageMetaInput = {
  path: string; // ruta canónica, empezando por "/": "/programas/enfermeria"
  title: string;
  description: string;
  image?: string; // imagen para compartir; por defecto la general de INDECAP
  // true solo en layouts de sección (/programas, /noticias): así sus páginas
  // internas siguen recibiendo " | INDECAP" al final del título.
  esSeccion?: boolean;
};

export function pageMeta({ path, title, description, image, esSeccion }: PageMetaInput): Metadata {
  // Imagen al compartir el enlace (WhatsApp, Facebook…): la foto propia de la página,
  // pasada por el optimizador de imágenes de Next para que llegue a 1200 px de ancho y
  // liviana. WhatsApp no muestra la miniatura si la imagen pesa más de unos 300 KB, y
  // varias fotos originales pesan más de 1 MB.
  const img = image ? `/_next/image?url=${encodeURIComponent(image)}&w=1200&q=75` : OG_DEFAULT;
  const images = image
    ? [{ url: img, width: 1200, alt: title }]
    : [{ url: img, width: 1200, height: 630, alt: title }];

  return {
    title: esSeccion ? { default: `${title} | INDECAP`, template: "%s | INDECAP" } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "es_CO",
      siteName: "INDECAP — Instituto de Ciencias Aplicadas",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}

// Páginas privadas o de trámite: Google puede leerlas, pero no las muestra.
// (Si se bloquean en robots.txt, Google no alcanza a ver esta orden.)
export const NOINDEX: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};