window.addEventListener('DOMContentLoaded', () => {

// Responsive Navbar
const menu = document.querySelector('.menu');
const bars = document.querySelector('.bars');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

bars.addEventListener('click', () => {
    menu.classList.toggle('hidden');    
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
