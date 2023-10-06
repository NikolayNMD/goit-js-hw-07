import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsLoad(galleryItems);


galleryDiv.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemsLoad(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryDiv.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const isItemImage = e.target.classList.contains('gallery__image');
  if (!isItemImage) return;

  const currentImgUrl = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }
}