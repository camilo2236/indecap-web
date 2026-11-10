import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("peluqueria-canina", "Diplomado en Peluquería Canina · Medellín y Caldas");
export default function Page() {
  const course = getShortCourseBySlug("peluqueria-canina");
  return <ShortCoursePage course={course} />;
}
