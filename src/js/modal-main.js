import storageApi from './common/storage.js';
import iziToast from 'izitoast';
import { fetchOneExercise } from './api';
import svgSprite from '../images/sprite.svg';
import refs from './refs.js';

refs.divCategories.addEventListener('click', handleExerciseCardClick);
refs.favorites.addEventListener('click', handleFavoritesCardClick);

export function handleExerciseCardClick(e, exerciseId) {
  e.preventDefault();

  const isCard = e.target.closest('.exercise-item');

  if (!isCard) {
    return;
  }

  openModal(isCard.id);
}

function openModal(exerciseId) {
  fetchOneExercise(exerciseId).then(exercise => {
    createCardMarkup(exercise);
  });

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.backdrop.classList.add('scroll');
  closeModal();
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

refs.addFavorite.addEventListener('click', e => {
  if (e.target.textContent == 'Remove from favorites') {
    const savedData = storageApi.load(refs.FAVORITES_KEY);
    for (let i = 0; i < savedData.length; i++) {
      if (JSON.stringify(savedData[i]) === JSON.stringify(data)) {
        savedData.splice(i, 1);
        console.log(savedData);
        storageApi.save(refs.FAVORITES_KEY, savedData);
        iziToast.show({
          message: 'Removed from favorites',
        });
        refs.addFavorite.textContent = 'Add to favorites';
        refs.addFavorite.style.backgroundColor = '#fff';
        refs.addFavorite.style.color = '#000';
      }
    }
  } else {
    if (
      !storageApi.load(refs.FAVORITES_KEY) ||
      storageApi.load(refs.FAVORITES_KEY).length === 0
    ) {
      storageApi.save(refs.FAVORITES_KEY, [data]);

      iziToast.show({
        message: 'Added to favorites',
      });
      refs.addFavorite.textContent = 'Remove from favorites';
      refs.addFavorite.style.backgroundColor = '#ff6b01';
      refs.addFavorite.style.color = '#fff';
      return;
    }
    const savedData = storageApi.load(refs.FAVORITES_KEY);
    savedData.push(data);
    storageApi.save(refs.FAVORITES_KEY, savedData);

    iziToast.show({
      message: 'Added to favorites',
    });
    refs.addFavorite.textContent = 'Remove from favorites';
    refs.addFavorite.style.backgroundColor = '#ff6b01';
    refs.addFavorite.style.color = '#fff';
  }

  refs.addFavorite.removeEventListener;
});

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
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
            <svg class="modal-icon-heart">
              <use href="${svgSprite}#heart"></use>
            </svg>
          </button>
          <button class="button give-a-rating" type="button">
            Give a rating
          </button>
        </div>
      </div>`);
}
