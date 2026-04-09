import KpiCard from '../components/KpiCard'
import RecordsBlock from '../components/RecordsBlock'
import SessionQuality from '../components/SessionQuality'
import BarChart from '../components/BarChart'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { trainingStats, recentRecords, sessionQuality, tonnageWeek } from '../../lib/data/training'

export default function Training() {
  return (
    <div className="space-y-10">
      <PageHeader title="Training" subtitle="Semaine en cours" />

      <section className="space-y-4">
        <SectionDivider>Performance</SectionDivider>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {trainingStats.map((s) => (
            <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionDivider>Volume hebdomadaire</SectionDivider>
        <BarChart title="Tonnage par jour" bars={tonnageWeek} unit="kg" />
      </section>

      <section className="space-y-4">
        <SectionDivider>Détails séances</SectionDivider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RecordsBlock records={recentRecords} />
          <SessionQuality sessions={sessionQuality} />
        </div>
      </section>
    </div>
  )
}
