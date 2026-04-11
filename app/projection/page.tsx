import PageHeader from '../components/PageHeader'
import SectionDivider from '../components/SectionDivider'
import SectionHeader from '../components/SectionHeader'
import { projectionHero, projectionKpis, scenarioPrudent, scenarioRealiste, projectionComment } from '../../lib/data/projection'

export default function Projection() {
  const poidsActuel = parseFloat(projectionKpis[0].value)
  const { poidsDepart, poidsObjectif, echeance, delaiMois } = projectionHero

  const progress = Math.round(((poidsDepart - poidsActuel) / (poidsDepart - poidsObjectif)) * 100)
  const restant = (poidsActuel - poidsObjectif).toFixed(1)

  const prudentOutcome = scenarioPrudent.find((l) => l.label === 'Dans 3 mois')?.value ?? '—'
  const realisteOutcome = scenarioRealiste.find((l) => l.label === 'Dans 3 mois')?.value ?? '—'

  const scenarioRows = (rows: typeof scenarioPrudent) =>
    rows.filter((l) => l.label !== 'Dans 3 mois')

  const splitVal = (s: string) => {
    const i = s.lastIndexOf(' ')
    return i === -1 ? { num: s, unit: '' } : { num: s.slice(0, i), unit: s.slice(i + 1) }
  }

  return (
    <div className="space-y-10">
      <PageHeader title="Projection" subtitle="Basé sur le déficit actuel" />

      {/* ── HERO: TRAJECTOIRE ─────────────────────── */}
      <div
        className="bg-gradient-to-br from-[#0d1526] to-[#090e1a] border border-[#1c2e4a] rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.6), 0 0 80px rgba(250,204,21,0.05)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1c2e4a]">

          {/* Trajectoire — col 3/5 */}
          <div className="sm:col-span-3 px-6 py-7 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-3">
                  Poids actuel
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-yellow-400 tracking-tight leading-none">
                    {poidsActuel}
                  </span>
                  <span className="text-xl text-[#4a5872]">kg</span>
                </div>
              </div>
              <div className="text-right shrink-0 mt-1">
                <p className="text-[10px] font-semibold text-[#4a5872] uppercase tracking-widest mb-1.5">
                  Objectif
                </p>
                <p className="text-2xl font-bold text-[#e8eaf0] leading-none">
                  {poidsObjectif}{' '}
                  <span className="text-sm font-normal text-[#4a5872]">kg</span>
                </p>
                <p className="text-[10px] text-[#4a5872] mt-1">{echeance}</p>
              </div>
            </div>

            {/* Barre de progression */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[10px] text-[#4a5872]">Départ · {poidsDepart} kg</span>
                <span className="text-[10px] text-[#4a5872]">Objectif · {poidsObjectif} kg</span>
              </div>
              <div className="h-1.5 bg-[#1c2e4a] rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[11px] text-[#4a5872]">{progress}% du chemin parcouru</span>
                <span className="text-[11px] text-yellow-400/70">encore {restant} kg</span>
              </div>
            </div>
          </div>

          {/* Vitaux — col 2/5 */}
          <div className="sm:col-span-2 flex flex-col divide-y divide-[#1c2e4a]">
            <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
              <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">
                Perte visée
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#e8eaf0] tracking-tight leading-none">
                  {projectionKpis[3].value}
                </span>
                <span className="text-sm text-[#4a5872]">{projectionKpis[3].unit}</span>
              </div>
            </div>
            <div className="px-6 py-6 flex flex-col gap-1.5 flex-1">
              <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">
                Délai estimé
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#e8eaf0] tracking-tight leading-none">
                  ~{delaiMois}
                </span>
                <span className="text-sm text-[#4a5872]">mois</span>
              </div>
              <p className="text-[11px] text-[#4a5872]">Scénario réaliste</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCÉNARIOS ─────────────────────────────── */}
      <section className="space-y-4">
        <SectionDivider>Scénarios</SectionDivider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Scénario prudent */}
          <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 space-y-4 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between">
              <SectionHeader title="Scénario prudent" />
              <span className="text-[10px] text-[#4a5872] bg-[#07090f] border border-[#1c2e4a] px-2 py-0.5 rounded-full">
                −200 kcal/j
              </span>
            </div>

            <div className="bg-[#07090f] border border-[#1c2e4a] rounded-xl px-4 py-3">
              <p className="text-[10px] text-[#4a5872] uppercase tracking-wide mb-1.5">Dans 3 mois</p>
              <p className="text-2xl font-bold text-[#e8eaf0] tabular-nums leading-none">
                {splitVal(prudentOutcome).num}{' '}
                <span className="text-sm font-normal text-[#4a5872]">{splitVal(prudentOutcome).unit}</span>
              </p>
            </div>

            <ul className="divide-y divide-[#1c2e4a]">
              {scenarioRows(scenarioPrudent).map((l) => (
                <li key={l.label} className="flex items-center justify-between py-2.5 first:pt-1 last:pb-1">
                  <span className="text-sm text-[#8892a4]">{l.label}</span>
                  <span className="text-sm font-semibold text-[#e8eaf0] shrink-0">{l.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scénario réaliste */}
          <div className="bg-[#0d1526] border border-yellow-400/20 rounded-2xl px-5 py-5 space-y-4 shadow-[0_4px_24px_rgba(250,204,21,0.07)]">
            <div className="flex items-center justify-between">
              <SectionHeader title="Scénario réaliste" />
              <span className="text-[10px] text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                −400 kcal/j
              </span>
            </div>

            <div className="bg-yellow-400/5 border border-yellow-400/15 rounded-xl px-4 py-3">
              <p className="text-[10px] text-yellow-400/60 uppercase tracking-wide mb-1.5">Dans 3 mois</p>
              <p className="text-2xl font-bold text-yellow-400 tabular-nums leading-none">
                {splitVal(realisteOutcome).num}{' '}
                <span className="text-sm font-normal text-yellow-400/60">{splitVal(realisteOutcome).unit}</span>
              </p>
            </div>

            <ul className="divide-y divide-[#1c2e4a]">
              {scenarioRows(scenarioRealiste).map((l) => (
                <li key={l.label} className="flex items-center justify-between py-2.5 first:pt-1 last:pb-1">
                  <span className="text-sm text-[#8892a4]">{l.label}</span>
                  <span className="text-sm font-semibold text-yellow-400 shrink-0">{l.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NOTE ──────────────────────────────────── */}
      <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-4 flex items-start gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
        <span className="text-yellow-400 shrink-0 mt-0.5 text-sm select-none">◆</span>
        <div>
          <p className="text-[11px] font-semibold text-[#4a5872] uppercase tracking-widest mb-1">
            À garder en tête
          </p>
          <p className="text-sm text-[#8892a4] leading-relaxed">{projectionComment}</p>
        </div>
      </div>
    </div>
  )
}
