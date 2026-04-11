export const projectionHero = {
  poidsDepart: 87.0,
  poidsObjectif: 78.0,
  echeance: 'fin juillet 2026',
  delaiMois: 3,
}

export const projectionKpis = [
  { label: 'Poids actuel', value: '84.2', unit: 'kg' },
  { label: 'Dans 1 mois (réaliste)', value: '82.2', unit: 'kg' },
  { label: 'Dans 3 mois (réaliste)', value: '78.5', unit: 'kg' },
  { label: 'Perte visée', value: '−0.5', unit: 'kg/sem.' },
]

export const scenarioPrudent = [
  { label: 'Déficit calorique', value: '~200 kcal/j' },
  { label: 'Perte estimée', value: '−0.2 kg/sem.' },
  { label: 'Dans 1 mois', value: '83.4 kg' },
  { label: 'Dans 3 mois', value: '81.8 kg' },
]

export const scenarioRealiste = [
  { label: 'Déficit calorique', value: '~400 kcal/j' },
  { label: 'Perte estimée', value: '−0.5 kg/sem.' },
  { label: 'Dans 1 mois', value: '82.2 kg' },
  { label: 'Dans 3 mois', value: '78.5 kg' },
]

export const projectionComment =
  "Ces projections supposent un déficit maintenu sans interruption. " +
  "En pratique, compte sur 10 à 15 % d'écart selon les semaines chargées, déplacements ou hausses de volume. " +
  "L'objectif n'est pas la précision — c'est de garder la direction."
