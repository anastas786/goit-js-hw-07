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
      width = "200"
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
  captionDelay: 250
});

container.addEventListener('click', handlerImageClick);

function handlerImageClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }

  const largeImage = evt.target.closest('.gallery__image');
  const sourceUrl = largeImage.parentElement.href;

  const instance = new SimpleLightbox(`<img src="${sourceUrl}" alt="${largeImage.alt}" />`);
  instance.open();
}

console.log(galleryItems);

