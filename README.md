# Joan AI — Propuesta para Joan

Landing page de una propuesta personal: un sistema de IA que responde, cualifica
y filtra leads de **real estate de lujo** en menos de 60 segundos, para que Joan
solo atienda las ventas que de verdad importan.

Migrada desde un `index.html` estático (conservado en [`legacy/`](./legacy)) a una
app moderna **Next.js 14 + Tailwind + Framer Motion**.

## Stack

| Capa | Herramienta |
| --- | --- |
| Framework | Next.js 14 (App Router) + TypeScript |
| Estilos | Tailwind CSS con tokens de diseño (paleta champán/negro) |
| Tipografía | Fraunces + Inter (`next/font`, self-hosted) |
| Animación | Framer Motion (scroll reveals, stagger, hover, contadores, parallax, barra de progreso) |
| Sistema de diseño | Skill en [`.claude/skills/frontend-design`](./.claude/skills/frontend-design/SKILL.md) |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint     # ESLint (next/core-web-vitals)
npm start        # servir el build
```

Requisitos: Node.js 18+ (probado en Node 22).

## Estructura

```
app/                  layout, página y estilos globales
components/
  ├─ Nav, Hero, Footer
  ├─ motion/          Reveal, Stagger, Counter, ScrollProgress
  ├─ sections/        Problem, Solution, Flow, Instagram, Results, Stack, Testimonial, FinalCTA
  └─ ui/              Button, Eyebrow, Section
lib/animations.ts     variantes y easings de Framer Motion
scripts/              capturas con Playwright (dev)
legacy/index.html     versión original estática
```

## Deploy

El sitio es estático/SSR estándar de Next.js y **no necesita variables de
entorno** ni secretos. Las imágenes de Unsplash ya están permitidas en
`next.config.mjs`.

### Opción A — Vercel (dashboard, recomendada)

1. Entra en <https://vercel.com/new>.
2. Importa el repo `imeduuuu/joan-ai` y elige la rama a desplegar.
3. Vercel autodetecta Next.js — no hace falta tocar nada. **Deploy**.

### Opción B — Vercel (CLI)

> Requiere que el entorno tenga acceso de red a `api.vercel.com` / `*.vercel.com`.

```bash
npm i -g vercel
vercel --prod --token "$VERCEL_TOKEN" --yes
```

### Opción C — GitHub Pages

Posible vía GitHub Actions con export estático (`output: 'export'` +
`basePath: '/joan-ai'`). Pídelo y se añade el workflow.
