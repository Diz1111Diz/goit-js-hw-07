const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement = document.querySelector('[data-action="decrement"]')
const span = document.querySelector('#value')

let total = 0

function plus() {
  total += 1
  span.textContent = total
}

function minus() {
  total -= 1
  span.textContent = total
}
btnIncrement.addEventListener('click', plus)
btnDecrement.addEventListener('click', minus)