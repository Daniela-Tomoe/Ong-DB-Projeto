// //Accordions
// const firstBtn = document.querySelector('#first-btn');
// const secondBtn = document.querySelector('#second-btn');
// const thirdBtn = document.querySelector('#third-btn');

// const descriptions = document.querySelectorAll('.db-accordion .description');
// const descriptionOne = document.querySelector('#first');
// const descriptionTwo = document.querySelector('#second');
// const descriptionThree = document.querySelector('#third');

// firstBtn.addEventListener('click', () => {
//     descriptionOne.classList.toggle('-open');
    
//     for (let i = 0; i < descriptions.length; i++) {
//         if (descriptions[i] !== descriptionOne && descriptions[i].classList.contains('-open')) {
//             descriptions[i].classList.remove('-open');
//         }
//     }
// });

// secondBtn.addEventListener('click', () => {
//     descriptionTwo.classList.toggle('-open');

//     for (let i = 0; i< descriptions.length; i++) {
//         if (descriptions[i] !== descriptionTwo && descriptions[i].classList.contains('-open')) {
//             descriptions[i].classList.remove('-open');
//         }
//     }
// })

// thirdBtn.addEventListener('click', () => {
//     descriptionThree.classList.toggle('-open');

//     for (let i = 0; i<descriptions.length; i++) {
//         if (descriptions[i] !== descriptionThree && descriptions[i].classList.contains('-open')) {
//             descriptions[i].classList.remove('-open');
//         }
//     }
// })

const description1 = document.querySelector('#text0');
const description2 = document.querySelector('#text1');
const description3 = document.querySelector('#text2');

const descriptions = [description1, description2, description3]

descriptions.forEach((btn, number) => {
    document.querySelector(`#btn${number}`).addEventListener('click', () => openAccordion(btn))
})

function closeAccordions() {
    description1.classList.remove('-open');
    description2.classList.remove('-open');
    description3.classList.remove('-open');
}

function openAccordion (btn) {
    if (btn.classList.contains('-open')) {
        btn.classList.remove('-open');
        return;
    }

    closeAccordions();

    btn.classList.add('-open');
}