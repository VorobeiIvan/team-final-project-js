import svgSprite from '../images/sprite.svg';
import { fetchExercises } from './api.js';
import refs from './refs.js';
import { renderPagination } from './pagination.js';
import { loader } from './components/index.js';
import iziToast from 'izitoast';

refs.exSearch.addEventListener('input', toInput);
refs.exSearch.addEventListener('keyup', toSearch);
refs.btnSearch.addEventListener('click', toSearch);

let isSubmitted = false;

function toInput(event) {
  const keyword = event.target.value;

  if (event.inputType === undefined && isSubmitted) {
    isSubmitted = false;
    renderExercises();
  }
}

function toSearch(event) {
  const keyword = refs.exSearch.value.trim();

  if (event.target.name === 'search-input' && !(event.code === 'Enter') || !keyword) {
    return;
  }
  isSubmitted = true;
  renderExercises(keyword);
}

function setPerPage() {
  if (window.innerWidth < 768) {
    return 8;
  }
  return 10;
}

export async function renderExercises(keyword = '', page = 1) {
  const curFilter = await JSON.parse(sessionStorage.getItem('category'));
  if (!curFilter) {
    const errorMessage = {
      title: 'Error',
      message: 'Oops, not active category',
      position: 'topRight',
      color: 'red',
    };
    return iziToast.show(errorMessage);
  }
  if (keyword) {
    curFilter.keyword = keyword;
  }

  const perPage = setPerPage();
  const { setLoader, deleteLoader } = loader({ disableScroll: true });

  try {
    setLoader();
    const data = await fetchExercises({
      page: page,
      perPage: perPage,
      filter: curFilter,
    });

    renderPagination(perPage, data.totalPages, page).on(
      'afterMove',
      ({ page: newPage }) => {
        renderExercises(keyword, newPage);
        refs.divCategoriesContainer.scrollIntoView();
      }
    );

    let exercisesToRender = '';
    if (!data.results.length) {
      exercisesToRender = `<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${svgSprite}#BadRequast'></use>
          </svg>
        </div></li>`;
      refs.divCategories.classList.add('exercises-list-bed-requast');
    } else {
      exercisesToRender = createExercise(data.results);
      refs.divCategories.classList.remove('exercises-list-bed-requast');
      refs.divCategories.classList.add('exercises-list');
    }

    refs.divCategories.innerHTML = exercisesToRender;
  } catch {
    const errorMessage = {
      title: 'Error',
      message: 'Oops, something went wrong, try again later',
      position: 'topRight',
      color: 'red',
    };
    return iziToast.show(errorMessage);
  } finally {
    setTimeout(() => {
      deleteLoader();
    }, 100);
  }
}

function createExercise(arr) {
  return arr
    .map(
      ({ name, target, rating, burnedCalories, time, _id, bodyPart }) => `
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${rating.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${svgSprite}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${_id}'>
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
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${burnedCalories} / ${time} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${bodyPart}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${target}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
}
