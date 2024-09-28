const yahooFinance = require('yahoo-finance2').default;

async function getStockData(symbol, dob) {
    const endDate = new Date();
    const startDate = new Date(dob);

    try {
        const data = await yahooFinance.chart(symbol, {
            period1: startDate.toISOString().split('T')[0],
            period2: endDate.toISOString().split('T')[0],
            interval: '1d'
        });
        return data;
    } catch (error) {
        throw new Error('Failed to fetch stock data');
    }
}

module.exports = { getStockData };
