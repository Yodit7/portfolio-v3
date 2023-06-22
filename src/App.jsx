import { useState } from 'react'
import './App.css'
import { Header } from '../src/components/Header.jsx'
import { About } from '../src/components/About.jsx'
import { Projects } from '../src/components/Projects.jsx'
import { Contact } from '../src/components/Contact.jsx'
import { Footer } from '../src/components/Footer.jsx'
// import { FiMinus } from "react-icons/fi";




function App() {

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
