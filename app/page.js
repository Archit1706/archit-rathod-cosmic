'use client'

import { useState } from 'react'
import Main from './components/Main'

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Main
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      setIsHovering={setIsHovering}
    />
  )
}