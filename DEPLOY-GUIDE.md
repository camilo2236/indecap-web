# INDECAP — Guía de Deploy

## Requisitos previos (instalar una sola vez)

1. **Node.js** — Descarga desde https://nodejs.org (versión LTS)
2. **Git** — Descarga desde https://git-scm.com/downloads
3. Tener acceso al repositorio de GitHub que Camilo te compartió

## Pasos para deployar

### 1. Clonar el repositorio (solo la primera vez)

Abre una terminal (PowerShell en Windows, Terminal en Mac) y ejecuta:

```bash
git clone https://github.com/USUARIO/NOMBRE-DEL-REPO.git
cd NOMBRE-DEL-REPO
```

> Reemplaza `USUARIO/NOMBRE-DEL-REPO` con la URL real del repositorio.
> La puedes encontrar en GitHub → botón verde "Code" → copiar la URL.

### 2. Reemplazar los archivos

- Borra TODO el contenido de la carpeta del repo (excepto la carpeta `.git`)
- Copia TODO el contenido de este ZIP dentro de la carpeta del repo

### 3. Instalar dependencias

```bash
npm install
```

### 4. Probar que compila (¡ESTE ES EL PASO CLAVE!)

```bash
npm run build
```

Si ves errores rojos, NO subas a GitHub. Copia el error y compártelo conmigo para arreglarlo.

Si ves un mensaje verde que dice "✓ Compiled successfully", estás listo.

### 5. Subir a GitHub

```bash
git add .
git commit -m "feat: actualizar página web INDECAP"
git push origin main
```

> Si el branch se llama `master` en vez de `main`, usa:
> `git push origin master`

### 6. Verificar en Vercel

Vercel detecta automáticamente el push y hace un nuevo deploy.
Ve a tu dashboard de Vercel y espera a que el status cambie a ✅ verde.

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx              ← Página principal (Home)
│   ├── layout.tsx            ← Layout global (Header + Footer)
│   └── programas/
│       ├── enfermeria/       ← Página de Enfermería
│       ├── cosmetologia/     ← Página de Cosmetología
│       ├── veterinaria/      ← Página de Veterinaria
│       ├── farmacia/         ← Página de Farmacéuticos
│       ├── salud-oral/       ← Página de Salud Oral
│       ├── peluqueria-canina/← Página de Peluquería Canina
│       └── excel-ia/         ← Página de Excel + IA
├── components/
│   ├── ProgramPage.tsx       ← Componente reutilizable de programa
│   ├── layout/Header.tsx     ← Navegación global
│   ├── layout/Footer.tsx     ← Footer global
│   └── sections/             ← Secciones del Home
└── data/                     ← Datos de programas, sedes, cursos
```

## Solución de problemas comunes

**Error: "Failed to deploy"**
→ Siempre ejecuta `npm run build` antes de hacer push.

**Error: "@next/next/no-img-element"**
→ Agrega `{/* eslint-disable-next-line @next/next/no-img-element */}` justo antes de cada `<img>`.

**Error: "Module not found"**
→ Ejecuta `npm install` de nuevo.

**"No tengo acceso para hacer push"**
→ Pídele a Camilo que te agregue como Collaborator en GitHub → Settings → Collaborators.
