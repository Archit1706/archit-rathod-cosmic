'use client'

import { MapPin, Calendar } from 'lucide-react';
import GlassCard from '../GlassCard';
import Skills from '../Skills';

const About = ({ setIsHovering }) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <GlassCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                            <MapPin className="mr-3" size={24} />
                            Background
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <p>I'm a Master's student in Computer Science at University of Illinois at Chicago (UIC) with a background in Information Technology from the University of Mumbai. I'm passionate about web development and problem-solving.</p>
                            <p>I have two years of experience as a full-stack developer specializing in the MERN stack and Next.js. I'm expanding my expertise in Data Science, Machine Learning, and AI. A hackathon enthusiast, I've clinched victories in six competitive events.</p>
                            <p>In my leisure, I dive into finance and investments, enjoy tennis, and love watching sci-fi movies. Always eager to learn and grow, I'm looking for new opportunities.</p>
                        </div>
                    </GlassCard>

                    <GlassCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                            <Calendar className="mr-3" size={24} />
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-400 pl-4">
                                <h4 className="text-xl font-semibold text-white">Master of Science in Computer Science</h4>
                                <p className="text-purple-200">University of Illinois Chicago</p>
                                <p className="text-sm text-gray-400">Aug 2024 – May 2026</p>
                                <p className="text-sm text-gray-300 mt-2">Focus: Applied Machine Learning, NLP, Big Data Analytics</p>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-4">
                                <h4 className="text-xl font-semibold text-white">Bachelor of Engineering in Information Technology</h4>
                                <p className="text-blue-200">University of Mumbai</p>
                                <p className="text-sm text-gray-400">Aug 2020 – May 2024</p>
                                <p className="text-sm text-gray-300 mt-2">CGPA: 9.35 / 10</p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                <Skills setIsHovering={setIsHovering} />
            </div>
        </section>
    );
};

export default About;