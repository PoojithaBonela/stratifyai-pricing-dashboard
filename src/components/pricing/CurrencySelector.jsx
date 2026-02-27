import React, { useState, useRef, useEffect } from 'react';

export default function CurrencySelector({ currency, onCurrencyChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currencies = [
        { code: 'USD', symbol: '$', label: 'US Dollar' },
        { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
        { code: 'EUR', symbol: '€', label: 'Euro' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selected = currencies.find(c => c.code === currency) || currencies[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-5 py-2.5 bg-white border border-[#e3e8ee] rounded-xl shadow-sm hover:border-blue-400 transition-all duration-200 focus:outline-none"
            >
                <span className="text-xl font-bold text-blue-600">{selected.symbol}</span>
                <span className="text-sm font-bold text-[#1a1f36]">{selected.code}</span>
                <svg
                    className={`w-4 h-4 text-[#697386] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-[#e3e8ee] rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {currencies.map((c) => (
                        <button
                            key={c.code}
                            onClick={() => {
                                onCurrencyChange(c.code);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${currency === c.code
                                    ? 'bg-blue-50 text-blue-600 font-bold'
                                    : 'text-[#4f566b] hover:bg-gray-50'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-bold">{c.symbol}</span>
                                <span>{c.code}</span>
                            </div>
                            {currency === c.code && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
