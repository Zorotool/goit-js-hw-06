const Categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${Categories.length}`);

const titleElements = document.querySelectorAll('.item h2');
titleElements.forEach((el) => {
    console.log(`Category: ${el.textContent}`);
    console.log(`Elements: ${el.nextElementSibling.children.length}`);
})
