import React from 'react';
import { Upload, Cpu, FileCheck, Award, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: Upload,
            title: "Upload Your Resume",
            description: "Simply drag and drop your resume (PDF) and the job description you're targeting. Secure and private.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: Cpu,
            title: "AI Analysis",
            description: "Our advanced AI scans your resume against the job description to identify key kill gaps and formatting issues.",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            icon: FileCheck,
            title: "Get Instant Feedback",
            description: "Receive a detailed score, missing keywords list, and actionable suggestions to improve your ATS ranking.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Award,
            title: "Optimize & Apply",
            description: "Update your resume based on our insights and increase your chances of getting an interview by up to 3x.",
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="bg-white py-20 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                            How <span className="text-primary-600">ResumeMatch AI</span> Works
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600">
                            Optimize your resume in seconds. See how our AI-powered platform helps you land your dream job.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden group">
                                    <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${step.color}`}>
                                        <step.icon size={100} />
                                    </div>
                                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${step.bg}`}>
                                        <step.icon className={`w-7 h-7 ${step.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary-900 py-20 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Resume?</h2>
                        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of job seekers who have improved their interview chances with our tool.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Analyze My Resume
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-xs text-gray-400">
                        © 2025 Created & Designed by <span className="font-medium">AKASH REDDY</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HowItWorks;
