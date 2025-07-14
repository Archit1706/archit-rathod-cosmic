'use client'

import { ExternalLink, Github } from 'lucide-react';
import GlassCard from '../GlassCard';

const Projects = ({ setIsHovering }) => {
    const projects = [
        {
            title: "RealEstate 360",
            desc: "RealEstate360, the future of online house-hunting, is a platform that leverages Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to provide an immersive, interactive, and informative experience.",
            tech: ["Next JS", "Tailwind", "FastAPI", "Node.js", "AR-VR", "Socket I/O", "MongoDB", "Three.js"],
            link: "https://realestate360.vercel.app/",
            github: "https://github.com/Archit1706/RealEstate360",
        },
        {
            title: "Ascend AI",
            desc: "Ascend AI is a revolutionary interview preparation platform designed to elevate your communication skills and confidence with cutting-edge AI analysis.",
            tech: ["Next JS", "Tailwind", "LLama C++", "FastAPI", "Librosa", "Transformers", "OpenCV", "MongoDB"],
            link: "https://ascend-ai-mpr.vercel.app/",
            github: "https://github.com/Archit1706/AscendAI",
        },
        {
            title: "FitSphere",
            desc: "FitSphere is a state-of-the-art pose estimation system that leverages Computer Vision and Machine Learning to enhance fitness tracking.",
            tech: ["React JS", "Tailwind", "OpenCV", "FastAPI", "MongoDB", "PoseNet"],
            link: "https://fitsphere.vercel.app/",
            github: "https://github.com/Archit1706/FitSphere",
        },
        {
            title: "PhishFence",
            desc: "PhishFence is an innovative AI and ML-powered solution designed to automatically detect and block phishing domains among newly registered websites.",
            tech: ["Next JS", "Tailwind", "Selenium", "FastAPI", "WhoisDB", "LighGBM", "OpenCV", "OpenAI"],
            link: "https://phishfence.vercel.app/",
            github: "https://github.com/Archit1706/PhishFence",
        },
        {
            title: "SwarBhaav",
            desc: "SwarBhaav: A call centre solution featuring dual dashboards for rookies and managers, offering distinct access controls and insightful features.",
            tech: ["Next JS", "Tailwind", "Node JS", "FastAPI", "Librosa", "Transformers", "OpenAI"],
            link: "https://swarbhaav.vercel.app/",
            github: "https://github.com/Archit1706/SwarBhaav",
        },
        {
            title: "Attire AI",
            desc: "AttireAI: Your ultimate fashion companion powered by Gen AI. Discover and create personalized fashion outfits with ease.",
            tech: ["Next JS", "Tailwind", "Flask", "LangChain", "LLama", "NLTK"],
            link: "https://attire-ai.vercel.app",
            github: "https://github.com/Archit1706/Attire-AI",
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlassCard
                            key={index}
                            className="group"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                                        <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="text-xs px-3 py-1 rounded-full bg-gray-500/20 text-gray-300">
                                            +{project.tech.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm font-medium"
                                >
                                    <ExternalLink size={14} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-500 hover:bg-gray-500/20 transition-all duration-300 text-sm font-medium"
                                >
                                    <Github size={14} />
                                    <span>Code</span>
                                </a>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;