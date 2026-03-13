import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Bachillerato } from "@/components/sections/Bachillerato";
import { Courses } from "@/components/sections/Courses";
import { Partners } from "@/components/sections/Partners";
import { News } from "@/components/sections/News";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <Bachillerato />
      <Courses />
      <Partners />
      <News />
      <About />
    </main>
  );
}
