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
            <div className="text-4xl md:text-5xl font-bold text-[#2d333f] mb-2 tracking-tight transition-transform group-hover:scale-105 duration-300">
                {prefix}{formattedCount}{suffix}+
            </div>
            <p className="text-xs md:text-sm font-normal text-[#697386] text-center lowercase tracking-normal leading-relaxed max-w-[180px]">
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
        <section className="bg-white border-y border-gray-100 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
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
