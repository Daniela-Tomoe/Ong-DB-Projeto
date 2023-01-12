// First step
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const form1 = document.querySelector('#form1');
const nextBtn = document.querySelector('#next-btn');

const firstStep = document.querySelector('#first-step');
const secondStep = document.querySelector('#second-step');
const finalPage = document.querySelector('#final-page');

form1.addEventListener('submit', (e) => {
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
const cardNumberInput = document.querySelector('#card-number');
const cardNameInput = document.querySelector('#card-name');
const dueDateInput = document.querySelector('#due-date');
const cvvInput = document.querySelector('#cvv');

const form2 = document.querySelector('#form2');
const confirmBtn = document.querySelector('#confirm-btn');

cardNumberInput.addEventListener('input', () => {
    cardNumberInput.value = cardNumberInput.value.replace(/[^0-9]g, ""/);
})

cvvInput.addEventListener('input', () => {
    cvvInput.value = cvvInput.value.replace(/[^0-9]g, ""/).slice(0, 3);
})

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!cardNumberInput.value) {
        alert('Favor preencher o número de seu cartão.');
        return;
    } if (!checkCardNumber(cardNumberInput.value)) {
        alert('Favor preencher o número de seu cartão corretamente');
        return;
    }

    if (!cardNameInput.value) {
        alert('Favor preencher o nome impresso no cartão.');
        return;
    }

    if(!dueDateInput.value) {
        alert('Favor preencher o vencimento do cartão.');
        return;
    } if (!dueDateValidation(dueDateInput.value)) {
        alert('Favor preencher o vencimento do cartão corretamente.');
        return;
    }

    if (!cvvInput.value) {
        alert('Favor preencher o cvv do cartão.');
        return;
    } if (!checkCvv(cvvInput.value)) {
        alert('Favor preencher o cvv do cartão corretamente.');
        return;
    };

    confirmBtn.addEventListener('click', finalStep())
})

function checkCardNumber (value) {
    value.length = 16;
    return true;
}

function dueDateValidation (value) {
    const dateRegex = new RegExp (
        /^[0-9]{2}\/[0-9]{2}$/
    )
    if (dateRegex.test(value)) {
        return true
    }
}

function checkCvv (value) {
    value.length = 3;
    return true;
}

function finalStep () {
    secondStep.classList.add('-hide');
    finalPage.classList.remove('-hide');
}