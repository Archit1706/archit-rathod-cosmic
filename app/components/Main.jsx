'use client'

import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Contact from './sections/Contact'

const Main = ({ currentSection, setCurrentSection, setIsHovering }) => {
  const renderSection = () => {
    switch (currentSection) {
      case 'home': return <Home setCurrentSection={setCurrentSection} />
      case 'about': return <About setIsHovering={setIsHovering} />
      case 'experience': return <Experience setIsHovering={setIsHovering} />
      case 'projects': return <Projects setIsHovering={setIsHovering} />
      case 'research': return <Research setIsHovering={setIsHovering} />
      case 'contact': return <Contact setIsHovering={setIsHovering} />
      default: return <Home setCurrentSection={setCurrentSection} />
    }
  }

  return renderSection()
}

export default Main