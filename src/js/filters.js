import { renderCategories } from './categories.js';
import refs from './refs.js';

const filters = ['Muscles', 'Body parts', 'Equipment'];

renderCategories(filters[0], 1);

const filtersElements = renderFilters(filters);

refs.filtersRef.append(...filtersElements);

function renderFilters(filters) {
  return filters.map(filter => {
    const li = document.createElement('li');
    li.setAttribute('id', filter);

    if (filter === 'Muscles') {
      li.classList.add('filter-selected');
    }

    const button = document.createElement('button');
    button.innerHTML = filter;
    button.addEventListener('click', () => {
      handleFilterClick(filter, li);
    });

    li.appendChild(button);

    return li;
  });
}

function handleFilterClick(filter, newActiveLink) {
  const currentActiveLink = document.getElementsByClassName('filter-selected');

  if (!currentActiveLink[0]) {
    return;
  }

  currentActiveLink[0].classList.remove('filter-selected');
  newActiveLink.classList.add('filter-selected');

  refs.divCategories.innerHTML = '';

  refs.exSearch.value = '';
  refs.divCategories.classList.remove('exercises-list');
  refs.divCategories.classList.remove('exercises-list-bed-requast');
  
  renderCategories(filter, 1);
}
