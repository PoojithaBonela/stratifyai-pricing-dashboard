import { useState } from 'react';

export const usePricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
    const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'

    const toggleBillingCycle = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };

    const changeCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    return {
        billingCycle,
        currency,
        toggleBillingCycle,
        changeCurrency
    };
};
