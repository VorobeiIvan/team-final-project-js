export default {
  //ці змінні як приклад для подальшого використання
  divQuote: document.getElementById('result-quote'),
  getQuoteButton: document.getElementById('quote'),
  divCategories: document.getElementById('categories'),
  filtersRef: document.getElementById('filters'),
  divExercises: document.getElementById('exercises'),
  footerForm: document.querySelectorAll('.footer-form'),
  exSearch: document.getElementById('exercises-search'),
  divExSearch: document.getElementById('search-wrapper'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.backdrop'),
  modalContainer: document.querySelector('.modal-container'),
  addFavorite: document.querySelector('.add-to-favorites'),
  giveRating: document.querySelector('.give-a-rating'),
  FAVORITES_KEY: 'favorites-list',
  favorites: document.querySelector('.favorites-list'),
};
