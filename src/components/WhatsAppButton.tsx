"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573174342783"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-250 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
