import React, { useEffect, useState, useRef } from 'react';

const MetricItem = ({ value, label, prefix = '', suffix = '' }) => {
    const numericTarget = parseFloat(value.replace(/[^0-9.]/g, ''));
    // Start from 98% to make the animation extremely subtle as requested
    const startValue = Math.floor(numericTarget * 0.98);
    const [count, setCount] = useState(startValue);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const duration = 2500; // Smooth 2.5s duration

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const currentCount = Math.floor(startValue + (progress * (numericTarget - startValue)));
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(numericTarget);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasStarted, numericTarget, startValue]);

    const formattedCount = count.toLocaleString();

    return (
        <div ref={elementRef} className="flex flex-col items-center group">
            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tighter transition-all duration-500 group-hover:text-blue-400 font-['Manrope',sans-serif]">
                {prefix}{formattedCount}{suffix}+
            </div>
            <p className="text-[12px] lg:text-[14px] font-bold text-gray-400 text-center tracking-wide leading-snug max-w-[160px] font-['Manrope',sans-serif]">
                {label}
            </p>
        </div>
    );
};

export default function Metrics() {
    const metrics = [
        { value: '50000', label: 'business scenarios simulated' },
        { value: '12000', label: 'growing companies trust Stratify AI' },
        { value: '94', label: 'prediction accuracy rate', suffix: '%' },
        { value: '850', label: 'revenue impact modeled', prefix: '$', suffix: 'M' },
    ];

    return (
        <section className="bg-[#2d333f] border-y border-white/5 pt-6 pb-12 lg:pt-8 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Strategic Header - Centered Block with Left-Aligned Text */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-4 lg:gap-16 mb-8 lg:mb-12 w-full lg:w-fit mx-auto">
                    <div className="max-w-[280px]">
                        <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight font-['Outfit',sans-serif] tracking-tight">
                            Strategic Decision Intelligence
                        </h2>
                    </div>
                    <div className="max-w-[550px]">
                        <p className="text-[13px] md:text-base text-gray-300 font-medium leading-relaxed font-['Manrope',sans-serif]">
                            Stratify AI is the intelligence core that makes strategic decisions trustworthy—driving enterprise-wide performance through mission-critical simulation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-white/5 pt-6 lg:pt-8">
                    {metrics.map((metric, index) => (
                        <MetricItem
                            key={index}
                            value={metric.value}
                            label={metric.label}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
