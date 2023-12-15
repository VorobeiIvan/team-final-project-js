import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.buttonTheme.addEventListener('click', themeChange);

getStorage();

function getStorage() {
  const themeCheck = localStorage.getItem('Theme:');
  if (themeCheck === null || themeCheck === 'dark-theme') {
    setLocalStorage(Theme.DARK);
    darkTheme();
  } else if (themeCheck === 'light-theme') {
    lightTheme();
  }
}

function darkTheme() {
  refs.body.classList.add('darkTheme');
  refs.buttonTheme.checked = true;
}

function lightTheme() {
  refs.body.classList.remove('darkTheme');
  refs.buttonTheme.checked = false;
}

function themeChange() {
  if (refs.buttonTheme.checked) {
    darkTheme();
    setLocalStorage(Theme.DARK);
  } else {
    lightTheme();
    setLocalStorage(Theme.LIGHT);
  }
}

function setLocalStorage(info) {
  localStorage.setItem('Theme:', info);
}