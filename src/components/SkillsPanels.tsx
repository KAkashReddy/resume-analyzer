import React from 'react';
import type { AnalysisResult } from '../types';

interface SkillsPanelsProps {
    result: AnalysisResult;
}

const SkillsPanels: React.FC<SkillsPanelsProps> = ({ result }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* JD Skills Detected */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                        JD Skills Detected
                    </h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {result.jd_skill_count} skills
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {result.jd_skills.length > 0 ? (
                        result.jd_skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No skills detected</p>
                    )}
                </div>
            </div>

            {/* Résumé Skills Detected */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                        Résumé Skills Detected
                    </h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {result.resume_skill_count} skills
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {result.resume_skills.length > 0 ? (
                        result.resume_skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No skills detected</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsPanels;
