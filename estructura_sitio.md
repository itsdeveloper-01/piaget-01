
# Estructura del sitio (Piaget-01 Next.js + Tailwind + Decap CMS)

> **Objetivo:** Documentar qué hay en cada carpeta/archivo, cómo se relacionan, y **dónde** tocar para **agregar/modificar** funciones, secciones, contenido y estilos. Incluye guía para trabajar con el **CMS (Decap)** y desplegar en **Netlify**.

---

## 1) Visión general

- **Framework:** Next.js 14 (App Router)  
- **UI:** TailwindCSS (utilidades), diseño responsivo y grids.  
- **CMS:** Decap (Netlify CMS v2+), con backend `git-gateway` (Netlify Identity) y `local_backend` para dev.  
- **Contenido:** JSON en `/content/**` administrado por el CMS.  
- **Assets estáticos:** `/public/**`.  
- **Build estático:** `output: "export"` → el sitio se exporta a `/out` (ideal para Netlify).

---

## 2) Árbol de directorios (resumido)

```
piaget-01-next/
├─ app/                         # App Router de Next.js (rutas/páginas)
│  ├─ layout.js                 # Layout global (Navbar + Footer + FloatingButtons)
│  ├─ page.js                   # Home (usa secciones)
│  ├─ maternal/page.js          # Páginas por nivel (usan LevelPage.js + JSON)
│  ├─ kinder/page.js
│  ├─ primaria/page.js
│  ├─ secundaria/page.js
│  ├─ preparatoria/page.js
│  ├─ menu1/page.js             # Páginas informativas (usan InfoPage.js + JSON)
│  └─ menu2/page.js
│
├─ components/
│  ├─ Navbar.js                 # Barra superior fija (menú principal + móvil)
│  ├─ Footer.js                 # Footer minimalista
│  ├─ FloatingButtons.js        # Botones flotantes (WhatsApp/Correo)
│  ├─ shared/Logo.js            # Logo SVG
│  └─ sections/                 # Secciones reusables
│     ├─ HeroVideo.js           # Héroe con video + botones glass (Contacto/Nosotros)
│     ├─ Levels.js              # Grid de niveles (Home) → lee content/levels/levels.json
│     ├─ Activities.js          # Grid de actividades (Home) → content/activities/activities.json
│     ├─ About.js               # Sección “Quiénes somos” → content/pages/nosotros.json
│     ├─ Social.js              # Sección redes → content/social/social.json
│     ├─ Contact.js             # Formulario demo
│     ├─ LevelPage.js           # Plantilla de página de “nivel” (recibe JSON)
│     └─ InfoPage.js            # Plantilla de páginas informativas (recibe JSON)
│
├─ content/                     # **Fuente de verdad** del contenido (editado por CMS)
│  ├─ levels/
│  │  ├─ levels.json            # Lista para la sección de niveles (Home)
│  │  ├─ maternal.json          # Detalle por nivel (usado por /maternal)
│  │  ├─ kinder.json            #    "
│  │  ├─ primaria.json          #    "
│  │  ├─ secundaria.json        #    "
│  │  └─ prepa.json             #    "
│  ├─ pages/
│  │  ├─ nosotros.json          # Sección “Quiénes somos” (Home)
│  │  ├─ menu1.json             # Contenido de /menu1 (Lenguajes)
│  │  └─ menu2.json             # Contenido de /menu2 (Extracurriculares)
│  ├─ activities/activities.json# Actividades (Home)
│  └─ social/social.json        # Cuentas y posts demo para redes
│
├─ public/
│  ├─ admin/
│  │  ├─ index.html             # UI del CMS (Decap) con **init manual**
│  │  └─ config.yml             # Configuración del CMS (colecciones/fields)
│  ├─ assets/
│  │  ├─ hero.mp4               # Video del héroe (placeholder)
│  │  ├─ hero-poster.jpg        # Poster del video
│  │  ├─ levels/*.jpg           # Imágenes para niveles
│  │  ├─ activities/*.jpg       # Imágenes para actividades
│  │  └─ social/*.jpg           # Imágenes demo de redes
│  └─ apple-touch-icon*.png     # Iconos
│
├─ styles/globals.css           # Tailwind + estilos globales
├─ tailwind.config.js           # Config de Tailwind
├─ postcss.config.js            # PostCSS
├─ next.config.mjs              # `output: "export"` (build estático)
├─ package.json                 # Scripts y dependencias
├─ documentacion.txt            # Guía técnica rápida
└─ estructura_sitio.md          # (Este documento)
```

