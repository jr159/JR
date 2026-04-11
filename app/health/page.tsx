import HealthMarkerCard from '../components/HealthMarkerCard'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { healthMarkers, healthReadout } from '../../lib/data/health'

const priorityOrder = { élevé: 0, bas: 1, normal: 2 } as const

export default function Health() {
  const sortedMarkers = [...healthMarkers].sort(
    (a, b) => priorityOrder[a.status] - priorityOrder[b.status]
  )

  return (
    <div className="space-y-10">
      <PageHeader title="Health" subtitle="Dernière prise de sang" />

      <section className="space-y-4">
        <SectionDivider>Marqueurs biologiques</SectionDivider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedMarkers.map((m) => (
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
      </section>

      <section className="space-y-4">
        <SectionDivider>Points d'attention</SectionDivider>
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <ul className="divide-y divide-[#1c2e4a]">
            {healthReadout.map((line, i) => (
              <li key={i} className="flex gap-3 py-3 first:pt-1 last:pb-1">
                <span className="text-yellow-400 select-none shrink-0 mt-0.5">—</span>
                <span className="text-sm text-[#e8eaf0] leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
