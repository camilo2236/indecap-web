"use client";
import { MessageCircle } from "lucide-react";
import { WA_URLS } from "@/config/contacts";

export function WhatsAppButton() {
  return (
    <a
      href={WA_URLS.envigado()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" aria-hidden="true" />
    </a>
  );
}