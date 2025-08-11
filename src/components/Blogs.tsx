import React from 'react'

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Aktuelles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <article>
          <h3 className="font-semibold text-xl">Steuerliche Vorteile von Denkmalimmobilien</h3>
          <p className="mt-2 text-sm">Erfahren Sie, wie Sie mit der AfA Ihre Steuerlast senken können.</p>
        </article>
        <article>
          <h3 className="font-semibold text-xl">MSH Projekt Königstraße</h3>
          <p className="mt-2 text-sm">Ein Blick hinter die Kulissen unserer aktuellen Sanierung.</p>
        </article>
        <article>
          <h3 className="font-semibold text-xl">Warum Dresden?</h3>
          <p className="mt-2 text-sm">Die sächsische Hauptstadt als Standort für langfristige Kapitalanlagen.</p>
        </article>
      </div>
    </section>
  )
}
