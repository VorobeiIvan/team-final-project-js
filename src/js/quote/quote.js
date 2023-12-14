import { fetchQuote } from '../api';
import { formatDate } from '../utils';
import getQuoteMarkup from './template';

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

export const createQuoteMarkup = async () => {
  const quoteRef = document.getElementById('js-quote');

  const data = await getQuote();

  quoteRef.insertAdjacentHTML('beforeend', getQuoteMarkup(data));
};
