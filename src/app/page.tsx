import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Courses } from "@/components/sections/Courses";
import { Partners } from "@/components/sections/Partners";
import { News } from "@/components/sections/News";
import { About } from "@/components/sections/About";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Bachillerato } from "@/components/sections/Bachillerato";

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <Courses />
      <Partners />
      <News />
      <About />
      <CtaFinal />
      <Bachillerato />
    </main>
  );
}
