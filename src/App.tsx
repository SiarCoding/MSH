import './framer/styles.css'

import HeroFramerComponent from './framer/hero'
import AboutFramerComponent from './framer/about'
import ProjekteFramerComponent from './framer/projekte'
import ServicesFramerComponent from './framer/services'
import CtaFramerComponent from './framer/cta'
import BlogsFramerComponent from './framer/blogs'

export default function App() {
  return (
    <div className='flex flex-col w-full bg-[rgb(245,_241, 229)]'>
      <HeroFramerComponent.Responsive/>
      <div className='flex flex-col items-center gap-3'>
        <AboutFramerComponent.Responsive/>
        <ProjekteFramerComponent.Responsive/>
        <ServicesFramerComponent.Responsive/>
        <CtaFramerComponent.Responsive/>
        <BlogsFramerComponent.Responsive/>
      </div>
    </div>
  );
};