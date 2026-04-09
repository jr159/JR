import KpiCard from './components/KpiCard'
import WeeklyNotes from './components/WeeklyNotes'
import StepsBlock from './components/StepsBlock'
import PageHeader from './components/PageHeader'
import MiniSparkline from './components/MiniSparkline'
import { dashboardStats, dashboardWeight, dashboardSteps, weeklyNotes } from '../lib/data/dashboard'

const { current, evolution7j, history7j } = dashboardWeight
const isDown = evolution7j < 0
const evoColor = isDown ? 'text-green-400' : 'text-red-400'
const evoSign = evolution7j > 0 ? '+' : ''

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" subtitle="Vue d'ensemble de la semaine" />

      {/* ── HERO POIDS ─────────────────────────────── */}
      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#1c2e4a]">

          {/* Poids actuel */}
          <div className="px-6 py-6 flex flex-col gap-4">
            <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">Poids actuel</p>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-yellow-400 tracking-tight leading-none">
                {current}
              </span>
              <span className="text-lg text-[#4a5872] mb-1">kg</span>
            </div>
            <MiniSparkline data={history7j} width={180} height={48} />
            <p className="text-xs text-[#4a5872]">7 derniers jours</p>
          </div>

          {/* Évolution */}
          <div className="px-6 py-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-3">Évolution 7j</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-bold tracking-tight leading-none ${evoColor}`}>
                  {evoSign}{evolution7j}
                </span>
                <span className="text-base text-[#4a5872]">kg</span>
              </div>
              <p className={`text-sm mt-2 ${evoColor}`}>
                {isDown ? '↓ En baisse — bonne trajectoire' : '↑ En hausse cette semaine'}
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-[#07090f] rounded-xl border border-[#1c2e4a]">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
              <p className="text-xs text-[#8892a4]">Déficit moyen estimé : <span className="text-yellow-400 font-semibold">−350 kcal/j</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* ── KPIs secondaires ───────────────────────── */}
      <div>
        <p className="text-xs font-semibold text-[#4a5872] uppercase tracking-widest mb-3 pl-1">Semaine en cours</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {dashboardStats.map((s) => (
            <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
          ))}
        </div>
      </div>

      {/* ── STEPS ──────────────────────────────────── */}
      <StepsBlock stepsDuJour={dashboardSteps.today} moyenne7j={dashboardSteps.avg7j} />

      {/* ── NOTES ──────────────────────────────────── */}
      <WeeklyNotes notes={weeklyNotes} />
    </div>
  )
}
