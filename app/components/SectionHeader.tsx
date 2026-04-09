type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return <h2 className="text-sm font-semibold text-gray-300">{title}</h2>
}
