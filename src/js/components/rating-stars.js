import { editExercisesRating } from '../api.js';

const ratingFormRef = document.querySelector('.rating-feedback-form');


const { allStars, number, ratingStarsRef } = {
  ratingStarsRef: ratingFormRef.querySelector('.rating-stars'),
  number: ratingFormRef.querySelector('.rating-number'),
  allStars: ratingFormRef.querySelectorAll('.star'),
  form: ratingFormRef.querySelector('.rating-feedback-form'),
};

const validator = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  review: /^.+$/,
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
  ratingFormRef.classList.remove('invalid');
  if (value) {
    number.textContent = Number(value).toFixed(1);
    updateStars(value, 'star-active');
  }
});

ratingStarsRef.addEventListener('mouseout', (e) => {
  const checked = ratingStarsRef.querySelector(':checked')?.value || 0;
  number.textContent = Number(checked)?.toFixed(1);
  removeActiveStars();
});

const clearError = (e) => {
  e.target.classList.remove('invalid');
};


ratingFormRef.addEventListener('submit', (e) => {
  e.preventDefault();
  const rating = ratingStarsRef.querySelector(':checked')?.value || 0;
  // const formData = new FormData(ratingFormRef);
  const fields = Object.entries(validator);
  const data = {};

  fields.forEach(([key, validator]) => {
    const field = ratingFormRef.elements[key];

    if (!field.value.match(validator)) {
      field.classList.add('invalid');
      field.addEventListener('input', clearError);
    } else {
      data[key] = field.value;
      field.classList.remove('invalid');
    }
  });
  const rate = Number(rating);
  if (rate <= 0) {
    return ratingFormRef.classList.add('invalid');
    // ratingStarsRef.addEventListener('input', clearError);
  }
  data.rate = rate;
  try {
    editExercisesRating('64f389465ae26083f39b17c1', data).then(e => console.log(e));
  } catch (error) {
    console.log(error);
  }
});