async function fetchStockData() {
     const symbol = 'VOO'; // Example symbol
     const dob = '2023-08-25';


    //
    const url = `/stockdata/${symbol}/${dob}`;

    // Fix Bug
    console.log('Fetching data from URL:', url);

    
        
    try {

        const response = await fetch(url);


        console.log('Fetching data from URL:', url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Log the received data for debugging
        console.log('Received data:', data);


        const stockData = data.quotes.map(quote => ({
            date: new Date(quote.date).toLocaleDateString(),
            open: quote.open,
            close: quote.close
        }));


        const dobPrice = stockData[0].open;
        const currentPrice = stockData[stockData.length - 1].close;
        const sharesOriginallyOwned = 1000 / dobPrice;
        const currentValue = sharesOriginallyOwned * currentPrice;

        document.getElementById("companyName").textContent = symbol;
        document.getElementById("dob").textContent = new Date(dob).toLocaleDateString();
        document.getElementById("price").textContent = `$${currentValue.toFixed(2)}`;


        const dates = stockData.map(item => item.date);
        const openPrices = stockData.map(item => item.open);
        const closePrices = stockData.map(item => item.close);

        const ctx = document.getElementById('stockChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Open Price',
                        data: openPrices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: false
                    },
                    {
                        label: 'Close Price',
                        data: closePrices,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: { title: { display: true, text: 'Date' } },
                    y: { title: { display: true, text: 'Price' } }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

// Fetch and display the data when the page loads
document.addEventListener('DOMContentLoaded', fetchStockData);
