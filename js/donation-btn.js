const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const donationValue = document.querySelector('#value');
const valueConfirmation = document.querySelector('#value-confirmation');
const numberOfDogs = document.querySelector('#dog-number');

plusBtn.addEventListener('click', () => {
    const currentNumber = parseInt(donationValue.textContent);
    const newNumber = currentNumber + 10;
    donationValue.textContent = newNumber;

    valueConfirmation.textContent = donationValue.textContent;

    numberOfDogs.textContent = newNumber / 10;
})

minusBtn.addEventListener('click', () => {
    const currentNumber = parseInt(donationValue.textContent);
    const newNumber = currentNumber - 10;
    if (newNumber >= 10 ) {
        donationValue.textContent = newNumber; 
        valueConfirmation.textContent = donationValue.textContent;
        numberOfDogs.textContent = newNumber / 10;
    }
})