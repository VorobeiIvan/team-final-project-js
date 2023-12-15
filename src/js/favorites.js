import storageApi from '../common/storage';
import svgSprite from "../img/sprite.svg";
import { fetchExercises } from './api.js';
import refs from './refs.js';

const favoritesListKey = 'favorites-list';


// const favoritesList = storageApi.load(favoritesListKey);
const favoritesList = ["64f389465ae26083f39b17a2", "64f389465ae26083f39b17a7", "64f389465ae26083f39b17a3"];

const exercisesList = await fetchExercises({
  // page: 1,
  // perPage: 10,
  // filter: curFilter,
});


console.log(exercisesList);

const favoritesFilter = exercisesList?.results?.filter( ( item )=>{

  const id = item['_id'];

  if (favoritesList.includes(id)) {
    return true;
  }
  return false;

} )

console.log(favoritesFilter);

console.log(data);
console.log(favoritesList);



async function renderFavorites() {
  try {
    const favoritesList = storageApi.load(favoritesListKey) || [];

    if (favoritesList.length === 0) {
      renderEmptyFavorites();
    } else {
      const exercisesList = await fetchExercises();
      renderFavoriteExercises(exercisesList.results, favoritesList);
    }
  } catch (error) {
    console.error('Error rendering favorites:', error.message);
  }
}

function renderEmptyFavorites() {
  const favoritesListWrapper = document.querySelector('.favorites-list-wrapper');
  const favoritesNotification = document.querySelector('.favorites-list-notification');

  favoritesNotification.classList.remove('is-hidden');
  favoritesListWrapper.innerHTML = '';
}

function renderFavoriteExercises(exercises, favoritesList) {
  const favoritesListWrapper = document.querySelector('.favorites-list-wrapper');
  const favoritesListContainer = document.querySelector('.favorites-list');

  favoritesListContainer.innerHTML = '';

  exercises.forEach(exercise => {
    if (favoritesList.includes(exercise._id)) {
      const exerciseItem = createFavoriteExerciseItem(exercise);
      favoritesListContainer.appendChild(exerciseItem);
    }
  });

  favoritesListWrapper.classList.remove('is-hidden');
}

function createFavoriteExerciseItem(exercise) {
  const exerciseItem = document.createElement('li');
  exerciseItem.className = 'favorites-list-item';

  exerciseItem.innerHTML = `
    <div class="favorites-list-item-nav">
      <button type="button" class="remove-favorite-button" data-exercise-id="${exercise._id}">
        Remove
      </button>
    </div>
    <h3 class="favorites-list-item-title">${exercise.name}</h3>
    <div class="favorites-list-item">
      <div class="exercise-item-wrapper">
        <div class="exercise-item-firth-wrapper">
          <p class="exercise-item-workout">WORKOUT</p>
          <p class="exercise-item-rating">Favorite</p>
          <svg class="exercise-item-trash" width="18" height="18">
            <use href="${svgSprite}#trash"></use>
          </svg>
        </div>
        <div class="exercise-item-second-wrapper">
          <div class="exercise-item-run-box">
            <svg class="exercise-item-run" width="16" height="16">
              <use href="${svgSprite}#run"></use>
            </svg>
          </div>
          <h3 class="exercise-item-subtitle">${exercise.name}</h3>
        </div>
        <ul class="exercise-item-list">
          <li class="exercise-item-list-information">
            <p class="information-text">
              Burned calories:<span class="information-text-span">${exercise.burnedCalories} / ${exercise.time} min</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Body part:<span class="information-text-span">${exercise.bodyPart}</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Target:<span class="information-text-span">${exercise.target}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  `;

  return exerciseItem;
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', async e => {
    if (e.target.classList.contains('remove-favorite-button')) {
      const exerciseId = e.target.getAttribute('data-exercise-id');
      await removeFavoriteExercise(exerciseId);
      renderFavorites();
    }
  });

  renderFavorites();
});

async function removeFavoriteExercise(exerciseId) {
  try {
    const favoritesList = storageApi.load(favoritesListKey) || [];
    const updatedFavorites = favoritesList.filter(id => id !== exerciseId);
    storageApi.save(favoritesListKey, updatedFavorites);
    console.log(`Exercise with ID ${exerciseId} removed from favorites.`);
  } catch (error) {
    console.error('Error removing favorite exercise:', error.message);
  }
}
