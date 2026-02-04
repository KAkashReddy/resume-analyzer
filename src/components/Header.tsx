import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Beta Badge */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-50 rounded-lg">
                            <FileText className="w-6 h-6 text-primary-600" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            ResumeMatch <span className="text-primary-600">AI</span>
                        </h1>
                        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full border border-primary-100">
                            Beta
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-sm font-bold text-gray-900 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-primary-600 after:scale-x-100 after:transition-transform"
                        >
                            Product
                        </Link>
                        <Link
                            to="/how-it-works"
                            className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors hover:font-semibold"
                        >
                            How it works
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors hover:font-semibold"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
