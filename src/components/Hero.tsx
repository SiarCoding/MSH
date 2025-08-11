import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center text-center min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Navbar />
      </div>
      <div className="mt-32 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Kapitalanlage in MSH Dresden
        </h1>
        <p className="mt-4 text-xl text-white">
          Denkmalgeschützte Immobilien mit steuerlicher AfA
        </p>
      </div>
    </section>
  )
}
