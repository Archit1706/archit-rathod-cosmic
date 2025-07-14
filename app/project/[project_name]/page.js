'use client'

import { useParams, useRouter } from 'next/navigation'
import { projects } from '../../../config'
import GlassCard from '../../components/GlassCard'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ProjectDetail() {
    const params = useParams()
    const router = useRouter()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.slug) {
            // Convert project title to slug format for matching
            const foundProject = projects.find(p =>
                p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === params.slug ||
                p.slug === params.slug
            )
            setProject(foundProject)
            setLoading(false)
        }
    }, [params.slug])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
                    <h1 className="text-2xl font-bold text-white">Loading...</h1>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 mb-8 text-purple-300 hover:text-purple-200 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Projects</span>
                </button>

                <GlassCard hover={false}>
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium"
                            >
                                <ExternalLink size={16} />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-500 hover:bg-gray-500/20 transition-all duration-300 font-medium"
                            >
                                <Github size={16} />
                                <span>View Code</span>
                            </a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-purple-300 mb-4">Description</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{project.desc}</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-purple-300 mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}