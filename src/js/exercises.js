import { fetchExercises, fetchFilter } from './api.js';

const divExercises = document.getElementById('exercises');
const getExercisesButton = document.getElementById('filters-exercises');


getExercisesButton.addEventListener('click', async () => {
  const data = await fetchExercises({
    page: 1,
    perPage: 10,
    filter: { keyword: 'cable low seated row', bodypart: 'back' },
  });
  console.log(data);
  divExercises.innerHTML = JSON.stringify(data.results);
});




