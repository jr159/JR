const stats = [
  { label: 'Poids actuel', value: '84.2', unit: 'kg' },
  { label: 'Évolution 7j', value: '-0.6', unit: 'kg' },
  { label: 'Séances semaine', value: '4', unit: '/ 5' },
  { label: 'Tonnage semaine', value: '12 400', unit: 'kg' },
  { label: 'Calories moyennes', value: '2 850', unit: 'kcal' },
  { label: 'Protéines moyennes', value: '178', unit: 'g' },
  { label: 'Steps aujourd\'hui', value: '8 340', unit: 'pas' },
  { label: 'Moyenne steps', value: '9 100', unit: 'pas/j' },
]

const notes = [
  'Semaine solide — 4 séances tenues malgré le déplacement mercredi.',
  'Protéines légèrement en dessous de la cible sur 2 jours : corriger le repas du soir.',
  'Poids en baisse régulière depuis 3 semaines — maintenir le déficit actuel.',
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Dashboard</h1>

      {/* Grille des métriques */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-gray-900 rounded-xl px-4 py-4 flex flex-col gap-1"
          >
            <span className="text-xs text-gray-500 leading-tight">{s.label}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-gray-500">{s.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bloc À retenir */}
      <div className="bg-gray-900 rounded-xl px-5 py-5">
        <h2 className="text-sm font-semibold text-gray-300 mb-3">À retenir cette semaine</h2>
        <ul className="space-y-2">
          {notes.map((note, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-400">
              <span className="text-gray-600 select-none">—</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
