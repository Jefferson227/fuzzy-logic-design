document.getElementById('btn-add').addEventListener('click', () => {
  let elementsWithValidation = document.getElementsByClassName('validation-message');
  for (let i = 0; i < elementsWithValidation.length; i++) {
    elementsWithValidation[i].classList.remove('hide');
  }

  let fields = document.getElementsByClassName('input');
  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.add('red-border');
  }
});