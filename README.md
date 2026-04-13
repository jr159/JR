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

## Workflow Git

### Branches

| Branche | Rôle |
|---|---|
| `main` | Production — toujours stable, déployé automatiquement sur Vercel |
| `feat/<sujet>` | Nouvelle fonctionnalité (ex: `feat/nutrition-chart`) |
| `fix/<sujet>` | Correction ciblée (ex: `fix/mobile-kpi-overflow`) |
| `chore/<sujet>` | Maintenance, config, docs (ex: `chore/readme`) |

Règle : **ne jamais committer directement sur `main`**.

---

### Commits

Format : `<type>: <description courte>`

```
feat: ajout graphique calories hebdo
fix: correction overflow KPI mobile
chore: mise à jour README
style: harmonisation espacements cartes
```

Types valides : `feat` · `fix` · `style` · `chore` · `docs` · `refactor`

- Une ligne, en français ou en anglais, cohérent dans le projet
- Pas de commit fourre-tout ("misc changes", "wip", etc.)

---

### Intégration feature → main

```bash
# 1. Créer et basculer sur la branche de travail
git checkout -b feat/<sujet>

# 2. Travailler, committer au fil des étapes
git add <fichiers>
git commit -m "feat: ..."

# 3. Pousser la branche
git push -u origin feat/<sujet>

# 4. Merger dans main une fois stable
git checkout main
git pull origin main
git merge feat/<sujet>
git push origin main
```

Pas de PR obligatoire pour ce projet solo — merge direct dans `main` suffisant.

---

## Contribuer

- Données mockées uniquement dans `lib/data/` — ne pas mélanger avec les composants
- Respecter le système de couleurs : `#07090f` fond, `#0d1526` cards, `yellow-400` accent
- Garder les composants dans `app/components/` — pas de logique métier dedans
- Pas de backend, pas d'API, pas de state global
