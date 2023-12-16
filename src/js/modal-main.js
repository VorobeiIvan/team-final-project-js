import storageApi from '../common/storage';
import iziToast from 'izitoast';
import { fetchOneExercise } from './api';
import svgSprite from '../images/sprite.svg';
import refs from './refs.js';

refs.divCategories.addEventListener('click', handleExerciseCardClick);

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
    createCardMarkup(exercise);
    handleFavoriteBtnClick(exercise);
  });

  // comparisonFavorites();
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.backdrop.classList.add('scroll');

  closeModal();

  handleGiveRatingBtnClick();
}

function comparisonFavorites() {
  refs.addFavorite.textContent = 'Add to favorites';
  refs.addFavorite.style.backgroundColor = '#fff';
  refs.addFavorite.style.color = '#000';
  const savedDate = storageApi.load(refs.FAVORITES_KEY);

  if (savedDate) {
    for (const el of savedDate) {
      if (JSON.stringify(el) === JSON.stringify(data)) {
        refs.addFavorite.textContent = 'Remove from favorites';
        refs.addFavorite.style.backgroundColor = '#ff6b01';
        refs.addFavorite.style.color = '#fff';
        break;
      }
    }
  }

  // const savedData = storageApi.load(refs.FAVORITES_KEY) || [];

  // const isExerciseInFavorites = savedData.some(el => {
  //   console.log('el: ', el);
  //   console.log('exerciseData: ', exerciseData);
  //   return JSON.stringify(el._id) === JSON.stringify(exerciseData._id);
  // });

  // if (isExerciseInFavorites) {
  //   updateFavoriteButton(true);
  // } else {
  //   updateFavoriteButton(false);
  // }
}

function closeModal() {
  document.addEventListener('click', e => {
    if (e.target === refs.backdrop) {
      refs.backdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      refs.backdrop.classList.remove('scroll');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.backdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      refs.backdrop.classList.remove('scroll');
    }
  });
  refs.closeModalBtn.addEventListener('click', () => {
    refs.backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.remove('scroll');
  });
}

function handleFavoriteBtnClick(exerciseData) {
  refs.addFavorite.addEventListener('click', () => {
    toggleFavorite(exerciseData);
  });
}

export function checkIfInFavorites(exerciseData) {
  const savedData = storageApi.load(refs.FAVORITES_KEY) || [];

  const isExerciseInFavorites = savedData.some(el => {
    console.log('el: ', el);
    console.log('exerciseData: ', exerciseData);
    return JSON.stringify(el._id) === JSON.stringify(exerciseData._id);
  });

  if (isExerciseInFavorites) {
    updateFavoriteButton(true);
  } else {
    updateFavoriteButton(false);
  }
}

export function toggleFavorite(exerciseData) {
  const savedData = storageApi.load(refs.FAVORITES_KEY) || [];

  const isExerciseInFavorites = savedData.some(
    el => JSON.stringify(el) === JSON.stringify(exerciseData)
  );

  if (isExerciseInFavorites) {
    // Remove exercise from favorites
    savedData.splice(
      savedData.findIndex(
        el => JSON.stringify(el) === JSON.stringify(exerciseData)
      ),
      1
    );

    storageApi.save(refs.FAVORITES_KEY, savedData);

    iziToast.show({
      message: 'Removed from favorites',
    });

    updateFavoriteButton(false);
  } else {
    // Add exercise to favorites
    savedData.push(exerciseData);
    storageApi.save(refs.FAVORITES_KEY, savedData);

    iziToast.show({
      message: 'Added to favorites',
    });

    updateFavoriteButton(true);
  }
}

function updateFavoriteButton(isInFavorites) {
  if (isInFavorites) {
    refs.addFavorite.textContent = 'Remove from favorites';
    refs.addFavorite.style.backgroundColor = '#242424';
    refs.addFavorite.style.color = '#f4f4f4';
    refs.addFavorite.style.border = '#f4f4f4 1px solid';

    refs.modalIconHeart.style.stroke = '#242424';
    refs.modalIconHeart.style.fill = 'transparent';
  } else {
    refs.addFavorite.textContent = 'Add to favorites';
    refs.addFavorite.style.backgroundColor = '#f4f4f4';
    refs.addFavorite.style.color = '#242424';

    refs.modalIconHeart.style.stroke = '#f4f4f4';
    refs.modalIconHeart.style.fill = '#f4f4f4';
  }
}

function handleGiveRatingBtnClick() {
  console.log('click on button Rating');
  // add necessary logic here
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

  return (refs.modalContainer.innerHTML = `
      <div class="modal-img">
        <img src="${gifUrl}" alt="${name}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${name}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${rating}</p>
          <svg class="modal-icon-star">
            <use href="${svgSprite}#star"></use>
          </svg>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${target}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${bodyPart}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${equipment}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${popularity}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${burnedCalories}</p>
            </div>
          </div>
          <p class="about-info">${description}</p>
        </div>`);
}
