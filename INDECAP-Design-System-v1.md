# Sistema de Diseño INDECAP v1
### Corporación Educativa · Instituto de Ciencias Aplicadas ®
> **Guía para la consistencia visual, implementación en WordPress y generación controlada de contenido con IA.**  
> Versión 1.0 — Febrero 2026 · Mantenido por: Camilo Rico

---

## Tabla de Contenidos

1. [Identidad de Marca](#1-identidad-de-marca)
2. [Paleta de Colores](#2-paleta-de-colores)
3. [Tipografía](#3-tipografía)
4. [Espaciado y Layout](#4-espaciado-y-layout)
5. [Colores por Programa](#5-colores-por-programa)
6. [Componentes Reutilizables](#6-componentes-reutilizables)
7. [Fotografía y Uso de Imágenes](#7-fotografía-y-uso-de-imágenes)
8. [Voz y Tono](#8-voz-y-tono)
9. [Contacto y CTAs Estandarizados](#9-contacto-y-ctas-estandarizados)
10. [Implementación en WordPress](#10-implementación-en-wordpress)
11. [Checklist de Calidad](#11-checklist-de-calidad)

---

## 1. Identidad de Marca

### Nombre oficial
```
Corporación Educativa INDECAP
Instituto de Ciencias Aplicadas ®
```

### Logo
- **Archivo:** `LOGO-AI.png` (cargado desde `indecap.edu.co/wp-content/uploads/2019/12/LOGO-AI.png`)
- **Uso correcto:** Siempre sobre fondo claro o con suficiente contraste
- **Altura mínima en web:** 44px en navbar, 60px en footer, 80px en hero
- **Versión blanca (invertida):** `filter: brightness(0) invert(1)` para fondos oscuros
- **Nunca:** Distorsionar, recortar, cambiar colores, colocar sobre fondos que no contrasten

### Eslogan institucional
> *"Calidad Educativa Certificada"*

---

## 2. Paleta de Colores

### Colores Corporativos Principales

| Token | Nombre | HEX | Uso |
|-------|--------|-----|-----|
| `--indecap-blue` | Azul INDECAP | `#312783` | Logo, títulos principales, nav activo |
| `--indecap-yellow` | Amarillo Identidad | `#FACC15` | Acentos, CTAs secundarios, badges |
| `--indecap-blue-dark` | Azul Oscuro | `#111627` | Fondos oscuros, footers |
| `--indecap-blue-mid` | Azul Medio | `#374151` | Texto secundario sobre fondos claros |
| `--indecap-border` | Borde Suave | `#E55E7B` | — (no usar en web, solo brand print) |

### Colores Neutros del Sistema

| Token | HEX | Uso |
|-------|-----|-----|
| `--white` | `#FFFFFF` | Fondos de tarjetas, texto sobre oscuro |
| `--cream` | `#F3F8FA` | Fondo base de páginas |
| `--soft` | `#E4F1F6` | Secciones alternadas claras |
| `--gray-text` | `#374151` | Cuerpo de texto principal |
| `--gray-light` | `#6B7280` | Texto de apoyo, subtítulos |
| `--dark` | `#080F14` | Fondos muy oscuros, overlays |

### Color de Énfasis

| Token | HEX | Uso |
|-------|-----|-----|
| `--gold` | `#F0A500` | Estadísticas, números hero, subrayados |
| `--gold-light` | `#FFD166` | Números sobre fondo oscuro |

---

## 3. Tipografía

### Fuentes del Sistema

| Fuente | Rol | Pesos | Importar desde |
|--------|-----|-------|----------------|
| **Playfair Display** | Títulos H1, H2, H3, números grandes | 400, 700, 900 (normal e italic) | Google Fonts |
| **DM Sans** | Cuerpo, botones, nav, labels | 300, 400, 500, 600, 700 | Google Fonts |

```html
<!-- Importar en <head> de cada página -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

> **Nota Camilo:** Montserrat e Inter de tu diseño v1 también funcionan. Playfair + DM Sans es la combinación que usamos en las 6 páginas ya construidas — recomiendo mantener consistencia.

### Escala Tipográfica

| Elemento | Fuente | Tamaño | Peso | Color |
|----------|--------|--------|------|-------|
| H1 Hero | Playfair Display | `clamp(2.6rem, 5vw, 4.2rem)` | 900 | white o `--dark` |
| H1 em (énfasis) | Playfair Display italic | heredado | 700 | color del programa |
| H2 Sección | Playfair Display | `clamp(1.8rem, 2.6vw, 2.5rem)` | 700 | `--dark` |
| Section Label | DM Sans | `0.73rem` | 700 | `--gold` |
| Body | DM Sans | `1rem` | 300 | `--gray-text` |
| Caption / Tag | DM Sans | `0.76–0.83rem` | 500–600 | variable |
| Botón | DM Sans | `0.88–1rem` | 600–700 | white |
| Stat / Número | Playfair Display | `1.9–2.2rem` | 700 | `--dark` o `--gold-light` |

---

## 4. Espaciado y Layout

### Sistema de Espaciado (múltiplos de 4px)
```
4px · 8px · 16px · 24px · 32px · 48px · 64px · 80px · 90px · 100px
```

### Grid del Sistema

| Contexto | Columnas | Gap | Padding lateral |
|----------|----------|-----|-----------------|
| Hero 2 columnas | `45% / 55%` ó `55% / 45%` | 0 | — |
| Sección 2 columnas | `1fr / 1fr` | `70–80px` | `80px` |
| Galería strip | `5–6 columnas` | `5px` | `5px` |
| Cards grid | `repeat(2–3, 1fr)` | `12–20px` | — |
| Pensum / features | `1fr / 1fr` | `80px` | `80px` |

### Breakpoint Mobile
```css
@media (max-width: 960px) {
  /* Todas las grids de 2 columnas colapsan a 1fr */
  /* padding lateral: 24px */
  /* section padding: 60px 24px */
}
```

### Border Radius del Sistema
```
4px  — inputs, tags pequeños
10px — items de lista
14px — tarjetas internas, badges
16px — tarjetas principales
20px — tarjetas hero / fotos
50px — botones (pill shape)
```

---

## 5. Colores por Programa

Cada programa tiene un color acento que lo identifica. Estos colores se aplican en: hero overlay, sección perfil, botones CTA, border-left de sedes, y CTA final.

| Programa | Color Acento | HEX Principal | HEX Oscuro | Razón |
|----------|-------------|---------------|------------|-------|
| **Enfermería** | Azul Institucional | `#1A5CA8` | `#0D3A6E` | Clínico, confiable, salud |
| **Cosmetología** | Azul + Rosa | `#1A5CA8` + `#C0305A` | `#8B1A3A` | Belleza, feminidad, creatividad |
| **Veterinaria** | Verde Natural | `#2A7A4B` | `#1A5A35` | Naturaleza, cuidado animal |
| **Farmacéuticos** | Teal Farmacia | `#0E7C7B` | `#085C5B` | Salud, precisión, confianza |
| **Salud Oral** | Azul Dental | `#0E6B8A` | `#084F68` | Clínico dental, profesional |
| **Mercadeo Digital** | (pendiente) | — | — | Propuesta: violeta/índigo |

### CSS Variables por Programa
Cada página de programa debe declarar estas variables al inicio:
```css
:root {
  --prog-color:      #[HEX principal];
  --prog-dark:       #[HEX oscuro];
  --prog-light:      #[HEX claro];
  --prog-pale:       #[HEX muy claro, fondo];
}
```

---

## 6. Componentes Reutilizables

### 6.1 Navbar Fija

**Comportamiento:** Fixed top, blur backdrop, sombra al hacer scroll (clase `.scrolled`).

```html
<nav id="navbar">
  <div class="nav-logo">
    <img src="[URL-LOGO]" alt="INDECAP">
  </div>
  <a href="/programas-tecnicos/" class="nav-back">← Todos los programas</a>
  <a href="[WHATSAPP-URL]" class="nav-cta">💬 Inscribirme ahora</a>
</nav>
```

```css
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  padding: 14px 48px;
  background: rgba(243,248,250,0.95);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba([R,G,B del programa], 0.12);
  transition: box-shadow 0.3s;
}
nav.scrolled { box-shadow: 0 4px 24px rgba(8,15,20,0.08); }
```

---

### 6.2 Hero de Programa — 3 Variantes

#### Variante A: Texto Izquierda / Foto Derecha (Enfermería)
```
| 45% texto | 55% foto |
```
- Foto: objeto completo, `object-position: center top`
- Usado en: Enfermería

#### Variante B: Foto Izquierda / Texto Derecha (Cosmetología, Farmacéuticos)
```
| 55% foto | 45% texto |
```
- Foto: con badge flotante superpuesto
- Usado en: Cosmetología, Farmacéuticos

#### Variante C: Hero Fullscreen con Overlay (Salud Oral)
```
foto 100vw con overlay oscuro gradiente + texto centrado
```
- Stats en panel translúcido con backdrop-filter
- Usado en: Salud Oral
- Ideal para programas con foto clínica muy impactante

#### Estructura base del texto hero:
```html
<div class="program-badge">🦷 Escuela de Salud Oral · INDECAP</div>
<h1>Técnico Laboral en <em>Salud Oral</em></h1>
<p class="hero-sub">[Propuesta de valor en 2–3 líneas]</p>
<div class="stats-row">
  <div class="stat"><div class="stat-num">1.650</div><div class="stat-label">Horas de formación</div></div>
  <div class="stat"><div class="stat-num">3</div><div class="stat-label">Semestres</div></div>
  <div class="stat"><div class="stat-num">3</div><div class="stat-label">Sedes</div></div>
</div>
<div class="cta-group">
  <a href="[WA-URL]" class="btn-primary">💬 Consultar por WhatsApp</a>
  <a href="#pensum" class="btn-ghost">Ver plan de estudios ↓</a>
</div>
```

---

### 6.3 Badge de Programa

```html
<div class="program-badge">
  [EMOJI] [Nombre Escuela] · INDECAP
</div>
```

| Programa | Emoji | Texto |
|----------|-------|-------|
| Enfermería | 🏥 | Escuela de Salud · INDECAP |
| Cosmetología | 💄 | Escuela de Estética · INDECAP |
| Veterinaria | 🐾 | Escuela Veterinaria · INDECAP |
| Farmacéuticos | 💊 | Escuela de Salud · INDECAP |
| Salud Oral | 🦷 | Escuela de Salud Oral · INDECAP |
| Mercadeo Digital | 📱 | Escuela Digital · INDECAP |

---

### 6.4 Galería Strip

Franja de fotos horizontales entre el hero y el primer contenido. Sin texto, puramente visual.

```html
<div class="gallery-strip">
  <div class="gallery-thumb"><img src="foto1.jpg" alt="[desc]"></div>
  <!-- 5–6 thumbs -->
</div>
```

```css
.gallery-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* o 6 */
  gap: 5px;
  background: #080F14;
  padding: 5px;
}
.gallery-thumb { aspect-ratio: 4/3; overflow: hidden; }
.gallery-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.gallery-thumb:hover img { transform: scale(1.07); }
```

---

### 6.5 Sección Perfil Ocupacional

Fondo oscuro con gradiente. Siempre 2 columnas: competencias izquierda, salidas laborales derecha.

```
Fondo: linear-gradient(135deg, #[dark] 55%, #[prog-dark] 100%)
```

**Columna izquierda:** Lista de capacidades con `cap-dot` (círculo con checkmark)  
**Columna derecha:** Grid 2×3 de `salida-card` con emoji + nombre del campo laboral

---

### 6.6 Sección de Práctica / Lab

Siempre 2 columnas: mosaico de fotos ↔ texto con feature cards.

**Feature Card:**
```html
<div class="feat-row">
  <div class="feat-icon">[EMOJI]</div>
  <div>
    <div class="feat-title">[Título de la competencia]</div>
    <div class="feat-desc">[Descripción de 1–2 líneas]</div>
  </div>
</div>
```

El ícono tiene gradiente del color del programa: `background: linear-gradient(135deg, var(--prog-dark), var(--prog-color))`.

---

### 6.7 Sección Pensum con Tabs

```html
<div class="pensum-tabs">
  <button class="tab-btn active" onclick="showTab('s1',this)">Semestre 1</button>
  <button class="tab-btn" onclick="showTab('s2',this)">Semestre 2</button>
  <!-- más semestres si aplica -->
</div>
<div class="pensum-list active" id="s1">
  <div class="pensum-item"><span class="pensum-dot"></span>[Materia]</div>
</div>
```

```javascript
function showTab(id, btn) {
  document.querySelectorAll('.pensum-list').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
```

---

### 6.8 Tarjetas de Testimonios

Siempre 3 columnas. Contenido: comilla gigante + texto en itálica + autor con avatar de inicial.

> ⚠️ **Nota para Camilo:** Todos los testimonios actuales son placeholder. Reemplazar con testimonios reales de egresados antes de publicar. Mínimo 1 por programa, ideal 3.

```html
<div class="test-card">
  <div class="quote">"</div>
  <p class="test-text">[Testimonio real del egresado...]</p>
  <div class="test-author">
    <div class="t-avatar" style="background:linear-gradient(135deg,[color1],[color2]);">[Inicial]</div>
    <div>
      <div class="stars">★★★★★</div>
      <div class="t-name">[Nombre Egresado]</div>
      <div class="t-detail">Egresado [año] · [Lugar de trabajo], [Ciudad]</div>
    </div>
  </div>
</div>
```

---

### 6.9 Proceso de Inscripción (4 pasos)

Siempre 4 pasos en grid horizontal. Los números siguen una progresión de color:

| Paso | Color |
|------|-------|
| 1 | `var(--prog-color)` |
| 2 | versión más oscura del color |
| 3 | `#B07800` (marrón dorado) |
| 4 | `var(--gold)` con texto oscuro |

---

### 6.10 Tarjetas de Sedes

```html
<div class="sede-card">
  <div class="sede-icon">🏙️</div>
  <div>
    <div class="sede-name">Sede Medellín</div>
    <div class="sede-address">Cl. 56 # 45-26, Medellín</div>
    <div class="sede-tag">Tel: (604) 448 4794</div>
  </div>
</div>
```

**Sedes del sistema:**

| Sede | Dirección | Resolución |
|------|-----------|------------|
| Medellín | Cl. 56 # 45-26 | Res. N° 016022 |
| Envigado | Cl 37 Sur #43A-84 | Res. N° 3534 |
| Caldas | Calle 130 sur # 51-65 | Res. N° 2016060054726 |
| Segovia | (consultar) | — |
| Amalfi | (consultar) | — |
| Betulia | (consultar) | — |

---

### 6.11 Botones del Sistema

| Clase | Fondo | Texto | Uso |
|-------|-------|-------|-----|
| `.btn-primary` | `var(--prog-color)` | white | CTA principal hero |
| `.btn-gold` | `#F0A500` | `#080F14` | CTA final de página |
| `.btn-white` | `#FFFFFF` | `var(--prog-dark)` | CTA sobre hero oscuro |
| `.btn-ghost` | transparent | `var(--prog-color)` | Acción secundaria |
| `.btn-ghost-wh` | transparent | white | Acción secundaria sobre oscuro |
| `.btn-outline-wh` | transparent + border white | white | CTA secundario en CTA final |

**Estilos base de todos los botones:**
```css
border-radius: 50px;       /* siempre pill */
padding: 14–18px 28–40px;
font-family: 'DM Sans', sans-serif;
font-weight: 600–700;
display: inline-flex;
align-items: center;
gap: 10px;
transition: all 0.25s;
text-decoration: none;
```

---

### 6.12 Reveal al Scroll (Animación)

Todas las secciones tienen clase `.reveal` y se activan con IntersectionObserver:

```javascript
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
```

```css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

---

## 7. Fotografía y Uso de Imágenes

### 7.1 Principios Fotográficos INDECAP

1. **Siempre estudiantes reales** — nunca stock photos
2. **Uniformes visibles** — el logo bordado en el uniforme es prueba de identidad
3. **Acción > pose** — estudiantes trabajando > estudiantes posando
4. **Entornos reales** — consultorio, farmacia, laboratorio, consultorio dental

### 7.2 Rol de las Fotos por Sección

| Sección | Tipo de foto ideal | Crop |
|---------|-------------------|------|
| Hero | Estudiante en acción / conexión emocional | `object-position: center top` |
| Galería strip | Variedad: acción, close-up, grupo, herramientas | `aspect-ratio: 4/3` o `3/4` |
| Sección práctica | Trabajo con paciente / animal / equipo | libre |
| Pensum visual | Foto de estudiante concentrado | `object-position: center top` |
| Institucional | Dos estudiantes con uniforme, placa INDECAP | `object-position: center top` |

### 7.3 Personalidad Visual por Programa

| Programa | Paleta foto | Ambiente | Elemento signature |
|----------|-------------|----------|--------------------|
| Enfermería | Azul clínico | Hospital, simulación clínica | EPP completo |
| Cosmetología | Tonos cálidos | Salón de estética | Pincel, colores |
| Veterinaria | Verdes naturales | Lab quirúrgico + animales | Husky Malamute |
| Farmacéuticos | Gris oscuro | Farmacia con estantes | Estantes categorizados |
| Salud Oral | Teal + azul dental | Consultorio + laboratorio dental | Gorros dentales coloridos |

### 7.4 Nombramiento de Archivos

```
[programa]_[descripcion].[ext]
```
Ejemplos:
```
enfermeria_hero.jpg
cosmetologia_practica_manos.jpg
salud_oral_consultorio_real.jpg
veterinaria_husky_estudiante.jpg
farmaceuticos_estantes.jpg
```

### 7.5 Instrucciones para WordPress

1. Subir todas las fotos a **Media Library** antes de implementar las páginas HTML
2. Anotar la URL generada por WordPress para cada foto
3. En el HTML, hacer **find & replace** del nombre de archivo por la URL completa:
   ```
   Buscar:   src="DSC01085.jpg"
   Reemplazar: src="https://www.indecap.edu.co/wp-content/uploads/2026/02/DSC01085.jpg"
   ```
4. Todas las URLs siguen el patrón: `https://www.indecap.edu.co/wp-content/uploads/[AÑO]/[MES]/[NOMBRE].jpg`

---

## 8. Voz y Tono

### Principios de Comunicación

| Principio | Sí | No |
|-----------|----|----|
| **Directo** | "Empieza tu carrera hoy" | "Podría ser una opción considerar..." |
| **Empoderador** | "Serás técnico certificado" | "Aprenderás algunas cosas básicas" |
| **Cercano** | "¿Tienes dudas? Escríbenos" | "Por favor comuníquese con nosotros" |
| **Honesto** | "Práctica en consultorio real" | Exagerar lo que no existe |
| **Local** | "Antioquia", "Medellín", "Colombia" | Lenguaje genérico sin arraigo |

### Frases Clave por Sección

**Hero / Propuesta de valor:**
- "Certifícate como Técnico en [programa] en [X] meses"
- "El sector [X] te está esperando"
- "Formación real desde el primer día"

**Perfil Ocupacional:**
- "Capacitado para desempeñarse en..."
- "Tendrás las competencias para..."

**Diferencial:**
- "La única [X] de la región"
- "Práctica real, no simulación"
- "Cuando llegues al trabajo, ya sabes"

**CTA Final:**
- "Los cupos son limitados"
- "Tu carrera empieza hoy"
- "Escríbenos — te respondemos en minutos"

### Textos que deben ser reemplazados antes de publicar

- [ ] Todos los testimonios (marcados con "💡 Nota para INDECAP")
- [ ] Número de egresados (actualmente placeholder "5.000+")
- [ ] Resoluciones de Segovia, Amalfi, Betulia
- [ ] Horarios específicos por sede
- [ ] Valor de matrícula (si se decide publicar)

---

## 9. Contacto y CTAs Estandarizados

### Números y Canales Oficiales

| Canal | Dato | Uso en web |
|-------|------|------------|
| Teléfono fijo | `(604) 448 4794` | Links `tel:6044484794` |
| WhatsApp general | `+57 317 434 2783` | Links `https://api.whatsapp.com/send?phone=573174342783` |
| WhatsApp programas | `+57 302 238 9760` | Links de inscripción por programa |
| Email | `indecap@indecap.edu.co` | Links `mailto:indecap@indecap.edu.co` |

### Plantillas de URLs WhatsApp por Programa

```
Enfermería:
https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Enfermer%C3%ADa,%20mi%20nombre%20es%20

Cosmetología:
https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Cosmetolog%C3%ADa,%20mi%20nombre%20es%20

Veterinaria:
https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Auxiliar%20en%20Veterinaria,%20mi%20nombre%20es%20

Farmacéuticos:
https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Servicios%20Farmac%C3%A9uticos,%20mi%20nombre%20es%20

Salud Oral:
https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20Salud%20Oral,%20mi%20nombre%20es%20
```

### Redes Sociales

| Red | URL |
|-----|-----|
| Facebook | `https://www.facebook.com/indecapedu/` |
| Instagram | `https://www.instagram.com/instindecap/` |
| YouTube | `https://www.youtube.com/channel/UCDqQs0jzf-Zy-nsCBFnLmEA` |
| Twitter | `https://twitter.com/indecapoficial` |

---

## 10. Implementación en WordPress

### Estructura de Archivos Entregados

```
INDECAP-Web-Redesign/
├── INDECAP-Design-System-v1.md        ← este archivo
├── programas-tecnicos-indecap.html    ← catálogo general (19 programas)
├── enfermeria-indecap.html
├── cosmetologia-indecap-v2.html
├── veterinaria-indecap.html
├── farmaceuticos-indecap.html
├── salud-oral-indecap.html
└── [pendientes]
    ├── mercadeo-digital-indecap.html
    └── home-indecap.html
```

### Método de Implementación Recomendado: HTML Block

En WordPress con Gutenberg, usar el bloque **"HTML Personalizado"**:

1. Abrir la página de programa en el editor
2. Eliminar todos los bloques actuales
3. Agregar un bloque "HTML Personalizado"
4. Pegar el contenido completo del archivo `.html`
5. Reemplazar todas las rutas de imágenes por URLs de WordPress (ver sección 7.5)
6. Previsualizar y publicar

### Alternativa: Página de Plantilla Personalizada

Para mayor control, crear en WordPress una **Custom Page Template** que cargue el CSS y JS del sistema:

```php
<?php
/* Template Name: Programa INDECAP */
get_header(); ?>
<style>
  /* Pegar aquí el bloque <style> del programa */
</style>
<body>
  <!-- Pegar aquí el HTML del programa -->
</body>
<script>
  /* Pegar aquí el bloque <script> del programa */
</script>
<?php get_footer(); ?>
```

### SEO — Metadatos Mínimos por Página

```html
<title>[Programa] | INDECAP – Medellín, Envigado, Caldas</title>
<meta name="description" content="Certifícate como Técnico Laboral en [programa] en INDECAP. [X] horas. [Diferencial clave]. Sedes en Medellín, Envigado y Caldas.">
```

---

## 11. Checklist de Calidad

Antes de publicar cualquier página de programa, verificar:

### Contenido
- [ ] Hero tiene propuesta de valor clara (no solo el nombre del programa)
- [ ] Stats reales: horas, semestres, sedes (no placeholders)
- [ ] Perfil ocupacional tomado del sitio oficial / resolución del programa
- [ ] Pensum completo con todas las materias reales
- [ ] Testimonios reales (no placeholders)
- [ ] Resoluciones de habilitación incluidas

### Técnico
- [ ] Logo carga correctamente (con fallback en texto si falla)
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] WhatsApp links funcionan en móvil
- [ ] Teléfono link `tel:` funciona
- [ ] Scroll reveal funciona (probar en Firefox y Chrome)
- [ ] Vista móvil revisada en breakpoint 960px
- [ ] Galería strip visible sin scroll horizontal

### Visual
- [ ] Color acento del programa es consistente en toda la página
- [ ] Logo visible en navbar con suficiente contraste
- [ ] Fotos de estudiantes reales (no stock)
- [ ] Uniformes INDECAP visibles en al menos 2 fotos
- [ ] CTA final tiene contraste suficiente con el botón dorado

### WordPress
- [ ] URLs de imágenes apuntan a WordPress Media Library (no rutas locales)
- [ ] Página en slug correcto: `/programas-tecnicos/auxiliar-en-[nombre]/`
- [ ] Menú de navegación actualizado con enlace a la nueva página
- [ ] Página anterior archivada (no eliminada, por si acaso)

---

## Notas Finales

Este sistema de diseño fue construido de manera inductiva a partir de las 6 páginas de programa desarrolladas entre febrero 2026. Las decisiones de diseño no son arbitrarias — cada una responde a:

1. **La identidad real de INDECAP** (azul + amarillo, Montserrat en su logo)
2. **Las fotos reales de los estudiantes** (colores de uniformes, ambientes de práctica)
3. **Las expectativas del público objetivo** (personas buscando certificación técnica rápida y confiable en Antioquia)
4. **Las mejores prácticas de conversión** (CTA en nav, hero con stats, WhatsApp prominente)

> 💡 **Para la IA (Claude o cualquier otro modelo):** Si generas contenido para INDECAP usando este sistema, respeta los colores por programa, usa las URLs de WhatsApp estandarizadas, no inventes testimonios, y siempre incluye las 3 sedes principales (Medellín, Envigado, Caldas).

---

*Sistema de Diseño INDECAP v1.0 — Desarrollado con asistencia de IA (Claude, Anthropic)*  
*Autor: [Tu nombre] · Implementación: Camilo Rico · Institución: Corporación Educativa INDECAP*
