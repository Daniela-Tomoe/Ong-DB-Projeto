function accordionHandler (type) {
    document.querySelectorAll('.db-accordion').forEach((nouse, index) => {
        if (type === 'build') document.querySelector(`#btn${index}`).addEventListener('click', () => openAccordion(`#accordion-container${index}`));

        if (type === 'close') document.querySelector(`#accordion-container${index}`).classList.remove('-open');
    })
}

function openAccordion (container) {
    const element = document.querySelector(container);

    if (element.classList.contains('-open')) {
        element.classList.remove('-open');
        return;
    }

    accordionHandler('close');

    element.classList.add('-open');
}

accordionHandler('build');