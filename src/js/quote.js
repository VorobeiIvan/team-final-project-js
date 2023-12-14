import { fetchQuote } from './api';
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

export const createQuoteMarkup = async () => {
  const quoteTextRef = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');

  const data = await getQuote();

  quoteTextRef.textContent = data.quote;
  quoteAuthor.textContent = data.author;
};
