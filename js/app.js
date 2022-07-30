const mobileNav = document.querySelector('.mobile-nav');
const mobileNavbar = document.querySelector('.mobile-navbar');


mobileNav.addEventListener('click', () => {
    mobileNavbar.style.display = 'block';
})

mobileNavbar.addEventListener('click', function() {
   this.style.display = 'none';
})