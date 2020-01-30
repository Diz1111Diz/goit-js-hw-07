const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

const spanDefault = span.textContent;

function addInputInSpan() {
  input.value === '' ? (span.textContent = spanDefault) : span.textContent = input.value
}


input.addEventListener('input', addInputInSpan)