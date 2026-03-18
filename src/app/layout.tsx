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

export const metadata: Metadata = {
  title: {
    default: "INDECAP — Instituto de Ciencias Aplicadas | 40 Años Formando Antioquia",
    template: "%s | INDECAP — Instituto de Ciencias Aplicadas",
  },
  description:
    "Corporación Educativa INDECAP — 40 años formando técnicos laborales en Antioquia. 25.000+ egresados. Programas en enfermería, cosmetología, veterinaria, farmacia, salud oral y más. Sedes en Medellín, Envigado, Caldas, Segovia, Amalfi y Betulia.",
  keywords: [
    "INDECAP", "técnico laboral Medellín", "auxiliar enfermería Medellín",
    "cosmetología Medellín", "veterinaria Medellín", "farmacia Medellín",
    "salud oral Medellín", "educación técnica Antioquia", "programas técnicos Envigado",
    "programas técnicos Caldas", "bachillerato adultos Medellín",
    "cursos enfermería", "instituto ciencias aplicadas",
  ],
  authors: [{ name: "Corporación Educativa INDECAP" }],
  openGraph: {
    title: "INDECAP — 40 Años Formando el Talento de Antioquia",
    description:
      "25.000+ egresados. 16 programas técnicos laborales avalados por la Secretaría de Educación. Sedes en Medellín, Envigado y Caldas.",
    locale: "es_CO",
    type: "website",
    siteName: "INDECAP — Instituto de Ciencias Aplicadas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
