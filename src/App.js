import React from 'react';
import {About,Experience,Contact,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App =()=>{
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Experience />
    
      <Works />
    
     
        <Contact />
       
    
    </div>
    </BrowserRouter>
  )
}

export default App;
