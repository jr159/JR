import HealthMarkerCard from '../components/HealthMarkerCard'
import SectionHeader from '../components/SectionHeader'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { healthMarkers, healthReadout } from '../../lib/data/health'

export default function Health() {
  return (
    <div className="space-y-10">
      <PageHeader title="Health" subtitle="Dernière prise de sang" />

      <section className="space-y-4">
        <SectionDivider>Marqueurs biologiques</SectionDivider>
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
      </section>

      <section className="space-y-4">
        <SectionDivider>Lecture rapide</SectionDivider>
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <ul className="space-y-3">
            {healthReadout.map((line, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#8892a4] leading-relaxed">
                <span className="text-yellow-400 select-none shrink-0 mt-0.5">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
