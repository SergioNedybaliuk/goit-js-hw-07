import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector(" .gallery")
const galleryList = galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image"/>
      </a>
      </li>`)
  .join("")

  gallery.innerHTML = galleryList;

  const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
