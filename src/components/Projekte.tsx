import React from 'react'

export default function Projekte() {
  return (
    <section id="projekte" className="py-16 w-full bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Denkmal-Objekte</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-5xl">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-semibold">Villa am Großen Garten</h3>
          <p className="text-sm mt-2">Sanierter Altbau mit 5 Wohnungen in unmittelbarer Nähe zur Elbe.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-semibold">Wohnhaus Königstraße</h3>
          <p className="text-sm mt-2">Charmantes Gründerzeitobjekt im Barockviertel.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-semibold">Lofts im Industriegelände</h3>
          <p className="text-sm mt-2">Ehemalige Fabrik, umgewandelt in moderne Loftwohnungen.</p>
        </div>
      </div>
    </section>
  )
}
