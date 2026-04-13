# JR — Personal Fitness Dashboard

Interface de suivi personnel : poids, entraînement, nutrition, santé. Données statiques mockées, pas de backend.

---

## Stack

| Outil | Usage |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | Framework — routing, layout, SSR |
| TypeScript | Typage strict |
| Tailwind CSS v4 | Styles utilitaires |
| Données statiques | `lib/data/*.ts` — aucune API, aucune BDD |

---

## Pages

| Route | Contenu |
|---|---|
| `/` | Dashboard — poids, évolution, KPIs semaine, steps, bilan |
| `/training` | Séances, tonnage, records, qualité des séances |
| `/nutrition` | Calories, macros, indicateurs secondaires, cohérence |
| `/check` | Formulaire quotidien — activité, nutrition, ressenti → bilan calculé |
| `/projection` | Trajectoire poids, scénarios prudent / réaliste |
| `/health` | Marqueurs biologiques (prise de sang), points d'attention |

---

## Structure

```
app/
  page.tsx              # Dashboard
  training/page.tsx
  nutrition/page.tsx
  check/page.tsx
  health/page.tsx
  projection/page.tsx
  components/           # Composants réutilisables
  layout.tsx            # Layout global + NavBar
lib/
  data/                 # Données mockées par domaine
```

---

## Lancer le projet

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build de production
```

---

## Workflow

```
feature branch  →  push  →  merge main  →  Vercel (auto-deploy)
```

- Développer sur une branche dédiée (`feat/...` ou `claude/...`)
- Merger dans `main` une fois la feature stable
- Vercel déploie automatiquement depuis `main`

---

## Contribuer

- Données mockées uniquement dans `lib/data/` — ne pas mélanger avec les composants
- Respecter le système de couleurs : `#07090f` fond, `#0d1526` cards, `yellow-400` accent
- Garder les composants dans `app/components/` — pas de logique métier dedans
- Pas de backend, pas d'API, pas de state global
