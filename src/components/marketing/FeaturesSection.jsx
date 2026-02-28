import React, { useEffect, useState, useRef } from 'react';

const MiniDashboard = ({ isVisible }) => {
    const [revenue, setRevenue] = useState(0);
    const chartPathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = 124500;
            const timer = setInterval(() => {
                start += 2000;
                if (start >= end) {
                    setRevenue(end);
                    clearInterval(timer);
                } else {
                    setRevenue(Math.floor(start));
                }
            }, 30);
            return () => clearInterval(timer);
        } else {
            setRevenue(0);
        }
    }, [isVisible]);

    useEffect(() => {
        if (chartPathRef.current) {
            setPathLength(chartPathRef.current.getTotalLength());
        }
    }, []);

    return (
        <div className={`relative bg-[#2d333f] rounded-[24px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] border border-white/5 p-5 md:p-6 w-full max-w-2xl mx-auto transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                {/* Main Graph Area */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 lg:flex-grow flex flex-col min-h-[160px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-[0.2em] font-['Manrope']">Simulation Engine</span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Revenue Forecast</span>
                        </div>
                    </div>

                    <div className="flex-grow relative h-20 w-full mb-2">
                        <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                            <path
                                ref={chartPathRef}
                                d="M 0 90 Q 50 85, 100 70 T 200 50 T 300 30 T 400 10"
                                fill="none"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: pathLength,
                                    strokeDashoffset: isVisible ? 0 : pathLength,
                                    transition: 'stroke-dashoffset 2s ease-in-out'
                                }}
                            />
                            <circle cx="400" cy="10" r="3" fill="#3B82F6" className={isVisible ? 'opacity-100' : 'opacity-0'} />
                        </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest leading-none mb-1">Projected Revenue</span>
                            <span className="text-xl font-bold text-white font-['Outfit']">${revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest leading-none mb-1">Growth Index</span>
                            <span className="text-xl font-bold text-emerald-400 font-['Outfit']">+12.4%</span>
                        </div>
                    </div>
                </div>

                {/* Sidebar Controls/Insight */}
                <div className="flex flex-row md:flex-row lg:flex-col gap-4 items-stretch lg:w-[220px] shrink-0">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex-grow">
                        <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest block mb-2 leading-none">Controls</span>
                        <div className="space-y-3">
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[65%] bg-blue-500 rounded-full" />
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[40%] bg-emerald-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex-grow relative overflow-hidden group/box">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span className="text-[9px] font-extrabold text-white uppercase tracking-widest leading-none">AI insight</span>
                        </div>
                        <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Increase pricing by 8% to improve margin.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function FeaturesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden scroll-mt-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Visual Mockup - Standardized Horizontal Card */}
                    <div className="lg:w-[60%] w-full order-2 lg:order-2">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-500/5 blur-[50px] rounded-full opacity-30" />
                            <MiniDashboard isVisible={isVisible} />
                        </div>
                    </div>

                    {/* Text Content - Standardized Typography */}
                    <div className={`lg:w-[40%] w-full transition-all duration-[1500ms] ease-out transform order-1 lg:order-1 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[#1a1f36] mb-6 font-mono text-[9px] uppercase tracking-widest font-bold">
                                <span className="w-1 h-1 rounded-full bg-blue-500" />
                                <span>Simulation Engine v2.4</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1f36] mb-6 leading-[1.15] font-['Outfit',sans-serif] tracking-tight">
                                Model Every <br />
                                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Strategic Scenario</span>
                            </h2>
                            <p className="text-base md:text-lg text-[#4f566b] font-medium leading-relaxed mb-10 font-['Manrope',sans-serif]">
                                Test pricing changes, hiring decisions, budget allocation, and expansion strategies with real-time projections.
                            </p>

                            <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-[#1a1f36] leading-none mb-1 font-['Outfit',sans-serif]">Forecasting Intelligence</h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium font-['Manrope',sans-serif]">Interactive simulations powered by AI forecasting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
