import KpiCard from '../components/KpiCard'
import MacroBar from '../components/MacroBar'
import ProjectionBlock from '../components/ProjectionBlock'
import CoherenceBlock from '../components/CoherenceBlock'

const stats = [
  { label: 'Calories moyennes', value: '2 850', unit: 'kcal' },
  { label: 'Protéines moyennes', value: '178', unit: 'g' },
  { label: 'Glucides moyens', value: '310', unit: 'g' },
  { label: 'Lipides moyens', value: '82', unit: 'g' },
  { label: 'Objectif calories', value: '2 800', unit: 'kcal' },
  { label: 'Écart objectif', value: '+50', unit: 'kcal' },
]

const projections = [
  { label: 'Poids estimé dans 4 semaines', value: '83.0 kg' },
  { label: 'Déficit calorique hebdo', value: '~350 kcal' },
  { label: 'Tendance actuelle', value: '−0.5 kg / sem.' },
  { label: 'Objectif atteint si maintenu', value: '~8 semaines' },
]

const coherence = [
  { label: 'Jours dans la cible calorique', ok: true, note: '5 / 7 jours cette semaine.' },
  { label: 'Protéines ≥ 170 g', ok: true, note: 'Atteint 6 jours sur 7.' },
  { label: 'Pas de repas sautés', ok: false, note: 'Déjeuner manqué mercredi et vendredi.' },
  { label: 'Glucides post-entraînement', ok: true, note: 'Bien géré les 4 jours de séance.' },
  { label: 'Lipides au-dessus du plancher', ok: false, note: 'Sous 70 g deux soirs consécutifs.' },
]

export default function Nutrition() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Nutrition</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <MacroBar calories={2850} proteins={178} carbs={310} fats={82} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <ProjectionBlock lines={projections} />
        <CoherenceBlock rows={coherence} />
      </div>
    </div>
  )
}
