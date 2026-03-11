async function convert() {

const amount = document.getElementById("amount").value;
const from = document.getElementById("fromCurrency").value;
const to = document.getElementById("toCurrency").value;

const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

const response = await fetch(url);
const data = await response.json();

const rate = data.rates[to];
const result = amount * rate;

document.getElementById("result").innerText =
amount + " " + from + " = " + result.toFixed(2) + " " + to;

}
