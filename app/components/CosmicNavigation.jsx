'use client'

import { Star, Code, Rocket, Zap, Brain, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CosmicNavigation = ({ currentSection, setCurrentSection }) => {
    const router = useRouter()

    const navigation = [
        { id: 'home', label: 'Home', icon: Star },
        { id: 'about', label: 'About', icon: Code },
        { id: 'experience', label: 'Experience', icon: Rocket },
        { id: 'projects', label: 'Projects', icon: Zap },
        { id: 'research', label: 'Research', icon: Brain },
        { id: 'contact', label: 'Contact', icon: Mail }
    ]

    const handleNavigation = (id) => {
        // If on homepage, just change section
        if (window.location.pathname === '/') {
            setCurrentSection(id)
        } else {
            // If on other pages, navigate to home with section
            router.push(`/#${id}`)
            setTimeout(() => setCurrentSection(id), 100)
        }
    }

    return (
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
                <div className="flex space-x-8">
                    {navigation.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => handleNavigation(id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${currentSection === id
                                    ? 'bg-purple-500/30 text-purple-200 shadow-lg shadow-purple-500/30'
                                    : 'hover:bg-white/10 text-white/70 hover:text-white'
                                }`}
                        >
                            <Icon size={16} />
                            <span className="text-sm font-medium">{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default CosmicNavigation