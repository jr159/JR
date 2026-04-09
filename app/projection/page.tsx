import KpiCard from '../components/KpiCard'
import SectionHeader from '../components/SectionHeader'
import PageHeader from '../components/PageHeader'
import { projectionKpis, scenarioPrudent, scenarioRealiste, projectionComment } from '../../lib/data/projection'

const badge = 'text-[10px] text-[#4a5872] bg-[#07090f] border border-[#1c2e4a] px-2 py-0.5 rounded-full'
const rowLabel = 'text-sm text-[#8892a4]'
const rowValue = 'text-sm font-semibold text-yellow-400 shrink-0'

export default function Projection() {
  return (
    <div className="space-y-8">
      <PageHeader title="Projection" subtitle="Basé sur le déficit actuel" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {projectionKpis.map((k) => (
          <KpiCard key={k.label} label={k.label} value={k.value} unit={k.unit} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 space-y-4 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3">
            <SectionHeader title="Scénario prudent" />
            <span className={badge}>−200 kcal/j</span>
          </div>
          <ul className="space-y-3">
            {scenarioPrudent.map((l) => (
              <li key={l.label} className="flex items-center justify-between py-1 border-b border-[#1c2e4a] last:border-0">
                <span className={rowLabel}>{l.label}</span>
                <span className={rowValue}>{l.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 space-y-4 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3">
            <SectionHeader title="Scénario réaliste" />
            <span className={badge}>−400 kcal/j</span>
          </div>
          <ul className="space-y-3">
            {scenarioRealiste.map((l) => (
              <li key={l.label} className="flex items-center justify-between py-1 border-b border-[#1c2e4a] last:border-0">
                <span className={rowLabel}>{l.label}</span>
                <span className={rowValue}>{l.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
        <p className="text-sm text-[#8892a4] leading-relaxed">{projectionComment}</p>
      </div>
    </div>
  )
}
