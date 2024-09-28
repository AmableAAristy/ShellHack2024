const yahooFinance = require('yahoo-finance2').default;

// https://github.com/gadicc/node-yahoo-finance2/blob/a45c6f2887f7c85bc044fab6b34c2a393a2930ae/docs/modules/chart.md
async function getData() {
    try {

        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);


        const data = await yahooFinance.chart('STFGX', {
            period1: startDate.toISOString().split('T')[0],
            period2: endDate.toISOString().split('T')[0],
            interval: '1d'
        });

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to get past week data
getData();