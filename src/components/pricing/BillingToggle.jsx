import React from 'react';

export default function BillingToggle({ billingCycle, onToggle }) {
    return (
        <div className="flex p-1.5 bg-[#f3f4f6] rounded-full w-fit">
            <button
                onClick={() => billingCycle !== 'yearly' && onToggle()}
                className={`flex items-center gap-4 px-12 py-2.5 rounded-full transition-all duration-300 ${billingCycle === 'yearly'
                    ? 'bg-[#1a1f36] text-white shadow-lg'
                    : 'text-[#4f566b] hover:text-[#1a1f36]'
                    }`}
            >
                <span className="text-sm font-bold">Pay Yearly</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${billingCycle === 'yearly' ? 'bg-white/10 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                    -20%
                </span>
            </button>

            <button
                onClick={() => billingCycle !== 'monthly' && onToggle()}
                className={`px-14 py-2.5 rounded-full transition-all duration-300 ${billingCycle === 'monthly'
                    ? 'bg-white text-[#1a1f36] shadow-sm'
                    : 'text-[#4f566b] hover:text-[#1a1f36]'
                    }`}
            >
                <span className="text-sm font-bold">Pay Monthly</span>
            </button>
        </div>
    );
}
