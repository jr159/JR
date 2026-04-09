import SectionHeader from './SectionHeader'

type Props = {
  label: string
}

export default function TrendPlaceholder({ label }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5">
      <div className="mb-3">
        <SectionHeader title={label} />
      </div>
      <div className="h-20 rounded-lg bg-gray-800 flex items-center justify-center">
        <span className="text-xs text-gray-600">graphique à venir</span>
      </div>
    </div>
  )
}
