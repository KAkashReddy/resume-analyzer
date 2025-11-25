import React, { useState } from 'react';
import { analyzeResume } from '../services/api';
import type { AnalysisResult } from '../types';

interface AnalysisFormProps {
    onAnalysisComplete: (result: AnalysisResult) => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onAnalysisComplete }) => {
    const [jdText, setJdText] = useState('');
    const [resumeText, setResumeText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ jd: '', resume: '' });

    const handleAnalyze = async () => {
        // Reset errors
        setErrors({ jd: '', resume: '' });

        // Validate inputs
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

        // Call API
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
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Job Description Input */}
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Job Description
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Paste the full job description here. Include responsibilities and required skills.
                            </p>
                        </div>
                        <div>
                            <textarea
                                value={jdText}
                                onChange={(e) => setJdText(e.target.value)}
                                placeholder="Paste the JD here…"
                                rows={16}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-shadow ${errors.jd ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.jd && (
                                <p className="text-sm text-red-600 mt-1">{errors.jd}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                                {jdText.length} / 5000 characters
                            </p>
                        </div>
                    </div>

                    {/* Candidate Résumé Input */}
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Candidate Résumé
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Paste the candidate résumé here. Include summary, experience, and skills.
                            </p>
                        </div>
                        <div>
                            <textarea
                                value={resumeText}
                                onChange={(e) => setResumeText(e.target.value)}
                                placeholder="Paste the résumé here…"
                                rows={16}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-shadow ${errors.resume ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.resume && (
                                <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                                {resumeText.length} / 5000 characters
                            </p>
                        </div>
                    </div>
                </div>

                {/* Analyze Button */}
                <div className="mt-8 text-center space-y-3">
                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Analyzing…
                            </span>
                        ) : (
                            'Analyze Match'
                        )}
                    </button>
                    <p className="text-sm text-gray-500">
                        Your data is processed securely. No files are stored.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AnalysisForm;
