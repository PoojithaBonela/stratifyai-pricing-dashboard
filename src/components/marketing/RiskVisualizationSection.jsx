import React, { useState, useEffect, useRef } from 'react';

const RiskHeatmap = ({ isVisible }) => {
    const columns = ['Marketing', 'Sales', 'Operations', 'Hiring', 'R&D', 'Expansion'];
    const rows = ['Q1', 'Q2', 'Q3', 'Q4'];

    const riskData = [
        [20, 35, 10, 45, 15, 25],
        [30, 40, 25, 35, 20, 50],
        [78, 45, 30, 55, 40, 60],
        [40, 30, 50, 40, 30, 35]
    ];

    const [hoveredCell, setHoveredCell] = useState(null);

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 relative mb-4 lg:mb-0 lg:flex-grow min-h-[140px]">
            <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-extrabold text-blue-400 uppercase tracking-[0.2em] font-['Manrope']">Financial Risk Map</span>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-900/40 to-emerald-400 rounded-full opacity-50" />
                </div>
            </div>

            <div className="relative max-w-[280px] mx-auto lg:mx-0">
                <div className="grid grid-cols-[30px_1fr] gap-3 mb-1.5">
                    <div />
                    <div className="grid grid-cols-6 gap-1.5">
                        {columns.map(col => (
                            <span key={col} className="text-[6px] font-extrabold text-gray-500 uppercase tracking-widest text-center">{col.substring(0, 3)}</span>
                        ))}
                    </div>
                </div>

                {rows.map((row, rowIndex) => (
                    <div key={row} className="grid grid-cols-[30px_1fr] gap-3 mb-1.5 items-center">
                        <span className="text-[6px] font-extrabold text-gray-500 uppercase tracking-widest">{row}</span>
                        <div className="grid grid-cols-6 gap-1.5">
                            {riskData[rowIndex].map((score, colIndex) => (
                                <div
                                    key={colIndex}
                                    onMouseEnter={() => setHoveredCell({ row: row, col: columns[colIndex], score })}
                                    onMouseLeave={() => setHoveredCell(null)}
                                    className={`aspect-square w-full max-w-[32px] rounded-[2px] transition-all duration-700 cursor-pointer relative group/cell border border-white/5 ${score > 70 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]' :
                                        score > 50 ? 'bg-emerald-500/60' :
                                            score > 30 ? 'bg-blue-600/40' : 'bg-blue-900/30'
                                        }`}
                                    style={{
                                        transitionDelay: `${rowIndex * 80 + colIndex * 15}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(5px)'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ForecastCurve = ({ isVisible }) => {
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = 5.2;
            const timer = setInterval(() => {
                start += 0.1;
                if (start >= end) {
                    setRevenue(end);
                    clearInterval(timer);
                } else {
                    setRevenue(parseFloat(start.toFixed(1)));
                }
            }, 40);
            return () => clearInterval(timer);
        } else {
            setRevenue(0);
        }
    }, [isVisible]);

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 w-full md:w-[160px] lg:w-[160px] shrink-0 relative overflow-hidden flex flex-col justify-center">
            <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-[0.2em] font-['Manrope'] mb-2 block leading-none">12M Forecast</span>
            <div className="text-lg font-bold text-white mb-2 font-['Outfit'] leading-none">₹ {revenue}M</div>

            <div className="h-8 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <path
                        d="M0,35 Q20,32 40,25 T80,15 T100,5"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-all duration-2000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ strokeDasharray: 120, strokeDashoffset: isVisible ? 0 : 120 }}
                    />
                </svg>
            </div>
        </div>
    );
};

const ProbabilityGauge = ({ isVisible }) => {
    const [fill, setFill] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setFill(78), 500);
        } else {
            setFill(0);
        }
    }, [isVisible]);

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 w-full md:w-[140px] lg:w-[140px] shrink-0 flex flex-col items-center justify-center">
            <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-[0.2em] font-['Manrope'] mb-2.5 leading-none">Growth Prob.</span>

            <div className="relative w-12 h-12 mb-1">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="8" />
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="8"
                        strokeDasharray="264"
                        strokeDashoffset={264 - (264 * fill) / 100}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{fill}%</span>
                </div>
            </div>
        </div>
    );
};

export default function RiskVisualizationSection() {
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
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                    {/* Visual Mockup - Downsized Horizontal Card */}
                    <div className="lg:w-[60%] w-full">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-500/5 blur-[50px] rounded-full opacity-30" />
                            <div className={`relative bg-[#2d333f] rounded-[24px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] border border-white/5 p-4 md:p-5 w-full max-w-2xl mx-auto transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                    <RiskHeatmap isVisible={isVisible} />
                                    <div className="flex flex-row md:flex-row lg:flex-col gap-4 items-stretch">
                                        <ForecastCurve isVisible={isVisible} />
                                        <ProbabilityGauge isVisible={isVisible} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column - Standardized Typography */}
                    <div className={`lg:w-[40%] w-full text-left transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
                        <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1f36] leading-[1.15] mb-6 font-['Outfit',sans-serif] tracking-tight">
                                See Risk Before <br />
                                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">It Happens</span>
                            </h2>
                            <p className="text-base md:text-lg text-[#4f566b] font-medium leading-relaxed mb-10 font-['Manrope',sans-serif]">
                                Interactive heatmaps and probability modeling help you identify financial and operational risks before they impact your business.
                            </p>

                            <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-[#1a1f36] mb-1 font-['Outfit',sans-serif]">Visual Intelligence</h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium font-['Manrope',sans-serif]">Visual intelligence that turns uncertainty into clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
