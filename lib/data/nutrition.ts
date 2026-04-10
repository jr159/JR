export const nutritionSummary = {
  calories: 2850,
  caloriesTarget: 2800,
  proteins: 178,
  proteinsTarget: 175,
  carbs: 310,
  carbsTarget: 300,
  fats: 82,
  fatsTarget: 80,
}

export const nutritionSecondary = [
  { label: 'Hydratation', value: '2.4', unit: 'L / jour' },
  { label: 'Fibres', value: '32', unit: 'g / jour' },
  { label: 'Repas préparés', value: '5 / 7', unit: 'jours' },
]

export const nutritionProjections = [
  { label: 'Poids estimé dans 4 semaines', value: '83.0 kg' },
  { label: 'Déficit calorique hebdo', value: '~350 kcal' },
  { label: 'Tendance actuelle', value: '−0.5 kg / sem.' },
  { label: 'Objectif atteint si maintenu', value: '~8 semaines' },
]

export const nutritionCoherence = [
  { label: 'Jours dans la cible calorique', ok: true, note: '5 / 7 jours cette semaine.' },
  { label: 'Protéines ≥ 170 g', ok: true, note: 'Atteint 6 jours sur 7.' },
  { label: 'Pas de repas sautés', ok: false, note: 'Déjeuner manqué mercredi et vendredi.' },
  { label: 'Glucides post-entraînement', ok: true, note: 'Bien géré les 4 jours de séance.' },
  { label: 'Lipides au-dessus du plancher', ok: false, note: 'Sous 70 g deux soirs consécutifs.' },
]
