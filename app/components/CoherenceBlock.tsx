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
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title="Cohérence nutrition" />
      </div>
      <ul className="space-y-3">
        {rows.map((r, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`mt-0.5 text-xs font-bold ${r.ok ? 'text-green-500' : 'text-red-400'}`}>
              {r.ok ? '✓' : '✗'}
            </span>
            <div>
              <p className="text-sm text-gray-300">{r.label}</p>
              <p className="text-xs text-gray-500">{r.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
