const donationValue = document.querySelector('#value');
const valueConfirmation = document.querySelector('#value-confirmation');
const numberOfDogs = document.querySelector('#dog-number');

let minimunPrice = 10;

function plusBtn() {
    minimunPrice = minimunPrice + 10;

    donationValue.innerHTML = minimunPrice;
    valueConfirmation.innerHTML = minimunPrice;
    numberOfDogs.innerHTML = minimunPrice / 10;
}

function minusBtn() {
    minimunPrice = minimunPrice - 10;

    if (minimunPrice <= 10) {
        minimunPrice = 10;
    }

    donationValue.innerHTML = minimunPrice;
    valueConfirmation.innerHTML = minimunPrice;
    numberOfDogs.innerHTML = minimunPrice / 10;
}

// minusBtn.addEventListener('click', () => {
//     const newNumber = minimunPrice - 10;
//     if (newNumber >= 10) {
//         minimunPrice = newNumber;
//         donationValue.textContent = newNumber;    
//     } else {
//         donationValue.textContent = 10;
//     }
//     valueConfirmation.textContent = donationValue.textContent;
//     numberOfDogs.textContent = newNumber / 10;
// })