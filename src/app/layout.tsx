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
  title: "INDECAP — Instituto de Ciencias Aplicadas",
  description:
    "Formación técnica laboral avalada por la Secretaría de Educación. Programas en enfermería, cosmetología, veterinaria, farmacéuticos y salud oral. Sedes en Medellín, Envigado y Caldas.",
  openGraph: {
    title: "INDECAP — Instituto de Ciencias Aplicadas",
    description:
      "Certifícate como Técnico Laboral en INDECAP. Formación real desde el primer día. Sedes en Medellín, Envigado y Caldas.",
    locale: "es_CO",
    type: "website",
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
