import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Testimonios } from "@/components/sections/Testimonios";
import { Courses } from "@/components/sections/Courses";
import { Partners } from "@/components/sections/Partners";
import { News } from "@/components/sections/News";
import { About } from "@/components/sections/About";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Bachillerato } from "@/components/sections/Bachillerato";
import VocationalFunnel from "@/components/geo/VocationalFunnel";
import GeoAuthoritySection from "@/components/geo/GeoAuthoritySection";

// Dirección oficial del inicio (el layout no la define para no heredarla a otras páginas)
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <div className="px-4">
        <VocationalFunnel />
      </div>
      <Testimonios />
      <Courses />
      <Partners />
      <News />
      <About />
      <GeoAuthoritySection />
      <CtaFinal />
      <Bachillerato />
    </main>
  );
}
