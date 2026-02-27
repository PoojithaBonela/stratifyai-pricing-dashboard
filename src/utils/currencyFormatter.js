export const formatPrice = (amount, currency, billingCycle) => {
    const prices = {
        INR: {
            monthly: {
                Starter: 1499,
                Advanced: 4999,
                Enterprise: 12999
            },
            yearly: {
                Starter: 1199,
                Advanced: 3999,
                Enterprise: 10399
            }
        },
        USD: {
            monthly: { Starter: 19, Advanced: 59, Enterprise: 149 },
            yearly: { Starter: 15, Advanced: 47, Enterprise: 119 }
        },
        EUR: {
            monthly: { Starter: 18, Advanced: 55, Enterprise: 139 },
            yearly: { Starter: 17, Advanced: 44, Enterprise: 111 }
        }
    };

    const symbols = { INR: '₹', USD: '$', EUR: '€' };
    const symbol = symbols[currency] || '$';
    const value = prices[currency][billingCycle][amount] || amount;

    return {
        symbol,
        value: value.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-US'),
        display: `${symbol}${value.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-US')}`
    };
};
