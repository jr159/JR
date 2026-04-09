type Props = {
  children: React.ReactNode
}

export default function SectionDivider({ children }: Props) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <span className="text-[11px] font-semibold text-[#4a5872] uppercase tracking-[0.15em] whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1c2e4a]" />
    </div>
  )
}
