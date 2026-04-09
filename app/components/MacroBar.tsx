import SectionHeader from './SectionHeader'

type Props = {
  calories: number
  proteins: number
  carbs: number
  fats: number
}

export default function MacroBar({ calories, proteins, carbs, fats }: Props) {
  const pCal = proteins * 4
  const cCal = carbs * 4
  const fCal = fats * 9
  const total = pCal + cCal + fCal

  const pct = (n: number) => `${Math.round((n / total) * 100)}%`

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Répartition des macros" />
      </div>
      <div className="flex rounded-lg overflow-hidden h-3 mb-4 gap-px">
        <div className="bg-yellow-400 transition-all" style={{ width: pct(pCal) }} />
        <div className="bg-blue-400 transition-all" style={{ width: pct(cCal) }} />
        <div className="bg-[#4a5872] transition-all" style={{ width: pct(fCal) }} />
      </div>
      <div className="flex gap-5 text-xs text-[#8892a4]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          Protéines {pct(pCal)}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
          Glucides {pct(cCal)}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#4a5872] inline-block" />
          Lipides {pct(fCal)}
        </span>
      </div>
      <p className="text-xs text-[#4a5872] mt-3">{calories} kcal/j en moyenne</p>
    </div>
  )
}
