import React, { useEffect, useState, useRef } from 'react';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
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

    return (
        <section ref={sectionRef} className="bg-[#2d333f] border-t border-white/5 py-12 md:py-16 overflow-hidden relative">
            <div className={`max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10 transition-all duration-[1500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    {/* Left Side: Headline */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight font-['Outfit',sans-serif]">
                            Start your free trial
                        </h2>
                    </div>

                    {/* Right Side: Info + Button (Right Aligned) */}
                    <div className="flex flex-col items-start md:items-start gap-5 max-w-[320px]">
                        <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed font-['Manrope',sans-serif]">
                            Get a full-featured 7-day trial with guided sample data (or your own).
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer font-['Outfit',sans-serif] tracking-tight">
                            Try free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
