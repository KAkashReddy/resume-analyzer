import React from 'react';
import type { AnalysisResult } from '../types';
import { Info, CheckCircle2, AlertTriangle, XCircle, Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfUtils';

interface ScoreCardsProps {
    result: AnalysisResult;
}

const ScoreCards: React.FC<ScoreCardsProps> = ({ result }) => {
    const getScoreColor = (score: number) => {
        if (score >= 70) return 'text-green-600';
        if (score >= 40) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreBg = (score: number) => {
        if (score >= 70) return 'bg-green-50';
        if (score >= 40) return 'bg-yellow-50';
        return 'bg-red-50';
    };

    const getScoreIcon = (score: number) => {
        if (score >= 70) return <CheckCircle2 className="w-5 h-5 text-green-600" />;
        if (score >= 40) return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
        return <XCircle className="w-5 h-5 text-red-600" />;
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <button
                    onClick={() => generatePDF(result)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    Download Analysis as PDF
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Overall Match Score */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden group hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className={`w-32 h-32 rounded-full ${getScoreBg(result.final_score_percent)} blur-2xl`} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Match Score
                            </span>
                        </div>

                        <div className="flex items-baseline gap-1 mb-4">
                            <span className={`text-6xl font-bold tracking-tight ${getScoreColor(result.final_score_percent)}`}>
                                {result.final_score_percent.toFixed(0)}%
                            </span>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                {getScoreIcon(result.final_score_percent)}
                                {result.final_score_percent >= 70 ? 'Strong Match' :
                                    result.final_score_percent >= 40 ? 'Moderate Match' : 'Weak Match'}
                            </p>
                            <p className="text-sm text-gray-500">
                                Your résumé aligns well with the JD requirements.
                            </p>
                        </div>

                        {/* Subtle Progress Ring/Bar Accent */}
                        <div className="mt-6 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${result.final_score_percent >= 70 ? 'bg-green-500' : result.final_score_percent >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${result.final_score_percent}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Semantic Similarity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Semantic Similarity
                            </span>
                            <div className="group/tooltip relative">
                                <Info className="w-4 h-4 text-gray-400 cursor-help" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity w-56 text-center pointer-events-none z-20 shadow-xl">
                                    Measures how closely the language, tone, and context of your résumé match the job description.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-2 mb-4">
                        <span className={`text-4xl font-bold ${getScoreColor(result.semantic_similarity * 100)}`}>
                            {(result.semantic_similarity * 100).toFixed(0)}%
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                        <div
                            className={`h-2 rounded-full transition-all duration-1000 ${getScoreColor(result.semantic_similarity * 100).replace('text-', 'bg-')}`}
                            style={{ width: `${result.semantic_similarity * 100}%` }}
                        />
                    </div>

                    <p className="text-xs text-gray-500 opacity-80">
                        Textual similarity between résumé and JD.
                    </p>
                </div>

                {/* Skill Overlap */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Skill Overlap
                            </span>
                            <div className="group/tooltip relative">
                                <Info className="w-4 h-4 text-gray-400 cursor-help" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity w-56 text-center pointer-events-none z-20 shadow-xl">
                                    The percentage of hard skills and keywords from the JD that were found in your résumé.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-2 mb-4">
                        <span className={`text-4xl font-bold ${getScoreColor(result.skill_overlap * 100)}`}>
                            {(result.skill_overlap * 100).toFixed(0)}%
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                        <div
                            className={`h-2 rounded-full transition-all duration-1000 ${getScoreColor(result.skill_overlap * 100).replace('text-', 'bg-')}`}
                            style={{ width: `${result.skill_overlap * 100}%` }}
                        />
                    </div>

                    <p className="text-xs text-gray-500 opacity-80">
                        Ratio of JD skills present in the résumé.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScoreCards;
