const url = 'https://api.coinbase.com/v2/prices';
const conversionFormElem = document.querySelector('#conversion-form');
const convertFromElem = document.querySelector('#convert-from');
const convertCountElem = document.querySelector('#convert-count');
const convertToElem = document.querySelector('#convert-to');
const outputElem = document.querySelector('#output');

const convertCurrency = async () => {
  const response = await fetch(`${url}/${convertFromElem.value}-${convertToElem.value}/spot`);
  const jsonData = await response.json();
  outputElem.value = (jsonData.data.amount * convertCountElem.value).toFixed(2);
};

conversionFormElem.addEventListener('submit', (e) => {
  e.preventDefault();
  convertCurrency();
});