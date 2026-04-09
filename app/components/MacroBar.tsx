import SectionHeader from './SectionHeader'

type Props = {
  calories: number
  proteins: number   // g
  carbs: number      // g
  fats: number       // g
}

export default function MacroBar({ calories, proteins, carbs, fats }: Props) {
  const pCal = proteins * 4
  const cCal = carbs * 4
  const fCal = fats * 9
  const total = pCal + cCal + fCal

  const pct = (n: number) => `${Math.round((n / total) * 100)}%`

  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title="Répartition des macros" />
      </div>
      <div className="flex rounded overflow-hidden h-5 mb-3">
        <div className="bg-blue-500" style={{ width: pct(pCal) }} />
        <div className="bg-yellow-500" style={{ width: pct(cCal) }} />
        <div className="bg-orange-500" style={{ width: pct(fCal) }} />
      </div>
      <div className="flex gap-4 text-xs text-gray-400">
        <span><span className="text-blue-400">●</span> Protéines {pct(pCal)}</span>
        <span><span className="text-yellow-400">●</span> Glucides {pct(cCal)}</span>
        <span><span className="text-orange-400">●</span> Lipides {pct(fCal)}</span>
      </div>
      <p className="text-xs text-gray-600 mt-3">{calories} kcal/j en moyenne</p>
    </div>
  )
}
