// First step
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const form = document.querySelector('#form1');
const nextBtn = document.querySelector('#next-btn');

const firstStep = document.querySelector('#first-step');
const secondStep = document.querySelector('#second-step');
const finalPage = document.querySelector('#final-page');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!nameInput.value) {
        alert('Favor preencher seu nome.');
        return;
    }

    if (!emailInput.value) {
        alert('Favor preencher o email.');
        return;
    } if (!emailValidation(emailInput.value)) {
        alert('Favor preencher o email corretamente.');
        return;
    }

    if (!birthDateInput.value) {
        alert('Favor preencher sua data de nascimento.')
        return;
    } if (!checkAge(birthDateInput.value)) {
        alert('É necessário ser maior de 18 anos para doar.');
        return;
    }

    nextBtn.addEventListener('click', nextPage());
})

function emailValidation(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,}/
    )
    if (emailRegex.test(email)) {
        return true
    }
}

function checkAge(birthdate) {
    var today = new Date();
    var birthdate = new Date(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    if (age >= 18) {
      return true;
    }}

function nextPage() {
    firstStep.classList.add('-hide');
    secondStep.classList.remove('-hide');
}

// Second step
