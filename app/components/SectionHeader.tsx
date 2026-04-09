type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-0.5 h-3.5 bg-yellow-400 rounded-full shrink-0" />
      <h2 className="text-[11px] font-semibold text-[#8892a4] uppercase tracking-[0.12em]">
        {title}
      </h2>
    </div>
  )
}
