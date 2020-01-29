const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement = document.querySelector('[data-action="decrement"]')
const span = document.querySelector('#value')

let total = Number(span.textContent)

//--можно и по другому без total просто на прямую ++ или --

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