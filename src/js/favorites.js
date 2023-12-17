import svgSprite from '../images/sprite.svg';
import storageApi from './common/storage.js';
import refs from './refs.js';
import { FAVORITES_KEY } from './consts.js';

const favoritesNotification = document.querySelector('.favorites-list-notification');

const onRemove = (e) => {
  const id = e.target.getAttribute('data-exercise-id');
  const favoritesList = storageApi.load(FAVORITES_KEY);
  storageApi.save(FAVORITES_KEY, favoritesList.filter(el => el._id !== id));
};

export async function renderFavorites() {
  const favoritesList = storageApi.load(FAVORITES_KEY) || [];
  const favoritesListWrapper = refs.favorites;
  const favoritesNotification = document.querySelector(
    '.favorites-list-notification',
  );
  if (!favoritesNotification) {
    return
  }

  if (favoritesList.length === 0 && favoritesNotification) {
     if (favoritesNotification.classList.contains('is-hidden')) {
       favoritesNotification.classList.remove('is-hidden');
      }
      favoritesListWrapper.innerHTML = '';
  } else {
    renderFavoriteExercises(favoritesList);

    document.querySelectorAll('.exercise-item-button-delete').forEach((el) => {
      el.addEventListener('click', onRemove);
    });
  }
}

renderFavorites();

function renderFavoriteExercises(exercises) {
  const favoritesListContainer = document.querySelector(
    '.favorites-exercise-list',
  );
  if (!favoritesListContainer) {
    return;
  }
  favoritesListContainer.innerHTML = '';
  exercises.forEach(exercise => {
    const exerciseItem = createFavoriteExerciseItem(exercise);
    favoritesListContainer.appendChild(exerciseItem);
  });

  favoritesNotification.classList.add('is-hidden');
}

function createFavoriteExerciseItem(exercise) {
  const { _id, name, burnedCalories, time, bodyPart, target } = exercise;
  const exerciseItem = document.createElement('li');
  exerciseItem.className = 'exercise-item';
  exerciseItem.id = `${_id}`;

  exerciseItem.innerHTML = `
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${_id}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${svgSprite}#trash'></use>
          </svg>
        </button>

        <button id='${_id}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${svgSprite}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${svgSprite}#run'></use>
          </svg>
        </div>
        <h3 class='exercise-item-subtitle'>${name}</h3>
      </div>
      <ul class='exercise-item-list'>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Burned calories:<span class='information-text-span'>${burnedCalories} / ${time} min</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Body part:<span class='information-text-span'>${bodyPart}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${target}</span>
          </p>
        </li>
      </ul>
    </div>
  `;

  return exerciseItem;
}

document.addEventListener('DOMContentLoaded', renderFavorites);

document.addEventListener('click', e => {
  if (e.target.classList.contains('exercise-item-button-delete')) {
    const exerciseId = e.target.getAttribute('data-exercise-id');
    removeFavoriteExercise(exerciseId);
  }
  const updatedFavorites = storageApi.load(FAVORITES_KEY) || [];

  if (updatedFavorites.length === 0 && favoritesNotification) {
    if (favoritesNotification.classList.contains('is-hidden')) {
      favoritesNotification.classList.remove('is-hidden');
    }   
  }

});

function removeFavoriteExercise(exerciseId) {
  const favoritesList = storageApi.load(FAVORITES_KEY) || [];
  const updatedFavorites = favoritesList.filter(id => id !== exerciseId);
  storageApi.save(FAVORITES_KEY, updatedFavorites);

  renderFavorites();
}
