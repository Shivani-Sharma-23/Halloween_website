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
    const lightModeImage = document.querySelector('.light-mode-image');
    const darkModeImage = document.querySelector('.dark-mode-image');

    lightModeImage.src = body.classList.contains('darkmode') ? 'path-to-dark-image.png' : 'path-to-light-image.png';
    darkModeImage.src = body.classList.contains('darkmode') ? 'path-to-light-image.png' : 'path-to-dark-image.png';
}

load();

btn.addEventListener('click', (event) => {
    body.classList.toggle('darkmode');

    store(body.classList.contains('darkmode'));

    updateIcon();

    // Determine sliding direction and redirect to different HTML pages
    const slidingDirection = event.clientX < btn.getBoundingClientRect().left ? 'left' : 'right';

    if (slidingDirection === 'left') {
        // Redirect to the left HTML page
        window.location.href = 'left.html';
    } else {
        // Redirect to the right HTML page
        window.location.href = 'right.html';
    }
});
