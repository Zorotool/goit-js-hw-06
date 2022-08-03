function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body')
const btnChangeColor = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', event => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
})
