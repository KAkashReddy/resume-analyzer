import type { AnalysisResult } from '../types';

// Mock API function to simulate backend analysis
export async function analyzeResume(
    jdText: string,
    resumeText: string
): Promise<AnalysisResult> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock skill extraction (simple keyword matching)
    const extractSkills = (text: string): string[] => {
        const skillKeywords = [
            'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
            'AWS', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'Git',
            'Machine Learning', 'Data Analysis', 'REST API', 'GraphQL',
            'Agile', 'Scrum', 'Leadership', 'Communication', 'Problem Solving',
            'HTML', 'CSS', 'Angular', 'Vue.js', 'Express', 'Django',
            'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'CI/CD', 'Jenkins'
        ];

        const foundSkills: string[] = [];
        const lowerText = text.toLowerCase();

        skillKeywords.forEach((skill) => {
            if (lowerText.includes(skill.toLowerCase())) {
                foundSkills.push(skill);
            }
        });

        return [...new Set(foundSkills)]; // Remove duplicates
    };

    const jdSkills = extractSkills(jdText);
    const resumeSkills = extractSkills(resumeText);

    // Calculate overlap
    const overlapSkills = jdSkills.filter((skill) =>
        resumeSkills.some((rs) => rs.toLowerCase() === skill.toLowerCase())
    );

    const skillOverlap = jdSkills.length > 0 ? overlapSkills.length / jdSkills.length : 0;

    // Mock semantic similarity (based on text length and overlap)
    const semanticSimilarity = Math.min(
        0.3 + skillOverlap * 0.5 + Math.random() * 0.2,
        1
    );

    // Calculate final score
    const finalScore = (skillOverlap * 60 + semanticSimilarity * 40);

    return {
        final_score_percent: Math.round(finalScore * 100) / 100,
        semantic_similarity: Math.round(semanticSimilarity * 1000) / 1000,
        skill_overlap: Math.round(skillOverlap * 1000) / 1000,
        jd_skills: jdSkills,
        resume_skills: resumeSkills,
        overlap_skills: overlapSkills,
        jd_skill_count: jdSkills.length,
        resume_skill_count: resumeSkills.length,
        overlap_count: overlapSkills.length,
    };
}
