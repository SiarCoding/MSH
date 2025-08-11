import './framer/styles.css'

import HeroFramerComponent from './framer/hero'
import NavbarFramerComponent from './framer/navbar'
import AboutFramerComponent from './framer/about'
import ProjekteFramerComponent from './framer/projekte'
import ServicesFramerComponent from './framer/services'
import CtaFramerComponent from './framer/cta'
import BlogsFramerComponent from './framer/blogs'

export default function App() {
  return (
    <div className='flex flex-col w-full bg-[rgb(245,_241, 229)]'>
      <div className='relative w-full'>
        <HeroFramerComponent.Responsive className='flex flex-col items-center text-center pt-20 pb-32'/>
        <NavbarFramerComponent.Responsive className='absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center'/>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <AboutFramerComponent.Responsive/>
        <ProjekteFramerComponent.Responsive/>
        <ServicesFramerComponent.Responsive/>
        <BlogsFramerComponent.Responsive/>
      </div>
      <CtaFramerComponent.Responsive/>
    </div>
  );
};