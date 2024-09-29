const express = require('express');
const router = express.Router();
const { run } = require('../gemini/jorge.js');

router.post('/gemini', async (req, res) => {
    const { prompt } = req.body; 

    try {
        const data = await run("", prompt);  
        res.json(data);
        
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Error generating content' });
    }
});

module.exports = router;