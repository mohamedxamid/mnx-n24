const elModalOpener = document.querySelector('.button-orange');
const elModal = document.querySelector('#notifications-modal');
const elModalClose = document.querySelector('.js-modal-close');

if (elModal) {
    elModalOpener.addEventListener('click', function() {
        elModal.classList.add('modal-open');
    })
}

if(elModalClose) {
    elModalClose.addEventListener('click', function() {
        elModal.classList.remove('modal-open');
    })
}

if (elModal) {
    elModal.addEventListener('click', function(event) {
        if(event.target === elModal) {
            elModal.classList.remove('modal-open');
        }
    })
}

setTimeout(function() {
    if(elModal) {
        elModal.classList.add('modal-open');
    }
}, 30000)