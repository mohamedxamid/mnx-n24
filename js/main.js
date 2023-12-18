const modifiers = {
    sitenavTogglerActive: "site-header__sitenav-toggler--active",
    siteHeaderActive: "site-header--active"
}

const elModalOpener = document.querySelector('.button-orange');
    elModal = document.querySelector('#notifications-modal'),
    elModalClose = document.querySelector('.js-modal-close'),
    elSitenavToggler = document.querySelector('.site-header__sitenav-toggler'),
    elSiteHeader = document.querySelector('.site-header'),
    elSitenavTogglerClose = document.querySelector('.sitenav-toggler-close'),
    form = document.querySelector('form.contact-page-form');
    console.log(form);

    if (form) {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const formData = new FormData(evt.target)
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            fetch('http://localhost:3000/requests', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json,
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err))
            .finally(() => evt.target.reset())
        })
    }

if (elSitenavToggler) {
    elSitenavToggler.addEventListener('click', function () {
        elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
        elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
    })
}

if (elSitenavTogglerClose) {
    elSitenavTogglerClose.addEventListener('click', function () {
        elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
        elSiteHeader.classList.remove(modifiers.siteHeaderActive);
    })
}

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