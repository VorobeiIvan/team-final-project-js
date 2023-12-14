import svgSprite from "../img/sprite.svg";
import { fetchExercises } from './api.js';
import refs from './refs.js';

document
    .querySelector('.exercises-search-wrapper input')
    .addEventListener('keydown', toSearch);

async function toSearch(event) {
    const keyword = event.target.value;
    if (event.keyCode === 13 || event.code === 'Enter') {
        
        const activeCard = document
            .getElementsByClassName('card-selected')[0];
        if (!activeCard) {
            console.log('not active card!!!')
            return;
        }
        const datasetCard = activeCard.dataset;
        const filter = {
            keyword: keyword,
        }; 
        
        for (const el in datasetCard) {
            filter[el] = datasetCard[el];
        }
         console.log(filter);
        try {
            const data = await fetchExercises({
                page: 1,
                perPage: 10,
                filter: filter,
            });
            
            const exercisesToRender = createExercise(data.results);
   
            refs.divCategories.innerHTML = exercisesToRender;
            console.log(exercisesToRender);
        } catch {console.log('ooops!!!') }
               
    }
    

    //     const categoriesToRender = data.results.map(category => {
    //     const categoryElement = createCategory(category);

    //     categoryElement.addEventListener('click', function () {
    //         console.log('Li element clicked!');
    //     });

    //     return categoryElement;
    //     });

    //     refs.divCategories.append(...categoriesToRender);
    // } catch (error) {
    //     if (error.response && error.response.status === 409) {
    //     const errorMessage = {
    //         title: 'Error',
    //         message: error.response.data.message,
    //         position: 'topRight',
    //         color: 'red',
    //     };
    //     return iziToast.show(errorMessage);
    //     }
    //     const errorMessage = {
    //     title: 'Error',
    //     message: 'Oops, something went wrong, try again later',
    //     position: 'topRight',
    //     color: 'red',
    //     };
    //     return iziToast.show(errorMessage);
    // } finally {
    //     setTimeout(() => {
    //     loader.style.display = 'none';

    //     categoriesWrapper.style.display = 'flex';
    //     }, 500);
    // }
    //     }
}

// function createExercise({ name, filter, imgURL }) {
 
//   return li;
// }
function createExercise(arr) {
    return arr
      .map(
        ({ name, target, rating, burnedCalories, time, _id, bodyPart }) => `
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${rating}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="${svgSprite}#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${_id}>
                Start&nbsp;&nbsp;
                <svg width="16" height="16">
                  <use href="${svgSprite}#arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${svgSprite}#Group"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${name}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${burnedCalories} / ${time} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${bodyPart}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
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
// async function fetchExercisesByFiltersAndKeywordAndSearch(
//     category,
//     page,
//     keyword,
//     limit = perPage
//   ) {
//     try {
//       const apiUrl = `https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${page}&limit=${limit}&keyword=${keyword}`;

//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`);
//       }

//       const data = await response.json();

//       if (!data.results || data.results.length === 0) {
//         Notify.failure('No results found for your search parameters.');
//         return;
//       }
//       reInitPagination(data.totalPages, page);
//       // filtersEx.classList.remove('is-hidden');
//       // filtersBp.classList.add('is-hidden');
//       listExersice.innerHTML = exCreateMarkUp(data.results);
//       titleSpan.textContent = `/ ${category}`;
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//     }
//   }
