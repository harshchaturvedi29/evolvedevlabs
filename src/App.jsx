
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Team from './components/Team'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      
    </div>
  )
}

export default App