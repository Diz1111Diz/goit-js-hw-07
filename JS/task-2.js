
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

function createLi(text){
  const li = document.createElement('li')
  li.classList.add('item')
  li.textContent = text
  return li
}

const items = ingredients.map(el => createLi(el))
list.append(...items)
