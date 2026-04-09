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
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Cohérence nutrition" />
      </div>
      <ul className="space-y-3">
        {rows.map((r, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`mt-0.5 text-xs font-bold shrink-0 ${r.ok ? 'text-yellow-400' : 'text-[#4a5872]'}`}>
              {r.ok ? '✓' : '✗'}
            </span>
            <div>
              <p className="text-sm text-[#e8eaf0]">{r.label}</p>
              <p className="text-xs text-[#4a5872] mt-0.5">{r.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
