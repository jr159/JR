import SectionHeader from './SectionHeader'

type Props = {
  label: string
}

export default function TrendPlaceholder({ label }: Props) {
  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-4">
        <SectionHeader title={label} />
      </div>
      <div className="h-20 rounded-xl bg-[#07090f] border border-[#1c2e4a] flex items-center justify-center">
        <span className="text-xs text-[#4a5872] tracking-wide">graphique à venir</span>
      </div>
    </div>
  )
}
