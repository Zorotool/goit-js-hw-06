const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const jsIngredients = ingredients.map((el) => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = el;
  
  return item
});

document.querySelector('#ingredients').append(...jsIngredients)





