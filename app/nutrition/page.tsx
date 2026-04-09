import KpiCard from '../components/KpiCard'
import MacroBar from '../components/MacroBar'
import ProjectionBlock from '../components/ProjectionBlock'
import CoherenceBlock from '../components/CoherenceBlock'
import PageHeader from '../components/PageHeader'
import { nutritionStats, macros, nutritionProjections, nutritionCoherence } from '../../lib/data/nutrition'

export default function Nutrition() {
  return (
    <div className="space-y-8">
      <PageHeader title="Nutrition" subtitle="Moyennes de la semaine" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {nutritionStats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <MacroBar
        calories={macros.calories}
        proteins={macros.proteins}
        carbs={macros.carbs}
        fats={macros.fats}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectionBlock lines={nutritionProjections} />
        <CoherenceBlock rows={nutritionCoherence} />
      </div>
    </div>
  )
}
