import SectionHeader from './SectionHeader'

type Props = {
  depense: number
  apport: number
  steps: number
}

export default function CheckResult({ depense, apport, steps }: Props) {
  const deficit = apport - depense
  const absDeficit = Math.abs(deficit)

  const stepsLabel =
    steps >= 10_000
      ? 'Activité quotidienne élevée via steps.'
      : steps >= 6_000
      ? 'Activité modérée via steps.'
      : steps > 0
      ? 'Activité faible — pense à marcher davantage demain.'
      : null

  let tag: string
  let tagBadge: string
  let borderAccent: string
  let lines: string[]

  if (apport === 0) {
    tag = 'Données manquantes'
    tagBadge = 'bg-[#1c2e4a] text-[#4a5872]'
    borderAccent = 'border-[#1c2e4a]'
    lines = ['Renseigne tes calories pour obtenir un feedback.']
  } else if (deficit < -600) {
    tag = 'Déficit élevé'
    tagBadge = 'bg-red-400/10 text-red-400 border border-red-400/20'
    borderAccent = 'border-red-400/40'
    lines = [
      `Déficit important détecté (−${absDeficit} kcal).`,
      'Ta journée est plus dépensière que prévu.',
      'Ajoute environ 300 kcal ce soir (glucides + protéines).',
    ]
  } else if (deficit < -200) {
    tag = 'Déficit modéré'
    tagBadge = 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
    borderAccent = 'border-yellow-400/40'
    lines = [
      `Déficit de ${absDeficit} kcal — dans la cible.`,
      'Poids en bonne trajectoire si tu maintiens ce niveau.',
    ]
  } else if (deficit <= 100) {
    tag = 'Équilibre'
    tagBadge = 'bg-green-400/10 text-green-400 border border-green-400/20'
    borderAccent = 'border-green-400/40'
    lines = [
      'Journée bien calibrée.',
      'Apport et dépense sont proches. Rien à ajuster.',
    ]
  } else {
    tag = 'Surplus'
    tagBadge = 'bg-orange-400/10 text-orange-400 border border-orange-400/20'
    borderAccent = 'border-orange-400/40'
    lines = [
      `Surplus de ${deficit} kcal aujourd'hui.`,
      'Réduis les glucides au prochain repas ou augmente les steps demain.',
    ]
  }

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)] space-y-4">
      <SectionHeader title="Résultat du soir" />

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Dépense', val: `${depense} kcal`, color: 'text-yellow-400' },
          { label: 'Apport', val: apport > 0 ? `${apport} kcal` : '—', color: 'text-[#e8eaf0]' },
          {
            label: 'Bilan',
            val: apport === 0 ? '—' : `${deficit > 0 ? '+' : ''}${deficit} kcal`,
            color: apport === 0 ? 'text-[#4a5872]' : deficit <= 0 ? 'text-green-400' : 'text-orange-400',
          },
        ].map((item) => (
          <div key={item.label} className="bg-[#07090f] border border-[#1c2e4a] rounded-xl px-4 py-4">
            <p className="text-[11px] font-semibold text-[#8892a4] uppercase tracking-widest mb-1.5">{item.label}</p>
            <p className={`text-xl font-bold tabular-nums leading-none ${item.color}`}>{item.val}</p>
          </div>
        ))}
      </div>

      <div className={`border-l-[3px] ${borderAccent} pl-4 space-y-2 py-0.5`}>
        <span className={`inline-flex text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tagBadge}`}>
          {tag}
        </span>
        {lines.map((l, i) => (
          <p key={i} className={`text-sm leading-relaxed ${i === 0 ? 'text-[#e8eaf0] font-medium' : 'text-[#8892a4]'}`}>
            {l}
          </p>
        ))}
        {stepsLabel && (
          <p className="text-xs text-[#4a5872] pt-0.5">{stepsLabel}</p>
        )}
      </div>
    </div>
  )
}
