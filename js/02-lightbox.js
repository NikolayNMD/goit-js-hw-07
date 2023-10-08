import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

const markup = galleryItems.reduce(
    (acc, { original, preview, description }) =>
        (acc += `<li>
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
    </li>`),
    ''
    );

galleryDiv.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
