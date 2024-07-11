// JavaScript Document
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(51, 51, 51, 0.2)';
    } else {
        nav.style.backgroundColor = 'rgba(51, 51, 51, 1)';
    }
});
