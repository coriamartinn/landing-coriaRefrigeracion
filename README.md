# Coria Refrigeración — Landing Page

Sitio web hecho con Vite + React. Enfocado en pedir presupuesto / consultas por WhatsApp.

## Desarrollo local

```bash
npm install
npm run dev
```

## Editar datos de contacto

Todo el contenido de contacto (número de WhatsApp, mensajes prellenados, zona de cobertura)
está centralizado en `src/config.js`. Si cambia el número de WhatsApp o la zona, editá solo ese archivo.

## Estructura

- `src/components/Header.jsx` — logo + navegación + CTA
- `src/components/Hero.jsx` — sección principal ("atrapador")
- `src/components/Services.jsx` — aires, heladeras, lavarropas, urgencias
- `src/components/About.jsx` — sobre la empresa + CTAs
- `src/components/WhyUs.jsx` — diferenciales (franja oscura)
- `src/components/CTABand.jsx` — banda final de conversión
- `src/components/Footer.jsx` — contacto y copyright
- `src/components/WhatsAppFAB.jsx` — botón flotante fijo de WhatsApp

## Deploy en Vercel

### Opción A — Desde GitHub (recomendado)
1. Subí esta carpeta a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New Project** → importá el repo.
3. Vercel detecta automáticamente que es un proyecto Vite:
   - Build Command: `vite build`
   - Output Directory: `dist`
4. Click en **Deploy**.

### Opción B — Desde la terminal (sin GitHub)
```bash
npm install -g vercel
vercel login
vercel        # deploy de prueba
vercel --prod # deploy a producción
```

No hace falta ningún archivo `vercel.json` adicional: Vite es soportado nativamente.
