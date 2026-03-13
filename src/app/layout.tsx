import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INDECAP — Instituto de Ciencias Aplicadas",
  description:
    "Formación técnica laboral avalada por la Secretaría de Educación. Programas en enfermería, salud oral, farmacia, primera infancia y más. Sedes en Bogotá, Soacha y Girardot.",
  openGraph: {
    title: "INDECAP — Instituto de Ciencias Aplicadas",
    description:
      "Formación técnica laboral avalada por la Secretaría de Educación en Bogotá, Soacha y Girardot.",
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
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
