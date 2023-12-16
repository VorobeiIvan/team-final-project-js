import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const loader = ({
  targetElement,
  width,
  height,
  disableScroll = false,
} = {}) => {
  const appendElement = targetElement || document.body;
  const loaderContainer = document.createElement('div');
  loaderContainer.classList.add('loader-container');
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.style.width = width || '100px';
  loader.style.height = height || '100px';

  return {
    setLoader: () => {
      if (disableScroll) {
        disableBodyScroll(document.body);
      }
      loaderContainer.appendChild(loader);
      appendElement.appendChild(loaderContainer);
    },
    deleteLoader: () => {
      {
        appendElement.removeChild(loaderContainer);
        if (disableScroll) {
          enableBodyScroll(document.body);
        }
      }
    },
  };
};
