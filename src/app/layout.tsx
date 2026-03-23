import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://indecap-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "INDECAP — Instituto de Ciencias Aplicadas | 40 Años Formando Antioquia",
    template: "%s | INDECAP — Instituto de Ciencias Aplicadas",
  },
  description:
    "Corporación Educativa INDECAP — 40 años formando técnicos laborales en Antioquia. 25.000+ egresados. Programas en enfermería, cosmetología, veterinaria, farmacia, salud oral y más. Sedes en Medellín, Envigado y Caldas.",
  keywords: [
    "INDECAP", "técnico laboral Medellín", "auxiliar enfermería Medellín",
    "cosmetología Medellín", "veterinaria Medellín", "farmacia Medellín",
    "salud oral Medellín", "educación técnica Antioquia", "programas técnicos Envigado",
    "programas técnicos Caldas", "bachillerato adultos Medellín",
    "cursos enfermería", "instituto ciencias aplicadas", "INDECAP Medellín",
  ],
  authors: [{ name: "Corporación Educativa INDECAP" }],
  openGraph: {
    title: "INDECAP — 40 Años Formando el Talento de Antioquia",
    description:
      "25.000+ egresados. 16 programas técnicos laborales avalados por la Secretaría de Educación. Sedes en Medellín, Envigado y Caldas.",
    locale: "es_CO",
    type: "website",
    siteName: "INDECAP — Instituto de Ciencias Aplicadas",
    url: BASE_URL,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INDECAP — Instituto de Ciencias Aplicadas, 40 años formando el talento de Antioquia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INDECAP — 40 Años Formando el Talento de Antioquia",
    description: "25.000+ egresados. 16 programas técnicos. Sedes en Medellín, Envigado y Caldas.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// Schema.org JSON-LD
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Corporación Educativa INDECAP",
      "alternateName": "INDECAP — Instituto de Ciencias Aplicadas",
      "url": BASE_URL,
      "logo": `${BASE_URL}/images/logo.png`,
      "image": `${BASE_URL}/images/og-image.jpg`,
      "description": "Institución de educación para el trabajo y el desarrollo humano con 40 años de experiencia en Antioquia. 25.000+ egresados formados en programas técnicos laborales.",
      "foundingDate": "1986",
      "telephone": "+576044484794",
      "email": "indecap@indecap.edu.co",
      "sameAs": [
        "https://www.facebook.com/indecapedu/",
        "https://www.instagram.com/instindecap/",
        "https://www.youtube.com/channel/UCDqQs0jzf-Zy-nsCBFnLmEA",
      ],
      "location": [
        {
          "@type": "Place",
          "name": "Sede Medellín",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cl. 56 # 45-26",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "addressCountry": "CO",
          },
        },
        {
          "@type": "Place",
          "name": "Sede Envigado",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cl 37 Sur #43A-84",
            "addressLocality": "Envigado",
            "addressRegion": "Antioquia",
            "addressCountry": "CO",
          },
        },
        {
          "@type": "Place",
          "name": "Sede Caldas",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle 130 sur # 51-65",
            "addressLocality": "Caldas",
            "addressRegion": "Antioquia",
            "addressCountry": "CO",
          },
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Programas Técnicos Laborales INDECAP",
        "itemListElement": [
          { "@type": "Course", "name": "Auxiliar en Enfermería", "url": `${BASE_URL}/programas/enfermeria` },
          { "@type": "Course", "name": "Cosmetología y Estética Integral", "url": `${BASE_URL}/programas/cosmetologia` },
          { "@type": "Course", "name": "Auxiliar en Veterinaria", "url": `${BASE_URL}/programas/veterinaria` },
          { "@type": "Course", "name": "Auxiliar Administrativo en Salud", "url": `${BASE_URL}/programas/administrativo-salud` },
          { "@type": "Course", "name": "Servicios Farmacéuticos", "url": `${BASE_URL}/programas/farmacia` },
          { "@type": "Course", "name": "Auxiliar en Salud Oral", "url": `${BASE_URL}/programas/salud-oral` },
          { "@type": "Course", "name": "Seguridad y Salud en el Trabajo", "url": `${BASE_URL}/programas/sst` },
          { "@type": "Course", "name": "Auxiliar Contable", "url": `${BASE_URL}/programas/contable` },
          { "@type": "Course", "name": "Auxiliar en Mercadeo", "url": `${BASE_URL}/programas/mercadeo` },
          { "@type": "Course", "name": "Asistente en Talento Humano", "url": `${BASE_URL}/programas/talento-humano` },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "INDECAP — Instituto de Ciencias Aplicadas",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "es-CO",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}