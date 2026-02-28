import React from 'react';

const StrategyIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IntelligenceIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const EnterpriseIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const CheckIcon = () => (
    <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200/50 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const DashIcon = () => (
    <div className="w-3.5 h-[1.5px] bg-gray-200 rounded-full" />
);

const SubscribeButton = () => (
    <button className="w-full py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 bg-black text-white hover:bg-gray-800 shadow-sm border border-transparent">
        Subscribe
    </button>
);

export default function ComparisonTable() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [plans, setPlans] = React.useState([]);
    const [sections, setSections] = React.useState([]);
    const sectionRef = React.useRef(null);

    // Icon map — keyed to icon string in the JSON
    const ICON_MAP = {
        strategy: <StrategyIcon />,
        intelligence: <IntelligenceIcon />,
        enterprise: <EnterpriseIcon />,
    };

    React.useEffect(() => {
        const fetchAll = async () => {
            try {
                const [pricingRes, comparisonRes] = await Promise.all([
                    fetch('/pricingData.json'),
                    fetch('/comparisonData.json'),
                ]);
                const pricingData = await pricingRes.json();
                const comparisonData = await comparisonRes.json();

                const fetchedPlans = pricingData.plans || [];
                setPlans(fetchedPlans);

                // Build a quick lookup: planId -> { simulationLimit, scenarioComparisonLimit, ... }
                const planMap = {};
                fetchedPlans.forEach(p => { planMap[p.id] = p; });

                const resolveValue = (val, planId) => {
                    if (typeof val !== 'string') return val;
                    return val
                        .replace('{{simulationLimit}}', planMap[planId]?.simulationLimit ?? '')
                        .replace('{{scenarioComparisonLimit}}', planMap[planId]?.scenarioComparisonLimit ?? '');
                };

                // Map sections with placeholders resolved and icons injected
                const resolved = (comparisonData.sections || []).map(section => ({
                    ...section,
                    icon: ICON_MAP[section.icon] ?? null,
                    features: section.features.map(feature => ({
                        ...feature,
                        starter: resolveValue(feature.starter, 'starter'),
                        advanced: resolveValue(feature.advanced, 'advanced'),
                        enterprise: resolveValue(feature.enterprise, 'enterprise'),
                    })),
                }));

                setSections(resolved);
            } catch (error) {
                console.error('Failed to fetch comparison data:', error);
            }
        };

        fetchAll();
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const renderValue = (val) => {
        if (val === true) return <CheckIcon />;
        if (val === false) return <DashIcon />;
        return <span className="text-[13px] font-bold text-[#1a1f36] tracking-tight">{val}</span>;
    };

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden bg-white">
            {/* Ultra-Soft Purple Ambient Haze */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[800px] bg-purple-200/50 rounded-full blur-[180px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-100/60 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* 4-Corner Purple Gradient Effect */}
            <div className="absolute top-0 left-0 w-[800px] h-[500px] bg-purple-400 opacity-[0.1] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-purple-400 opacity-[0.1] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[500px] bg-purple-400 opacity-[0.1] rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-purple-400 opacity-[0.1] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 font-['Manrope',sans-serif]">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#1a1f36] mb-4 tracking-tight font-['Outfit',sans-serif]">
                        Compare All Features
                    </h2>
                    <p className="text-base text-[#697386] max-w-2xl mx-auto">
                        See exactly what's included at every level.
                    </p>
                </div>

                {/* Ultra-Compact Gradient Wrapper */}
                <div className={`max-w-4xl mx-auto p-[1px] rounded-[20px] bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-200 shadow-sm relative z-20 transition-all duration-1000 delay-300 hover:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="bg-white rounded-[19px] overflow-hidden backdrop-blur-sm">

                        {/* Desktop View (Ultra-Compact) */}
                        <div className="hidden md:block">
                            <table className="w-full text-left border-collapse table-fixed">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 w-[28%] bg-white border-b border-gray-200">
                                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">Feature Matrix</span>
                                        </th>
                                        <th className="py-6 px-4 w-[24%] bg-gray-100/60 align-bottom">
                                            <div className="flex flex-col justify-end items-center h-[70px] gap-3">
                                                <h3 className="text-[13px] font-bold text-[#1a1f36] uppercase tracking-wider">Starter</h3>
                                                <SubscribeButton />
                                            </div>
                                        </th>
                                        <th className="py-6 px-4 w-[24%] bg-purple-100/40 relative border-x border-gray-100 align-bottom">
                                            <div className="absolute -top-px left-0 right-0 h-1 bg-purple-400" />
                                            <div className="flex flex-col justify-end items-center h-[70px] gap-2">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-[8px] font-bold text-purple-600 uppercase tracking-widest leading-none mb-1">Most Popular</span>
                                                    <h3 className="text-[13px] font-bold text-[#1a1f36] uppercase tracking-wider">Advanced</h3>
                                                </div>
                                                <SubscribeButton />
                                            </div>
                                        </th>
                                        <th className="py-6 px-4 w-[24%] bg-gray-100/60 align-bottom">
                                            <div className="flex flex-col justify-end items-center h-[70px] gap-3">
                                                <h3 className="text-[13px] font-bold text-[#1a1f36] uppercase tracking-wider">Enterprise</h3>
                                                <SubscribeButton />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sections.map((section, idx) => {
                                        const getHeaderStyles = (title) => {
                                            if (title === "Usage & Limits") return "bg-gradient-to-r from-blue-400/5 via-blue-400/10 to-blue-400/5 border-blue-400/20";
                                            if (title === "Model Power & AI Depth") return "bg-gradient-to-r from-[#00FF85]/5 via-[#00FF85]/10 to-[#00FF85]/5 border-[#00FF85]/20";
                                            if (title === "Collaboration & Workflow") return "bg-gradient-to-r from-purple-400/5 via-purple-400/10 to-purple-400/5 border-purple-400/20";
                                            return "bg-gradient-to-r from-indigo-400/5 via-indigo-400/10 to-indigo-400/5 border-indigo-400/20";
                                        };

                                        const getIconColor = (title) => {
                                            if (title === "Usage & Limits") return "text-blue-600";
                                            if (title === "Model Power & AI Depth") return "text-emerald-500";
                                            if (title === "Collaboration & Workflow") return "text-purple-600";
                                            return "text-indigo-600";
                                        };

                                        return (
                                            <React.Fragment key={idx}>
                                                <tr className="bg-gray-50/50 border-y border-gray-200/80">
                                                    <td colSpan={4} className="py-4 px-6">
                                                        <div className="flex justify-center">
                                                            <div className={`flex items-center gap-3 py-2 px-5 rounded-xl border-x-2 shadow-sm ${getHeaderStyles(section.title)}`}>
                                                                <div className={`${getIconColor(section.title)} scale-110`}>
                                                                    {section.icon}
                                                                </div>
                                                                <h4 className="text-[11px] font-extrabold text-[#1a1f36] uppercase tracking-[0.2em]">{section.title}</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {section.features.map((feature, fIdx) => (
                                                    <tr key={fIdx} className="group/row transition-all duration-300 border-b border-gray-200/60 last:border-b-0 hover:bg-[#f8faff] hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] relative z-0 hover:z-10 cursor-default">
                                                        <td className="py-4 px-8 bg-white border-r border-gray-200/60 transition-all duration-300 group-hover/row:pl-10 relative overflow-hidden">
                                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover/row:opacity-100 transition-all duration-300" />
                                                            <span className="text-[13px] font-semibold text-[#4f566b] transition-colors group-hover/row:text-[#1a1f36]">{feature.name}</span>
                                                        </td>
                                                        <td className="py-4 px-8 bg-gray-50/40 transition-colors duration-300 group-hover/row:bg-white">
                                                            <div className="flex items-center justify-center scale-95 transition-transform duration-300 group-hover/row:scale-110">{renderValue(feature.starter)}</div>
                                                        </td>
                                                        <td className="py-4 px-8 bg-purple-100/30 border-x border-gray-200/60 transition-colors duration-300 group-hover/row:bg-purple-100/10">
                                                            <div className="flex items-center justify-center scale-95 transition-transform duration-300 group-hover/row:scale-110">{renderValue(feature.advanced)}</div>
                                                        </td>
                                                        <td className="py-4 px-8 bg-gray-50/40 transition-colors duration-300 group-hover/row:bg-white">
                                                            <div className="flex items-center justify-center scale-95 transition-transform duration-300 group-hover/row:scale-110">{renderValue(feature.enterprise)}</div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile View (Ultra-Compact Stacked) */}
                        <div className="md:hidden">
                            {sections.map((section, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <div className="bg-gray-50 py-3 px-6 border-y border-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                                        {section.title}
                                    </div>
                                    {section.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="p-4 border-b border-gray-50 flex flex-col gap-3">
                                            <div className="text-[12px] font-bold text-[#1a1f36]">{feature.name}</div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="flex flex-col items-center p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                    <span className="text-[8px] font-bold text-gray-400 uppercase mb-1">Starter</span>
                                                    <div className="scale-75">{renderValue(feature.starter)}</div>
                                                </div>
                                                <div className="flex flex-col items-center p-2 rounded-lg bg-purple-50 border border-purple-100 relative">
                                                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-purple-500 rounded-full -translate-y-1/2 translate-x-1/2" />
                                                    <span className="text-[8px] font-bold text-purple-600 uppercase mb-1">Advanced</span>
                                                    <div className="scale-75">{renderValue(feature.advanced)}</div>
                                                </div>
                                                <div className="flex flex-col items-center p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                    <span className="text-[8px] font-bold text-gray-400 uppercase mb-1">Enterprise</span>
                                                    <div className="scale-75">{renderValue(feature.enterprise)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
