"use client";
// src/components/tracking/Tracking.tsx
// 1. Guarda el origen de la visita (anuncio, Google, Instagram…) para los formularios.
// 2. Registra como "Contacto" cada clic a WhatsApp en todo el sitio,
//    en Meta, TikTok y Google, sin tener que tocar cada botón.

import { useEffect } from "react";
import { guardarOrigen, track } from "@/lib/track";

export function Tracking() {
  useEffect(() => {
    guardarOrigen();

    const alClic = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!el?.href) return;
      if (el.dataset.noTrack !== undefined) return; // el componente ya lo registra
      if (!/wa\.me\/|api\.whatsapp\.com\//.test(el.href)) return;
      track("Contact", { content_name: window.location.pathname });
    };

    document.addEventListener("click", alClic, { capture: true });
    return () => document.removeEventListener("click", alClic, { capture: true });
  }, []);

  return null;
}
