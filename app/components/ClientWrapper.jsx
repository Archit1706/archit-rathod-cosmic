'use client'

import { useState } from 'react'
import CosmicCursor from './CosmicCursor'
import StarField from './StarField'
import CosmicNavigation from './CosmicNavigation'

export default function ClientWrapper({ children }) {
    const [currentSection, setCurrentSection] = useState('home')
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden relative min-h-screen">
            <StarField />
            <CosmicCursor
                cursorPos={cursorPos}
                setCursorPos={setCursorPos}
                isHovering={isHovering}
            />
            <CosmicNavigation
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
            <div className="portfolio-content">
                {/* Pass state to children components */}
                {typeof children === 'function' ?
                    children({ currentSection, setCurrentSection, setIsHovering }) :
                    children
                }
            </div>
        </div>
    )
}