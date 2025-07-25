### Currency Converter CLI

- This is a modularized Node.js CLI application for converting currencies using real-time exchange rates.

Features

Fetches real-time exchange rates from the ExchangeRate API.

Converts amounts from USD to a target currency.

Interactive CLI for user input.

Modular structure for better readability, reusability, and scalability.

Prerequisites

Node.js (v14 or later)

Installation

Clone the repository:
```
git clone https://github.com/your-username/currency-converter-cli.git
cd currency-converter-cli
````
Install dependencies (if any):

npm install

File Structure

```
Currency-convert/
├── index.js               # Entry point
├── api.js                 # Handles API requests
├── converter.js           # Conversion logic
├── prompt.js              # CLI interaction
└── config.js              # API key and constants
```
---
Usage

Run the application:

node index.js

Follow the prompts to enter the amount in USD and the target currency (e.g., INR, EUR).

Example
```
Enter the amount in USD: 100
Enter the target currency (e.g. INR, EUR): INR
100 USD is approximately 7500.00 INR
```
Benefits of Modularization

Readability: Each file has a clear purpose.

Reusability: You can reuse convertCurrency or fetchRates in other projects.

Testability: Easier to write unit tests for individual modules.

Scalability: Add features like reverse conversion or history logging without cluttering the main logic.

License

This project is licensed under the MIT License.

Would you like to contribute or suggest additional features? Feel free to open an issue or submit a pull request!