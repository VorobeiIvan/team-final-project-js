import storageApi from '../common/storage';
// import { iziToast } from 'izitoast';

const refs = {
  galleryRef: document.querySelector('.gallery'),
  //   favorites: document.querySelector('.favorites'),
  closeBtn: document.querySelector('.modal_close_btn'),
  backdrop: document.querySelector('.backdrop'),
  modalContainer: document.querySelector('.modal-container'),
  //   tasksLoader: document.querySelector('.tasks-loader'),
  //   addFavorites: document.querySelector('.add-to-favorites'),
  //   giveRating: document.querySelector('.give-a-rating'),
  //   FAVORITES_KEY: 'favorites-list',
  cardRef: document.querySelector('.card'),
};

// refs.galleryRef.addEventListener('click', onCardClick);
// refs.favorites.addEventListener('click', onCardClick);
console.log('refs.modalContainer: ', refs.modalContainer);
refs.cardRef.addEventListener('click', openModal);

export function onCardClick(e) {
  e.preventDefault();
  //   const isCard =
  //     e.target.closest('.gallery__item') || e.target.closest('.slider-card');
  //   if (!isCard) {
  //     return;
  //   }

  //   openModal(isCard.id);

  openModal(exerciseId);
}

async function fetchExerciseDetails(exerciseId) {
  const url = `https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2`;
  const response = await fetch(url);
  const exerciseDetails = await response.json();
  return exerciseDetails;
}

function openModal(exerciseId) {
  fetchExerciseDetails(exerciseId).then(exercise => {
    // console.log('exercise: ', exercise);
    createCardMarkup(exercise);
  });
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.backdrop.classList.add('scroll');
  closeModal();
}

// function comparisonFavorites() {
//   refs.addFavorite.textContent = 'add to favorites';
//   refs.addFavorites.style.backgroundColor = '#fff';
//   refs.addFavorites.style.color = '#000';
//   const savedDate = storageApi.load(refs.FAVORITES_KEY);

//   if (savedDate) {
//     for (const el of savedDate) {
//       if (JSON.stringify(el) === JSON.stringify(data)) {
//         refs.addFavorites.textContent = 'remove from favorites';
//         refs.addFavorites.style.backgroundColor = '#ff6b01';
//         refs.addFavorites.style.color = '#fff';
//         break;
//       }
//     }
//   }
// }

function closeModal() {
  document.addEventListener('click', e => {
    if (e.target === refs.backdrop) {
      refs.backdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      refs.backdrop.classList.remove('scroll');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.backdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      refs.backdrop.classList.remove('scroll');
    }
  });
  refs.closeBtn.addEventListener('click', () => {
    refs.backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.remove('scroll');
  });
}

// refs.addFavorites.addEventListener('click', e => {
//   if (e.target.textContent == 'remove from favorites') {
//     const savedData = storageApi.load(refs.FAVORITES_KEY);
//     for (let i = 0; i < savedData.length; i++) {
//       if (JSON.stringify(savedData[i]) === JSON.stringify(data)) {
//         savedData.splice(i, 1);
//         console.log(savedData);
//         storageApi.save(refs.FAVORITES_KEY, savedData);
//         Notify.info(`Film is remove from favorites`);
//         refs.addFavorites.textContent = 'add to watched';
//         refs.addFavorites.style.backgroundColor = '#fff';
//         refs.addFavorites.style.color = '#000';
//       }
//     }
//   } else {
//     if (
//       !storageApi.load(refs.FAVORITES_KEY) ||
//       storageApi.load(refs.FAVORITES_KEY).length === 0
//     ) {
//       storageApi.save(refs.FAVORITES_KEY, [data]);
//       Notify.info(`Added to favorites`, {
//         background: '#ff6b01',
//       });
//       refs.addFavorites.textContent = 'remove from watched';
//       refs.addFavorites.style.backgroundColor = '#ff6b01';
//       refs.addFavorites.style.color = '#fff';
//       return;
//     }
//     const savedData = storageApi.load(refs.FAVORITES_KEY);
//     savedData.push(data);
//     storageApi.save(refs.FAVORITES_KEY, savedData);
//     Notify.info(`Added to favorites`);
//     refs.addFavorites.textContent = 'remove from watched';
//     refs.addFavorites.style.backgroundColor = '#ff6b01';
//     refs.addFavorites.style.color = '#fff';
//   }

//   refs.addFavorites.removeEventListener;
// });

// iziToast.show({
//   title: 'Hey',
//   message: 'What would you like to add?',
// });

function createCardMarkup(exercise) {
  const gifUrl = exercise.gifUrl;
  const name = exercise.name;
  const rating = Number(exercise.rating).toFixed(1);
  const target = exercise.target;
  const bodyPart = exercise.bodyPart;
  const equipment = exercise.equipment;
  const popularity = exercise.popularity;
  const burnedCalories = exercise.burnedCalories;
  const description = exercise.description;

  return (refs.modalContainer.innerHTML = `
      <div class="modal-img">
        <img src="${gifUrl}" alt="${name}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${name}</h3>
        <div class="rating-element">
            <p class="rating-count" id="vote">${rating}</p>
            <p class="info-item">******</p>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${target}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${bodyPart}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${equipment}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${popularity}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${burnedCalories}</p>
            </div>
          </div>
          <p class="about-info">${description}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
          </button>
          <button class="button give-a-rating" type="button">Give a rating</button>
        </div>
      </div>`);
}