---

## 3) Relaciones entre piezas (qué llama a qué)

- **Rutas (app/**) → **Componentes (components/**)**  
  - `app/layout.js` envuelve **todas** las páginas con `Navbar`, `Footer` y `FloatingButtons`.
  - `app/page.js` (Home) compone: `HeroVideo`, `Levels`, `Activities`, `About`, `Social`, `Contact`.
  - `app/*/page.js` (ej.: `/maternal`) importa **JSON** desde `/content/**` y lo pasa a una plantilla:
    - Niveles → `LevelPage.js`
    - Menús (Lenguajes/Extracurriculares) → `InfoPage.js`

- **Secciones** ↔ **Contenido JSON**  
  - `Levels.js` ← `content/levels/levels.json`
  - `Activities.js` ← `content/activities/activities.json`
  - `About.js` ← `content/pages/nosotros.json`
  - `Social.js` ← `content/social/social.json`
  - `LevelPage.js` ← `content/levels/{maternal|kinder|...}.json`
  - `InfoPage.js` ← `content/pages/{menu1|menu2}.json`

- **CMS (Decap)** escribe **exactamente esos JSON** según `public/admin/config.yml`.  
  Tú editas desde `/admin/` y el CMS comitea los cambios a tu repo (en producción con Git Gateway; en local con `decap-server`).

---

## 4) ¿Dónde cambio “X”? Guía rápida por tareas

### A) Cambiar texto o imagen del Home
- **Niveles (cards):** `content/levels/levels.json`
- **Actividades:** `content/activities/activities.json`
- **Quiénes somos:** `content/pages/nosotros.json`
- **Redes:** `content/social/social.json`
- **Botones del héroe / layout del video:** `components/sections/HeroVideo.js`
- **Estilos globales:** `styles/globals.css` o utilidades Tailwind en los componentes

> **Desde el CMS:** Todo lo anterior está mapeado en `config.yml` (colección `settings`).

### B) Cambiar contenido de una página de nivel (ej. Maternal)
- **JSON:** `content/levels/maternal.json` (título, descripción, actividades, heroImage)
- **Plantilla visual:** `components/sections/LevelPage.js` (estructura de la página)
- **Ruta/página:** `app/maternal/page.js` (importa y pasa el JSON)

> **Desde el CMS:** Colección `levels_detail` → “Maternal”, “Kinder”, etc.

### C) Cambiar contenido de Menú 1 / Menú 2
- **JSON:** `content/pages/menu1.json` o `menu2.json` (título + lista de secciones)
- **Plantilla visual:** `components/sections/InfoPage.js`
- **Rutas:** `app/menu1/page.js`, `app/menu2/page.js`

> **Desde el CMS:** Colección `settings` → “Página — Lenguajes / Actividades extracurriculares”.

### D) Editar Navbar / Footer / Botones flotantes
- **Navbar:** `components/Navbar.js`
- **Footer:** `components/Footer.js`
- **WhatsApp/Correo:** `components/FloatingButtons.js` (números/correos demo)

### E) Cambiar el ancho/espaciado del diseño
- Ajusta paddings/container en **cada sección** (`w-full px-4 sm:px-6 lg:px-8 ...`)
- **Grid de columnas** por breakpoint (ej.: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`)

### F) Agregar una **nueva sección** al Home
1. Crea el componente en `components/sections/NuevaSeccion.js`.
2. Impórtalo y úsalo en `app/page.js` en el orden deseado.
3. Si la sección lee contenido, define un JSON en `/content/...` y mapea su edición en `public/admin/config.yml`.

### G) Agregar **un nuevo nivel** (opciones)

**Opción 1 – igual que los actuales (estático):**  
1. Crea `content/levels/nivel-nuevo.json` (duplica un existente).  
2. Crea la ruta `app/nivel-nuevo/page.js` con:
   ```js
   import LevelPage from "@/components/sections/LevelPage";
   import data from "@/content/levels/nivel-nuevo.json";
   export default function Page(){ return <LevelPage data={data}/>; }
   ```
3. Añádelo al grid del Home editando `content/levels/levels.json` (nueva card).  
4. (Opcional) Suma una entrada en `Navbar.js`.

**Opción 2 – dinámico vía CMS (recomendado si habrá muchos):**  
- Cambia la colección `levels_detail` de `files` a **folder** con `create: true` para permitir nuevos JSON libremente:
  ```yml
  - name: "levels_detail"
    label: "Páginas de niveles"
    folder: "content/levels"
    create: true
    extension: "json"
    slug: "{{slug}}"
    fields:
      - {label:"Título", name:"title", widget:"string"}
      - {label:"Imagen héroe", name:"heroImage", widget:"image"}
      - {label:"Descripción", name:"description", widget:"text"}
      - label: "Actividades"
        name: "activities"
        widget: "list"
        fields:
          - {label:"Título", name:"title", widget:"string"}
          - {label:"Resumen", name:"summary", widget:"text"}
          - {label:"Imagen", name:"image", widget:"image"}
  ```
- Crea una **ruta dinámica** en Next (por ejemplo `app/nivel/[slug]/page.js`) que lea el JSON por `slug`. *(Si quieres, te la dejo hecha en un commit siguiente).*

---

## 5) Trabajando con el CMS (Decap)

### Local (desarrollo)
1. **Terminal A**
   ```bash
   npm run dev
   ```
2. **Terminal B**
   ```bash
   npx decap-server        # backend local (8080)
   ```
3. Abre: `http://localhost:3000/admin/index.html`  *(o `/admin/`)*

> Ya no usamos redirects por `output: "export"`.  
> El `index.html` trae **init manual** (`window.CMS.init`) para evitar pantalla en blanco.

### Producción (Netlify + Git Gateway)
1. Sube el repo a GitHub (rama `main`).  
2. En **Netlify → Add new site → Import from Git**, selecciona el repo.  
3. **Build command:** `npm run build`  
   **Publish directory:** `out`  
4. En **Netlify → Identity**, presiona **Enable Identity**.  
5. En **Identity → Settings → Registration**, elige la política (por invitación).  
6. En **Identity → Services → Git Gateway**, presiona **Enable Git Gateway**.  
7. En tu sitio `/admin/`, inicia sesión con Netlify Identity (el CMS te pedirá login).  
8. En producción, elimina o comenta `local_backend: true` en `public/admin/config.yml` (solo dev).

> Si prefieres **backend GitHub** (sin Identity), cambia en `config.yml`:
> ```yml
> backend:
>   name: github
>   repo: TU_USUARIO/TU_REPO
>   branch: main
> ```
> y configura un **token** (Netlify Var) o usa OAuth App.

---

## 6) Buenas prácticas de edición desde el CMS

- **Imágenes:** El `media_folder` guarda en `public/uploads`; referencia con rutas absolutas (`/uploads/archivo.jpg`).  
- **Validación:** Los campos obligatorios están definidos; el CMS no te dejará guardar si faltan.  
- **Revisiones:** Cada cambio crea commit/PR (según flujo). Usa “Publish” en el CMS para publicar.  
- **Grids:** Mantén proporciones similares de imágenes para evitar saltos en altura.  
- **Rendimiento:** Activa lazy-loading si subes muchas imágenes (ya usamos `loading="lazy"`).

---

## 7) Preguntas frecuentes (FAQ)

- **Veo `416` en `/assets/hero.mp4` en consola**: el video es placeholder. Reemplaza por uno real o comenta la `<source>` del video.
- **`/admin` da 404**: usa `/admin/index.html` o `/admin/` (sin redirects).
- **No se ve el CMS en producción**: activa Identity + Git Gateway en Netlify, y quita `local_backend` del `config.yml`.

---

## 8) Próximos pasos (para producción)

1. Confirmar contenido desde el CMS (llenar textos e imágenes reales).  
2. Hacer build local: `npm run build` (ver carpeta `/out`).  
3. Conectar repo a Netlify y configurar (pasos en §5).  
4. Probar `/admin/` en tu dominio de Netlify, invitar editores.

---

## 9) Glosario mínimo

- **App Router:** Sistema de enrutamiento de Next.js basado en la carpeta `/app`.  
- **Colección (CMS):** Sección editable del CMS que mapea a archivos del repo.  
- **Git Gateway:** Capa de Netlify para que usuarios se autentiquen y escriban en Git sin tokens.

---

### Dónde pedir cambios
Si quieres que:  
- agregue **ruta dinámica** para niveles,  
- cree **colecciones nuevas** (ej. “Blog” o “Eventos”),  
- integre **Netlify Forms** en `Contact.js`,  
dímelo y lo agrego directo al proyecto.
