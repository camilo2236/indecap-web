import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("word", "Curso de Word básico y avanzado · Certificado el mismo día");
export default function Page() {
  const course = getShortCourseBySlug("word");
  return <ShortCoursePage course={course} />;
}
