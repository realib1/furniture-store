window.addEventListener('DOMContentLoaded', () => {

// Responsive Navbar
const menu = document.querySelector('.menu');
const bars = document.querySelector('.bars');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

bars.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');

    // close menu when clicking on a link
    const links = document.querySelectorAll('.menu a');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            open.classList.remove('hidden');
            close.classList.add('hidden');
        });
    });




    // close menu when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target !== menu && e.target !== bars && e.target !== open && e.target !== close) {
            menu.classList.add('hidden');
            open.classList.remove('hidden');
            close.classList.add('hidden');
        }
    });
});







// Scroll to top button
// const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 100) {
//         scrollToTopBtn.classList.add('show-scroll-btn');
//     } else {
//         scrollToTopBtn.classList.remove('show-scroll-btn');
//     }
// });

// scrollToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
    // });
// });

});