import storageApi from './common/storage.js';
import iziToast from 'izitoast';
import * as bodyScrollLock from 'body-scroll-lock';
import { fetchOneExercise } from './api';
import refs from './refs.js';
import { FAVORITES_KEY } from './consts.js';
import { onCloseRatingModal, onOpenRatingModal } from './components';
import svgSprite from '../images/sprite.svg';
import { renderFavorites } from './favorites.js';
import { loader } from './components';

refs.divCategories.addEventListener('click', handleExerciseCardClick);
let activeItem;

const removeButtonContent = `Remove from favorites
        <svg class='modal-icon-favorites'>
          <use href='${svgSprite}#trash'></use>
        </svg>`;
const addButtonContent = `Add to favorites
        <svg class='modal-icon-favorites'>
          <use href='${svgSprite}#heart'></use>
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

async function openModal(exerciseId) {
  const { setLoader, deleteLoader } = loader({ disableScroll: true });
  try {
    setLoader();
    const exercise = await fetchOneExercise(exerciseId);
    activeItem = exercise;
    createCardMarkup(exercise);
    onOpenRatingModal(exerciseId);
    setButtonContent();
  } catch (error) {
    if (error.response && error.response.status === 409) {
      const errorMessage = {
        title: 'Error',
        message: error.response.data.message,
        position: 'topRight',
        color: 'red',
      };
      return iziToast.show(errorMessage);
    }
    const errorMessage = {
      title: 'Error',
      message: 'Oops, something went wrong, try again later',
      color: 'red',
    };
    return iziToast.show(errorMessage);
  } finally {
    deleteLoader();
  }

  refs.backdrop.classList.remove('is-hidden');
  refs.modalMain.classList.remove('inactive');
  bodyScrollLock.disableBodyScroll(document.body);
  closeModal();
}

const iconRef = document.querySelector('.modal-close-btn');
const onClose = e => {
  if (
    e.target === refs.backdrop ||
    e.key === 'Escape' ||
    e.target === iconRef
  ) {
    onCloseRatingModal();
    refs.backdrop.classList.add('is-hidden');
    refs.modalMain.classList.add('inactive');
    bodyScrollLock.enableBodyScroll(document.body);
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
  storageApi.save(
    FAVORITES_KEY,
    isInFavorites
      ? savedData.filter(el => el._id !== activeItem?._id)
      : [...savedData, activeItem],
  );
  setButtonContent();
  renderFavorites();
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
