
import {createPhotos} from './data.js';
import {render} from './drawable.js';
import './forms.js';
import './validation.js';

const list = createPhotos();
render(list);
