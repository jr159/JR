import SectionHeader from './SectionHeader'

type Bar = {
  label: string
  value: number
}

type Props = {
  title: string
  bars: Bar[]
  unit: string
}

export default function BarChart({ title, bars, unit }: Props) {
  const max = Math.max(...bars.map((b) => b.value))

  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title={title} />
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full bg-gray-700 rounded-sm"
              style={{ height: `${Math.round((b.value / max) * 80)}px` }}
            />
            <span className="text-xs text-gray-500">{b.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-2 text-right">{unit}</p>
    </div>
  )
}
