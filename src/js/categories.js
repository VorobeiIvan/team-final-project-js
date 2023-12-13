import { fetchCategories } from './api.js';
import refs from './refs.js';

export async function renderCategories(filter) {
  const data = await fetchCategories({ page: 1, perPage: 10, filter: filter });

  const categoriesToRender = data.results.map(category => {
    const categoryElement = createCategory(category);

    categoryElement.addEventListener('click', function () {
      console.log('Li element clicked!');
    });

    return categoryElement;
  });

  refs.divCategories.append(...categoriesToRender);
}

function createCategory({ name, filter, imgURL }) {
  const li = document.createElement('li');
  li.className = 'category-item';

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