import React from 'react';

export default function CTASection() {
    return (
        <section className="bg-gradient-to-r from-[#e0efff] to-white border-b border-gray-100 py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left Side: Headline */}
                    <div className="max-w-xl">
                        <h2 className="text-xl md:text-2xl font-bold text-[#1a1f36] tracking-tight leading-snug">
                            Model Every Business Decision in One Place.
                        </h2>
                    </div>

                    {/* Right Side: Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <button className="w-full sm:w-auto bg-[#6366f1] text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer">
                            Start 7-Day Free Trial
                        </button>
                        <button className="w-full sm:w-auto bg-white text-[#6366f1] px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm border border-[#e6ebf1] hover:bg-[#f8fafc] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer">
                            Request a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
