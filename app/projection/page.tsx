import KpiCard from '../components/KpiCard'
import ProjectionBlock from '../components/ProjectionBlock'
import SectionHeader from '../components/SectionHeader'
import { projectionKpis, scenarioPrudent, scenarioRealiste, projectionComment } from '../../lib/data/projection'

export default function Projection() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Projection</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {projectionKpis.map((k) => (
          <KpiCard key={k.label} label={k.label} value={k.value} unit={k.unit} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
          <div className="flex items-center gap-2">
            <SectionHeader title="Scénario prudent" />
            <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">−200 kcal/j</span>
          </div>
          <ul className="space-y-3">
            {scenarioPrudent.map((l) => (
              <li key={l.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{l.label}</span>
                <span className="text-sm font-semibold text-white">{l.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
          <div className="flex items-center gap-2">
            <SectionHeader title="Scénario réaliste" />
            <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">−400 kcal/j</span>
          </div>
          <ul className="space-y-3">
            {scenarioRealiste.map((l) => (
              <li key={l.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{l.label}</span>
                <span className="text-sm font-semibold text-white">{l.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl px-5 py-5">
        <p className="text-sm text-gray-400 leading-relaxed">{projectionComment}</p>
      </div>
    </div>
  )
}
