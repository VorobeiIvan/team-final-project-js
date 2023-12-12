// header.js

document.addEventListener('DOMContentLoaded', function () {
  var headerLinks = document.querySelectorAll('.header-nav-link');

  function handleLinkClick(event) {
    var activeLinks = document.querySelectorAll('.js-active');

    if (activeLinks.length > 0) {
      activeLinks.forEach(function (activeLink) {
        activeLink.classList.remove('js-active');
      });
    }

    event.currentTarget.classList.add('js-active');
  }

  headerLinks.forEach(function (link) {
    link.addEventListener('click', handleLinkClick);
  });
});
