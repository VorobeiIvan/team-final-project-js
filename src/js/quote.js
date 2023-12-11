import { fetchQuote } from './api.js';

const divQuote = document.getElementById('result-quote');
const getQuoteButton = document.getElementById('quote');


getQuoteButton.addEventListener('click', async () => {
  const data = await fetchQuote();
  divQuote.innerHTML = JSON.stringify(data);
});