type Props = {
  label: string
  value: string
  unit: string
}

export default function KpiCard({ label, value, unit }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-4 py-4 flex flex-col gap-1">
      <span className="text-xs text-gray-500 leading-tight">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold text-white">{value}</span>
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
    </div>
  )
}
