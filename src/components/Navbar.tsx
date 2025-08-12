import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-white font-semibold py-4">
      <a href="#about" className="hover:underline">Über uns</a>
      <a href="#projekte" className="hover:underline">Projekte</a>
      <a href="#services" className="hover:underline">Leistungen</a>
      <a href="#steuerrechner" className="hover:underline">Steuerrechner</a>
      <a href="#blogs" className="hover:underline">Aktuelles</a>
      <a href="#kontakt" className="hover:underline">Kontakt</a>
    </nav>
  )
}
