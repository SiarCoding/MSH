import React, { useState } from 'react'

export default function Steuerrechner() {
  const [price, setPrice] = useState('')
  const [afa, setAfa] = useState('2')
  const [taxRate, setTaxRate] = useState('30')
  const [years, setYears] = useState('10')

  const priceNum = parseFloat(price) || 0
  const afaRate = parseFloat(afa) || 0
  const taxRateNum = parseFloat(taxRate) || 0
  const yearsNum = parseInt(years) || 0

  const yearlyAfa = priceNum * afaRate / 100
  const yearlySavings = yearlyAfa * taxRateNum / 100
  const totalSavings = yearlySavings * yearsNum

  const format = (n: number) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

  return (
    <section id="steuerrechner" className="py-16 w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Steuerrechner</h2>
        <div className="grid gap-4 w-full max-w-md">
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Kaufpreis (€)"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={afa}
            onChange={e => setAfa(e.target.value)}
            placeholder="AfA-Satz (%)"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={taxRate}
            onChange={e => setTaxRate(e.target.value)}
            placeholder="Einkommensteuersatz (%)"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={years}
            onChange={e => setYears(e.target.value)}
            placeholder="Laufzeit (Jahre)"
            className="border p-2 rounded"
          />
        </div>
        <div className="mt-6 text-center">
          <p>Jährliche AfA: {format(yearlyAfa)}</p>
          <p>Steuerersparnis pro Jahr: {format(yearlySavings)}</p>
          <p>Steuerersparnis gesamt: {format(totalSavings)}</p>
        </div>
      </div>
    </section>
  )
}
