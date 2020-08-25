'use strict';

function validateEmail() {
    let form = document.getElementById('contact-form');
    let email = document.getElementById('email');
    let error = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            email.classList.add('is-invalid');
            email.placeholder = 'example@email/com';
            error.style.display = 'block';
        } else {
            form.classList.add('was-validated');
            email.classList.remove('is-invalid');
            error.style.display = 'none';
        }
    })
}

document.addEventListener('load', validateEmail());