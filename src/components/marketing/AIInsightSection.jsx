import React, { useState, useEffect, useRef } from 'react';

const AIRecommendationPanel = ({ isVisible }) => {
    const [confidence, setConfidence] = useState(0);
    const [riskFill, setRiskFill] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = 87;
            const timer = setInterval(() => {
                start += 2;
                if (start >= end) {
                    setConfidence(end);
                    clearInterval(timer);
                } else {
                    setConfidence(Math.floor(start));
                }
            }, 30);
            setTimeout(() => setRiskFill(60), 400);
            return () => clearInterval(timer);
        } else {
            setConfidence(0);
            setRiskFill(0);
        }
    }, [isVisible]);

    return (
        <div className={`relative bg-[#2d333f] rounded-[24px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] border border-white/5 p-5 md:p-6 w-full max-w-2xl mx-auto transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                {/* 1) AI Recommendation Card - Horizontal focus */}
                <div className="lg:flex-grow">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-full relative overflow-hidden min-h-[160px] flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-1.5 bg-purple-500/20 rounded-lg">
                                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-6.857 2.143L12 21l-2.143-6.857L3 12l6.857-2.143L12 3z" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-extrabold text-purple-400 uppercase tracking-widest font-['Manrope',sans-serif]">AI Recommendation</span>
                        </div>
                        <p className="text-lg font-bold text-white leading-snug mb-3 font-['Outfit',sans-serif]">
                            "Reduce marketing spend by 12% to increase operating margin by 4%."
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                            <span className="text-[10px] text-gray-400 font-medium font-['Manrope',sans-serif]">Ready for execution</span>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-bold text-white font-['Manrope',sans-serif]">{confidence}% Confidence</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2) Metrics sidebar */}
                <div className="flex flex-row md:flex-row lg:flex-col gap-4 items-stretch lg:w-[200px] shrink-0">
                    <div className="p-4 bg-white/5 border border-white/5 rounded-xl font-['Manrope',sans-serif] flex-grow">
                        <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-widest block mb-1.5">Risk Level</span>
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] font-bold text-purple-400">Moderate</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-purple-400 transition-all duration-1000 ease-out"
                                style={{ width: `${riskFill}%` }}
                            />
                        </div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex-grow font-['Manrope',sans-serif]">
                        <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-widest block mb-1">Impact</span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-xl font-bold text-white">+6.8%</span>
                            <svg className="w-3 h-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AIInsightSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#f8f9fb] py-24 md:py-32 overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Visual Mockup - Standardized Horizontal Card */}
                    <div className="lg:w-[60%] w-full">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-purple-500/5 blur-[50px] rounded-full opacity-30" />
                            <AIRecommendationPanel isVisible={isVisible} />
                        </div>
                    </div>

                    {/* Text Column - Standardized Typography */}
                    <div className={`lg:w-[40%] w-full text-left font-['Outfit',sans-serif] transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
                        <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1f36] leading-[1.15] mb-6 tracking-tight">
                                Go Beyond Forecasting — <br />
                                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Get Recommendations</span>
                            </h2>
                            <p className="text-base md:text-lg text-[#4f566b] font-medium leading-relaxed mb-10 font-['Manrope',sans-serif]">
                                Our AI doesn’t just predict outcomes. It suggests optimized actions to improve growth, reduce risk, and maximize margins.
                            </p>

                            <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                                <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100/50">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-[#1a1f36] mb-1">Strategic Recommendations</h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium font-['Manrope',sans-serif]">Actionable intelligence powered by predictive modeling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
