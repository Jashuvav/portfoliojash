# Jashuva Vanguri — Premium React Portfolio

A React + TypeScript + Vite conversion of the supplied portfolio, redesigned as a premium editorial portfolio with a dark ink / warm paper palette and **no CSS gradients**.

## Stack
- React 19
- TypeScript
- Vite
- Lucide React
- CSS (custom design system; no gradient backgrounds)

React currently recommends modern React frameworks/build setups rather than Create React App; Vite is used here for a lightweight portfolio SPA. See the official React and Vite docs for current setup guidance.

## Included projects
1. GymPro — https://gympro-delta.vercel.app/
2. WarehouseOS — https://warehouse-two-iota.vercel.app/

The supplied screenshots are stored in `public/assets/` and used as the project visuals. The supplied portrait is used in the hero.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Main files
- `src/App.tsx` — page structure and interactions
- `src/styles.css` — premium visual system and responsive layout
- `src/data/projects.ts` — project content and URLs
- `public/assets/` — supplied images
