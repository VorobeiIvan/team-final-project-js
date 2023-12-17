const scrollUpButton = document.getElementById('scroll-up-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
}

scrollUpButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
