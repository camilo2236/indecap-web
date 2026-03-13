"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
    <section id="cursos" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Cursos y Diplomados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fortalece tus competencias con nuestros cursos de corta duración y
            diplomados especializados.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
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
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {course.duration}
                      </span>
                    </CardContent>
                  </Card>
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
