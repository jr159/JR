import SectionHeader from './SectionHeader'

const OBJECTIF = 10_000

type Props = {
  stepsDuJour: number
  moyenne7j: number
}

export default function StepsBlock({ stepsDuJour, moyenne7j }: Props) {
  const ecart = stepsDuJour - OBJECTIF
  const ecartStr = `${ecart >= 0 ? '+' : ''}${ecart.toLocaleString('fr-FR')}`
  const barPct = Math.min(Math.round((stepsDuJour / OBJECTIF) * 100), 100)
  const atteint = ecart >= 0

  return (
    <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-5 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
      <div className="mb-5">
        <SectionHeader title="Steps" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
        <div>
          <p className="text-xs text-[#8892a4] mb-1">Aujourd'hui</p>
          <p className="text-xl font-bold text-yellow-400">{stepsDuJour.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-[#8892a4] mb-1">Moyenne 7j</p>
          <p className="text-xl font-bold text-[#e8eaf0]">{moyenne7j.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-[#8892a4] mb-1">Objectif</p>
          <p className="text-xl font-bold text-[#e8eaf0]">{OBJECTIF.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <p className="text-xs text-[#8892a4] mb-1">Écart</p>
          <p className={`text-xl font-bold ${atteint ? 'text-yellow-400' : 'text-[#8892a4]'}`}>{ecartStr}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px] text-[#4a5872] mb-1.5">
          <span>0</span>
          <span>{OBJECTIF.toLocaleString('fr-FR')} pas</span>
        </div>
        <div className="h-1.5 bg-[#07090f] rounded-full overflow-hidden border border-[#1c2e4a]">
          <div
            className="h-full rounded-full transition-all duration-500 bg-yellow-400"
            style={{ width: `${barPct}%`, opacity: atteint ? 1 : 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}
