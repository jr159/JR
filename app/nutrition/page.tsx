import KpiCard from '../components/KpiCard'
import MacroBar from '../components/MacroBar'
import ProjectionBlock from '../components/ProjectionBlock'
import CoherenceBlock from '../components/CoherenceBlock'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { nutritionSummary, nutritionSecondary, nutritionProjections, nutritionCoherence } from '../../lib/data/nutrition'

export default function Nutrition() {
  const calPct = Math.round((nutritionSummary.calories / nutritionSummary.caloriesTarget) * 100)
  const balance = nutritionSummary.calories - nutritionSummary.caloriesTarget

  return (
    <div className="space-y-10">
      <PageHeader title="Nutrition" subtitle="Moyennes de la semaine" />

      {/* ── HERO ──────────────────────────────────── */}
      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1c2e4a]">

          {/* Calories — col 3/5 */}
          <div className="sm:col-span-3 px-6 py-7 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-3">
                  Apport journalier
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-yellow-400 tracking-tight leading-none">
                    {nutritionSummary.calories.toLocaleString('fr-FR')}
                  </span>
                  <span className="text-xl text-[#4a5872]">/ {nutritionSummary.caloriesTarget.toLocaleString('fr-FR')}</span>
                </div>
                <p className="text-xs text-[#4a5872] mt-1.5">kcal · objectif quotidien</p>
              </div>
              <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 mt-1 ${
                balance > 0
                  ? 'bg-orange-400/10 border border-orange-400/20 text-orange-400'
                  : 'bg-green-400/10 border border-green-400/20 text-green-400'
              }`}>
                {balance > 0 ? '+' : ''}{balance}&nbsp;kcal
              </span>
            </div>

            {/* Barre de progression */}
            <div>
              <div className="h-1.5 bg-[#1c2e4a] rounded-full overflow-hidden mb-1.5">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{ width: `${Math.min(calPct, 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-[#4a5872]">{calPct}% de l'objectif journalier</p>
            </div>
          </div>

          {/* Macros snapshot — col 2/5 */}
          <div className="sm:col-span-2 flex flex-col divide-y divide-[#1c2e4a]">
            {([
              { label: 'Protéines', value: nutritionSummary.proteins, target: nutritionSummary.proteinsTarget, color: 'text-yellow-400' },
              { label: 'Glucides',  value: nutritionSummary.carbs,    target: nutritionSummary.carbsTarget,    color: 'text-blue-400' },
              { label: 'Lipides',   value: nutritionSummary.fats,     target: nutritionSummary.fatsTarget,     color: 'text-violet-400' },
            ] as const).map((m) => (
              <div key={m.label} className="px-6 py-[18px] flex items-center justify-between flex-1">
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">{m.label}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-lg font-bold tracking-tight ${m.color}`}>{m.value}</span>
                  <span className="text-xs text-[#4a5872]">/ {m.target} g</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INDICATEURS SECONDAIRES ───────────────── */}
      <section className="space-y-4">
        <SectionDivider>Indicateurs secondaires</SectionDivider>
        <div className="grid grid-cols-3 gap-4">
          {nutritionSecondary.map((s) => (
            <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} accent={false} />
          ))}
        </div>
      </section>

      {/* ── RÉPARTITION MACROS ────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Répartition macros</SectionDivider>
        <MacroBar
          calories={nutritionSummary.calories}
          proteins={nutritionSummary.proteins}
          proteinsTarget={nutritionSummary.proteinsTarget}
          carbs={nutritionSummary.carbs}
          carbsTarget={nutritionSummary.carbsTarget}
          fats={nutritionSummary.fats}
          fatsTarget={nutritionSummary.fatsTarget}
        />
      </section>

      {/* ── BILAN SEMAINE ─────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Bilan semaine</SectionDivider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProjectionBlock lines={nutritionProjections} />
          <CoherenceBlock rows={nutritionCoherence} />
        </div>
      </section>
    </div>
  )
}
