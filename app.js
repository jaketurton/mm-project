const body = document.querySelector('body');
const arrow = document.querySelector('.down-arrow');
const portfolio = document.querySelector('#portfolio');

body.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.nodeName == "A") {
        window.open(e.target.href, '_blank');
    }

    if (e.target == arrow) {
        portfolio.scrollIntoView();
    }
});
