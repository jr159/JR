import type { Status } from '../../lib/data/health'

type Props = {
  label: string
  value: string
  unit: string
  status: Status
  note: string
}

const statusStyle: Record<Status, { badge: string; dot: string }> = {
  bas:     { badge: 'bg-yellow-900/40 text-yellow-400', dot: 'bg-yellow-400' },
  normal:  { badge: 'bg-green-900/40 text-green-400',  dot: 'bg-green-400'  },
  élevé:   { badge: 'bg-red-900/40 text-red-400',      dot: 'bg-red-400'    },
}

export default function HealthMarkerCard({ label, value, unit, status, note }: Props) {
  const s = statusStyle[status]
  return (
    <div className="bg-gray-900 rounded-xl px-4 py-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs text-gray-500">{label}</span>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${s.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {status}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold text-white">{value}</span>
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
    </div>
  )
}
