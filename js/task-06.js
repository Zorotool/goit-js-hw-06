const input = document.querySelector('input');

input.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

