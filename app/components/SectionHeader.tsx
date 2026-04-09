type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {title}
    </h2>
  )
}
