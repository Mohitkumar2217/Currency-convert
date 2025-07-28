// index.js
import { fetchRates } from './api.js';

import { convertCurrency } from './converter.js';

import { askQuestion, closePrompt } from './prompt.js';



const startConversion = async () => {
    try {
        const rates = await fetchRates();
        while (true) {
            const amountStr = await askQuestion('Enter the amount in USD: ');
            const currency = await askQuestion('Enter the target currency (e.g. INR, EUR): ');
            const amount = parseFloat(amountStr);
            const rate = rates[currency.toUpperCase()];

            if (!rate || isNaN(amount)) {
                console.log('Invalid input. Try again.\n');
                continue;
            }

            const result = convertCurrency(amount, rate);
            console.log(`${amount} USD is approximately ${result} ${currency.toUpperCase()}\n`);
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        closePrompt();
    }
};

startConversion();