import SectionHeader from './SectionHeader'

type Props = {
  depense: string
  deficit: string
  ajustement: string
  commentaire: string
}

export default function CheckResult({ depense, deficit, ajustement, commentaire }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
      <SectionHeader title="Résultat du soir" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Dépense estimée</p>
          <p className="text-lg font-bold text-white">{depense}</p>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Déficit estimé</p>
          <p className="text-lg font-bold text-white">{deficit}</p>
        </div>
        <div className="bg-gray-800 rounded-lg px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">Ajustement conseillé</p>
          <p className="text-lg font-bold text-white">{ajustement}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-3">{commentaire}</p>
    </div>
  )
}
