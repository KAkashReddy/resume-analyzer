import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            AI-Powered Resume Analyzer
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Compare résumés against job descriptions using NLP, embeddings, and skill matching.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Extract key skills from both résumé and JD
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Use semantic embeddings to measure relevance
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Get a clear, visual match score with explanations
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Illustration Card */}
                    <div className="hidden md:block">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="text-center space-y-6">
                                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full">
                                    <span className="text-5xl font-bold text-white">86%</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Match Score</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                        React
                                    </span>
                                    <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                        Node.js
                                    </span>
                                    <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                        AWS
                                    </span>
                                    <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                        Docker
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
