import { permanentRedirect } from "next/navigation";

// Peluquería canina es un diplomado: su página oficial está en /cursos.
export default function Page() {
  permanentRedirect("/cursos/peluqueria-canina");
}
