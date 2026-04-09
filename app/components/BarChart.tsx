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
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-5">
        <SectionHeader title={title} />
      </div>
      <div className="flex items-end gap-2 h-28">
        {bars.map((b) => {
          const height = b.value > 0 ? Math.max(Math.round((b.value / max) * 96), 4) : 0
          return (
            <div key={b.label} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full flex items-end" style={{ height: '96px' }}>
                <div
                  className={`w-full rounded-t-sm transition-all duration-300 ${
                    b.value > 0 ? 'bg-yellow-400 opacity-90 hover:opacity-100' : 'bg-[#1c2e4a]'
                  }`}
                  style={{ height: `${height}px` }}
                />
              </div>
              <span className="text-[10px] text-[#4a5872] font-medium">{b.label}</span>
            </div>
          )
        })}
      </div>
      <p className="text-[10px] text-[#4a5872] mt-3 text-right">{unit}</p>
    </div>
  )
}
