
const jscounter = document.querySelector('#counter');
let counterValue = 0;
const jsValue = document.querySelector('#value');

jscounter.addEventListener('click', event => {
    if (event.target.textContent === '-1') {
      jsValue.textContent = counterValue -= 1;  
    } else { jsValue.textContent=counterValue += 1; }
    return console.log(counterValue);
})

