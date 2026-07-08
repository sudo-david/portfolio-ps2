# Portafolio — David Duque Vélez (estética PS2)

Portafolio personal construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**, con una identidad visual inspirada en la estética de consola PS2: cápsulas metálicas, texto cromado, y un fondo persistente de cubos flotantes 3D con estelas de luz de trayectoria aleatoria.

## Funcionalidades incluidas

- ✅ Fondo animado persistente (cubos 3D + estelas de luz con rutas aleatorias que nunca se repiten)
- ✅ Destello de arranque ("CARGANDO SISTEMA...") al cargar
- ✅ Menú de sistema tipo consola (cápsulas con brillo, cambia de panel al hacer clic)
- ✅ Barras de nivel animadas en skills
- ✅ Formulario de contacto funcional (API Route + Resend)
- ✅ Páginas individuales por proyecto (`/proyectos/rutaxruta`, `/proyectos/nexus`)
- ✅ SEO básico (metadata, Open Graph, favicon)
- ✅ Respeta `prefers-reduced-motion` (desactiva toda animación si el visitante lo prefiere)

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configurar el formulario de contacto (Resend)

1. Crea una cuenta gratis en [resend.com](https://resend.com).
2. Genera una API key.
3. Copia `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Pega tu API key en `.env.local`:
   ```
   RESEND_API_KEY=re_tu_clave_aqui
   ```
5. Cuando verifiques un dominio propio en Resend, actualiza el campo `from` en `app/api/contact/route.ts`.

## Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Ve a [vercel.com](https://vercel.com) → "Add New Project" → conecta tu repo.
3. En "Environment Variables", agrega `RESEND_API_KEY`.
4. Deploy. Cada push a `main` se despliega automáticamente.

## Actualizar contenido

Todo el contenido de skills y proyectos vive en `lib/data.ts`. Edítalo ahí y se refleja en toda la página, incluyendo las páginas de detalle de proyecto.

## Sobre el fondo animado

El componente `components/BackgroundScene.tsx` genera cubos 3D con CSS y anima estelas de luz usando la **Web Animations API**: cada estela calcula una curva Bézier aleatoria nueva cada vez que termina su recorrido, así que la trayectoria nunca se repite exactamente igual. Si quieres ajustar la cantidad de cubos, sus tamaños o velocidades, edita el array `CUBE_SPECS` en ese archivo. Los colores de las estelas están en `TRAIL_COLORS`.

## Estructura del proyecto

```
app/
├── layout.tsx              → SEO, favicon, monta el fondo animado y el boot mask
├── page.tsx                → header + menú de sistema
├── globals.css              → estilos, animaciones, tema PS2
├── api/contact/route.ts    → endpoint que envía el correo con Resend
└── proyectos/
    ├── rutaxruta/page.tsx
    └── nexus/page.tsx

components/
├── BackgroundScene.tsx      → cubos 3D + estelas de luz aleatorias (persistente)
├── BootMask.tsx             → destello de carga inicial
├── SysMenu.tsx               → menú de cápsulas + paneles (about/skills/projects/contact)
├── ContactForm.tsx          → formulario conectado al API route
└── ProjectDetail.tsx         → plantilla compartida para páginas de proyecto

lib/data.ts                  → skills y proyectos (edita aquí)
```
