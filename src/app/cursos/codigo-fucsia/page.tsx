import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("codigo-fucsia", "Curso Código Fucsia · 20 horas certificadas");

export default function Page() {
  const course = getShortCourseBySlug("codigo-fucsia");
  return <ShortCoursePage course={course} />;
}
