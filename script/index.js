const navbar = document.querySelector('.navbar');
const mobileNavBar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function(){
    mobileNavBar.classList.toggle(active);
})