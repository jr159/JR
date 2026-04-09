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
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-4">
        <SectionHeader title="Si tu continues comme ça" />
      </div>
      <ul className="space-y-3">
        {lines.map((l, i) => (
          <li key={i} className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{l.label}</span>
            <span className="text-sm font-semibold text-white">{l.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
