import React from 'react';
import type { AnalysisResult } from '../types';

interface SuggestionsPanelProps {
    result: AnalysisResult;
}

const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({ result }) => {
    const generateSuggestions = (): string[] => {
        const suggestions: string[] = [];

        if (result.skill_overlap < 0.3) {
            suggestions.push(
                'Add more of the required JD skills to the résumé section.'
            );
        }

        if (result.semantic_similarity < 0.4) {
            suggestions.push(
                'Rewrite key experience bullets to mirror the language of the JD.'
            );
        }

        if (result.overlap_count === 0) {
            suggestions.push(
                'Consider highlighting transferable skills that align with the job requirements.'
            );
        }

        if (result.skill_overlap < 0.5 && result.overlap_count > 0) {
            suggestions.push(
                'Emphasize the overlapping skills more prominently in the résumé summary.'
            );
        }

        // Always include at least one generic suggestion
        suggestions.push(
            'Highlight the most relevant projects and technologies in the summary.'
        );

        return suggestions;
    };

    const suggestions = generateSuggestions();

    return (
        <div className="mt-8 bg-amber-50 rounded-xl shadow-sm border border-amber-200 p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-lg">
                    <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                    How to Improve the Match
                </h4>
            </div>

            <ul className="space-y-4">
                {result.suggestions && result.suggestions.length > 0 ? (
                    result.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
                            <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-amber-700 font-bold text-xs">
                                    {index + 1}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">{suggestion}</p>
                        </li>
                    ))
                ) : (
                    suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-amber-100 shadow-sm">
                            <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-amber-700 font-bold text-xs">
                                    {index + 1}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">{suggestion}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SuggestionsPanel;
