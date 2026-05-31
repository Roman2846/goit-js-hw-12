import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const lodeMoreBtn = document.querySelector('.js-btn-load');

let query = '';
let page = 1;

const PER_PAGE = 15;
let totalPages = 0;

form.addEventListener('submit', onSearch);

lodeMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
  hideLoadMoreBtn();
  showLoader();

  try {
    page += 1;

    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    smoothScroll();

    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }

    showLoadMoreBtn();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong while loading more images.',
    });
  } finally {
    hideLoader();
  }
}

async function onSearch(event) {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();

  if (!query) return;

  page = 1;

  clearGallery();
  hideLoadMoreBtn();

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    totalPages = Math.ceil(data.totalHits / PER_PAGE);

    if (page < totalPages) {
      showLoadMoreBtn();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }

  form.reset();
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');

  if (!card) return;

  const cardHeight = card.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
