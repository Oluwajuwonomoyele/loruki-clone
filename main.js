const menuBtn = document.querySelector('.bars');
const bars = document.querySelectorAll('.bar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
    bars.forEach(bar => {
        bar.classList.toggle('active')
    });
    menu.classList.toggle('active');
})
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})