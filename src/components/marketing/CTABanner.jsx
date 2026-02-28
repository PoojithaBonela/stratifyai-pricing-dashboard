import React from 'react';

export default function CTABanner() {
    return (
        <div className="w-full bg-gradient-to-r from-[#eff6ff] to-[#f8fafc] border-b border-gray-100 py-4 lg:py-5">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <h2 className="text-[22px] md:text-2xl font-semibold text-[#1a1f36] font-['Outfit',sans-serif] tracking-tight">
                    Model Every Business Decision in One Place.
                </h2>
                <div className="flex items-center gap-3">
                    <button className="bg-[#5956e9] hover:bg-[#4b48d6] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm">
                        Start 7-Day Free Trial
                    </button>
                    <button className="bg-white border border-gray-200 hover:border-[#5956e9] text-[#5956e9] px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm">
                        Request a Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
