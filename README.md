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

## Directives

Format : **`[type] zone — action`**

```
[ui]    Dashboard — renforcer le contraste du hero
[fix]   Check — le formulaire ne remet pas les champs à zéro
[tech]  Projection — extraire splitVal dans un helper partagé
[add]   Training — ajouter un champ "note de séance" dans les données
```

Types : `ui` · `fix` · `tech` · `add` · `doc` · `data`

Une directive = une tâche. Pas de multi-objectifs dans la même ligne.

---

## Préparation n8n

n8n sera utilisé plus tard pour orchestrer les agents IA automatiquement. Rien n'est encore branché — cette section décrit le flux cible.

### Flux cible

```
Directive (chat / webhook)
  → n8n classifie la tâche (UI, data, doc, fix…)
  → n8n sélectionne l'agent concerné (Claude / Codex / Gemini)
  → l'agent produit les modifications
  → Claude intègre, committe et pousse sur la branche
  → merge dans main
  → Vercel déploie automatiquement
```

### Ce qui est déjà prêt

- Structure de branches claire (`main` / `feat/` / `fix/`)
- Rôles des agents définis (voir section "Système d'agents IA")
- Règle : un seul agent publie (Claude)
- Déploiement automatique Vercel depuis `main`

### Ce qui sera ajouté plus tard

- Webhook d'entrée n8n pour recevoir les directives
- Nœud de classification de tâche (type + agent cible)
- Connexion n8n → API Claude / Codex / Gemini
- Nœud de validation avant merge dans `main`

---

## Système d'agents IA

Plusieurs agents peuvent intervenir sur le projet. Chacun a un rôle distinct.

| Agent | Rôle |
|---|---|
| **Claude** | Implémentation principale — code, UI, refactoring, documentation, commits, push |
| **Codex** | Génération de code ciblée — snippets, fonctions isolées, suggestions techniques |
| **Gemini** | Analyse, relecture, suggestions — jamais d'écriture directe dans le repo |

### Règles

- **Un seul agent publie** : Claude est le seul agent à committer et pousser sur le repo
- **Codex et Gemini** produisent des suggestions ; Claude décide de les intégrer ou non
- **Pas de travail en parallèle** sur les mêmes fichiers — un agent à la fois par zone
- **Toute modification passe par une branche** (`feat/`, `fix/`, etc.) avant `main`
- Les agents ne modifient pas les données dans `lib/data/` sans validation explicite

---

## Contribuer

- Données mockées uniquement dans `lib/data/` — ne pas mélanger avec les composants
- Respecter le système de couleurs : `#07090f` fond, `#0d1526` cards, `yellow-400` accent
- Garder les composants dans `app/components/` — pas de logique métier dedans
- Pas de backend, pas d'API, pas de state global
