const bars = document.querySelector('.bars');
const backdrop = document.querySelector('.backdrop');
const sidenav = document.querySelector('.sidenav');

bars.addEventListener('click', () => {
    sidenav.classList.add('active');
    backdrop.classList.add('active');
})

backdrop.addEventListener('click', () => {
    sidenav.classList.remove('active');
    backdrop.classList.remove('active');
})