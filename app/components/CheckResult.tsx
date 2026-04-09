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
  let tagColor: string
  let lines: string[]

  if (apport === 0) {
    tag = 'Données manquantes'
    tagColor = 'text-[#4a5872]'
    lines = ['Renseigne tes calories pour obtenir un feedback.']
  } else if (deficit < -600) {
    tag = 'Déficit élevé'
    tagColor = 'text-red-400'
    lines = [
      'Ta journée est plus dépensière que prévu.',
      `Ton déficit est élevé (−${absDeficit} kcal).`,
      'Ajoute environ 300 kcal ce soir (glucides + protéines).',
    ]
  } else if (deficit < -200) {
    tag = 'Déficit modéré'
    tagColor = 'text-yellow-400'
    lines = [
      `Déficit de ${absDeficit} kcal — dans la cible.`,
      'Poids en bonne trajectoire si tu maintiens ce niveau.',
    ]
  } else if (deficit <= 100) {
    tag = 'Équilibre'
    tagColor = 'text-green-400'
    lines = [
      'Journée bien calibrée.',
      'Apport et dépense sont proches. Rien à ajuster.',
    ]
  } else {
    tag = 'Surplus'
    tagColor = 'text-orange-400'
    lines = [
      `Tu es en surplus de ${deficit} kcal aujourd'hui.`,
      'Réduis les glucides au prochain repas ou augmente les steps demain.',
    ]
  }

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)] space-y-5">
      <SectionHeader title="Résultat du soir" />

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Dépense estimée', val: `${depense} kcal`, color: 'text-yellow-400' },
          { label: 'Apport', val: apport > 0 ? `${apport} kcal` : '—', color: 'text-[#e8eaf0]' },
          {
            label: 'Bilan',
            val: apport === 0 ? '—' : `${deficit > 0 ? '+' : ''}${deficit} kcal`,
            color: apport === 0 ? 'text-[#4a5872]' : deficit <= 0 ? 'text-yellow-400' : 'text-orange-400',
          },
        ].map((item) => (
          <div key={item.label} className="bg-[#07090f] border border-[#1c2e4a] rounded-xl px-4 py-3">
            <p className="text-[10px] text-[#8892a4] mb-1 uppercase tracking-wide">{item.label}</p>
            <p className={`text-base font-bold ${item.color}`}>{item.val}</p>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-yellow-400/30 pl-4 space-y-1.5">
        <p className={`text-xs font-semibold uppercase tracking-widest ${tagColor}`}>{tag}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-[#8892a4]">{l}</p>
        ))}
        {stepsLabel && (
          <p className="text-xs text-[#4a5872] pt-1 italic">{stepsLabel}</p>
        )}
      </div>
    </div>
  )
}
