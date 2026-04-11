import SectionHeader from './SectionHeader'

type Props = {
  notes: string[]
}

export default function WeeklyNotes({ notes }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="À retenir cette semaine" />
      </div>
      <ul className="divide-y divide-[#1c2e4a]">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-3 py-3 first:pt-1 last:pb-1">
            <span className="text-yellow-400 select-none shrink-0 mt-0.5">—</span>
            <span className="text-sm text-[#e8eaf0] leading-relaxed">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
