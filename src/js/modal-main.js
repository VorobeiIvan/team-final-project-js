import svgSprite from '../images/sprite.svg';
import storageApi from './common/storage.js';
import iziToast from 'izitoast';
import { fetchOneExercise } from './api';
import refs from './refs.js';
import { FAVORITES_KEY } from './consts.js';

refs.divCategories.addEventListener('click', handleExerciseCardClick);
let activeItem;

const removeButtonContent = `Remove from favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#trash'></use>
        </svg>`;
const addButtonContent = `Add to favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#heart'></use>
        </svg>`;

const findFavorite = (array, id) => array.find(el => el?._id === id);

const setButtonContent = () => {

  const savedData = storageApi.load(FAVORITES_KEY) || [];
  const isInFavorites = !!findFavorite(savedData, activeItem?._id);
  if (isInFavorites) {
    document.querySelector('.add-to-favorites').innerHTML = removeButtonContent;
    return;
  }
  document.querySelector('.add-to-favorites').innerHTML = addButtonContent;
};


export function handleExerciseCardClick(e) {
  e.preventDefault();
  const isCard = e.target.closest('.exercise-item-button');

  if (!isCard) {
    return;
  }
  openModal(isCard.id);
}

function openModal(exerciseId) {
  fetchOneExercise(exerciseId).then(exercise => {
    activeItem = exercise;
    createCardMarkup(exercise);
    setButtonContent();
  });

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.backdrop.classList.add('scroll');
  closeModal();

}

const iconRef = document.querySelector('.modal-close-btn');
const onClose = (e) => {
  // додати правильни ref
  if (e.target === refs.backdrop || e.key === 'Escape' || e.target === iconRef) {
    refs.backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.remove('scroll');
    document.removeEventListener('click', onClose);
    document.removeEventListener('keydown', onClose);
    refs.closeModalBtn.removeEventListener('click', onClose);
    refs.addFavorite.removeEventListener('click', toggleFavorite);
  }
};


function closeModal() {
  refs.backdrop.addEventListener('click', onClose);
  document.addEventListener('keydown', onClose);
  refs.closeModalBtn.addEventListener('click', onClose);
  refs.addFavorite.addEventListener('click', toggleFavorite);
}


export function toggleFavorite() {

  const savedData = storageApi.load(FAVORITES_KEY) || [];
  const isInFavorites = !!findFavorite(savedData, activeItem?._id);
  storageApi.save(FAVORITES_KEY, isInFavorites ? savedData.filter(el => el._id !== activeItem?._id) : [...savedData, activeItem]);
  setButtonContent();


  iziToast.show({
    message: isInFavorites ? 'Removed from favorites' : 'Added to favorites',
  });
}

function createCardMarkup(exercise) {
  const gifUrl = exercise.gifUrl;
  const name = exercise.name;
  const rating = Number(exercise.rating).toFixed(1);
  const target = exercise.target;
  const bodyPart = exercise.bodyPart;
  const equipment = exercise.equipment;
  const popularity = exercise.popularity;
  const burnedCalories = exercise.burnedCalories;
  const description = exercise.description;

  refs.modalContainer.innerHTML = `
      <div class='modal-img'>
        <img src='${gifUrl}' alt='${name}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${name}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${rating}</p>
          <svg class='modal-icon-star'>
            <use href='${svgSprite}#star'></use>
          </svg>
        </div>
        <div class='modal-info'>
          <div class='modal-table'>
            <div class='info-element'>
              <p class='info-item'>Target</p>
              <p class='count'>${target}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Body part</p>
              <p class='count'>${bodyPart}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Equipment</p>
              <p class='count'>${equipment}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Popular</p>
              <p class='count'>${popularity}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Burned Calories</p>
              <p class='count'>${burnedCalories}</p>
            </div>
          </div>
          <p class='about-info'>${description}</p>
        </div>`;
}
