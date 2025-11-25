import React from 'react';
import type { AnalysisResult } from '../types';
import { Check } from 'lucide-react';

interface OverlapSkillsProps {
    result: AnalysisResult;
}

const OverlapSkills: React.FC<OverlapSkillsProps> = ({ result }) => {
    // Combine all unique skills from JD and Resume for the table
    const allSkills = Array.from(new Set([...result.jd_skills]));

    return (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900">
                    Skill Match Analysis
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                    Detailed comparison of required skills vs. your skills
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3 font-medium w-1/2">JD Required Skill</th>
                            <th className="px-6 py-3 font-medium w-1/2">Found in Résumé</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {allSkills.map((skill, index) => {
                            const isMatch = result.overlap_skills.includes(skill);
                            return (
                                <tr
                                    key={index}
                                    className={`transition-colors ${isMatch ? 'bg-green-50/60 hover:bg-green-100/50' : 'hover:bg-gray-50'}`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {skill}
                                    </td>
                                    <td className="px-6 py-4">
                                        {isMatch ? (
                                            <span className="inline-flex items-center gap-1.5 text-green-700 font-medium">
                                                <Check className="w-4 h-4" />
                                                Matched
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 text-gray-400">
                                                —
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                        {allSkills.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                    No skills detected to analyze.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                    Match Rate: <strong>{((result.overlap_count / (result.jd_skill_count || 1)) * 100).toFixed(0)}%</strong>
                </span>
                <span className="text-sm text-gray-500">
                    {result.overlap_count} out of {result.jd_skill_count} required skills matched
                </span>
            </div>
        </div>
    );
};

export default OverlapSkills;
