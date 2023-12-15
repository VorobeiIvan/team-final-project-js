import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const renderPagination = (perPage, totalPages, page) => {
  const paginationEl = document.getElementById('tui-pagination-container');
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
    visiblePages,
    centerAlign: true,
    page,
  };

  const pagination = new Pagination(paginationEl, options);
  if (visiblePages <= 1) {
    paginationEl.style.display = 'none';
  } else {
    paginationEl.style.display = 'block';
  }

  return pagination;
};
