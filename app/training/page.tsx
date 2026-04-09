import KpiCard from '../components/KpiCard'
import RecordsBlock from '../components/RecordsBlock'
import SessionQuality from '../components/SessionQuality'
import BarChart from '../components/BarChart'

const stats = [
  { label: 'Séances semaine', value: '4', unit: '/ 5' },
  { label: 'Tonnage hebdo', value: '12 400', unit: 'kg' },
  { label: 'Tonnage mensuel', value: '48 200', unit: 'kg' },
  { label: 'Séries totales', value: '84', unit: 'séries' },
  { label: 'Reps totales', value: '1 020', unit: 'reps' },
  { label: 'Durée moyenne', value: '62', unit: 'min' },
]

const records = [
  { exercise: 'Squat', value: '140 kg × 3', date: '07 avr.' },
  { exercise: 'Développé couché', value: '102.5 kg × 2', date: '05 avr.' },
  { exercise: 'Soulevé de terre', value: '175 kg × 1', date: '02 avr.' },
  { exercise: 'Rowing barre', value: '90 kg × 5', date: '31 mars' },
]

const sessions = [
  { label: 'Lundi — Push A', score: 5, note: 'Forte énergie, tous les sets réussis.' },
  { label: 'Mardi — Pull A', score: 4, note: 'Légère fatigue en fin de séance, rien de bloquant.' },
  { label: 'Jeudi — Legs', score: 3, note: 'Séance correcte mais squat poussif dès le 3e set.' },
  { label: 'Samedi — Push B', score: 4, note: 'Bon volume, progression sur les dips lestés.' },
]

const tonnageBars = [
  { label: 'L', value: 3200 },
  { label: 'Ma', value: 2800 },
  { label: 'Me', value: 0 },
  { label: 'J', value: 3600 },
  { label: 'V', value: 0 },
  { label: 'Sa', value: 2800 },
  { label: 'D', value: 0 },
]

export default function Training() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Training</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <BarChart title="Tonnage par jour (semaine)" bars={tonnageBars} unit="kg" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <RecordsBlock records={records} />
        <SessionQuality sessions={sessions} />
      </div>
    </div>
  )
}
