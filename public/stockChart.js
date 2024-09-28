// Stock market data
const stockData = [
    {
        date: "2024-09-25T13:30:00.000Z",
        open: 125.86,
        close: 125.86
    },
    {
        date: "2024-09-26T13:30:00.000Z",
        open: 126.75,
        close: 126.75
    },

];


const companyName = "STFGX";
const dob = "05-12-1998"; // Example DOB, could be replaced dynamically with auntho information
const currentPrice = stockData[stockData.length - 1].close;
const dobPrice = stockData[0].open;

const sharesOriginallyOwned = 1000 / dobPrice;
const currentValue = sharesOriginallyOwned * currentPrice;

document.getElementById("companyName").textContent = companyName;
document.getElementById("dob").textContent = new Date(dob).toLocaleDateString();
document.getElementById("price").textContent = `$${currentValue.toFixed(2)}`;


const dates = stockData.map(item => new Date(item.date).toLocaleDateString());
const openPrices = stockData.map(item => item.open);
const closePrices = stockData.map(item => item.close);


const ctx = document.getElementById('stockChart').getContext('2d');
const stockChart = new Chart(ctx, {
    type: 'line', // Line chart
    data: {
        labels: dates, // Dates for the x-axis
        datasets: [
            {
                label: 'Open Price',
                data: openPrices,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
            {
                label: 'Close Price',
                data: closePrices,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price'
                }
            }
        }
    }
});
