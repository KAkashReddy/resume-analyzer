import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Beta Badge */}
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-primary-600">
                            ResumeMatch AI
                        </h1>
                        <span className="px-2.5 py-0.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
                            Beta
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#product"
                            className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                        >
                            Product
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                        >
                            How it works
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
