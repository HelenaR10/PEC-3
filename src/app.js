
const body = document.body;

document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById('temaOscuro');
    const lightModeButton = document.getElementById('temaClaro');

    function darkModeActivate() {
        body.classList.add('modo-oscuro');
        body.classList.remove('modo-claro');
        darkModeButton.classList.add('button-pressed');
        lightModeButton.classList.remove('button-pressed');
    }

    function lightModeActivate() {
        body.classList.add('modo-claro');
        body.classList.remove('modo-oscuro');
        lightModeButton.classList.add('button-pressed');
        darkModeButton.classList.remove('button-pressed');
    }

    darkModeButton.addEventListener('click', darkModeActivate);
    lightModeButton.addEventListener('click', lightModeActivate);

    lightModeActivate();
});



document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;
    const linksNav = document.querySelectorAll('.link-nav');

    linksNav.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});