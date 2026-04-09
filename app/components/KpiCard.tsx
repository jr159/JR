type Props = {
  label: string
  value: string
  unit: string
}

export default function KpiCard({ label, value, unit }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-4 py-4 flex flex-col gap-2 hover:border-[#2a4060] hover:bg-[#111e35] transition-all duration-200 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <span className="text-xs text-[#8892a4] font-medium leading-tight">{label}</span>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-yellow-400 tracking-tight">{value}</span>
        <span className="text-xs text-[#4a5872]">{unit}</span>
      </div>
    </div>
  )
}
