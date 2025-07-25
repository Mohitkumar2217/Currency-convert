// converter.js
export const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};