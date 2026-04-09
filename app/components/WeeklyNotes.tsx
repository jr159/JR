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
      <ul className="space-y-3">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-3 text-sm text-[#8892a4] leading-relaxed">
            <span className="text-yellow-400 select-none shrink-0 mt-0.5">—</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
