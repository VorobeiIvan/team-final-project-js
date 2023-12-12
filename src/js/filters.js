import { fetchFilter } from './api.js';

const div = document.getElementById('result');
const filtersRef = document.getElementById('filters');

const filters = ['Body parts', 'Muscles', 'Equipment'];

filters.forEach(filter => {
  const li = document.createElement('li');
  const button = document.createElement('button');

  button.innerHTML = filter;
  li.appendChild(button);

  button.addEventListener('click', async () => {
    const data = await fetchFilter({ page: 1, perPage: 10, filter: filter });
    console.log(data);
    div.innerHTML = JSON.stringify(data.results);
  });
  filtersRef.appendChild(li);
});
