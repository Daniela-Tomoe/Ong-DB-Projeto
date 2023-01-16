const scrollToTopBtn = document.querySelector('.db-scroll-to-top');
const height = 300;

window.addEventListener('scroll', () => {
    if (window.scrollY > height) {
        scrollToTopBtn.classList.remove('-hide');
    } else {
        scrollToTopBtn.classList.add('-hide');
     }
});

function backToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" });
}