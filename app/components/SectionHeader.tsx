type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1 h-3 bg-yellow-400 rounded-full shrink-0" />
      <h2 className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest">
        {title}
      </h2>
    </div>
  )
}
