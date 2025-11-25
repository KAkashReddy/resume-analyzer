import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnalysisForm from './components/AnalysisForm';
import ScoreCards from './components/ScoreCards';
import SkillsPanels from './components/SkillsPanels';
import OverlapSkills from './components/OverlapSkills';
import SuggestionsPanel from './components/SuggestionsPanel';
import type { AnalysisResult } from './types';
import './index.css';

function App() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    // Scroll to results section
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AnalysisForm onAnalysisComplete={handleAnalysisComplete} />

      {/* Results Section */}
      {analysisResult && (
        <section id="results" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                Analysis Results
              </h3>
              <p className="text-gray-600 text-center">
                Here's how the résumé matches the job description
              </p>
            </div>

            <ScoreCards result={analysisResult} />
            <SkillsPanels result={analysisResult} />
            <OverlapSkills result={analysisResult} />
            <SuggestionsPanel result={analysisResult} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-400">
            © 2025 Created & Designed by <span className="font-medium">AKASH REDDY</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
