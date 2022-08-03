const form = document.querySelector('form');
form.addEventListener('submit', handlSubmit);

function handlSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    const email = formElement.email.value
    const password = formElement.password.value
    const formData = {
        email,
        password,
    }
    if (email && password !== '') {
        console.log(formData);
        form.reset()
    } else {
        alert('Bсе поля должны быть заполнены!');
    }
};

 
