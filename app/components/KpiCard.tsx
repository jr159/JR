type Props = {
  label: string
  value: string
  unit: string
  accent?: boolean
}

export default function KpiCard({ label, value, unit, accent = true }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 flex flex-col gap-3 hover:border-[#2a4060] hover:bg-[#111e35] transition-all duration-200 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <span className="text-xs text-[#8892a4] font-medium leading-tight tracking-wide">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-bold tracking-tight leading-none ${accent ? 'text-yellow-400' : 'text-[#e8eaf0]'}`}>
          {value}
        </span>
        <span className="text-sm text-[#4a5872]">{unit}</span>
      </div>
    </div>
  )
}
