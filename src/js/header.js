document.addEventListener('DOMContentLoaded', handlePageNavigation);

function handlePageNavigation() {
  const currentPage = location.pathname;
  const links = [...document.querySelectorAll('.header-nav-link'), ...document.querySelectorAll('.nav-burger-menu-link'), ...document.querySelectorAll('.nav-burger-menu-link')];

  links.forEach(function(link) {
    const linkPath = '/' + new URL(link.href).pathname.split('/' ).pop();
    console.log({ linkPath, currentPage, link, links });
    if (linkPath === currentPage || (currentPage === '/' && linkPath === '/index.html')) {
      link.classList.add('active-page');
    } else {
      link.classList.remove('active-page');
    }
  });
}