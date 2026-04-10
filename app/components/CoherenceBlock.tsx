import SectionHeader from './SectionHeader'

type Row = {
  label: string
  ok: boolean
  note: string
}

type Props = {
  rows: Row[]
}

export default function CoherenceBlock({ rows }: Props) {
  const okCount = rows.filter((r) => r.ok).length

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-5">
        <SectionHeader title="Cohérence nutrition" />
        <span className="text-[11px] text-[#4a5872] bg-[#07090f] border border-[#1c2e4a] px-2.5 py-1 rounded-full tabular-nums">
          {okCount} / {rows.length}
        </span>
      </div>
      <ul className="divide-y divide-[#1c2e4a]">
        {rows.map((r, i) => (
          <li key={i} className="py-3.5 first:pt-1 last:pb-1">
            <div className="flex items-start justify-between gap-3 mb-1">
              <span className="text-sm font-medium text-[#e8eaf0] leading-snug flex-1">{r.label}</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                  r.ok
                    ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                    : 'bg-red-400/10 text-red-400 border border-red-400/20'
                }`}
              >
                {r.ok ? 'OK' : 'NOK'}
              </span>
            </div>
            <p className="text-xs text-[#4a5872] leading-relaxed">{r.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
