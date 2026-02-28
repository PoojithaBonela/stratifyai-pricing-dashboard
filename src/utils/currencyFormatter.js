export const formatPrice = (basePrice, currency) => {
    const symbols = { INR: '₹', USD: '$', EUR: '€' };
    const symbol = symbols[currency] || '$';

    let value = basePrice;

    // Dynamic conversion from base INR relative currency
    if (currency === 'USD') {
        value = Math.ceil(basePrice / 83);
    } else if (currency === 'EUR') {
        value = Math.ceil(basePrice / 90);
    }

    return {
        symbol,
        value: value.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-US'),
        display: `${symbol}${value.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-US')}`
    };
};
