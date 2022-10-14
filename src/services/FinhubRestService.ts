const finnHub = require('finnhub');
const {REACT_APP_FINHUB_API_KEY} = process.env

const api_key = finnHub.ApiClient.instance.authentications['api_key'];
api_key.apiKey =`${REACT_APP_FINHUB_API_KEY}` // Replace this
export const finnHubClient = new finnHub.DefaultApi()

// finhub.cryptoSymbols('BINANCE', (error: any, data: any, response: any) => {
//     console.log(data)
// });
//
// finhub.cryptoProfile('BTC', (error: any, data: any, response: any) => {
//     console.log(data);
// });
//
// finhub.forexExchanges((error: any, data: any, response: any) => {
//     console.log(data)
// });
//
// finhub.forexRates({"base": "USD"}, (error: any, data: any, response: any) => {
//     console.log(data)
// });
//
// finhub.marketNews("general", {}, (error: any, data: any, response: any) => {
//     console.log(data)
// });
//
// finhub.stockSymbols("US", (error: any, data: any, response: any) => {
//     console.log(data)
// });
