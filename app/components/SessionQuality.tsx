import SectionHeader from './SectionHeader'

type Session = {
  label: string
  score: number
  note: string
}

type Props = {
  sessions: Session[]
}

function scoreStyle(score: number) {
  if (score >= 5) return { bar: 'bg-green-400', text: 'text-green-400' }
  if (score >= 4) return { bar: 'bg-yellow-400', text: 'text-yellow-400' }
  if (score >= 3) return { bar: 'bg-orange-400', text: 'text-orange-400' }
  return { bar: 'bg-red-400', text: 'text-red-400' }
}

export default function SessionQuality({ sessions }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Qualité de séance" />
      </div>
      <ul className="divide-y divide-[#1c2e4a]">
        {sessions.map((s, i) => {
          const style = scoreStyle(s.score)
          return (
            <li key={i} className="py-3.5 first:pt-1 last:pb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#e8eaf0]">{s.label}</span>
                <span className={`text-xs font-bold tabular-nums ${style.text}`}>
                  {s.score} / 5
                </span>
              </div>
              <div className="h-1.5 bg-[#07090f] rounded-full overflow-hidden border border-[#1c2e4a] mb-2.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${style.bar}`}
                  style={{ width: `${(s.score / 5) * 100}%` }}
                />
              </div>
              <p className="text-xs text-[#4a5872] leading-relaxed">{s.note}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
