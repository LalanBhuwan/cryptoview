Project - 
# cryptocurrency Website
-> Landing page(HOmepage)
-> Search functionaly(search input and list of all)
-> Detail Screen, Show some sort of price, history, chart or someting like that.

-> we will be hosting this. (Github Page, Netlify / Heroku).

API - Application Programing Interface.
--> An intergace using which two peices of software communicate with each other.(It can be server to browser, or even server to another server).

API - CoinGecko.

Chart library(www.chartjs.org)(chart.js -> get started -> chart.js CDN -> copy link) - https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js
chart cdn link -> https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js
---> { chart cdn link paste in html page before script tag  in script tag then paste js code in js and convas tag paste in html page (jaha chart dikhana hai).}

UNIX Timestamp -> The number of seconds since january 1st, 1970.
In JS, they save the number of milliseconds since jan 01, 1970.
1 second = 1000 milliseconds
 
ProjectName --> CryptoView
# CryptoView - A simple crypto data app



wireframing -> It is drawing a rough sketch of how the website is going to look. This is to get an idea about what sections of the page we will have.

colore palatte-->
https://coolors.co/palette/cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff

image-->
https://undraw.co/

#Detail Screen(page):-
-> Name
-> Current Price(INR and USD)
-> Description
-> Symbol
-> Image(Logo)
-> Market Capital
-> Last 2 weeks change

-> information API
https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false

-> price(Already)API
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur

-> 7 days market price Api
https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=7



--> Query parameter
http://www.youtube.com/watch?v=kfiorkdfj

Two parts:
http://127.0.0.1:5500/CryptoView/search.html?q=afdjffjrr

http://127.0.0.1:5500/CryptoView/search.html?q=abcd

1. When input is submitted. Submit the form and prepare the Query parameter.
2. when the page is loaded, check for query parameter and load that data.








string templating.

let name = "lalan";
console.log("Hi, I am" + name); // old method(string concatination)

console.log(`Hi, I am ${name}`); //(string templating)
