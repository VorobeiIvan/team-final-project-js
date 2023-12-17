import { fetchCategories } from './api.js';
import { renderPagination } from './pagination.js';
import { renderExercises } from './exercises.js';
import { loader } from './components';
import refs from './refs.js';
import iziToast from 'izitoast';

export async function renderCategories(filter, page) {
  refs.divCategories.innerHTML = '';
  const { setLoader, deleteLoader } = loader({ disableScroll: true });
  try {
    setLoader();
    const data = await fetchCategories({
      page: page,
      perPage: 12,
      filter: filter,
    });
    renderPagination(12, data.totalPages, page).on(
      'afterMove',
      ({ page: newPage }) => {
        renderCategories(filter, newPage);
        refs.divCategoriesContainer.scrollIntoView();
      }
    );
    const categoriesToRender = data.results.map(category => {
      const categoryElement = createCategory(category);
      categoryElement.addEventListener('click', () => {
        handleCardClick(categoryElement);
      });

      return categoryElement;
    });
    refs.divCategories.append(...categoriesToRender);
    updateSubtitle();
    //Input Search off
    refs.divExSearch.style.display = 'none';
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

function createCategory({ name, filter, imgURL }) {
  const li = document.createElement('li');
  li.className = 'category-item';
  const dataName = filter === 'Body parts' ? 'bodypart' : filter;
  li.setAttribute('data-' + dataName, name);
  const img = document.createElement('img');
  img.className = 'category-item-img';
  img.src = imgURL;
  img.alt = 'Category';
  img.loading = 'lazy';

  const div = document.createElement('div');
  div.className = 'category-item-bg';

  const title = document.createElement('p');
  title.className = 'category-item-title';
  title.textContent = capitalizeFirstLetter(name);

  const subtitle = document.createElement('p');
  subtitle.className = 'category-item-subtitle';
  subtitle.textContent = filter;

  div.appendChild(title);
  div.appendChild(subtitle);
  li.appendChild(img);
  li.appendChild(div);

  return li;
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function handleCardClick(newActiveCard) {
  sessionStorage.setItem('category', JSON.stringify(newActiveCard.dataset));
  //SubTitle
  updateSubtitle(newActiveCard.lastElementChild.children[0].innerText);
  //Input Search on
  refs.divExSearch.style.display = 'flex'
  renderExercises();
}

function updateSubtitle(textContent = '') {
  if (textContent) {
    refs.exTitel.firstChild.textContent += ' / ';
    refs.exTitel.lastElementChild.textContent = textContent;
  } else {
    refs.exTitel.firstChild.textContent = 'Exercises';
    refs.exTitel.lastElementChild.textContent = textContent;
  }
}
