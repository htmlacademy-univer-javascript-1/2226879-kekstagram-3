//data module

import {customRandom} from './util.js';

const PHOTOS_AMOUNT = 25;

const newPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'It\'s me at Dubai and I\'m on my vacation right now',
  likes: customRandom(15, 200),
  comments: customRandom(0, 200),
});

const createPhotos = () => {
  const list = [];
  for (let i = 1; i <= PHOTOS_AMOUNT; i++) {
    list.push(newPhoto(i));
  }
  return list;
};

export {createPhotos};
