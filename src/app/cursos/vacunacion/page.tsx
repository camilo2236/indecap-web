import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("vacunacion", "Curso de Vacunación · Certificado el mismo día");

export default function Page() {
  const course = getShortCourseBySlug("vacunacion");
  return <ShortCoursePage course={course} />;
}
