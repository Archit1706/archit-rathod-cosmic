'use client'

import { ChevronDown } from 'lucide-react';
import FloatingParticles from '../FloatingParticles';
import { personalInfo } from '../../../config';

const Home = ({ setCurrentSection }) => {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 max-w-4xl mx-auto px-4">
                <div className="mb-8 animate-pulse">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 mb-6">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-4xl font-bold">
                            {personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-pulse">
                    {personalInfo.name}
                </h1>

                <h2 className="text-2xl md:text-3xl text-purple-200 mb-6 font-light">
                    {personalInfo.title}
                </h2>

                <div className="flex justify-center space-x-4 mb-8">
                    {personalInfo.tags.map((tag, index) => (
                        <span key={index} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-lg backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {personalInfo.tagline}
                </p>

                <div className="flex justify-center space-x-6">
                    <button
                        onClick={() => setCurrentSection('projects')}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 font-semibold"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => setCurrentSection('contact')}
                        className="px-8 py-4 rounded-full border-2 border-purple-400 hover:bg-purple-400/20 transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            <FloatingParticles />

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={32} className="text-purple-300" />
            </div>
        </section>
    );
};

export default Home;