function convertToJson(response){
    return response.json();

}

// --> alg alg tab krenge jb different different coin ke liye alg alg api searsh krna pre.
// function showData(data){
//     const bitcoin_price_container = document.getElementById('bitcoin_price_container');
//     bitcoin_price_container.innerText = data.bitcoin.inr;
//     // console.log(data);
// }
// fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr').then(convertToJson).then(showData);

// function showDataEthereum(dataEthereum){
//     const ethereum_price_container = document.getElementById('ethereum_price_container');
//     ethereum_price_container.innerText = dataEthereum.ethereum.inr;
//     // console.log(dataEthereum);
// }
// fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr').then(convertToJson).then(showDataEthereum);

function showData(allCoinsData){
    console.log(allCoinsData);
    const bitcoin_price_container = document.getElementById('bitcoin_price_container');
    const ethereum_price_container = document.getElementById('ethereum_price_container');
    const cardano_price_container = document.getElementById('cardano_price_container');
    const doge_price_container = document.getElementById('doge_price_container');
    const helium_price_container = document.getElementById('helium_price_container');
    const litecoin_price_container = document.getElementById('litecoin_price_container');
    const solana_price_container = document.getElementById('solana_price_container');
    const stellar_price_container = document.getElementById('stellar_price_container');
    const tether_price_container = document.getElementById('tether_price_container');
    const binance_price_container = document.getElementById('binance_price_container'); 
    const polkadot_price_container = document.getElementById('polkadot_price_container');

    bitcoin_price_container.innerText = allCoinsData.bitcoin.inr;
    ethereum_price_container.innerText = allCoinsData.ethereum.inr;
    cardano_price_container.innerText = allCoinsData.cardano.inr;
    doge_price_container.innerText = allCoinsData.dogecoin.inr;
    helium_price_container.innerText = allCoinsData.helium.inr;
    litecoin_price_container.innerText = allCoinsData.litecoin.inr;
    solana_price_container.innerText = allCoinsData.solana.inr;
    stellar_price_container.innerText = allCoinsData.stellar.inr;
    tether_price_container.innerText = allCoinsData.tether.inr;
    binance_price_container.innerText = allCoinsData.binancecoin.inr;
    polkadot_price_container.innerText = allCoinsData.polkadot.inr;
   
}

// --> yeha ek hi api se hogaya h qki all ko , se seperate krke search kiye the isliye

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Chelium%2Csolana%2Clitecoin%2Ccardano%2Cstellar&vs_currencies=inr').then(convertToJson).then(showData);