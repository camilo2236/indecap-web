// src/lib/track.ts
// Un solo punto para registrar conversiones en todas las plataformas.
// Meta (fbq) siempre está; TikTok (ttq) y Google (gtag) solo si sus IDs
// están configurados en Vercel. Si una plataforma no está, se ignora.

type Params = Record<string, string | number | undefined>;

type Ventana = Window & {
  fbq?: (...args: unknown[]) => void;
  ttq?: { track: (evento: string, params?: Params) => void };
  gtag?: (...args: unknown[]) => void;
};

const CLAVE_ORIGEN = "indecap_origen";

export function track(evento: "Lead" | "Contact", params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as Ventana;
  try {
    w.fbq?.("track", evento, params);
    w.ttq?.track(evento === "Lead" ? "SubmitForm" : "Contact", params);
    w.gtag?.("event", evento === "Lead" ? "generate_lead" : "contact", params);
  } catch {
    // El registro nunca debe romper un formulario
  }
}

// Guarda de dónde llegó la persona la primera vez en esta visita
// (utm de los anuncios, clic de Meta/Google/TikTok o la página que la envió).
export function guardarOrigen() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(CLAVE_ORIGEN)) return;
    const q = new URLSearchParams(window.location.search);
    const partes: string[] = [];
    const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
      .map((k) => q.get(k))
      .filter(Boolean);
    if (utm.length) partes.push(utm.join(" / "));
    if (q.get("fbclid")) partes.push("clic Meta");
    if (q.get("gclid")) partes.push("clic Google Ads");
    if (q.get("ttclid")) partes.push("clic TikTok");
    if (!partes.length) {
      const ref = document.referrer ? new URL(document.referrer).hostname : "";
      if (ref && !ref.endsWith("indecap.edu.co")) {
        partes.push(/google\./.test(ref) ? "Google (orgánico)" : ref.replace(/^www\./, ""));
      } else {
        partes.push("Directo");
      }
    }
    partes.push(`entró por ${window.location.pathname}`);
    sessionStorage.setItem(CLAVE_ORIGEN, partes.join(" · ").slice(0, 180));
  } catch {
    // sessionStorage puede estar bloqueado (navegación privada): no pasa nada
  }
}

export function getOrigen(): string {
  if (typeof window === "undefined") return "";
  try {
    return sessionStorage.getItem(CLAVE_ORIGEN) ?? "";
  } catch {
    return "";
  }
}
