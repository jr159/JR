type Props = {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="pb-6 border-b border-[#1c2e4a]">
      <h1 className="text-3xl font-bold text-[#e8eaf0] tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-sm text-[#8892a4] mt-1">{subtitle}</p>
      )}
    </div>
  )
}
