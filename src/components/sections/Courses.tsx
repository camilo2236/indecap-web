"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courses } from "@/data/courses";

export function Courses() {
  return (
    <section id="cursos" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Formación Complementaria</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Cursos y Diplomados
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Fortalece tus competencias con nuestros cursos de corta duración y
            diplomados especializados.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {courses.map((course) => (
                <CarouselItem
                  key={course.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-[16px] border border-[#E4F1F6] bg-white p-6 transition-shadow hover:shadow-lg">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#080F14]">
                      {course.name}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                      {course.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block rounded-full bg-[#312783]/10 px-3 py-1 font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#312783]">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
