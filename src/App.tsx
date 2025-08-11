import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projekte from './components/Projekte'
import Services from './components/Services'
import Steuerrechner from './components/Steuerrechner'
import Blogs from './components/Blogs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen w-full bg-[rgb(245,_241,229)]'>
      <Hero />
      <main className='flex-1 flex flex-col items-center gap-3 w-full'>
        <About />
        <Projekte />
        <Services />
        <Steuerrechner />
        <Blogs />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}
