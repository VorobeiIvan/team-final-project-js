document.addEventListener('DOMContentLoaded', handlePageNavigation);

const formatUrl = url => '/' + url.split('/').pop();

function handlePageNavigation() {
  const currentPage = formatUrl(location.pathname);
  const links = [
    ...document.querySelectorAll('.header-nav-link'),
    ...document.querySelectorAll('.nav-burger-menu-link'),
  ];

  links.forEach(function (link) {
    const linkPath = formatUrl(new URL(link.href).pathname);
    if (
      linkPath === currentPage ||
      (currentPage === '/' && linkPath === '/index.html')
    ) {
      link.classList.add('active-page');
    } else {
      link.classList.remove('active-page');
    }
  });
}
