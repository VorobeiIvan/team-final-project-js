document.addEventListener('DOMContentLoaded', handlePageNavigation)

function handlePageNavigation() {
    const currentPage = location.href;
    const links = document.querySelectorAll('.header-nav-link');
    links.forEach(function(link) {
        if (link.href === currentPage) {
            link.classList.add('active-page');
        } else {
            link.classList.remove('active-page');
        }
    });
};