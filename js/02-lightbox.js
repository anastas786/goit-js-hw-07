import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            width="200"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a.gallery__link', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
});


