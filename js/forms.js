import { changeEffect, removeEffect } from './effects.js';
import { increase, decrease, resetScale } from './scale.js';
import { onSubmitForm } from './validation.js';
import { showSuccessModal } from './upload-success.js';
import { showErrorModal } from './upload-error.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const cancelBtn = document.querySelector('#upload-cancel');
const editor = document.querySelector('.img-upload__overlay');
const comment = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');


const cleanForm = () => {
  uploadFile.value = '';
  hashtag.value = '';
  comment.value = '';
  removeEffect();
  resetScale();
};

const btnEscape = (evt) => {
  if(evt.key === 'Escape') {
    // eslint-disable-next-line no-use-before-define
    hideForm();
  }
};

const hideForm = () => {
  editor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', btnEscape);
  cleanForm();
};

const openForm = () => {
  editor.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', btnEscape);
  uploadForm.addEventListener('change', changeEffect);
};

const formInteraction = () => {
  cancelBtn.addEventListener('click', () => {
    hideForm();
  });

  uploadFile.addEventListener('change', () => {
    openForm();
  });

  increase();
  decrease();
  onSubmitForm(showSuccessModal, showErrorModal);
};


export { formInteraction, hideForm };
