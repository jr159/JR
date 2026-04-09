import HealthMarkerCard from '../components/HealthMarkerCard'
import SectionHeader from '../components/SectionHeader'
import PageHeader from '../components/PageHeader'
import { healthMarkers, healthReadout } from '../../lib/data/health'

export default function Health() {
  return (
    <div className="space-y-8">
      <PageHeader title="Health" subtitle="Dernière prise de sang" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthMarkers.map((m) => (
          <HealthMarkerCard
            key={m.label}
            label={m.label}
            value={m.value}
            unit={m.unit}
            status={m.status}
            note={m.note}
          />
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
        <SectionHeader title="Lecture rapide" />
        <ul className="space-y-3">
          {healthReadout.map((line, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-400">
              <span className="text-gray-600 select-none shrink-0">—</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
