import { fetchQuote } from './api';
import { createQuoteMarkup } from './templates/createQuoteMarkup';
import { formatDate } from './utils';

const QUOTE_DATA = 'quoteData';
const DAY = formatDate(new Date());
const quoteRef = document.querySelector('.quote-title-wrap');

const getQuote = (async () => {
  let data = JSON.parse(localStorage.getItem(QUOTE_DATA));
  if (!data || data.date !== DAY) {
    data = await fetchQuote();

    localStorage.setItem(QUOTE_DATA, JSON.stringify({ date: DAY, ...data }));
  }
  quoteRef.insertAdjacentHTML('beforeend', createQuoteMarkup(data));
})();
