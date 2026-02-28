import React from 'react';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';
import { usePricing } from '../../hooks/usePricing';
import { formatPrice } from '../../utils/currencyFormatter';

export default function PricingSection() {
    const { billingCycle, currency, toggleBillingCycle, changeCurrency } = usePricing();
    const [isVisible, setIsVisible] = React.useState(false);
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        setIsRefreshing(true);
        const timer = setTimeout(() => setIsRefreshing(false), 200);
        return () => clearTimeout(timer);
    }, [billingCycle]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: "Starter",
            description: "For individual founders testing strategy decisions",
            buttonText: "Start Modeling",
            features: [
                {
                    title: "Strategic Simulation Core",
                    items: [
                        { text: "Strategy Simulation Engine" },
                        { text: "Revenue Forecasting" },
                        { text: "Risk Scoring" },
                        { text: "Scenario Comparison (Up to 2)" },
                        { text: "Interactive Charts" },
                        { text: "15 Simulations per Month" },
                        { text: "7-Day Scenario History" }
                    ]
                }
            ]
        },
        {
            name: "Advanced",
            description: "For growing startups and business teams",
            buttonText: "Upgrade Strategy",
            highlighted: true,
            features: [
                {
                    title: "Strategic Simulation Core",
                    items: [
                        { text: "Strategy Simulation Engine" },
                        { text: "Revenue Forecasting" },
                        { text: "Advanced Risk Scoring" },
                        { text: "Scenario Comparison (Up to 5)" },
                        { text: "Advanced Charts" },
                        { text: "100 Simulations per Month" },
                        { text: "30-Day Scenario History" }
                    ]
                },
                {
                    title: "Intelligence Layer",
                    items: [
                        { text: "Growth Probability Model" },
                        { text: "Dynamic Sensitivity Analysis" },
                        { text: "AI Strategy Summary Cards" },
                        { text: "Risk Heatmap" }
                    ]
                }
            ]
        },
        {
            name: "Enterprise",
            description: "For scaling companies and enterprises",
            buttonText: "Contact Sales",
            features: [
                {
                    title: "Strategic Simulation Core",
                    items: [
                        { text: "Strategy Simulation Engine" },
                        { text: "Revenue Forecasting" },
                        { text: "Advanced Risk Scoring" },
                        { text: "Unlimited Scenario Comparison" },
                        { text: "Advanced Dashboards" },
                        { text: "Unlimited Simulations" },
                        { text: "Unlimited Scenario History" }
                    ]
                },
                {
                    title: "Intelligence Layer",
                    items: [
                        { text: "Growth Probability Model" },
                        { text: "Advanced Sensitivity Analysis" },
                        { text: "AI Strategy Summary Cards" },
                        { text: "Risk Heatmap" }
                    ]
                },
                {
                    title: "Enterprise Strategy Suite",
                    items: [
                        { text: "AI Strategic Recommendations" },
                        { text: "Multi-Market Simulation" },
                        { text: "Team Collaboration" },
                        { text: "API Access" },
                        { text: "Dedicated Support" }
                    ]
                }
            ]
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden font-['Manrope',sans-serif]">
            {/* Ultra-Soft Ambient Haze Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-indigo-100/40 rounded-full blur-[160px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Corner Atmospheric Glows */}
            <div className="absolute top-0 left-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

            {/* Bottom Atmospheric Glows */}
            <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute bottom-0 right-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 relative z-30">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#1a1f36] mb-4 tracking-tight font-['Outfit',sans-serif]">
                            Model Every Business Decision With Confidence
                        </h2>
                        <p className="text-lg text-[#697386] max-w-2xl mx-auto">
                            Choose a plan that fits your current needs and scale when you're ready.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 py-4 px-8 rounded-3xl bg-gray-50/50 border border-gray-100/50 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] font-bold text-[#697386] uppercase tracking-[0.2em] opacity-60">Cycle</span>
                            <BillingToggle
                                billingCycle={billingCycle}
                                onToggle={toggleBillingCycle}
                            />
                        </div>

                        <div className="h-12 w-px bg-gray-200 hidden md:block" />

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] font-bold text-[#697386] uppercase tracking-[0.2em] opacity-60">Currency</span>
                            <CurrencySelector
                                currency={currency}
                                onCurrencyChange={changeCurrency}
                            />
                        </div>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div
                    ref={sectionRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-start pt-4 relative z-10"
                >
                    {plans.map((plan, index) => {
                        const { value, symbol } = formatPrice(plan.name, currency, billingCycle);
                        return (
                            <PricingCard
                                key={index}
                                {...plan}
                                price={value}
                                priceSymbol={symbol}
                                billingCycle={billingCycle}
                                isVisible={isVisible}
                                isRefreshing={isRefreshing}
                                delay={index * 150} // Staggered delay
                            />
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[#697386] text-sm italic">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
