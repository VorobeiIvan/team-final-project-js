import svgSprite from '../images/sprite.svg';
import { fetchExercises } from './api.js';
import refs from './refs.js';

const screenWidth = window.screen.availWidth;

document
  .querySelector('.exercises-search-wrapper input')
  .addEventListener('keydown', toSearch);

function toSearch(event) {
  const keyword = event.target.value;
  if (event.keyCode === 13 || event.code === 'Enter') {
    renderExercises(keyword);
  }
}

function setPerPage() {
  if (screenWidth < 768) {
    return 8;
  }

  return 10;
}
  
export async function renderExercises(keyword = '', page = 1) {
  const curFilter = await JSON.parse(sessionStorage.getItem('category'));
  if (!curFilter) {
    console.log('not active category!!!');
    return;
  }
  if (keyword) {
    curFilter.keyword = keyword;
  }

  const perPage = setPerPage();
  
  try {
    const data = await fetchExercises({
      page: page,
      perPage: perPage,
      filter: curFilter,
    });

    let exercisesToRender = '';
    if (!data.results.length) {
      exercisesToRender = `<li><div class="categories-bad-requast">
          <svg class="bad-requast" width="335" height="300">
            <use href="./images/sprite.svg#BadRequast"></use>
          </svg>
        </div></li>`;
    } else {
      exercisesToRender = createExercise(data.results);
    }
    
    refs.divCategories.innerHTML = exercisesToRender;
    refs.divCategories.classList.add('exercises-list');
  } catch {
    console.log('ooops!!!')
  }
}

function createExercise(arr) {
  return arr
    .map(
      ({ name, target, rating, burnedCalories, time, _id, bodyPart }) => `
        <li class="exercise-item" id="${_id}item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${rating}</p>
              <svg class="exercise-item-star" width="18" height="18">
                <use href="${svgSprite}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button" id="${_id}">
                Start&nbsp;&nbsp;
                <svg class="exercise-item-arrow" width="16" height="16">
                  <use href="${svgSprite}#arrow-right"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${svgSprite}#run"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${name}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text burned-calories">
                  Burned calories:<span class="information-text-span">${burnedCalories} / ${time} min</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text body-part">
                  Body part:<span class="information-text-span">${bodyPart}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text target">
                  Target:<span class="information-text-span">${target}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
}
