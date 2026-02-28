import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
    {
        label: 'Platform',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
            { name: 'Platform Overview', href: '#' },
            { name: 'Strategy Simulation Engine', href: '#' },
            { name: 'AI Intelligence Layer', href: '#' },
            { name: 'Risk & Forecasting', href: '#' },
            { name: 'Advanced Dashboards', href: '#' },
            { name: 'Security & Compliance', href: '#' },
        ]
    },
    {
        label: 'Solutions',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
            { name: 'For Individual Founders', href: '#' },
            { name: 'For Growing Startups', href: '#' },
            { name: 'For Enterprises', href: '#' },
            { name: 'Financial Planning', href: '#' },
            { name: 'Market Expansion Strategy', href: '#' },
            { name: 'Operational Optimization', href: '#' },
        ]
    },
    {
        label: 'Developers',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
            { name: 'API Documentation', href: '#' },
            { name: 'Developer Guide', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Data Upload Specs', href: '#' },
            { name: 'System Status', href: '#' },
            { name: 'Release Notes', href: '#' },
        ]
    },
    {
        label: 'Resources',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
            { name: 'Blog', href: '#' },
            { name: 'Case Studies', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'FAQs', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Contact Support', href: '#' },
        ]
    },
    {
        label: 'Pricing',
        href: '#pricing',
        hasDropdown: false
    },
    {
        label: 'About',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Leadership', href: '#' },
            { name: 'Press & News', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
        ]
    },
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
                        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
                            <img src="/images/logo.png" alt="Stratify AI" className="h-12 w-12 object-contain rounded-md transition-transform group-hover:scale-105" />
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">Stratify AI</span>
                        </div>

                        {/* Center: Desktop Links (md and above) */}
                        <ul className="hidden lg:flex items-center space-x-7 h-full">
                            {navLinks.map((link) => (
                                <li key={link.label} className="group relative h-full flex items-center cursor-pointer">
                                    <a
                                        href={link.href}
                                        className="flex items-center text-[15px] font-semibold text-[#1a1f36] group-hover:text-indigo-600 transition-colors duration-200 py-8 relative after:absolute after:bottom-[24px] after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown />}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {link.hasDropdown && link.dropdownItems && (
                                        <div className="absolute top-full left-0 w-[260px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                                            <div className="p-3">
                                                {link.dropdownItems.map((item) => (
                                                    <a key={item.name} href={item.href} className="block px-4 py-3 text-[15px] text-gray-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all font-medium font-['Manrope',sans-serif]">
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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
