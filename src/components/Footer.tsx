import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} MSH Dresden. Alle Rechte vorbehalten.</p>
    </footer>
  )
}
