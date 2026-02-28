import React from 'react';

const footerLinks = {
    Product: [
        { name: 'Platform Overview', href: '#' },
        { name: 'Strategy Simulation Engine', href: '#' },
        { name: 'AI Intelligence Layer', href: '#' },
        { name: 'Risk & Forecasting', href: '#' },
        { name: 'Advanced Dashboards', href: '#' },
        { name: 'Security & Compliance', href: '#' },
    ],
    Solutions: [
        { name: 'For Individual Founders', href: '#' },
        { name: 'For Growing Startups', href: '#' },
        { name: 'For Enterprises', href: '#' },
        { name: 'Financial Planning', href: '#' },
        { name: 'Market Expansion Strategy', href: '#' },
        { name: 'Operational Optimization', href: '#' },
    ],
    Developers: [
        { name: 'API Documentation', href: '#' },
        { name: 'Developer Guide', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Data Upload Specs', href: '#' },
        { name: 'System Status', href: '#' },
        { name: 'Release Notes', href: '#' },
    ],
    Resources: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Contact Support', href: '#' },
    ],
    Company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Leadership', href: '#' },
        { name: 'Press & News', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ]
};

export default function Footer() {
    return (
        <footer className="bg-[#2d333f] pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                {/* Navigation Columns - Spread across screen */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto flex-1 w-full justify-items-center sm:justify-items-start">
                    {Object.entries(footerLinks).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5 font-['Outfit',sans-serif]">
                                {category}
                            </h3>
                            <ul className="space-y-3.5">
                                {items.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 font-['Manrope',sans-serif]"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Strip */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Left Side: Brand Logo + Name + Copyright */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 text-sm text-gray-400 font-['Manrope',sans-serif] w-full lg:w-auto justify-center lg:justify-start">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <img src="/images/logo.png" alt="Stratify AI" className="h-12 w-12 object-contain rounded-md transition-transform group-hover:scale-105" />
                            <span className="text-2xl font-bold text-white tracking-tight">Stratify AI</span>
                        </div>
                        <span className="hidden lg:block text-white/20">|</span>
                        <span>© 2026 Stratify AI. All rights reserved.</span>
                    </div>

                    {/* Right Side: Links & Social */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full lg:w-auto justify-center lg:justify-end">
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-400 font-['Manrope',sans-serif]">
                            <a href="#" className="hover:text-purple-400 transition-colors duration-200">Cookie Settings</a>
                        </div>

                        {/* LinkedIn Icon */}
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center justify-center">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
