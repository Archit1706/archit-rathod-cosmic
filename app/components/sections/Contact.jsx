'use client'

import { Mail, Linkedin, Github } from 'lucide-react';
import GlassCard from '../GlassCard';
import { personalInfo } from '../../../config';

const Contact = ({ setIsHovering }) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Let's Connect
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        I'm always interested in discussing new opportunities, innovative projects, and collaborations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <GlassCard
                        className="text-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <a href={`mailto:${personalInfo.email}`} className="text-purple-300 hover:text-purple-200 transition-colors">
                            {personalInfo.email}
                        </a>
                    </GlassCard>

                    <GlassCard
                        className="text-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/archit-rathod/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                            /in/archit-rathod
                        </a>
                    </GlassCard>

                    <GlassCard
                        className="text-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                        <a href="https://github.com/Archit1706" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 transition-colors">
                            @Archit1706
                        </a>
                    </GlassCard>
                </div>

                <div className="flex justify-center space-x-6">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 font-semibold"
                    >
                        Send Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/archit-rathod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border-2 border-purple-400 hover:bg-purple-400/20 transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;