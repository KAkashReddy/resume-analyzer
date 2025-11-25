import React, { useState } from 'react';
import { analyzeResume } from '../services/api';
import type { AnalysisResult } from '../types';
import { Loader2, AlertCircle, FileText, Briefcase } from 'lucide-react';

interface AnalysisFormProps {
    onAnalysisComplete: (result: AnalysisResult) => void;
}

const SAMPLE_JD = `We are looking for a Senior React Developer to join our team.
Responsibilities:
- Build efficient, reusable front-end abstractions and systems.
- Identify and address performance bottlenecks.
- Participate in design and code reviews.
- Collaborate with other team members and stakeholders.

Requirements:
- 5+ years of experience with JavaScript, TypeScript, and React.
- Deep understanding of web technologies (HTML, CSS, DOM).
- Experience with state management (Redux, Context API).
- Familiarity with modern build tools (Webpack, Vite).
- Knowledge of testing frameworks (Jest, React Testing Library).
- Experience with AWS and CI/CD pipelines is a plus.`;

const SAMPLE_RESUME = `Senior Frontend Engineer with 6 years of experience building scalable web applications.
Skills:
- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3
- Frameworks: React, Next.js, Redux, Tailwind CSS
- Tools: Git, Webpack, Vite, Docker, AWS
- Testing: Jest, Cypress

Experience:
Senior Frontend Developer | Tech Corp | 2020 - Present
- Led the migration of a legacy monolith to a micro-frontend architecture using React and TypeScript.
- Improved application performance by 40% through code splitting and lazy loading.
- Mentored junior developers and established best practices for code quality.

Frontend Developer | Startup Inc | 2017 - 2020
- Developed and maintained multiple client-facing applications using React.
- Collaborated with UX designers to implement responsive and accessible interfaces.`;

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onAnalysisComplete }) => {
    const [jdText, setJdText] = useState('');
    const [resumeText, setResumeText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ jd: '', resume: '' });

    const handleAnalyze = async () => {
        setErrors({ jd: '', resume: '' });

        let hasError = false;
        const newErrors = { jd: '', resume: '' };

        if (!jdText.trim()) {
            newErrors.jd = 'Please enter a job description';
            hasError = true;
        }

        if (!resumeText.trim()) {
            newErrors.resume = 'Please enter a résumé';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const result = await analyzeResume(jdText, resumeText);
            onAnalysisComplete(result);
        } catch (error) {
            console.error('Analysis failed:', error);
            alert('Analysis failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Job Description Input */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                Job Description
                            </label>
                        </div>
                        <div className="relative group">
                            <textarea
                                value={jdText}
                                onChange={(e) => setJdText(e.target.value)}
                                placeholder="Paste the full job description here…"
                                className={`w-full h-72 px-5 py-4 bg-white border rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 resize-none transition-all text-sm leading-relaxed shadow-sm ${errors.jd ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            />
                            <div className="absolute bottom-4 right-4 text-[10px] font-medium text-gray-400 pointer-events-none bg-gray-50/80 px-2 py-1 rounded border border-gray-100">
                                {jdText.length} / 5000 characters
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            {errors.jd ? (
                                <div className="flex items-center gap-2 text-sm text-red-600 animate-fadeIn">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.jd}
                                </div>
                            ) : <div></div>}
                            <button
                                onClick={() => setJdText(SAMPLE_JD)}
                                className="text-xs font-medium text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                            >
                                Use Sample JD
                            </button>
                        </div>
                    </div>

                    {/* Candidate Résumé Input */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Résumé
                            </label>
                        </div>
                        <div className="relative group">
                            <textarea
                                value={resumeText}
                                onChange={(e) => setResumeText(e.target.value)}
                                placeholder="Paste the full résumé here…"
                                className={`w-full h-72 px-5 py-4 bg-white border rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 resize-none transition-all text-sm leading-relaxed shadow-sm ${errors.resume ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            />
                            <div className="absolute bottom-4 right-4 text-[10px] font-medium text-gray-400 pointer-events-none bg-gray-50/80 px-2 py-1 rounded border border-gray-100">
                                {resumeText.length} / 5000 characters
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            {errors.resume ? (
                                <div className="flex items-center gap-2 text-sm text-red-600 animate-fadeIn">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.resume}
                                </div>
                            ) : <div></div>}
                            <button
                                onClick={() => setResumeText(SAMPLE_RESUME)}
                                className="text-xs font-medium text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                            >
                                Use Sample Résumé
                            </button>
                        </div>
                    </div>
                </div>

                {/* Analyze Button */}
                <div className="mt-10 text-center space-y-4">
                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="px-10 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl hover:shadow-primary-600/20"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="animate-spin h-5 w-5" />
                                Analyzing Match...
                            </span>
                        ) : (
                            'Analyze Match'
                        )}
                    </button>
                    <p className="text-xs text-gray-400">
                        Your data is processed locally and securely.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AnalysisForm;
