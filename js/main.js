const elModalOpener = document.querySelector('.button-orange');
const elModal = document.querySelector('#modal');
const elModalCloser = document.querySelector('.modal-close');

elModalOpener.addEventListener('click', function() {
    elModal.classList.add('modal-open');
})

elModalCloser.addEventListener('click', function() {
    elModal.classList.remove('modal-open');
})

elModal.addEventListener('click', function(event) {
    if(event.target === elModal) {
        elModal.classList.remove('modal-open');
    }
})