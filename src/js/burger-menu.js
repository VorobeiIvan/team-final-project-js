import * as bodyScrollLock from 'body-scroll-lock';

function mobileMenu() {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuLinks = document.querySelectorAll('.nav-burger-menu-link');

  function toggleMenu() {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? bodyScrollLock.disableBodyScroll
      : bodyScrollLock.enableBodyScroll;
    scrollLockMethod(document.body);
  }

  function handleLinkClick() {
    if (mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  }

  function handleMediaChange(e) {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(function (link) {
    link.addEventListener('click', handleLinkClick);
  });

  matchMedia('(min-width: 768px)').addEventListener(
    'change',
    handleMediaChange
  );
}

document.addEventListener('DOMContentLoaded', mobileMenu);
