import { fetchExercises } from './api.js';
import refs from './refs.js';

refs.getExercisesButton.addEventListener('click', async () => {
  const data = await fetchExercises({
    page: 1,
    perPage: 10,
    filter: { keyword: 'cable low seated row', bodypart: 'back' },
  });
  console.log(data);
  refs.divExercises.innerHTML = JSON.stringify(data.results);
});




