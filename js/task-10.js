function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', event => {
  let amount = input.value;
  createBoxes(amount)
})


function createBoxes(amount) {
  
  for (let i = 0; i <= amount; i += 1){
    if (amount > 0) {
      let divEl = document.createElement('div');
      divEl.style.width = '30px';
      divEl.style.height = '30px';
      divEl.style.backgroundColor = getRandomHexColor();
    
    boxes.append(divEl);
    }
  }
}
createBoxes(1)


// btnCreate.addEventListener('click', event => {
//   amount = Number(input.value);
//   console.log(amount);
// })