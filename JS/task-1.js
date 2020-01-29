const allCategories = document.querySelector('#categories')
console.log(`В списке ${allCategories.children.length} категории`);


const categoriesOfItems = document.querySelectorAll(".item");

function print (el){
  console.log(`Категория: ${el.querySelector("h2").textContent} `);
  console.log(`Количество элементов: ${el.querySelector("ul").children.length}`);
}

categoriesOfItems.forEach(el => print(el))