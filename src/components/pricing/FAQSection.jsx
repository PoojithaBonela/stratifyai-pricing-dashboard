import React, { useState, useEffect, useRef } from 'react';

const faqData = [
    {
        question: "1. What’s included in each pricing plan?",
        answer: "Each plan includes access to Stratify AI’s core strategy simulation tools. Advanced and Enterprise plans unlock higher simulation limits, AI-powered recommendations, deeper forecasting models, and collaboration features."
    },
    {
        question: "2. Can I switch plans later?",
        answer: "Yes. You can upgrade or downgrade your subscription at any time. Upgrades take effect immediately, and downgrades apply at the end of your billing cycle."
    },
    {
        question: "3. Is there a discount for yearly billing?",
        answer: "Yes. Yearly billing offers up to 20% savings compared to monthly plans. You can toggle between monthly and yearly pricing at the top of the pricing page."
    },
    {
        question: "4. Do you offer a free trial?",
        answer: "Yes. The Advanced plan includes a limited free trial so you can explore AI recommendations and forecasting features before subscribing."
    },
    {
        question: "5. What happens if I exceed my simulation limits?",
        answer: "If you reach your monthly simulation limit, you can upgrade your plan to continue running scenarios or wait until your next billing cycle."
    },
    {
        question: "6. Which plan is best for startups?",
        answer: "The Advanced plan is ideal for growing startups and teams that need AI recommendations, deeper forecasting, and higher scenario limits."
    },
    {
        question: "7. Is Enterprise pricing fixed?",
        answer: "Enterprise pricing is customized based on usage, team size, and integration requirements. Contact our sales team for a tailored quote."
    },
    {
        question: "8. What payment methods do you accept?",
        answer: "We accept major credit and debit cards. Enterprise customers may request invoicing options."
    },
    {
        question: "9. Can I cancel anytime?",
        answer: "Yes. You can cancel your subscription at any time. Your access will remain active until the end of your billing period."
    },
    {
        question: "10. Are taxes included in the listed price?",
        answer: "Displayed prices exclude applicable taxes. Final pricing may vary based on your region."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className={`w-full text-left py-4 px-4 md:px-6 flex items-center justify-between transition-colors duration-200 hover:bg-purple-50/30 group ${isOpen ? 'bg-purple-50/20' : ''}`}
                onClick={onClick}
            >
                <span className={`text-base md:text-lg font-semibold font-['Outfit',sans-serif] ${isOpen ? 'text-indigo-600' : 'text-gray-900'} group-hover:text-indigo-600 transition-colors`}>
                    {question}
                </span>
                <svg
                    className={`w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 px-4 md:px-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-['Manrope',sans-serif]">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
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
        <section ref={sectionRef} className="relative bg-white py-16 md:py-20 overflow-hidden">
            {/* Background Corner Gradients - Matching Pricing Section */}
            <div className="absolute top-0 left-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute bottom-0 right-0 w-[900px] h-[700px] bg-sky-400 opacity-[0.15] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

            <div className={`relative max-w-3xl mx-auto px-6 transition-all duration-[1000ms] ease-out transform z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight font-['Outfit',sans-serif]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 font-medium font-['Manrope',sans-serif]">
                        Everything you need to know about plans, billing, and subscriptions.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
