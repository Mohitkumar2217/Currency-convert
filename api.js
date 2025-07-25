// api.js
import https from 'https';
import { BASE_URL } from './config.js';

export const fetchRates = () => {
    return new Promise((resolve, reject) => {
        https.get(BASE_URL, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve(parsed.conversion_rates);
                } catch (err) {
                    reject('Failed to parse exchange rates');
                }
            });
        }).on('error', reject);
    });
};