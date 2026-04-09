import SectionHeader from './SectionHeader'

type Props = {
  depense: number
  apport: number
  steps: number
}

export default function CheckResult({ depense, apport, steps }: Props) {
  const stepsLabel =
    steps >= 10_000
      ? 'Activité quotidienne élevée via steps.'
      : steps >= 6_000
      ? 'Activité modérée via steps.'
      : steps > 0
      ? 'Activité faible — pense à marcher davantage demain.'
      : null
  const deficit = apport - depense
  const absDeficit = Math.abs(deficit)

  let tag: string
  let tagColor: string
  let lines: string[]

  if (apport === 0) {
    tag = 'Données manquantes'
    tagColor = 'text-gray-400'
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
    <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-5">
      <SectionHeader title="Résultat du soir" />

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Dépense estimée</p>
          <p className="text-lg font-bold text-white">{depense} kcal</p>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Apport</p>
          <p className="text-lg font-bold text-white">{apport > 0 ? `${apport} kcal` : '—'}</p>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Bilan</p>
          <p className={`text-lg font-bold ${apport === 0 ? 'text-gray-500' : deficit <= 0 ? 'text-green-400' : 'text-orange-400'}`}>
            {apport === 0 ? '—' : `${deficit > 0 ? '+' : ''}${deficit} kcal`}
          </p>
        </div>
      </div>

      <div className="border-l-2 border-gray-700 pl-4 space-y-1">
        <p className={`text-xs font-semibold uppercase tracking-wide ${tagColor}`}>{tag}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-gray-300">{l}</p>
        ))}
        {stepsLabel && (
          <p className="text-sm text-gray-500 pt-1">{stepsLabel}</p>
        )}
      </div>
    </div>
  )
}
