import React from 'react';
import type { AnalysisResult } from '../types';

interface OverlapSkillsProps {
    result: AnalysisResult;
}

const OverlapSkills: React.FC<OverlapSkillsProps> = ({ result }) => {
    return (
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl shadow-md p-8">
            <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Overlapping Skills
                </h4>
                <p className="text-gray-600">
                    These skills appear in both the job description and the résumé.
                </p>
            </div>

            {result.overlap_skills.length > 0 ? (
                <>
                    <div className="flex flex-wrap gap-3 justify-center mb-4">
                        {result.overlap_skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md hover:bg-primary-700 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <p className="text-center text-gray-700 font-medium">
                        Overlap: {result.overlap_count} out of {result.jd_skill_count} JD skills
                    </p>
                </>
            ) : (
                <div className="text-center py-8">
                    <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="text-gray-600 max-w-md mx-auto">
                        No overlapping skills detected. The candidate may need to tailor their résumé to match this role.
                    </p>
                </div>
            )}
        </div>
    );
};

export default OverlapSkills;
