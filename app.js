const express = require('express');
const path = require('path');
const stockDataRoute = require('./routes/stockData');

const app = express();
const port = 3000;

// Serve static files like financialLiteracy.html
app.use(express.static(path.join(__dirname, 'public')));


app.use('/stockdata', stockDataRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
