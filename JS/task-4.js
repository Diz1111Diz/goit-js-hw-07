const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');

function plus() {
  counterValue.textContent ++  
};

function minus() {
  counterValue.textContent --
};

btnIncrement.addEventListener('click', plus);
btnDecrement.addEventListener('click', minus);