import KpiCard from '../components/KpiCard'
import RecordsBlock from '../components/RecordsBlock'
import SessionQuality from '../components/SessionQuality'
import BarChart from '../components/BarChart'
import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import { trainingSummary, trainingStats, recentRecords, sessionQuality, tonnageWeek, weeklyFocus } from '../../lib/data/training'

const DAY_LABELS = ['L', 'Ma', 'Me', 'J', 'V', 'Sa', 'D']

export default function Training() {
  const pct = Math.round((trainingSummary.sessions / trainingSummary.sessionsTarget) * 100)

  return (
    <div className="space-y-10">
      <PageHeader title="Training" subtitle="Semaine en cours" />

      {/* ── HERO ──────────────────────────────────── */}
      <div
        className="bg-gradient-to-br from-[#0d1526] to-[#090e1a] border border-[#1c2e4a] rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.6), 0 0 80px rgba(250,204,21,0.05)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1c2e4a]">

          {/* Séances + jours — col 3/5 */}
          <div className="sm:col-span-3 px-6 py-7 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-3">
                  Séances réalisées
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-yellow-400 tracking-tight leading-none">
                    {trainingSummary.sessions}
                  </span>
                  <span className="text-xl text-[#4a5872]">/ {trainingSummary.sessionsTarget}</span>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold shrink-0">
                {pct}&nbsp;% complété
              </span>
            </div>

            {/* Barres jours */}
            <div>
              <div className="flex gap-1.5 mb-1.5">
                {trainingSummary.sessionDays.map((done, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      done ? 'bg-yellow-400' : 'bg-[#1c2e4a]'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5">
                {DAY_LABELS.map((d, i) => (
                  <span
                    key={i}
                    className={`flex-1 text-center text-[10px] font-medium ${
                      trainingSummary.sessionDays[i] ? 'text-yellow-400/70' : 'text-[#4a5872]'
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tonnage + Durée — col 2/5 */}
          <div className="sm:col-span-2 flex flex-col divide-y divide-[#1c2e4a]">
            <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
              <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">
                Tonnage hebdo
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#e8eaf0] tracking-tight leading-none">
                  {trainingSummary.tonnage}
                </span>
                <span className="text-sm text-[#4a5872]">kg</span>
              </div>
              <p className="text-[11px] text-[#4a5872]">
                Mensuel : {trainingSummary.tonnageMensuel} kg
              </p>
            </div>
            <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
              <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">
                Durée moyenne
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#e8eaf0] tracking-tight leading-none">
                  {trainingSummary.dureeMoyenne}
                </span>
                <span className="text-sm text-[#4a5872]">min / séance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── VOLUME & CHARGE ───────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Volume & charge</SectionDivider>
        <div className="grid grid-cols-3 gap-4">
          {trainingStats.map((s) => (
            <KpiCard key={s.label} label={s.label} value={s.value} unit={s.unit} accent={false} />
          ))}
        </div>
      </section>

      {/* ── TONNAGE HEBDO ─────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Tonnage par jour</SectionDivider>
        <BarChart title="Répartition hebdomadaire" bars={tonnageWeek} unit="kg" />
      </section>

      {/* ── RECORDS + QUALITÉ ─────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Performances & ressenti</SectionDivider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RecordsBlock records={recentRecords} />
          <SessionQuality sessions={sessionQuality} />
        </div>
      </section>

      {/* ── FOCUS SEMAINE ─────────────────────────── */}
      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-4 flex items-start gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
        <span className="text-yellow-400 shrink-0 mt-0.5 text-sm select-none">◆</span>
        <div>
          <p className="text-[11px] font-semibold text-[#4a5872] uppercase tracking-widest mb-1">
            Focus semaine
          </p>
          <p className="text-sm text-[#8892a4] leading-relaxed">{weeklyFocus}</p>
        </div>
      </div>

    </div>
  )
}
