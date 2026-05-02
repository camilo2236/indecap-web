import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";

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
const META_PIXEL_ID = "3334450846719696";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "INDECAP — Instituto de Ciencias Aplicadas | 40 Años Formando Antioquia",
    template: "%s | INDECAP — Instituto de Ciencias Aplicadas",
  },
  description:
    "Corporación Educativa INDECAP — 40 años formando técnicos laborales en Antioquia. 35.000+ egresados. Programas en enfermería, cosmetología, veterinaria, farmacia, salud oral y más. Sedes en Medellín, Envigado y Caldas.",
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
    description: "35.000+ egresados. 16 programas técnicos laborales. Sedes en Medellín, Envigado y Caldas.",
    locale: "es_CO",
    type: "website",
    siteName: "INDECAP — Instituto de Ciencias Aplicadas",
    url: BASE_URL,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "INDECAP" }],
  },
  robots: { index: true, follow: true },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Corporación Educativa INDECAP",
      "url": BASE_URL,
      "logo": `${BASE_URL}/images/logo.png`,
      "foundingDate": "1986",
      "telephone": "+576044484794",
      "email": "indecap@indecap.edu.co",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "INDECAP — Instituto de Ciencias Aplicadas",
      "inLanguage": "es-CO",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${newsreader.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1" width="1" style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
