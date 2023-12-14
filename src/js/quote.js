import { fetchQuote } from './api';
import { createQuoteMarkup } from './templates/createQuoteMarkup';
import { formatDate } from './utils';

const QUOTE_DATA = 'quoteData';
const DAY = new Date();

const getQuote = async () => {
  let data = JSON.parse(localStorage.getItem(QUOTE_DATA));

  if (!data || data.date !== DAY) {
    data = await fetchQuote();

    localStorage.setItem(
      QUOTE_DATA,
      JSON.stringify({ date: formatDate(DAY), ...data })
    );
  }

  return data;
};

export const getQuoteMarkup = async () => {
  const quoteRef = document.querySelector('.quote-title-wrap');

  const data = await getQuote();

  quoteRef.insertAdjacentHTML('beforeend', createQuoteMarkup(data));
};
