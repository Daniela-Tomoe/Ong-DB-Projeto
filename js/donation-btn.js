const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const donationValue = document.querySelector('#value');

plusBtn.addEventListener('click', () => {
    const currentNumber = parseInt(donationValue.textContent);
    const newNumber = currentNumber + 10;
    donationValue.textContent = newNumber;
})

minusBtn.addEventListener('click', () => {
    const currentNumber = parseInt(donationValue.textContent);
    const newNumber = currentNumber - 10;
    if (newNumber >= 0 ) {
        donationValue.textContent = newNumber; }
})