'use client'

import { useState } from 'react'
import CheckResult from '../components/CheckResult'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const muscuTypes = ['Push', 'Pull', 'Legs', 'Full body', 'Haut du corps', 'Bas du corps']

const Field = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-[11px] font-semibold text-[#8892a4] uppercase tracking-widest">{label}</label>
    {children}
  </div>
)

const inputCls =
  'bg-[#07090f] text-[#e8eaf0] text-sm rounded-xl px-3 py-3 border border-[#1c2e4a] focus:outline-none focus:border-yellow-400/50 w-full transition-colors placeholder:text-[#2a4060]'

const Toggle = ({
  value,
  onChange,
}: {
  value: boolean
  onChange: (v: boolean) => void
}) => (
  <div className="flex gap-2">
    {['Oui', 'Non'].map((opt) => {
      const active = value === (opt === 'Oui')
      return (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt === 'Oui')}
          className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
            active
              ? 'bg-yellow-400 text-[#07090f] border-yellow-400'
              : 'bg-[#07090f] text-[#8892a4] border-[#1c2e4a] hover:text-[#e8eaf0] hover:border-[#2a4060]'
          }`}
        >
          {opt}
        </button>
      )
    })}
  </div>
)

const ScaleInput = ({
  value,
  onChange,
  max = 5,
}: {
  value: number
  onChange: (v: number) => void
  max?: number
}) => (
  <div className="flex gap-2">
    {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        className={`w-9 h-9 rounded-xl text-sm font-bold transition-all duration-300 border ${
          value === n
            ? 'bg-yellow-400 text-[#07090f] border-yellow-400'
            : 'bg-[#07090f] text-[#8892a4] border-[#1c2e4a] hover:border-[#2a4060] hover:text-[#e8eaf0]'
        }`}
      >
        {n}
      </button>
    ))}
  </div>
)

export default function Check() {
  const [poids, setPoids] = useState('')
  const [muscu, setMuscu] = useState(false)
  const [muscuType, setMuscuType] = useState(muscuTypes[0])
  const [muscuDuree, setMuscuDuree] = useState('')
  const [lutte, setLutte] = useState(false)
  const [lutteDuree, setLutteDuree] = useState('')
  const [steps, setSteps] = useState('')
  const [calories, setCalories] = useState('')
  const [proteines, setProteines] = useState('')
  const [glucides, setGlucides] = useState('')
  const [lipides, setLipides] = useState('')
  const [fatigue, setFatigue] = useState(0)
  const [sommeil, setSommeil] = useState(0)
  const [result, setResult] = useState<{ depense: number; apport: number } | null>(null)

  function compute() {
    const base = 2000
    const muscuKcal = muscu ? Math.round((Number(muscuDuree) || 60) * 6) : 0
    const lutteKcal = lutte ? Math.round((Number(lutteDuree) || 90) * 8) : 0
    const stepsKcal = Math.round((Number(steps) || 0) * 0.04)
    const depense = base + muscuKcal + lutteKcal + stepsKcal
    const apport = Number(calories) || 0
    return { depense, apport }
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Check du soir" subtitle="Saisie quotidienne" />

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setResult(compute())
        }}
        className="space-y-4"
      >
        {/* Corps */}
        <div
          className="bg-gradient-to-br from-[#0d1526] to-[#090e1a] border border-[#1c2e4a] rounded-2xl px-6 py-5"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.5), 0 0 60px rgba(250,204,21,0.04)' }}
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <SectionHeader title="Corps" />
              <p className="text-xs text-[#4a5872] mt-2">Poids du matin à jeun</p>
            </div>
            <div className="flex items-baseline gap-2 shrink-0">
              <input
                type="number"
                step="0.1"
                placeholder="84.2"
                value={poids}
                onChange={(e) => setPoids(e.target.value)}
                className="bg-[#07090f] text-[#e8eaf0] text-2xl font-bold rounded-xl px-3 py-2 border border-[#1c2e4a] focus:outline-none focus:border-yellow-400/50 w-[108px] text-right transition-colors placeholder:text-[#1c2e4a] tabular-nums"
              />
              <span className="text-sm text-[#4a5872]">kg</span>
            </div>
          </div>
        </div>

        {/* Activité */}
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-6 py-6 space-y-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <SectionHeader title="Activité" />

          <Field label="Séance muscu ?">
            <Toggle value={muscu} onChange={setMuscu} />
          </Field>
          {muscu && (
            <div className="grid grid-cols-2 gap-4">
              <Field label="Type">
                <select
                  value={muscuType}
                  onChange={(e) => setMuscuType(e.target.value)}
                  className={inputCls}
                >
                  {muscuTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Durée (min)">
                <input
                  type="number"
                  placeholder="60"
                  value={muscuDuree}
                  onChange={(e) => setMuscuDuree(e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>
          )}

          <Field label="Séance lutte ?">
            <Toggle value={lutte} onChange={setLutte} />
          </Field>
          {lutte && (
            <div className="max-w-[180px]">
              <Field label="Durée (min)">
                <input
                  type="number"
                  placeholder="90"
                  value={lutteDuree}
                  onChange={(e) => setLutteDuree(e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>
          )}

          <Field label="Steps du jour">
            <input
              type="number"
              placeholder="9 000"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={inputCls + ' max-w-[180px]'}
            />
          </Field>
        </div>

        {/* Nutrition */}
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-6 py-6 space-y-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <SectionHeader title="Nutrition" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Calories">
              <input type="number" placeholder="2850" value={calories} onChange={(e) => setCalories(e.target.value)} className={inputCls} />
            </Field>
            <Field label="Protéines (g)">
              <input type="number" placeholder="178" value={proteines} onChange={(e) => setProteines(e.target.value)} className={inputCls} />
            </Field>
            <Field label="Glucides (g)">
              <input type="number" placeholder="310" value={glucides} onChange={(e) => setGlucides(e.target.value)} className={inputCls} />
            </Field>
            <Field label="Lipides (g)">
              <input type="number" placeholder="82" value={lipides} onChange={(e) => setLipides(e.target.value)} className={inputCls} />
            </Field>
          </div>
        </div>

        {/* Ressenti */}
        <div className="bg-[#0d1526] border border-[#1c2e4a] rounded-2xl px-6 py-6 space-y-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          <SectionHeader title="Ressenti" />
          <Field label="Fatigue (1 = aucune · 5 = épuisé)">
            <ScaleInput value={fatigue} onChange={setFatigue} />
          </Field>
          <Field label="Sommeil (1 = très mauvais · 5 = excellent)">
            <ScaleInput value={sommeil} onChange={setSommeil} />
          </Field>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-[#07090f] font-bold text-sm py-3.5 rounded-2xl hover:bg-yellow-300 transition-all duration-300 tracking-wider"
        >
          Valider le check du soir
        </button>
      </form>

      {result && <CheckResult depense={result.depense} apport={result.apport} steps={Number(steps) || 0} />}
    </div>
  )
}
