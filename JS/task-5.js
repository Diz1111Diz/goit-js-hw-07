const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const spanDefault = span.textContent;

function addInputInSpan() {
  span.textContent = input.value === "" ? spanDefault : input.value
};

input.addEventListener('change', addInputInSpan);