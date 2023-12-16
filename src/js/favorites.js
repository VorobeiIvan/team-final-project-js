import storageApi from './common/storage.js';
import svgSprite from '../images/sprite.svg';
import { fetchExercises } from './api.js';
import refs from './refs.js';

const favoritesListKey = refs.FAVORITES_KEY;

// Оновлена функція renderFavorites
async function renderFavorites() {
  const favoritesList = storageApi.load(favoritesListKey) || [];
  const favoritesListWrapper = document.querySelector('.favorites-exercise-list');
  const favoritesNotification = document.querySelector('.favorites-list-notification');

  if (favoritesList.length === 0) {
    favoritesNotification.classList.remove('is-hidden');
    favoritesListWrapper.innerHTML = '';
  } else {
    const exercisesList = await fetchExercises();
    renderFavoriteExercises(exercisesList.results, favoritesList);
    favoritesNotification.classList.add('is-hidden');
  }
}

function renderFavoriteExercises(exercises, favoritesList) {
  const favoritesListWrapper = document.querySelector('.favorites-exercise-list');

  favoritesListWrapper.innerHTML = '';

  exercises.forEach(exercise => {
    favoritesList.forEach(favorite => {
      if (favorite.id === exercise._id) {
        const exerciseItem = createFavoriteExerciseItem(exercise);
        favoritesListWrapper.appendChild(exerciseItem);
      }
    });
  });

  favoritesListWrapper.classList.remove('is-hidden');
}

// Змінено функцію createFavoriteExerciseItem, яка створює картку вправи на сторінці Favorites
function createFavoriteExerciseItem(exercise) {
  const { _id, name, burnedCalories, time, bodyPart, target } = exercise;
  const exerciseItem = document.createElement('li');
  exerciseItem.className = 'exercise-item';
  exerciseItem.id = `${_id}`;

  exerciseItem.innerHTML = `
    <!-- Ваша розмітка для кожної улюбленої вправи ось тут -->
    <!-- Зверніть увагу на дані exercise (назва, категорія і т. д.), які ви можете використовувати -->

    <button
      class="exercise-item-button-delete"
      type="button"
      data-exercise-id="${_id}"
      aria-label="icon trash"
    >
      <svg class="exercise-item-trash-icon" width="16" height="16">
        <use href="${svgSprite}#trash"></use>
      </svg>
    </button>

    <!-- Додайте інші елементи, які вам потрібні для відображення вправи -->

    <button
      class="exercise-item-button"
      type="button"
      aria-label="icon arrow right"
    >
      Start&nbsp;&nbsp;
      <svg class="exercise-item-arrow" width="16" height="16">
        <use href="${svgSprite}#arrow-right"></use>
      </svg>
    </button>
  `;

  return exerciseItem;
}

document.addEventListener('DOMContentLoaded', renderFavorites);

document.addEventListener('click', e => {
  if (e.target.classList.contains('exercise-item-button-delete')) {
    const exerciseId = e.target.getAttribute('data-exercise-id');
    removeFavoriteExercise(exerciseId);
  }
});

function removeFavoriteExercise(exerciseId) {
  const favoritesList = storageApi.load(favoritesListKey) || [];
  const updatedFavorites = favoritesList.filter(favorite => favorite.id !== exerciseId);
  storageApi.save(refs.FAVORITES_KEY, updatedFavorites);

  renderFavorites();
}