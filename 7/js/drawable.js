

const template = document.querySelector('#picture').content.querySelector('.picture');
const photosContainerElement = document.querySelector('.pictures');

const createElement = (url, description, likes, comments) => {
  const currentPhoto = template.cloneNode(true);
  currentPhoto.querySelector('.picture__img').src = url;
  currentPhoto.querySelector('.picture__img').alt = description;
  currentPhoto.querySelector('.picture__comments').textContent = comments;
  currentPhoto.querySelector('.picture__likes').textContent = likes;
  return currentPhoto;
};

export const render = (arr) => {
  const photosFragment = document.createDocumentFragment();

  arr.forEach(({url, description, likes, comments}) => {
    const element = createElement(url, description, likes, comments);
    photosFragment.appendChild(element);
  });

  photosContainerElement.appendChild(photosFragment);
};
