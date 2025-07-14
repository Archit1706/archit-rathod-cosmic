'use client'

import { useParams, useRouter } from 'next/navigation'
import { research } from '../../../config'
import GlassCard from '../../components/GlassCard'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ResearchDetail() {
    const params = useParams()
    const router = useRouter()
    const [paper, setPaper] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.slug) {
            const foundPaper = research.find(r =>
                r.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === params.slug ||
                r.slug === params.slug
            )
            setPaper(foundPaper)
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

    if (!paper) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Research Paper Not Found</h1>
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
                    <span>Back to Research</span>
                </button>

                <GlassCard hover={false}>
                    <div className="mb-8">
                        <div className="flex items-start justify-between mb-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${paper.status === 'Published'
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                }`}>
                                {paper.status}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold text-white mb-6">{paper.title}</h1>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-purple-300 mb-2">Authors</h3>
                            <p className="text-gray-300">{paper.authors.join(', ')}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-purple-300 mb-2">Published in</h3>
                            <p className="text-blue-200">{paper.venue}</p>
                        </div>

                        {paper.links?.arxiv && (
                            <a
                                href={paper.links.arxiv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium mb-8"
                            >
                                <ExternalLink size={16} />
                                <span>Read Full Paper</span>
                            </a>
                        )}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-purple-300 mb-4">Abstract</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{paper.abstract}</p>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
