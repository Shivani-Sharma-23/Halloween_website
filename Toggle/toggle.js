const body = document.querySelector('body');
const btn = document.querySelector('.btn');

function store(value) {
    localStorage.setItem('darkmode', value);
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store(false);
    } else if (darkmode === 'true') {
        body.classList.add('darkmode');
    }

    updateIcon();
}

function updateIcon() {
    const lightModeImage = document.querySelector('.treat-mode-image');
    const darkModeImage = document.querySelector('.trick-mode-image');

    lightModeImage.style.display = body.classList.contains('darkmode') ? 'none' : 'block';
    darkModeImage.style.display = body.classList.contains('darkmode') ? 'block' : 'none';
}

load();

btn.addEventListener('click', (event) => {
    body.classList.toggle('darkmode');

    store(body.classList.contains('darkmode'));

    updateIcon();

    const slidingDirection = event.clientX < btn.getBoundingClientRect().left ? 'left' : 'right';

    setTimeout(() => {
        if (slidingDirection === 'left') {
            window.location.href = 'left.html';
        } else {
            window.location.href = 'right.html';
        }
    }, 2000);
});
