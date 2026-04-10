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
  const total = bars.reduce((s, b) => s + b.value, 0)

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-5">
        <SectionHeader title={title} />
        <span className="text-[11px] text-[#4a5872] bg-[#07090f] border border-[#1c2e4a] px-2.5 py-1 rounded-full tabular-nums">
          {total.toLocaleString('fr-FR')} {unit}
        </span>
      </div>

      <div className="flex items-end gap-2" style={{ height: '96px' }}>
        {bars.map((b) => {
          const height = b.value > 0 ? Math.max(Math.round((b.value / max) * 80), 6) : 0
          const label = b.value > 0
            ? b.value >= 1000
              ? `${(b.value / 1000).toFixed(1)}k`
              : `${b.value}`
            : ''
          return (
            <div key={b.label} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[9px] text-[#8892a4] tabular-nums h-3 flex items-end">{label}</span>
              <div className="w-full flex items-end" style={{ height: '72px' }}>
                <div
                  className={`w-full rounded-t transition-all duration-300 ${
                    b.value > 0
                      ? 'bg-yellow-400/80 hover:bg-yellow-400'
                      : 'bg-[#1c2e4a]'
                  }`}
                  style={{ height: b.value > 0 ? `${height}px` : '3px' }}
                />
              </div>
              <span className="text-[10px] text-[#4a5872] font-medium">{b.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
