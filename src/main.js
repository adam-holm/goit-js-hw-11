
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // ЦЕЙ РЯДОК ВАЖЛИВИЙ, щоб сторінка не смикалася

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter what you are looking for!" });
    return;
  }

  clearGallery();
  loader.classList.remove('is-hidden'); // Показуємо спінер

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: 'topRight'
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({ message: "Something went wrong. Check console!" });
    })
    .finally(() => {
      loader.classList.add('is-hidden'); // Ховаємо спінер
      form.reset();
    });
});