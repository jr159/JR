type Props = {
  data: number[]
  labels?: string[]
  height?: number
  color?: string
}

export default function MiniSparkline({
  data,
  labels,
  height = 56,
  color = '#eab308',
}: Props) {
  if (data.length < 2) return null

  const W = 400 // viewBox width — SVG scales responsively
  const H = height
  const padX = 2
  const padY = 6
  const labelH = labels ? 18 : 0

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const pts = data.map((v, i) => ({
    x: padX + (i / (data.length - 1)) * (W - padX * 2),
    y: padY + (1 - (v - min) / range) * (H - padY * 2),
  }))

  // Smooth bezier path
  const smoothPath = pts.reduce((path, pt, i) => {
    if (i === 0) return `M ${pt.x},${pt.y}`
    const prev = pts[i - 1]
    const cpx = (prev.x + pt.x) / 2
    return `${path} C ${cpx},${prev.y} ${cpx},${pt.y} ${pt.x},${pt.y}`
  }, '')

  const areaPath = `${smoothPath} L ${pts[pts.length - 1].x},${H} L ${pts[0].x},${H} Z`
  const last = pts[pts.length - 1]

  return (
    <svg
      viewBox={`0 0 ${W} ${H + labelH}`}
      className="w-full overflow-visible"
      style={{ height: `${H + labelH}px` }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path d={areaPath} fill="url(#spark-fill)" />

      {/* Line */}
      <path
        d={smoothPath}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dot on last point */}
      <circle cx={last.x} cy={last.y} r="4" fill={color} />
      <circle cx={last.x} cy={last.y} r="7" fill={color} fillOpacity="0.2" />

      {/* Labels */}
      {labels?.map((l, i) => (
        <text
          key={i}
          x={padX + (i / (data.length - 1)) * (W - padX * 2)}
          y={H + labelH - 2}
          textAnchor="middle"
          fontSize="22"
          fill="#4a5872"
          fontFamily="system-ui, sans-serif"
        >
          {l}
        </text>
      ))}
    </svg>
  )
}
