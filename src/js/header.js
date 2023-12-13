document.addEventListener('DOMContentLoaded', handlePageNavigation);

function handlePageNavigation() {
  const currentPage = location.pathname;
  const links = document.querySelectorAll('.header-nav-link');
  links.forEach(function(link) {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPage || (currentPage === '/' && linkPath === '/index.html')) {
      link.classList.add('active-page');
    } else {
      link.classList.remove('active-page');
    }
  });
}