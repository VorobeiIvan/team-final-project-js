import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const loader = ({ targetElement, width, height } = {}) => {
  disableBodyScroll(document.body);
  const appendElement = targetElement || document.body;
  const loaderContainer = document.createElement('div');
  loaderContainer.classList.add('loader-container');
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.style.width = width || '100px';
  loader.style.height = height || '100px';
  loaderContainer.appendChild(loader);
  appendElement.appendChild(loaderContainer);

  return () => {
    appendElement.removeChild(loaderContainer);
    enableBodyScroll(document.body);
  };
};
