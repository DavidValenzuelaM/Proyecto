const body = document.body;

if (body.classList.contains('donations')) {
    console.log('donations')

    $(document).ready(function () {
        const donationForm = document.getElementById('donation-form');
        const donationName = document.getElementById('donation-name');
        const donationLastName = document.getElementById('donation-lastname');
        const donationEmail = document.getElementById('donation-email');
        const donationPhone = document.getElementById('donation-phone');
        const donationSelect = document.getElementById('donation-select');
        const donationAmount = document.getElementById('donation-amount');

        donationForm.addEventListener('submit', (e) => {
            if (!checkDonationsInputsOnSubmit(donationName, donationLastName, donationEmail, donationPhone, donationSelect, donationAmount)) {
                e.preventDefault();
            }
        });

        donationName.addEventListener('input', () => {
            resetInput(donationName);
        });

        donationLastName.addEventListener('input', () => {
            resetInput(donationLastName);
        });

        donationEmail.addEventListener('focusout', () => {
            checkEmailOnFocusOut(donationEmail);
        });

        donationEmail.addEventListener('input', () => {
            resetInput(donationEmail);
        });

        donationPhone.addEventListener('input', () => {
            resetInput(donationPhone);
        });

        donationSelect.addEventListener('change', () => {
            resetInput(donationSelect);
            if (donationSelect.value.trim() !== ''){
                donationAmount.value = '';
            }
        });

        donationAmount.addEventListener('input', () => {
            resetInput(donationAmount);
            if (donationAmount.value.trim() !== ''){
                donationSelect.value = '';
            }
        });
    });
}

function checkDonationsInputsOnSubmit(donationName, donationLastName, donationEmail, donationPhone, donationSelect, donationAmount) {
    //get values from the inputs
    const nameValue = donationName.value.trim();
    const lastNameValue = donationLastName.value.trim();
    const emailValue = donationEmail.value.trim();
    const phoneValue = donationPhone.value.trim();
    const selectValue = donationSelect.value.trim();
    const amountValue = donationAmount.value.trim();

    if (nameValue === '') {
        setErrorFor(donationName, 'Por favor ingrese un nombre');
    } else {
        setSuccessFor(donationName);
    }

    if (lastNameValue === '') {
        setErrorFor(donationLastName, 'Por favor ingrese un apellido');
    } else {
        setSuccessFor(donationLastName);
    }

    if (emailValue === '') {
        setErrorFor(donationEmail, 'Por favor ingrese un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(donationEmail, 'Por favor ingrese un email válido');
    } else {
        setSuccessFor(donationEmail);
    }

    if (phoneValue === '') {
        setErrorFor(donationPhone, 'Por favor ingrese un numero de teléfono');
    } else if (phoneValue.length !== 9) {
        setErrorFor(donationPhone, 'Por favor ingrese un numero de teléfono valido');
    } else {
        setSuccessFor(donationPhone);
    }

    if (selectValue === '' && amountValue === '') {
        setErrorFor(donationSelect, 'Por favor seleccione un monto');
        setErrorFor(donationAmount, 'Por favor ingrese un monto');
    } else {
        setSuccessFor(donationSelect);
        setSuccessFor(donationAmount);
    }

    return checkSuccess(donationName) && checkSuccess(donationLastName) && checkSuccess(donationEmail) && checkSuccess(donationPhone) && checkSuccess(donationSelect) && checkSuccess(donationAmount);
}

function checkEmailOnFocusOut(email) {
    const emailValue = email.value.trim();

    if (!isEmail(emailValue) && emailValue !== '') {
        setErrorFor(email, 'Por favor ingrese un email válido');
    }
}

function setErrorFor(input, message) {
    const formOutline = input.parentElement;
    const errorMessage = formOutline.querySelector('div.invalid-feedback')

    //add error message inside container
    errorMessage.innerText = message;

    //add error class
    formOutline.className = 'form-outline error';

    input.classList.remove('is-invalid');
    input.classList.add('is-invalid');
}

function setSuccessFor(input) {
    const formOutline = input.parentElement;
    formOutline.className = 'form-outline success';

    input.classList.remove('is-invalid');
}

function resetInput(input) {
    const formOutline = input.parentElement;
    formOutline.className = 'form-outline';

    input.classList.remove('is-invalid');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkSuccess(input) {
    const formOutline = input.parentElement;
    return formOutline.classList.contains('success');
}