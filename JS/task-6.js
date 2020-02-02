const input = document.querySelector('#validation-input');

function validation() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    return
  }
  input.classList.add('invalid');
  input.classList.remove('valid');
  
};

input.addEventListener('input', validation);
