const form = document.querySelector('.img-upload__form');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function commentCheck(text) {
  return (19 < text.length && text.length < 141);
}

pristine.addValidator(comment, commentCheck(), 'Comment length shouldn\'t be less than 20 or more than 140 symbols');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
