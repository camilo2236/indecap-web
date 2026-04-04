// ─────────────────────────────────────────────────────────────────────────────
// INDECAP — Configuración central de WhatsApp
// Todos los números y mensajes del sitio se manejan desde aquí.
// Para cambiar un número o mensaje, solo modifica este archivo.
// ─────────────────────────────────────────────────────────────────────────────

export const CONTACTS = {
  CURSOS:    "573167405680",   // Vanesa — Coordinación de Cursos Cortos
  ENVIGADO:  "573174342783",   // Sede Envigado (Atención Principal)
  MEDELLIN:  "573022389760",   // Sede Medellín
  CALDAS:    "573008948517",   // Sede Caldas
  PRINCIPAL: "573174342783",   // Línea principal (Envigado)
};

// ─────────────────────────────────────────────────────────────────────────────
// MENSAJES PREDETERMINADOS
// ─────────────────────────────────────────────────────────────────────────────

export const WA_MESSAGES = {
  inscripcion: (nombre: string, programa: string, sede: string) =>
    `Hola INDECAP, soy ${nombre} y acabo de enviar mi solicitud de inscripción para ${programa} en la sede ${sede}. Quedo atento a su contacto.`,

  programa: (programa: string, sede: string) =>
    `Hola INDECAP, estoy interesado en el programa ${programa} en la ${sede}. ¿Me pueden dar más información sobre fechas, horarios y costos?`,

  selectorSede: (programa: string, sede: string) =>
    `Hola INDECAP, quiero información para matricularme en ${programa} en la ${sede}. ¿Me pueden orientar?`,

  curso: (curso: string) =>
    `Hola INDECAP, estoy interesado en el curso de ${curso}. ¿Me pueden dar información sobre fechas, horarios y valor?`,

  general: () =>
    `Hola INDECAP, quiero información sobre los programas técnicos. ¿Me pueden orientar?`,

  contacto: (sede: string) =>
    `Hola INDECAP, me comunico desde la página de contacto y quiero información sobre los programas disponibles en la ${sede}.`,

  sedeMedellin: () =>
    `Hola INDECAP Medellín, quiero información sobre los programas disponibles en la sede del centro. ¿Me pueden orientar?`,

  sedeEnvigado: () =>
    `Hola INDECAP Envigado, quiero información sobre los programas disponibles en la sede de Envigado. ¿Me pueden orientar?`,

  sedeCaldas: () =>
    `Hola INDECAP Caldas, quiero información sobre los programas disponibles en la sede de Caldas. ¿Me pueden orientar?`,

  bachillerato: () =>
    `Hola INDECAP, estoy interesado en el Bachillerato Semi Escolarizado para adultos. ¿Me pueden dar información sobre el proceso de inscripción?`,

  inscripcionGeneral: () =>
    `Hola INDECAP, quiero inscribirme en uno de sus programas técnicos. ¿Me pueden orientar sobre el proceso?`,
};

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN HELPER
// ─────────────────────────────────────────────────────────────────────────────
export function waUrl(numero: string, mensaje: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

// URLs predefinidas — cursos siempre van a Vanesa (CURSOS)
export const WA_URLS = {
  medellin:     (msg?: string) => waUrl(CONTACTS.MEDELLIN,  msg ?? WA_MESSAGES.sedeMedellin()),
  envigado:     (msg?: string) => waUrl(CONTACTS.ENVIGADO,  msg ?? WA_MESSAGES.sedeEnvigado()),
  caldas:       (msg?: string) => waUrl(CONTACTS.CALDAS,    msg ?? WA_MESSAGES.sedeCaldas()),
  cursos:       (msg?: string) => waUrl(CONTACTS.CURSOS,    msg ?? WA_MESSAGES.general()),
  principal:    (msg?: string) => waUrl(CONTACTS.PRINCIPAL, msg ?? WA_MESSAGES.general()),
  bachillerato: ()             => waUrl(CONTACTS.MEDELLIN,  WA_MESSAGES.bachillerato()),
  general:      ()             => waUrl(CONTACTS.PRINCIPAL, WA_MESSAGES.inscripcionGeneral()),
};