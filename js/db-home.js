// Arrow
const arrow = document.querySelector('db-arrow-back');

// const abc = document.querySelector('.what-we-do .title');
// const position = abc.getBoundingClientRect();
// console.log(position)

window.addEventListener('scroll', () => {
    if(window.scrollY = 150) {
        arrow.classList.remove('on-top')
    }
})