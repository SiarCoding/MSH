import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Unsere Leistungen</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="font-semibold text-xl">Kapitalanlage</h3>
          <p className="mt-2 text-sm">Wir beraten Sie bei der Auswahl renditestarker Immobilien in Dresden.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Denkmal-Sanierung</h3>
          <p className="mt-2 text-sm">Historische Gebäude werden von uns mit höchster Sorgfalt modernisiert.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Steuerliche AfA</h3>
          <p className="mt-2 text-sm">Nutzen Sie die erhöhten Abschreibungen für denkmalgeschützte Objekte.</p>
        </div>
      </div>
    </section>
  )
}
