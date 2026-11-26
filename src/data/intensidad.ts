// Intensidad horaria de cada curso y diplomado (educación informal).
// Debe coincidir con lo registrado ante la Secretaría de Educación. Se cambia SOLO aquí.
export const INTENSIDAD: Record<string, string> = {
  "rcp": "20 horas",
  "inyectologia": "20 horas",
  "vacunacion": "20 horas",
  "toma-muestras": "20 horas",
  "primeros-auxilios": "20 horas",
  "codigo-fucsia": "20 horas",
  "calidad-humanizacion": "20 horas por curso",
  "excel": "20 horas por nivel",
  "word": "20 horas",
  "peluqueria-canina": "120 horas",
  "peluqueria-estetica-canina": "120 horas"
};

export const textoIntensidad = (slug: string): string | undefined => INTENSIDAD[slug];
