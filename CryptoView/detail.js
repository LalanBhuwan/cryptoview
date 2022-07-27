function convertToJson(response){
    return response.json();
}
function showInfo(data){
    // console.log(data);
    const coin_img = document.getElementById('coin_img');
    const coin_name = document.getElementById('coin_name');
    const coin_description = document.getElementById('coin_description');
    //DOM Manipulation
    coin_name.innerText = data.name;
    // -> innerText - convert everthing in plane text(agar link bhi hoga to same utha kr rkha dega ).
    // -> innerHTML - sirf text ko convert krta h plane text pr.
    coin_description.innerHTML = data.description.en;
    // console.log(data.image.large);
    //-> image or large key hai
    coin_img.src = data.image.large; // -> ye js se dynamical load ho rha h image(isliye html me src ko empty rkha hai)
    
}

function showPrice(data){
    // console.log(data);
    const inr_price = document.getElementById('inr_price');
    const usd_price = document.getElementById('usd_price');
    const eur_price = document.getElementById('eur_price');
    inr_price.innerText = data[coin_id].inr;
    usd_price.innerText = data[coin_id].usd;
    eur_price.innerText = data[coin_id].eur;
}

function showHistory(data){
    // console.log(data);
    showGraph(data);
}

var url         = new URL(window.location.href); 
var params      = new URLSearchParams(url.search); 
let coin_id  = params.get("coin");
console.log(coin_id);

// information ke liye API
fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`).then(convertToJson).then(showInfo);

//price 
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=inr%2Cusd%2Ceur`).then(convertToJson).then(showPrice);

//market price 7days
fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=inr&days=14&interval=daily`).then(convertToJson).then(showHistory);

function convertUnixToReadable(timestamp){
var date = new Date(timestamp);
var date_string = date.getDate();
var month_string = date.getMonth() + 1;
var year_string = date.getFullYear();
var readabel = date_string + '-' + month_string + '-' + year_string;
return readabel;
}


function showGraph(history_data){
    // console.log(history_data.prices);
    let labels = [];
    let prices = [];
    for(let i = 0; i < history_data.prices.length; i += 1){
        const single_price = history_data.prices[i];
        // console.log(single_price);
        const readabel_label = convertUnixToReadable(single_price[0]);
        labels.push(readabel_label);
        prices.push(single_price[1]);
        
    }
    console.log(labels);
    console.log(prices);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Price (in INR)',
            data: prices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                // grid:{
                //     display:false,
                // }

            },
            // x: {
            //     grid: {
            //         display: false,
            //     }
            // }

        }
    }
    });
}


