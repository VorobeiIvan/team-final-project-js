import { fetchQuote } from './api.js';
import refs from './refs.js';

refs.getQuoteButton.addEventListener('click', async () => {
  const data = await fetchQuote();
  refs.divQuote.innerHTML = JSON.stringify(data);
});