import React from 'react';
import Hero from './framer/hero.jsx';
import ValueProposition from './framer/value-proposition.jsx';
import Process from './framer/process.jsx';
import VideoSection from './framer/video-section.jsx';
import TaxCalculator from './framer/tax-calculator.jsx';
import TestimonialsSection from './framer/testimonials-section.jsx';
import TeamSection from './framer/team-section.jsx';
import FAQ from './framer/faq.jsx';
import CTA from './framer/cta.jsx';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='flex flex-col min-h-screen w-full bg-white'>
      <main className='flex-1 flex flex-col items-center w-full'>
        <Hero />
        <ValueProposition />
        <Process />
        <VideoSection />
        <TestimonialsSection />
        <TaxCalculator />
        <TeamSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
