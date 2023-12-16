import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.buttonTheme.forEach(elem => {
  const isDark = localStorage.getItem('Theme:') === 'dark-theme';
  if (isDark) {
    elem.checked = true;
  }
  elem.addEventListener('click', themeChange);
});


(function initTheme() {
  const themeCheck = localStorage.getItem('theme');
  if (themeCheck === null || themeCheck === 'light-theme') {
    setLocalStorage(Theme.LIGHT);
    refs.sun.forEach(el => el.classList.remove('visible'));
    refs.moon.forEach(el => el.classList.add('visible'));
    refs.body.classList.remove('dark-theme');
    refs.buttonTheme.forEach(b => b.checked = false);
  } else if (themeCheck === 'dark-theme') {
    refs.sun.forEach(el => el.classList.add('visible'));
    refs.moon.forEach(el => el.classList.remove('visible'));
    refs.buttonTheme.forEach(b => b.checked = true);
    refs.body.classList.add('dark-theme');
  }
})();

function themeChange() {
  const isDark = localStorage.getItem('theme') === 'dark-theme';
  if (isDark) {
    refs.buttonTheme.forEach(b => b.checked = false);
    setLocalStorage(Theme.LIGHT);
    refs.sun.forEach(el => el.classList.remove('visible'));
    refs.moon.forEach(el => el.classList.add('visible'));
    return refs.body.classList.remove('dark-theme');
  }
  refs.buttonTheme.forEach(b => b.checked = true);
  refs.sun.forEach(el => el.classList.add('visible'));
  refs.moon.forEach(el => el.classList.remove('visible'));
  setLocalStorage(Theme.DARK);
  return refs.body.classList.add('dark-theme');
}

function setLocalStorage(info) {
  localStorage.setItem('theme', info);
}