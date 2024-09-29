const express = require('express');
const path = require('path');
const stockDataRoute = require('./routes/stockData');
const geminiRoute = require('./routes/geminiroute');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use('/stockdata', stockDataRoute);


app.use(express.json());

app.use('/', geminiRoute);  



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


