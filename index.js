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

document.getElementById('btn-show-toast').addEventListener('click', () => {
  let toast = document.getElementById('toast');

  if (toast.classList.contains('hide-toast'))
    toast.classList.remove('hide-toast');

  toast.classList.add('show-toast');

  setTimeout(() => {
    toast.classList.remove('show-toast');
    toast.classList.add('hide-toast');
  }, 3000);
});