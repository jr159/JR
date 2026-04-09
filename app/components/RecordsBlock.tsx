import SectionHeader from './SectionHeader'

type Record = {
  exercise: string
  value: string
  date: string
}

type Props = {
  records: Record[]
}

export default function RecordsBlock({ records }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title="Records récents" />
      </div>
      <ul className="space-y-3">
        {records.map((r, i) => (
          <li key={i} className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{r.exercise}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">{r.value}</span>
              <span className="text-xs text-gray-600">{r.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
