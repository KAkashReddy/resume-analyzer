import React from 'react';
import type { AnalysisResult } from '../types';

interface SkillsPanelsProps {
    result: AnalysisResult;
}

const SkillsPanels: React.FC<SkillsPanelsProps> = ({ result }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* JD Skills Detected */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        JD Skills Detected
                        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            {result.jd_skill_count}
                        </span>
                    </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {result.jd_skills.length > 0 ? (
                        result.jd_skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm italic">No skills detected in JD</p>
                    )}
                </div>
            </div>

            {/* Resume Skills Detected */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        Résumé Skills Detected
                        <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                            {result.resume_skill_count}
                        </span>
                    </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {result.resume_skills.length > 0 ? (
                        result.resume_skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm italic">No skills detected in résumé</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsPanels;
