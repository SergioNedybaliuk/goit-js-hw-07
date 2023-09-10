import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(" .gallery")
const galleryList = galleryItems.map(({preview, original, description}) =>
  `<li data-preview="${preview}" class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
  </a>
  </li>`)
  .join("")

  gallery.innerHTML = galleryList;

  const galleryImages = gallery.querySelectorAll(".gallery__image");
  galleryImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    const source = image.dataset.source;
    const alt = image.alt;

    const instance = basicLightbox.create(`
      <img class="gallery__item" src="${source}" alt="${alt}" />
    `);

    instance.show();
  });
});

console.log(galleryItems);






  // gallery.insertAdjacentHTML("beforeend", galleryList);
  // gallery.addEventListener("click", onClick)

  // function onClick(event){
  //   if(event.target === event.currentTarget){
      
  //   }
  //   const instance = basicLightbox.create(`
  //   <img class="gallery__image" src="${galleryList.original}" alt="${galleryList.description}"/>
  //   `)

  //  instance.show()
  //  }
  