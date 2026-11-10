import { ShortCoursePage } from "@/components/cursos/ShortCoursePage";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { courseMeta } from "@/lib/courseMeta";

export const metadata = courseMeta("excel", "Cursos de Excel · Básico, intermedio y avanzado");
export default function Page() {
  const course = getShortCourseBySlug("excel");
  return <ShortCoursePage course={course} />;
}
