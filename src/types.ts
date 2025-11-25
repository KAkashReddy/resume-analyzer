export interface AnalysisResult {
    final_score_percent: number;
    semantic_similarity: number;
    skill_overlap: number;
    jd_skills: string[];
    resume_skills: string[];
    overlap_skills: string[];
    jd_skill_count: number;
    resume_skill_count: number;
    overlap_count: number;
    missing_skills: string[];
    suggestions: string[];
}

export interface AnalysisFormData {
    jdText: string;
    resumeText: string;
}
