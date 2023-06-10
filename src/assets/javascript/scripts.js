// Script para a barra de menu ficar mais escura no scroll down
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
});