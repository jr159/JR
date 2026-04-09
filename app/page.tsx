import KpiCard from './components/KpiCard'
import WeeklyNotes from './components/WeeklyNotes'
import TrendPlaceholder from './components/TrendPlaceholder'

const stats = [
  { label: 'Poids actuel', value: '84.2', unit: 'kg' },
  { label: 'Évolution 7j', value: '-0.6', unit: 'kg' },
  { label: 'Séances semaine', value: '4', unit: '/ 5' },
  { label: 'Tonnage semaine', value: '12 400', unit: 'kg' },
  { label: 'Calories moyennes', value: '2 850', unit: 'kcal' },
  { label: 'Protéines moyennes', value: '178', unit: 'g' },
  { label: "Steps aujourd'hui", value: '8 340', unit: 'pas' },
  { label: 'Moyenne steps', value: '9 100', unit: 'pas/j' },
]

const notes = [
  'Semaine solide — 4 séances tenues malgré le déplacement mercredi.',
  'Protéines légèrement en dessous de la cible sur 2 jours : corriger le repas du soir.',
  'Poids en baisse régulière depuis 3 semaines — maintenir le déficit actuel.',
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Dashboard</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TrendPlaceholder label="Évolution du poids" />
        <TrendPlaceholder label="Tonnage hebdomadaire" />
      </div>

      <WeeklyNotes notes={notes} />
    </div>
  )
}
