# Estructura del sitio

## Raíz
- `package.json` – Scripts y dependencias
- `next.config.mjs` – `output: 'export'`, `images.unoptimized`
- `tailwind.config.js` / `postcss.config.js`
- `jsconfig.json` – Alias `@/*`
- `styles/globals.css` – Estilos globales (Poppins, fondo #F2F2F2)

## app/
- `layout.js` – Layout global + Navbar
- `page.js` – Home con `<HeroVideo />` y botones glass
- `(niveles)/[nivel]/page.js` – Página dinámica por nivel; lee JSON en `content/levels/{nivel}.json`
- `quienes-somos/page.js` – Renderiza `InfoPage` con `menu1.json` (sin contacto final)
- `admision/page.js` – Formulario por pasos (registro, pasos, documentación, confirmación)

## components/
- `Navbar.js` – Sticky, fondo `#EBEBEB`, incluye Admisión
- `HeroVideo.js` – Hero con video y botones glass
- `shared/SectionTitle.js` – Títulos de sección
- `shared/FancyCard.js` – Card flexible con `mediaSide` (left/right/top) e imagen opcional

## content/
- `pages/menu1.json` – Contenido de "Quiénes somos" (cards)
- `pages/admision.json` – Textos opcionales de Admisión (intro)
- `levels/*.json` – Contenido por nivel (title, heroImage, description, activities)

## public/
- `assets/logo.png` – Reemplázalo por tu logo real
- `assets/hero.mp4` – Video del hero
- `assets/nivel.jpg` – Imagen por defecto para niveles
- `admin/` – Decap CMS (`index.html`, `config.yml`)

---

## Cómo agregar/modificar desde el CMS (Decap)
1. Ejecuta en paralelo: `npm run dev` y `npm run cms:serve`
2. Abre `http://localhost:3000/admin`
3. Colecciones:
   - **Quiénes somos** → edita `menu1.json` (cards con `mediaSide` y `imageUrl`).
   - **Niveles** → edita JSONs por nivel (título, descripción, imagen y actividades).
   - **Admisión** → texto de apoyo en `admision.json`.
4. Guarda y confirma los cambios (local_backend). En producción, configura provider/branch en `config.yml`.

## Relación entre partes
- Navbar → enlaces a páginas (niveles/quienes/admision)
- Home → usa `HeroVideo` (video en `/public/assets/hero.mp4`)
- Niveles → página dinámica que **lee JSON** → no dependes de código para el contenido
- Quiénes somos → `InfoPage` + `menu1.json` para cards
- Admisión → formulario controlado, maquetado, listo para conectar a backend/Netlify Forms

## Dónde tocar para…
- Cambiar fuente/tamaño de títulos → `styles/globals.css` (`.title-section`)
- Ajustar colores globales → `:root { --bg: ... }` o clases Tailwind en componentes
- Añadir nueva sección en Home → `app/page.js`
- Añadir un nuevo nivel → crear `content/levels/nuevo.json` y agregar a `generateStaticParams()` si se desea build estático
