import SectionHeader from './SectionHeader'

type Line = {
  label: string
  value: string
}

type Props = {
  lines: Line[]
}

export default function ProjectionBlock({ lines }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title="Projection" />
      </div>
      <ul className="divide-y divide-[#1c2e4a]">
        {lines.map((l, i) => (
          <li key={i} className="flex items-center justify-between gap-4 py-2.5 first:pt-1 last:pb-1">
            <span className="text-sm text-[#8892a4]">{l.label}</span>
            <span className="text-sm font-semibold text-yellow-400 shrink-0">{l.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
