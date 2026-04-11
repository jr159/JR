import HealthMarkerCard from '../components/HealthMarkerCard'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { healthMarkers, healthReadout } from '../../lib/data/health'
import type { Status } from '../../lib/data/health'

const priorityOrder: Record<Status, number> = { élevé: 0, bas: 1, normal: 2 }

export default function Health() {
  const sortedMarkers = [...healthMarkers].sort(
    (a, b) => priorityOrder[a.status] - priorityOrder[b.status]
  )

  const counts = {
    élevé: sortedMarkers.filter((m) => m.status === 'élevé').length,
    bas:   sortedMarkers.filter((m) => m.status === 'bas').length,
    normal: sortedMarkers.filter((m) => m.status === 'normal').length,
  }

  return (
    <div className="space-y-10">
      <PageHeader title="Health" subtitle="Dernière prise de sang" />

      {/* ── ÉTAT GLOBAL ───────────────────────────── */}
      <div
        className="bg-gradient-to-br from-[#0d1526] to-[#090e1a] border border-[#1c2e4a] rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.6), 0 0 80px rgba(250,204,21,0.05)' }}
      >
        <div className="px-5 pt-5 pb-3">
          <p className="text-[11px] font-semibold text-[#4a5872] uppercase tracking-widest">
            État global · {sortedMarkers.length} marqueurs analysés
          </p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-[#1c2e4a] border-t border-[#1c2e4a]">
          {[
            { label: 'Élevé',  count: counts.élevé,  dot: 'bg-red-400',    active: 'text-red-400',    sub: counts.élevé > 0  ? 'à corriger'   : 'aucun' },
            { label: 'Bas',    count: counts.bas,    dot: 'bg-yellow-400', active: 'text-yellow-400', sub: counts.bas > 0    ? 'à surveiller' : 'aucun' },
            { label: 'Normal', count: counts.normal, dot: 'bg-green-400',  active: 'text-green-400',  sub: 'dans la cible' },
          ].map((cell) => (
            <div key={cell.label} className="px-5 py-5 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cell.dot}`} />
                <span className="text-[10px] font-semibold text-[#8892a4] uppercase tracking-widest">{cell.label}</span>
              </div>
              <span className={`text-3xl font-bold tracking-tight leading-none ${cell.count > 0 ? cell.active : 'text-[#2a4060]'}`}>
                {cell.count}
              </span>
              <span className="text-[11px] text-[#4a5872]">{cell.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MARQUEURS BIOLOGIQUES ─────────────────── */}
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

      {/* ── POINTS D'ATTENTION ────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Points d'attention</SectionDivider>
        <div className="bg-[#0d1526] border border-yellow-400/20 rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <ul className="divide-y divide-[#1c2e4a]">
            {healthReadout.map((line, i) => (
              <li key={i} className="flex gap-3 py-3 first:pt-1 last:pb-1">
                <span className="text-yellow-400 select-none shrink-0 mt-0.5 text-sm">◆</span>
                <span className="text-sm text-[#e8eaf0] leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
