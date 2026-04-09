import KpiCard from '../components/KpiCard'
import RecordsBlock from '../components/RecordsBlock'
import SessionQuality from '../components/SessionQuality'
import BarChart from '../components/BarChart'
import PageHeader from '../components/PageHeader'
import { trainingStats, recentRecords, sessionQuality, tonnageWeek } from '../../lib/data/training'

export default function Training() {
  return (
    <div className="space-y-8">
      <PageHeader title="Training" subtitle="Semaine en cours" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {trainingStats.map((s) => (
          <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <BarChart title="Tonnage par jour" bars={tonnageWeek} unit="kg" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RecordsBlock records={recentRecords} />
        <SessionQuality sessions={sessionQuality} />
      </div>
    </div>
  )
}
