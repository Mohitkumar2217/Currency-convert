// prompt.js
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
};

export const closePrompt = () => rl.close();