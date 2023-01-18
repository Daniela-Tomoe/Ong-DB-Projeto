// Donation first step
const donationPlural = document.querySelector('#plural');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');

const firstStep = document.querySelector('#first-step');
const secondStep = document.querySelector('#second-step');
const finalPage = document.querySelector('#final-page');

const validators = {
    nameValidation: (name) => new RegExp(/^([a-zA-Z]+\s)+[a-zA-Z]+$/).test(name),
    emailValidation: (email) => new RegExp(/^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,}/).test(email),
    cardNumberValidation: (number) => number.length == 16,
    cvvValidation: (value) => value.length == 3,
}

function checkAge(birthdate) {
    var age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    var m = new Date().getMonth() - new Date(birthdate).getMonth();
    if (m<0 || (m === 0 && new Date().getDate() < new Date(birthdate).getDate())) {
        age--;
    }
    if (age >= 18) {
        return true
    }
}

function nextPage() {
    firstStep.classList.add('-hide');
    secondStep.classList.remove('-hide');
    
    if (minimunPrice != 10) {
        donationPlural.classList.remove('-hide');
    }
}

function validationFirstStep() {
    if (!nameInput.value) {
        alert('Favor preencher seu nome.');
        return;
    } if (!validators.nameValidation(nameInput.value)) {
        alert('Favor preencher seu nome corretamente.');
        return;
    }

    if (!emailInput.value) {
        alert('Favor preencher o email.');
        return;
    } if (!validators.emailValidation(emailInput.value)) {
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

    nextPage();
}

// Donation final step
const cardNumberInput = document.querySelector('#card-number');
const cardNameInput = document.querySelector('#card-name');
const dueDateInput = document.querySelector('#due-date');
const cvvInput = document.querySelector('#cvv');

function validCardNumber() {
    cardNumberInput.value = cardNumberInput.value.replace(/[^0-9]g, ""/).slice(0, 16);
}

function validCvvNumber() {
    cvvInput.value = cvvInput.value.replace(/[^0-9]g, ""/).slice(0, 3);
}

function dueDateValidation (date) {
    const dateRegex = /^(0[1-9]|1[0-2])\/(2[3-9]|3[0-9])$/;
    const currentYear = new Date().getFullYear;
    const currentMonth = new Date().getMonth;

    if (!dateRegex.test(date)) {
        return false;
    }

    const [month, year] = date.split('/');
    
    if (year < currentYear.toString().slice(-2) || (year === currentYear.toString().slice(-2) && month <= currentMonth + 1)) {
        return false;
    }
    return true;
}

function finalStep () {
    secondStep.classList.add('-hide');
    finalPage.classList.remove('-hide');
}

function validationFinalStep() {
    if (!cardNumberInput.value) {
        alert('Favor preencher o número de seu cartão.');
        return;
    } if (!validators.cardNumberValidation(cardNumberInput.value)) {
        alert('Favor preencher o número de seu cartão corretamente.');
        return;
    }

    if (!cardNameInput.value) {
        alert('Favor preencher o nome impresso no cartão.');
        return;
    } if (!validators.nameValidation(cardNameInput.value)) {
        alert('Favor preencher o nome impresso no cartão corretamente.');
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
    } if (!validators.cvvValidation(cvvInput.value)) {
        alert('Favor preencher o cvv do cartão corretamente.');
        return;
    };

    finalStep();
}