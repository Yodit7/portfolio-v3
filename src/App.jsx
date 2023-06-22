import { useState } from 'react'
import './App.css'
import { Header } from '../src/components/Header.jsx'
import { About } from '../src/components/About.jsx'
import { Projects } from '../src/components/Projects.jsx'
import { Contact } from '../src/components/Contact.jsx'
import { Footer } from '../src/components/Footer.jsx'
// import { FiMinus } from "react-icons/fi";




function App() {

  const [activeSection, setActiveSection] = useState('')

  const handleNavItemClick = (section) => {
    setActiveSection(section)
    document.getElementById(section).scrollIntoView( { behaviour: 'smooth'})
  }

  return (
    <>
      <Header onNavItemClick={handleNavItemClick} activeSection={activeSection}/>
      <About id="about-section"/>
      <Projects id="projects-section"/>
      <Contact id="contact-section"/>
      <Footer />
    </>
  )
}

export default App
