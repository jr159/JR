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
      <ul className="divide-y divide-[#1c2e4a]">
        {records.map((r, i) => (
          <li key={i} className="flex items-center gap-3 py-3.5 first:pt-1 last:pb-1">
            <span className="text-[11px] font-bold text-[#2a4060] w-6 shrink-0 tabular-nums select-none">
              0{i + 1}
            </span>
            <span className="flex-1 text-sm font-semibold text-[#e8eaf0]">{r.exercise}</span>
            <span className="text-[15px] font-bold text-yellow-400 shrink-0">{r.value}</span>
            <span className="text-[10px] text-[#4a5872] bg-[#07090f] border border-[#1c2e4a] px-2 py-0.5 rounded-full shrink-0 tabular-nums">
              {r.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
