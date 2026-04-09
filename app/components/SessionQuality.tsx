import SectionHeader from './SectionHeader'

type Session = {
  label: string
  score: number // 1-5
  note: string
}

type Props = {
  sessions: Session[]
}

const dots = (score: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`inline-block w-2 h-2 rounded-full ${i < score ? 'bg-white' : 'bg-gray-700'}`}
    />
  ))

export default function SessionQuality({ sessions }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title="Qualité de séance" />
      </div>
      <ul className="space-y-4">
        {sessions.map((s, i) => (
          <li key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-300">{s.label}</span>
              <div className="flex gap-1">{dots(s.score)}</div>
            </div>
            <p className="text-xs text-gray-500">{s.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
