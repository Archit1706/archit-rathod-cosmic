'use client'

import { ExternalLink } from 'lucide-react';
import GlassCard from '../GlassCard';

const Research = ({ setIsHovering }) => {
    const research = [
        {
            title: "Leveraging CNNs and Ensemble Learning for Automated Disaster Image Classification",
            authors: ["Archit Rathod", "Veer Pariawala", "Mokshit Surana", "Kumkum Saxena"],
            venue: "ICSISCET 2023 - Springer Book Series",
            status: "Published",
            abstract: "Natural disasters act as a serious threat globally, requiring effective disaster management. This paper focuses on classifying natural disaster images using CNNs, achieving 95% accuracy.",
            link: "https://arxiv.org/abs/2311.13531"
        },
        {
            title: "Multiagent Simulators for Social Networks",
            authors: ["Aditya Surve", "Archit Rathod", "Mokshit Surana", "Gautam Malpani", "Swapneel Mehta"],
            venue: "NeurIPS 2023 - Multi-agent Security Workshop",
            status: "Published",
            abstract: "Multiagent social network simulations bridge the communication gap between platforms to develop solutions for online safety challenges.",
            link: "https://arxiv.org/abs/2311.14712"
        },
        {
            title: "Deploying Large Language Model-based Chatbots for Indic Languages in Low-Resource Regions",
            authors: ["Mrunmayi Parker", "Nahush Patil", "Raghav Jain", "Aditya Surve", "Archit Rathod", "Swapneel Mehta"],
            venue: "Working Paper",
            status: "In Progress",
            abstract: "Leveraging large language models (LLMs) to demonstrate scaling of successful literacy interventions to improve menstrual health and hygiene among adolescent females in Bangladesh.",
            link: "#"
        },
        {
            title: "Building Confidence Through Technology: A Technical Exploration of Facial Expression, Tone and Pitch Analysis",
            authors: ["Siddh Shah", "Archit Rathod", "Mokshit Surana", "Gargi Sathe", "Kumkum Saxena"],
            venue: "Springer Scopus Series, ICDSA 2024",
            status: "Published",
            abstract: "A technical exploration of using AI for facial expression analysis, tone and pitch analysis with chatbot guidance for building confidence in interview settings.",
            link: "#"
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Research Publications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {research.map((paper, index) => (
                        <GlassCard
                            key={index}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${paper.status === 'Published'
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                    }`}>
                                    {paper.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>

                            <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-1">Authors:</p>
                                <p className="text-purple-200">{paper.authors.join(', ')}</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-1">Published in:</p>
                                <p className="text-blue-200">{paper.venue}</p>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">{paper.abstract}</p>

                            {paper.link !== '#' && (
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium"
                                >
                                    <ExternalLink size={16} />
                                    <span>Read Paper</span>
                                </a>
                            )}
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;