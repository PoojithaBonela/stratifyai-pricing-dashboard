import { useState } from 'react';

export default function usePricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    return { billingCycle, setBillingCycle };
}
