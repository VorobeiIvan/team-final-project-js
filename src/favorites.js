import './js/header.js';
import './js/burger-menu.js';
import './js/quote.js';

// Припустимо, що у вас є об'єкт для зберігання збережених вправ в localStorage
const savedExercises = JSON.parse(localStorage.getItem('savedExercises')) || [];

// Отримати елемент, в якому ви хочете відображати збережені вправи
const favoritesList = document.querySelector('.favorites-list .js-list');

// Функція для рендерингу збережених вправ
function renderSavedExercises() {
  // Очистити попередні вміст
  favoritesList.innerHTML = '';

  // Перевірка, чи є збережені вправи
  if (savedExercises.length === 0) {
    // Відображення повідомлення про відсутність збережених вправ
    const notification = document.querySelector('.favorites-list-notification');
    notification.style.display = 'block';
  } else {
    // Сховати повідомлення, якщо вправи є
    const notification = document.querySelector('.favorites-list-notification');
    notification.style.display = 'none';

    // Пройтися по збережених вправах і додати їх в список
    savedExercises.forEach(exercise => {
      const exerciseItem = createExerciseItem(exercise);
      favoritesList.appendChild(exerciseItem);
    });
  }
}

// Функція для створення DOM-елементу вправи
function createExerciseItem(exercise) {
  const listItem = document.createElement('li');
  listItem.classList.add('favorites-list-item');

  const navElement = document.createElement('div');
  navElement.classList.add('favorites-list-item-nav');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('favorites-list-item-title');
  titleElement.textContent = exercise.name; // Припустимо, що у вправи є властивість "name"

  const otherDetailsElement = document.createElement('div');
  otherDetailsElement.classList.add('favorites-list-item-other-details');
  // Додайте інші деталі вправи в цей елемент

  listItem.appendChild(navElement);
  listItem.appendChild(titleElement);
  listItem.appendChild(otherDetailsElement);

  return listItem;
}

// Викликати функцію для рендерингу при завантаженні сторінки
window.addEventListener('load', renderSavedExercises);
