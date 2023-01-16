const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const donationValue = document.querySelector('#value');
const valueConfirmation = document.querySelector('#value-confirmation');
const numberOfDogs = document.querySelector('#dog-number');
const inflection = document.querySelectorAll('.inflection');

let minimunPrice = 10

plusBtn.addEventListener('click', () => {
    const newNumber = minimunPrice + 10;
    minimunPrice = newNumber;
    donationValue.textContent = newNumber;
    valueConfirmation.textContent = donationValue.textContent;
    numberOfDogs.textContent = newNumber / 10;
    if (newNumber === 10) {
        inflection[0].classList.remove('-hide');
    } else {
        inflection[1].classList.remove('-hide')
    }
});

minusBtn.addEventListener('click', () => {
    const newNumber = minimunPrice - 10;
    if (newNumber >= 10) {
        minimunPrice = newNumber;
        donationValue.textContent = newNumber;    
    } else {
        donationValue.textContent = 10;
    }
    valueConfirmation.textContent = donationValue.textContent;
    numberOfDogs.textContent = newNumber / 10;
})