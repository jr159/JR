import SectionHeader from './SectionHeader'

type Session = {
  label: string
  score: number
  note: string
}

type Props = {
  sessions: Session[]
}

export default function SessionQuality({ sessions }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Qualité de séance" />
      </div>
      <ul className="space-y-4">
        {sessions.map((s, i) => (
          <li key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-[#e8eaf0]">{s.label}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, j) => (
                  <span
                    key={j}
                    className={`inline-block w-1.5 h-4 rounded-sm ${
                      j < s.score ? 'bg-yellow-400' : 'bg-[#1c2e4a]'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-[#4a5872]">{s.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
