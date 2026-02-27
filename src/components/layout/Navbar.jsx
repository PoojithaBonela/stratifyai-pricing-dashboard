import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
    { label: 'Platform', href: '#', hasDropdown: true },
    { label: 'Solutions', href: '#', hasDropdown: true },
    { label: 'Developers', href: '#', hasDropdown: true },
    { label: 'Resources', href: '#', hasDropdown: true },
    { label: 'Pricing', href: '#pricing', hasDropdown: false },
    { label: 'About', href: '#', hasDropdown: true },
];

const ChevronDown = () => (
    <svg
        className="ml-1 h-3.5 w-3.5 text-gray-400 group-hover:text-indigo-600 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-gray-50'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left: Logo */}
                        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
                            <img src="/images/logo.png" alt="Stratify AI" className="h-10 w-10 object-contain rounded-md transition-transform group-hover:scale-105" />
                            <span className="text-xl font-bold text-gray-900 tracking-tight">Stratify AI</span>
                        </div>

                        {/* Center: Desktop Links (md and above) */}
                        <ul className="hidden lg:flex items-center space-x-7">
                            {navLinks.map((link) => (
                                <li key={link.label} className="group">
                                    <a
                                        href={link.href}
                                        className="flex items-center text-[15px] font-semibold text-[#1a1f36] hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown />}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Right: Desktop Auth + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-5">
                                <a href="#login" className="text-[15px] font-semibold text-[#1a1f36] hover:text-indigo-600 transition-colors">
                                    Log in
                                </a>
                                <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-indigo-700 shadow-sm transition-all duration-200">
                                    Sign up
                                </button>
                            </div>

                            {/* Hamburger Icon (Mobile Only) */}
                            <button
                                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open navigation menu"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
}
