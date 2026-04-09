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
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Records récents" />
      </div>
      <ul className="space-y-3">
        {records.map((r, i) => (
          <li key={i} className="flex items-center justify-between gap-4 py-1 border-b border-[#1c2e4a] last:border-0">
            <span className="text-sm text-[#8892a4]">{r.exercise}</span>
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-sm font-semibold text-yellow-400">{r.value}</span>
              <span className="text-[10px] text-[#4a5872]">{r.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
