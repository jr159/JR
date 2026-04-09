import KpiCard from './components/KpiCard'
import WeeklyNotes from './components/WeeklyNotes'
import TrendPlaceholder from './components/TrendPlaceholder'
import StepsBlock from './components/StepsBlock'
import PageHeader from './components/PageHeader'
import { dashboardStats, dashboardSteps, weeklyNotes } from '../lib/data/dashboard'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard" subtitle="Vue d'ensemble de la semaine" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {dashboardStats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TrendPlaceholder label="Évolution du poids" />
        <TrendPlaceholder label="Tonnage hebdomadaire" />
      </div>

      <StepsBlock stepsDuJour={dashboardSteps.today} moyenne7j={dashboardSteps.avg7j} />

      <WeeklyNotes notes={weeklyNotes} />
    </div>
  )
}
