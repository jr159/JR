import SectionHeader from './SectionHeader'

type Props = {
  proteins: number
  proteinsTarget: number
  carbs: number
  carbsTarget: number
  fats: number
  fatsTarget: number
}

export default function MacroBar({ proteins, proteinsTarget, carbs, carbsTarget, fats, fatsTarget }: Props) {
  const pCal = proteins * 4
  const cCal = carbs * 4
  const fCal = fats * 9
  const totalCal = pCal + cCal + fCal

  const macroRows = [
    {
      label: 'Protéines',
      value: proteins,
      target: proteinsTarget,
      cal: pCal,
      pct: Math.round((proteins / proteinsTarget) * 100),
      barColor: 'bg-yellow-400',
      textColor: 'text-yellow-400',
      dotColor: 'bg-yellow-400',
    },
    {
      label: 'Glucides',
      value: carbs,
      target: carbsTarget,
      cal: cCal,
      pct: Math.round((carbs / carbsTarget) * 100),
      barColor: 'bg-blue-400',
      textColor: 'text-blue-400',
      dotColor: 'bg-blue-400',
    },
    {
      label: 'Lipides',
      value: fats,
      target: fatsTarget,
      cal: fCal,
      pct: Math.round((fats / fatsTarget) * 100),
      barColor: 'bg-violet-400',
      textColor: 'text-violet-400',
      dotColor: 'bg-violet-400',
    },
  ]

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-5">
        <SectionHeader title="Répartition des macros" />
      </div>

      <ul className="divide-y divide-[#1c2e4a]">
        {macroRows.map((m) => (
          <li key={m.label} className="py-4 first:pt-1 last:pb-1">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${m.dotColor}`} />
                <span className="text-sm font-medium text-[#e8eaf0]">{m.label}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-sm font-bold tabular-nums ${m.textColor}`}>{m.value} g</span>
                <span className="text-[10px] text-[#4a5872]">/ {m.target} g</span>
              </div>
            </div>
            <div className="h-1.5 bg-[#07090f] rounded-full overflow-hidden border border-[#1c2e4a] mb-2">
              <div
                className={`h-full rounded-full transition-all duration-500 ${m.barColor}`}
                style={{ width: `${Math.min(m.pct, 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-[#4a5872]">{Math.round((m.cal / totalCal) * 100)}% des calories</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
