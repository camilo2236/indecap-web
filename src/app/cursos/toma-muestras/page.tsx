import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("toma-muestras", "Curso de Toma de Muestras de Laboratorio Clínico");

export default function Page() {
  const course = getShortCourseBySlug("toma-muestras");
  return <ShortCoursePage course={course} />;
}
