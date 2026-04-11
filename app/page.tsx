import KpiCard from './components/KpiCard'
import WeeklyNotes from './components/WeeklyNotes'
import StepsBlock from './components/StepsBlock'
import PageHeader from './components/PageHeader'
import MiniSparkline from './components/MiniSparkline'
import SectionDivider from './components/SectionDivider'
import { dashboardStats, dashboardWeight, dashboardSteps, weeklyNotes } from '../lib/data/dashboard'

const { current, evolution7j, history7j } = dashboardWeight
const isDown = evolution7j < 0
const evoColor = isDown ? 'text-green-400' : 'text-red-400'
const evoSign = evolution7j > 0 ? '+' : ''

const weekLabels = ['L', 'Ma', 'Me', 'J', 'V', 'Sa', 'D']

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <PageHeader title="Dashboard" subtitle="Vue d'ensemble de la semaine" />

      {/* ─────────────────────────────────────────────
          SECTION 1 — POIDS / ÉVOLUTION
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Poids & évolution</SectionDivider>

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
              <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">Tendance</p>
                <p className={`text-3xl font-bold tracking-tight leading-none ${evoColor}`}>
                  {isDown ? 'En baisse' : 'En hausse'}
                </p>
                <p className={`text-[11px] ${evoColor}`}>
                  {isDown ? 'Bonne trajectoire — maintenir.' : 'Ajuster le déficit.'}
                </p>
              </div>
              <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">Déficit estimé</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-yellow-400 tracking-tight leading-none">−350</span>
                  <span className="text-sm text-[#4a5872]">kcal</span>
                </div>
                <p className="text-[11px] text-[#4a5872]">par jour en moyenne</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 — KPIs SEMAINE
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Performance semaine</SectionDivider>
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
        <SectionDivider>Activité quotidienne</SectionDivider>
        <StepsBlock stepsDuJour={dashboardSteps.today} moyenne7j={dashboardSteps.avg7j} />
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 — BILAN
      ───────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Bilan de la semaine</SectionDivider>
        <WeeklyNotes notes={weeklyNotes} />
      </section>

    </div>
  )
}
