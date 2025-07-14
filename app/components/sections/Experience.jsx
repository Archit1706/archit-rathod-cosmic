'use client'

import { MapPin } from 'lucide-react';
import GlassCard from '../GlassCard';

const Experience = ({ setIsHovering }) => {
    const experience = [
        {
            title: "Software Engineer - Contributor",
            company: "Google Summer of Code 2025 - OpenStreetMap",
            duration: "May 2025 – Aug 2025",
            location: "Chicago, USA",
            description: "Developing a Temporary Road Closures Database and RESTful API using PostgreSQL/PostGIS and FastAPI for real-time road closure reporting."
        },
        {
            title: "Research Assistant",
            company: "University of Illinois Chicago",
            duration: "Feb 2025 – May 2025",
            location: "Chicago, USA",
            description: "Developed geospatial analysis pipeline using OSMnx, NetworkX for traffic congestion zone identification and smart city planning."
        },
        {
            title: "Research and Web Engineer",
            company: "SimPPL",
            duration: "Mar 2023 – Jul 2024",
            location: "New York, USA (Remote)",
            description: "Built full-stack applications for ethical AI research, processing 80M+ data points with GCP and BigQuery optimization."
        },
        {
            title: "Software Developer and AI Engineer",
            company: "Digital Information Research Lab, Boston University",
            duration: "Dec 2023 – Jun 2024",
            location: "Boston, USA (Remote)",
            description: "Led a team of 14 engineers to develop a gamified virtual marketplace in React.js and Empirica.ly, simulating economic decision-making with 2000+ human participants."
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Professional Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {experience.map((exp, index) => (
                        <GlassCard
                            key={index}
                            className="relative"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"></div>
                            <div className="pl-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                        <h4 className="text-xl text-purple-300">{exp.company}</h4>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <p className="text-sm text-gray-400">{exp.duration}</p>
                                        <p className="text-sm text-gray-400 flex items-center justify-end">
                                            <MapPin size={14} className="mr-1" />
                                            {exp.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;