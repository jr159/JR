import SectionHeader from './SectionHeader'

const OBJECTIF = 10_000

type Props = {
  stepsDuJour: number
  moyenne7j: number
}

export default function StepsBlock({ stepsDuJour, moyenne7j }: Props) {
  const ecart = stepsDuJour - OBJECTIF
  const ecartStr = `${ecart >= 0 ? '+' : ''}${ecart.toLocaleString('fr-FR')}`
  const ecartColor = ecart >= 0 ? 'text-green-400' : 'text-red-400'
  const barPct = Math.min(Math.round((stepsDuJour / OBJECTIF) * 100), 100)

  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
      <SectionHeader title="Steps" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <p className="text-xs text-gray-500 mb-1">Aujourd'hui</p>
          <p className="text-xl font-bold text-white">{stepsDuJour.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Moyenne 7j</p>
          <p className="text-xl font-bold text-white">{moyenne7j.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Objectif</p>
          <p className="text-xl font-bold text-white">{OBJECTIF.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Écart</p>
          <p className={`text-xl font-bold ${ecartColor}`}>{ecartStr}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>0</span>
          <span>{OBJECTIF.toLocaleString('fr-FR')} pas</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${barPct >= 100 ? 'bg-green-500' : 'bg-gray-500'}`}
            style={{ width: `${barPct}%` }}
          />
        </div>
      </div>
    </div>
  )
}
