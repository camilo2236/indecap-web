export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    id: "inscripciones-abiertas-2026",
    title: "¡Inscripciones abiertas para el primer semestre 2026!",
    excerpt:
      "Inicia tu formación técnica laboral con nosotros. Contamos con programas avalados por la Secretaría de Educación.",
    date: "2026-02-15",
    image: "/images/placeholder-news-1.jpg",
  },
  {
    id: "graduacion-2025",
    title: "Ceremonia de graduación promoción 2025",
    excerpt:
      "Más de 200 nuevos técnicos laborales se graduaron en nuestras tres sedes. ¡Felicitaciones a todos!",
    date: "2025-12-10",
    image: "/images/placeholder-news-2.jpg",
  },
  {
    id: "convenio-hospitalario",
    title: "Nuevo convenio con red hospitalaria",
    excerpt:
      "INDECAP firma convenio de prácticas con importantes centros hospitalarios de Bogotá y Cundinamarca.",
    date: "2025-11-20",
    image: "/images/placeholder-news-3.jpg",
  },
  {
    id: "cursos-cortos",
    title: "Nuevos cursos cortos disponibles",
    excerpt:
      "Ampliamos nuestra oferta con cursos de inyectología, primeros auxilios y cuidado del adulto mayor.",
    date: "2025-10-05",
    image: "/images/placeholder-news-4.jpg",
  },
];
