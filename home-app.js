const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const ex = document.querySelector('.ex');
hamburger.addEventListener('click',() => {
    mobileMenu.classList.add('active');
    
})
ex.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
})