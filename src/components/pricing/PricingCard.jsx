import React from 'react';

const StrategyIcon = () => (
    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IntelligenceIcon = () => (
    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const EnterpriseIcon = () => (
    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const CheckIcon = ({ color = 'text-black' }) => (
    <svg className={`w-5 h-5 ${color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

// High-quality feature icons
const FeatureIcon = ({ type }) => {
    const iconSyles = "w-4 h-4 text-black opacity-80 shrink-0";

    switch (type.toLowerCase()) {
        case 'engine':
        case 'simulation':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            );
        case 'revenue':
        case 'forecasting':
        case 'growth':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            );
        case 'risk':
        case 'scoring':
        case 'heatmap':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            );
        case 'comparison':
        case 'scenario':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            );
        case 'charts':
        case 'dashboards':
        case 'analysis':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            );
        case 'history':
        case 'time':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'ai':
        case 'recommendations':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            );
        case 'collaboration':
        case 'team':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case 'api':
        case 'access':
        case 'support':
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            );
        default:
            return (
                <svg className={iconSyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            );
    }
};

const getFeatureType = (text) => {
    const t = text.toLowerCase();
    if (t.includes('brain') || t.includes('engine') || t.includes('simulation')) return 'engine';
    if (t.includes('revenue') || t.includes('forecasting') || t.includes('growth')) return 'revenue';
    if (t.includes('risk') || t.includes('scoring') || t.includes('heatmap')) return 'risk';
    if (t.includes('comparison') || t.includes('scenario')) return 'comparison';
    if (t.includes('chart') || t.includes('analysis') || t.includes('dashboard')) return 'charts';
    if (t.includes('history') || t.includes('month')) return 'history';
    if (t.includes('ai') || t.includes('recomm')) return 'ai';
    if (t.includes('team') || t.includes('collab')) return 'collaboration';
    if (t.includes('api') || t.includes('access') || t.includes('support')) return 'api';
    return 'default';
};

const StarterPlanIcon = () => (
    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const AdvancedPlanIcon = () => (
    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const EnterprisePlanIcon = () => (
    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

export default function PricingCard({
    name,
    description,
    price,
    priceSymbol,
    billingCycle,
    buttonText,
    highlighted = false,
    features = [],
    isVisible = true,
    isRefreshing = false,
    delay = 0
}) {
    const getPlanIcon = () => {
        if (name === 'Starter') return <StarterPlanIcon />;
        if (name === 'Advanced') return <AdvancedPlanIcon />;
        if (name === 'Enterprise') return <EnterprisePlanIcon />;
        return null;
    };

    return (
        <div
            className={`group relative flex flex-col rounded-2xl p-[2px] bg-gradient-to-br from-sky-300 via-emerald-300 to-sky-300 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.2)] hover:-translate-y-4 transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className={`flex flex-col h-full w-full transition-opacity duration-300 ${isRefreshing ? 'opacity-90' : 'opacity-100'}`}>
                {/* Ambient Radiating Glow for Featured Plan */}
                {highlighted && (
                    <div Name="ambient-glow" className="absolute inset-0 -z-10 bg-sky-400 opacity-20 blur-[60px] group-hover:blur-[80px] transition-all duration-700 pointer-events-none" />
                )}

                {highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2d333f] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md uppercase tracking-[0.1em] z-20 whitespace-nowrap">
                        ⭐ Recommended
                    </div>
                )}
                <div className="flex flex-col p-8 bg-white rounded-[14px] relative overflow-hidden items-center text-center h-full">

                    <div className="mb-4 relative z-10 min-h-[110px] flex flex-col items-center justify-center">
                        <div className="flex items-center gap-3 mb-2">
                            {getPlanIcon()}
                            <h3 className="text-xl font-bold text-[#1a1f36]">{name}</h3>
                        </div>
                        <p className="text-sm text-[#4f566b] leading-relaxed px-4">{description}</p>
                    </div>

                    <div className="mb-6 flex items-baseline gap-1 relative z-10">
                        <span className="text-4xl font-extrabold text-[#1a1f36] tracking-tight">{priceSymbol}{price}</span>
                        <span className="text-[#697386] font-medium text-sm">/month</span>
                    </div>

                    <button className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-[#2d333f] text-white hover:bg-[#1a1f2b] shadow-md shadow-gray-100 hover:shadow-xl transition-all duration-300 mb-8 transform group-hover:scale-[1.02] relative z-10">
                        {buttonText}
                    </button>

                    <div className="w-full flex-grow flex flex-col relative z-10 text-left">
                        <div className="flex flex-col border-b border-gray-300 pb-4">
                            {features.map((section, idx) => (
                                <div key={idx} className="flex flex-col">
                                    {idx > 0 && <div className="h-px bg-gray-300 w-full my-6 opacity-60" />}

                                    <div className="flex flex-col gap-4">
                                        <div className={`flex items-center gap-2 py-2 px-3 rounded-lg border-x-2 ${section.title === 'Strategic Simulation Core'
                                            ? 'bg-gradient-to-r from-sky-400/5 via-sky-400/10 to-sky-400/5 border-[#00FF85]/20'
                                            : section.title === 'Intelligence Layer'
                                                ? 'bg-gradient-to-r from-blue-400/5 via-blue-400/10 to-blue-400/5 border-blue-400/20'
                                                : 'bg-gradient-to-r from-purple-400/5 via-purple-400/10 to-purple-400/5 border-purple-400/20'
                                            }`}>
                                            {section.title === 'Strategic Simulation Core' && <StrategyIcon />}
                                            {section.title === 'Intelligence Layer' && <IntelligenceIcon />}
                                            {section.title === 'Enterprise Strategy Suite' && <EnterpriseIcon />}
                                            <h4 className="text-xs font-bold text-[#1a1f36] uppercase tracking-widest">{section.title}</h4>
                                        </div>

                                        <ul className="flex flex-col gap-3.5 px-1">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-center gap-3 group/item">
                                                    <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100/50 flex items-center justify-center transition-colors group-hover/item:bg-white group-hover/item:border-gray-200">
                                                        <FeatureIcon type={getFeatureType(item.text)} />
                                                    </div>
                                                    <span className="text-[14px] text-[#4f566b] font-medium leading-tight">
                                                        {item.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
