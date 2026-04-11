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
      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
        <div>
          <p className="text-[11px] font-semibold text-[#4a5872] uppercase tracking-widest mb-1">
            État global
          </p>
          <p className="text-sm font-medium text-[#e8eaf0]">
            {counts.normal} marqueur{counts.normal > 1 ? 's' : ''} normaux
            {counts.bas > 0 && <span className="text-yellow-400"> · {counts.bas} à surveiller</span>}
            {counts.élevé > 0 && <span className="text-red-400"> · {counts.élevé} élevé</span>}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
          {counts.élevé > 0 && (
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-red-400 bg-red-400/10 border border-red-400/20 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              {counts.élevé} élevé
            </span>
          )}
          {counts.bas > 0 && (
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
              {counts.bas} bas
            </span>
          )}
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            {counts.normal} normal
          </span>
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
