import KpiCard from './components/KpiCard'
import WeeklyNotes from './components/WeeklyNotes'
import TrendPlaceholder from './components/TrendPlaceholder'
import StepsBlock from './components/StepsBlock'
import { dashboardStats, dashboardSteps, weeklyNotes } from '../lib/data/dashboard'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Dashboard</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {dashboardStats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TrendPlaceholder label="Évolution du poids" />
        <TrendPlaceholder label="Tonnage hebdomadaire" />
      </div>

      <StepsBlock stepsDuJour={dashboardSteps.today} moyenne7j={dashboardSteps.avg7j} />

      <WeeklyNotes notes={weeklyNotes} />
    </div>
  )
}
