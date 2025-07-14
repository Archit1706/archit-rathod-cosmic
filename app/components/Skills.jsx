'use client'

import GlassCard from './GlassCard';
import SkillBadge from './SkillBadge';

const Skills = ({ setIsHovering }) => {
    const skills = {
        languages: [
            { name: "Python", color: "cyan-300" },
            { name: "JavaScript", color: "yellow-300" },
            { name: "TypeScript", color: "blue-500" },
            { name: "C++", color: "blue-900" },
            { name: "HTML", color: "orange-400" },
            { name: "CSS", color: "blue-400" }
        ],
        frameworks: [
            { name: "React JS", color: "cyan-600" },
            { name: "Next JS", color: "gray-800" },
            { name: "Node JS", color: "lime-400" },
            { name: "FastAPI", color: "lime-400" },
            { name: "PyTorch", color: "orange-600" },
            { name: "TensorFlow", color: "orange-500" }
        ],
        databases: [
            { name: "MongoDB", color: "emerald-600" },
            { name: "SQL", color: "blue-900" },
            { name: "BigQuery", color: "sky-500" },
            { name: "Neo4j", color: "blue-200" }
        ]
    };

    return (
        <div className="space-y-12">
            <div>
                <h3 className="text-3xl font-bold text-center text-purple-300 mb-8">Technical Skills</h3>

                <div className="grid md:grid-cols-3 gap-8">
                    <GlassCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <h4 className="text-xl font-bold text-purple-200 mb-4">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <h4 className="text-xl font-bold text-blue-200 mb-4">Frameworks & Libraries</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworks.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <h4 className="text-xl font-bold text-green-200 mb-4">Databases</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.databases.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default Skills;