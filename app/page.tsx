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

const weekLabels = ['L', 'Ma', 'Me', 'J', 'V', 'Sa', 'D']

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-[#4a5872] uppercase tracking-widest whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1c2e4a]" />
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <PageHeader title="Dashboard" subtitle="Vue d'ensemble de la semaine" />

      {/* ─────────────────────────────────────────────
          SECTION 1 — POIDS / ÉVOLUTION
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionLabel>Poids & évolution</SectionLabel>

        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1c2e4a]">

            {/* Poids + sparkline — 3/5 */}
            <div className="sm:col-span-3 px-6 py-7 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-3">
                    Poids actuel
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-yellow-400 tracking-tight leading-none">
                      {current}
                    </span>
                    <span className="text-xl text-[#4a5872]">kg</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                  isDown
                    ? 'bg-green-400/10 text-green-400 border-green-400/20'
                    : 'bg-red-400/10 text-red-400 border-red-400/20'
                }`}>
                  {isDown ? '↓' : '↑'} {evoSign}{evolution7j} kg / sem.
                </div>
              </div>

              <div className="mt-1">
                <MiniSparkline data={history7j} labels={weekLabels} height={56} />
              </div>
            </div>

            {/* Stats droite — 2/5 */}
            <div className="sm:col-span-2 flex flex-col divide-y divide-[#1c2e4a]">
              <div className="px-6 py-6 flex flex-col gap-2 flex-1">
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">Tendance</p>
                <p className={`text-2xl font-bold ${evoColor}`}>
                  {isDown ? 'En baisse' : 'En hausse'}
                </p>
                <p className={`text-sm ${evoColor}`}>
                  {isDown ? 'Bonne trajectoire — maintenir.' : 'Ajuster le déficit.'}
                </p>
              </div>
              <div className="px-6 py-6 flex flex-col gap-2 flex-1">
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">Déficit estimé</p>
                <p className="text-2xl font-bold text-yellow-400">−350</p>
                <p className="text-sm text-[#4a5872]">kcal / jour en moyenne</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 — KPIs SEMAINE
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionLabel>Performance semaine</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <KpiCard label="Séances" value={dashboardStats[0].value} unit={dashboardStats[0].unit} accent={false} />
          <KpiCard label="Tonnage" value={dashboardStats[1].value} unit={dashboardStats[1].unit} accent={false} />
          <KpiCard label="Calories moy." value={dashboardStats[2].value} unit={dashboardStats[2].unit} accent />
          <KpiCard label="Protéines moy." value={dashboardStats[3].value} unit={dashboardStats[3].unit} accent />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 — ACTIVITÉ
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionLabel>Activité quotidienne</SectionLabel>
        <StepsBlock stepsDuJour={dashboardSteps.today} moyenne7j={dashboardSteps.avg7j} />
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 — BILAN
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionLabel>Bilan de la semaine</SectionLabel>
        <WeeklyNotes notes={weeklyNotes} />
      </section>

    </div>
  )
}
