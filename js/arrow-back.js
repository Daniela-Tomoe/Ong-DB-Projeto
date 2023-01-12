const arrowBackBtn = document.querySelector('.db-arrow-back');
const height = 300;

window.addEventListener('scroll', () => {
    if (window.scrollY > height) {
        arrowBackBtn.classList.remove('-hide');
    } else {
        arrowBackBtn.classList.add('-hide');
     }
});

function backToTop() {
    // guarda a posição atual do scroll
    const currentY = window.scrollY;
    // guarda a posição final do scroll (topo da página)
    const targetY = 0;
    // define a duração da animação (em milisegundos)
    const duration = 500;
    // define o intervalo de atualização (em milisegundos)
    const interval = 10;
    // calcula o número de atualizações necessárias
    const steps = duration / interval;
    // calcula o incremento de scroll por atualização
    const stepY = (targetY - currentY) / steps;
    
    let i = 0;
    // inicia o loop de animação
    const scrollInterval = setInterval(() => {
        // atualiza a posição do scroll
        window.scrollTo(0, currentY + stepY * i);
        i++;
        // verifica se a animação chegou ao fim
        if (i >= steps) {
        clearInterval(scrollInterval);
        }
    }, interval);
};