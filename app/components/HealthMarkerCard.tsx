import type { Status } from '../../lib/data/health'

type Props = {
  label: string
  value: string
  unit: string
  status: Status
  note: string
}

const statusStyle: Record<Status, { badge: string; dot: string; value: string; border: string }> = {
  bas:    { badge: 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20', dot: 'bg-yellow-400', value: 'text-yellow-400',  border: 'border-yellow-400/25' },
  normal: { badge: 'bg-green-400/10 text-green-400 border border-green-400/20',   dot: 'bg-green-400',  value: 'text-[#e8eaf0]',   border: 'border-[#1c2e4a]'     },
  élevé:  { badge: 'bg-red-400/10 text-red-400 border border-red-400/20',         dot: 'bg-red-400',    value: 'text-red-400',      border: 'border-red-400/25'    },
}

export default function HealthMarkerCard({ label, value, unit, status, note }: Props) {
  const s = statusStyle[status]
  return (
    <div className={`bg-[#0d1526] border ${s.border} rounded-2xl px-5 py-5 flex flex-col gap-3 hover:border-[#2a4060] transition-all duration-200 shadow-[0_2px_16px_rgba(0,0,0,0.4)]`}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-semibold text-[#8892a4] uppercase tracking-wide">{label}</span>
        <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${s.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {status}
        </span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-3xl font-bold tracking-tight leading-none ${s.value}`}>{value}</span>
        <span className="text-xs text-[#4a5872]">{unit}</span>
      </div>
      <p className="text-xs text-[#8892a4] leading-relaxed">{note}</p>
    </div>
  )
}
