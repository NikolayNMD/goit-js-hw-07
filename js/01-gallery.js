import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const itemsLoad = createGalleryItemsLoad(items);

galleryDiv.insertAdjacentElement('beforeend', items);
galleryDiv.addEventListener('click', onImgClick);

function createGalleryItemsLoad(item) {
    return item.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
      })
      .join('');
  }