import { editExercisesRating } from '../api.js';
import { generateError, generateSuccess, validator } from '../utils.js';
import { INVALID_INPUT_CLASS } from '../const.js';
import { loader } from './loader.js';

const ratingFormRef = document.querySelector('.rating-feedback-form');

const { allStars, number, ratingStarsRef, closeButtonRef } = {
  ratingStarsRef: ratingFormRef.querySelector('.rating-stars'),
  number: ratingFormRef.querySelector('.rating-number'),
  allStars: ratingFormRef.querySelectorAll('.star-icon-rating'),
  closeButtonRef: ratingFormRef.querySelector('.close-rating-btn-icon'),
};

export const onOpenRatingModal = (exerciseId) => {
  const giveRatingRef = document.querySelector('.give-a-rating');
  giveRatingRef.addEventListener('click', (e) => {
    e.preventDefault();
    ratingFormRef.classList.remove('is-hidden');
    ratingFormRef.setAttribute('id', exerciseId);
    document.querySelector('.modal-main').classList.add('is-hidden');
  });
};

export const onCloseRatingModal = () => {
  ratingFormRef.reset();
  ratingFormRef.classList.add('is-hidden');
  number.textContent = '0.0';
  allStars.forEach((el) => el.classList.remove('star-active'));
  allStars.forEach((el) => el.classList.remove('star-checked'));
  document.querySelector('.modal-main').classList.remove('is-hidden');
};


const updateStars = (value, addClass) => {
  number.textContent = Number(value).toFixed(1);
  allStars.forEach((el, index) => {
    if (index <= Number(value) - 1) {
      el.classList.add(addClass);
    } else {
      el.classList.remove(addClass);
    }
  });
};

const removeActiveStars = () => allStars.forEach((el) => el.classList.remove('star-active'));


ratingStarsRef.addEventListener('click', (e) => {
  const value = e.target.closest('label')?.dataset?.value;
  if (value) {
    updateStars(value, 'star-checked');
    removeActiveStars();
  }
});
ratingStarsRef.addEventListener('mouseover', (e) => {
  const value = e.target.closest('label')?.dataset?.value;
  ratingFormRef.classList.remove(INVALID_INPUT_CLASS);
  if (value) {
    number.textContent = Number(value).toFixed(1);
    updateStars(value, 'star-active');
  }
});


const clearError = (e) => {
  e.target.classList.remove(INVALID_INPUT_CLASS);
  e.target.removeEventListener('input', clearError);
};


ratingFormRef.addEventListener('submit', async (e) => {
  e.preventDefault();
  const rating = ratingStarsRef.querySelector(':checked')?.value || 0;
  const fields = Object.entries(validator);
  const data = {};
  let error = false;
  fields.forEach(([key, validator]) => {
    const field = ratingFormRef.elements[key];
    if (!validator.test(field.value.trim())) {
      error = true;
      field.classList.add(INVALID_INPUT_CLASS);
      field.addEventListener('input', clearError);
      generateError(`Please enter a valid ${key}`);
    } else {
      data[key] = field.value;
      field.classList.remove(INVALID_INPUT_CLASS);
    }
  });

  const rate = Number(rating);
  if (rate <= 0) {
    generateError(`Please enter a start rating`);
    return ratingFormRef.classList.add(INVALID_INPUT_CLASS);
  }
  if (error) {
    return;
  }
  const { setLoader, deleteLoader } = loader({ targetElement: ratingFormRef });
  data.rate = rate;
  try {
    setLoader();
    const id = ratingFormRef.getAttribute('id');
    await editExercisesRating(id, data);
    generateSuccess('Rating submitted successfully');
    onCloseRatingModal();
  } catch (error) {
    if (error) {
      [...ratingFormRef.elements].forEach(e => {
        if (error.response.data.message.includes(e.name)) {
          e.classList.add(INVALID_INPUT_CLASS);
          e.addEventListener('input', clearError);
        }
      });
      generateError(error.response.data.message);
    }
  } finally {
    deleteLoader();
  }
});


closeButtonRef.addEventListener('click', () => onCloseRatingModal());
ratingStarsRef.addEventListener('mouseout', (e) => {
  const checked = ratingStarsRef.querySelector(':checked')?.value || 0;
  number.textContent = Number(checked)?.toFixed(1);
  removeActiveStars();
});