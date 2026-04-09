import SectionHeader from './SectionHeader'

type Props = {
  notes: string[]
}

export default function WeeklyNotes({ notes }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-3">
        <SectionHeader title="À retenir cette semaine" />
      </div>
      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-400">
            <span className="text-gray-600 select-none">—</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
