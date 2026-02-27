import React from 'react';

export default function Hero() {
    return (
        <section className="bg-[#f8f9fb] pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden shadow-[inset_0_12px_24px_-12px_rgba(79,70,229,0.15),_inset_0_-12px_24px_-12px_rgba(79,70,229,0.15),_0_4px_20px_-2px_rgba(0,0,0,0.03)] border-y border-indigo-100/50">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center flex flex-col items-center">
                    {/* Main Headline styled like the reference image */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1a1f36] mb-8">
                        Stratify AI <span className="bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">Plans</span>
                    </h1>

                    {/* Subtext with strong hierarchy */}
                    <div className="max-w-3xl">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#4f566b] mb-4 leading-snug">
                            Turn Strategic Decisions Into Predictable Outcomes.
                        </h2>
                        <p className="text-base md:text-lg text-[#697386] leading-relaxed">
                            Stratify AI helps founders, teams, and enterprises simulate growth scenarios, forecast revenue impact, and evaluate risk before execution. Whether you're optimizing pricing, planning expansion, or modeling hiring strategies, our AI engine gives you clarity before you commit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
