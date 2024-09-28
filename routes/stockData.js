const express = require('express');
const router = express.Router();
const { getStockData } = require('../yFinance'); // Import the logic from yFinance.js

router.get('/:symbol/:dob', async (req, res) => {
    console.log(`Request received for symbol: ${req.params.symbol}, dob: ${req.params.dob}`);
    const symbol = req.params.symbol;
    const dob = req.params.dob;

    try {
        const data = await getStockData(symbol, dob);
        res.json(data);  // Return stock data as JSON to the client
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

module.exports = router;