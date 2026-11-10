import { permanentRedirect } from "next/navigation";

// Esta página tenía el mismo contenido que /cursos/peluqueria-canina.
// Se deja una sola dirección oficial para que Google no las vea como duplicadas.
export default function Page() {
  permanentRedirect("/cursos/peluqueria-canina");
}
