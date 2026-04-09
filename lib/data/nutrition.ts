export const nutritionStats = [
  { label: 'Calories moyennes', value: '2 850', unit: 'kcal' },
  { label: 'Protéines moyennes', value: '178', unit: 'g' },
  { label: 'Glucides moyens', value: '310', unit: 'g' },
  { label: 'Lipides moyens', value: '82', unit: 'g' },
  { label: 'Objectif calories', value: '2 800', unit: 'kcal' },
  { label: 'Écart objectif', value: '+50', unit: 'kcal' },
]

export const macros = {
  calories: 2850,
  proteins: 178,
  carbs: 310,
  fats: 82,
}

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
