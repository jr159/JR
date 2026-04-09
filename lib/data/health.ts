export type Status = 'bas' | 'normal' | 'élevé'

export type HealthMarker = {
  label: string
  value: string
  unit: string
  status: Status
  note: string
}

export const healthMarkers: HealthMarker[] = [
  {
    label: 'Testostérone',
    value: '14.2',
    unit: 'nmol/L',
    status: 'normal',
    note: 'Dans la fourchette basse du normal. À surveiller.',
  },
  {
    label: 'Vitamine D',
    value: '22',
    unit: 'ng/mL',
    status: 'bas',
    note: 'Insuffisant. Supplémentation recommandée (2 000–4 000 UI/j).',
  },
  {
    label: 'Fer (ferritine)',
    value: '68',
    unit: 'µg/L',
    status: 'normal',
    note: 'Correct pour un athlète. Cible : > 50 µg/L.',
  },
  {
    label: 'Cortisol',
    value: '28',
    unit: 'µg/dL',
    status: 'élevé',
    note: 'Légèrement au-dessus de la normale. Surveiller la charge mentale.',
  },
  {
    label: 'Glycémie à jeun',
    value: '92',
    unit: 'mg/dL',
    status: 'normal',
    note: 'Optimal. Cible < 100 mg/dL.',
  },
]

export const healthReadout = [
  'Fatigue possible liée à une vitamine D insuffisante — supplémentation à démarrer.',
  'Cortisol légèrement élevé → surveiller le stress et le volume d\'entraînement.',
  'Testostérone dans la fourchette basse : priorité au sommeil et à la gestion du déficit.',
]
