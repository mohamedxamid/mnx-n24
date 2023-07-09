const elModalOpener = document.querySelector('.button-orange');
const elModal = document.querySelector('#notifications-modal');
const elModalClose = elModal.querySelector('.js-modal-close');

elModalOpener.addEventListener('click', function() {
    elModal.classList.add('modal-open');
})

elModalClose.addEventListener('click', function() {
    elModal.classList.remove('modal-open');
})

elModal.addEventListener('click', function(event) {
    if(event.target === elModal) {
        elModal.classList.remove('modal-open');
    }
})