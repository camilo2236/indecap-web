import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GeoSchema from "@/components/geo/GeoSchema";

const newsreader = Newsreader({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://indecap.edu.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "INDECAP — Instituto de Ciencias Aplicadas | Más de 38 años formando Antioquia",
    template: "%s | INDECAP — Instituto de Ciencias Aplicadas",
  },
  description:
    "Corporación Educativa INDECAP — más de 38 años formando técnicos laborales en Antioquia. 35.000+ egresados. 16 programas técnicos laborales. Programas en enfermería, cosmetología, veterinaria, farmacia, salud oral y más. Sedes en Medellín, Envigado y Caldas.",
  keywords: [
    "INDECAP", "técnico laboral Medellín", "auxiliar enfermería Medellín",
    "cosmetología Medellín", "veterinaria Medellín", "farmacia Medellín",
    "salud oral Medellín", "educación técnica Antioquia", "programas técnicos Envigado",
    "programas técnicos Caldas", "bachillerato adultos Medellín",
    "cursos enfermería", "instituto ciencias aplicadas", "INDECAP Medellín",
  ],
  authors: [{ name: "Corporación Educativa INDECAP" }],
  openGraph: {
    title: "INDECAP — Más de 38 años formando el talento de Antioquia",
    description: "Más de 38 años, 35.000+ egresados y 16 programas técnicos laborales. 3 sedes: Medellín, Envigado y Caldas.",
    locale: "es_CO",
    type: "website",
    siteName: "INDECAP — Instituto de Ciencias Aplicadas",
    url: BASE_URL,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "INDECAP" }],
  },
  // Permite a Google, Gemini, ChatGPT Search y Perplexity citar fragmentos completos y mostrar imágenes grandes
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// El schema de organización ahora sale de <GeoSchema /> (src/components/geo/GeoSchema.tsx),
// con los mismos datos que había aquí más sedes y programas.

const metaPixelScript = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3334450846719696');fbq('track','PageView');`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <GeoSchema />
        <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3334450846719696&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${newsreader.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
