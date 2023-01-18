const donationValue = document.querySelector('#value');
const valueConfirmation = document.querySelector('#value-confirmation');
const numberOfDogs = document.querySelector('#dog-number');

let minimunPrice = 10;

function donationHandler(type) {
    if (type === 'plus') minimunPrice = minimunPrice + 10;

    if (type === 'minus') {
        minimunPrice = minimunPrice - 10;

        if (minimunPrice <= 10) {
            minimunPrice = 10;
        }
    }

    donationValue.innerHTML = minimunPrice;
    valueConfirmation.innerHTML = minimunPrice;
    numberOfDogs.innerHTML = minimunPrice / 10;
}

// function plusBtn() {
//     minimunPrice = minimunPrice + 10;

//     donationValue.innerHTML = minimunPrice;
//     valueConfirmation.innerHTML = minimunPrice;
//     numberOfDogs.innerHTML = minimunPrice / 10;
// }

// function minusBtn() {
//     minimunPrice = minimunPrice - 10;

//     if (minimunPrice <= 10) {
//         minimunPrice = 10;
//     }

//     donationValue.innerHTML = minimunPrice;
//     valueConfirmation.innerHTML = minimunPrice;
//     numberOfDogs.innerHTML = minimunPrice / 10;
// }