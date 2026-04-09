'use client'

import { useState } from 'react'
import CheckResult from '../components/CheckResult'

const muscuTypes = ['Push', 'Pull', 'Legs', 'Full body', 'Haut du corps', 'Bas du corps']

const Field = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-500">{label}</label>
    {children}
  </div>
)

const inputCls =
  'bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-gray-500 w-full'

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
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            active ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-400 hover:text-white'
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
        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
          value === n ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-400 hover:text-white'
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
      <h1 className="text-xl font-semibold text-white">Check du soir</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setResult(compute())
        }}
        className="space-y-6"
      >
        {/* Poids */}
        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
          <p className="text-sm font-semibold text-gray-300">Corps</p>
          <Field label="Poids (kg)">
            <input
              type="number"
              step="0.1"
              placeholder="84.2"
              value={poids}
              onChange={(e) => setPoids(e.target.value)}
              className={inputCls + ' max-w-[120px]'}
            />
          </Field>
        </div>

        {/* Activité */}
        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-5">
          <p className="text-sm font-semibold text-gray-300">Activité</p>

          <Field label="Séance muscu ?">
            <Toggle value={muscu} onChange={setMuscu} />
          </Field>
          {muscu && (
            <div className="grid grid-cols-2 gap-4 pl-0">
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
            <div className="pl-0 max-w-[160px]">
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
              className={inputCls + ' max-w-[160px]'}
            />
          </Field>
        </div>

        {/* Nutrition */}
        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
          <p className="text-sm font-semibold text-gray-300">Nutrition</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Calories (kcal)">
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
        <div className="bg-gray-900 rounded-xl px-5 py-5 space-y-4">
          <p className="text-sm font-semibold text-gray-300">Ressenti</p>
          <Field label="Fatigue (1 = aucune · 5 = épuisé)">
            <ScaleInput value={fatigue} onChange={setFatigue} />
          </Field>
          <Field label="Sommeil la nuit passée (1 = très mauvais · 5 = excellent)">
            <ScaleInput value={sommeil} onChange={setSommeil} />
          </Field>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-gray-900 font-semibold text-sm py-3 rounded-xl hover:bg-gray-200 transition-colors"
        >
          Valider le check
        </button>
      </form>

      {result && <CheckResult depense={result.depense} apport={result.apport} steps={Number(steps) || 0} />}
    </div>
  )
}
