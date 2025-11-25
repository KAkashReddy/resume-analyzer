import React from 'react';
import type { AnalysisResult } from '../types';

interface ScoreCardsProps {
    result: AnalysisResult;
}

const ScoreCards: React.FC<ScoreCardsProps> = ({ result }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {/* Overall Match Score */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        Overall Match
                    </h4>
                </div>
                <div className="text-4xl font-bold text-gray-900">
                    {result.final_score_percent.toFixed(1)}
                    <span className="text-2xl text-gray-500 font-normal"> / 100</span>
                </div>
            </div>

            {/* Semantic Similarity */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        Semantic Similarity
                    </h4>
                </div>
                <div className="text-4xl font-bold text-gray-900">
                    {result.semantic_similarity.toFixed(3)}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    Textual similarity between résumé and JD
                </p>
            </div>

            {/* Skill Overlap */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        Skill Overlap
                    </h4>
                </div>
                <div className="text-4xl font-bold text-gray-900">
                    {result.skill_overlap.toFixed(3)}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    Ratio of JD skills present in the résumé
                </p>
            </div>
        </div>
    );
};

export default ScoreCards;
