const btn = document.querySelector('.smallNavigation');
const nav = document.querySelector('.nav-wrapper');
const navLink = document.querySelectorAll('.nav-wrapper li a');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    nav.classList.toggle('noactive');
});

for (let i = 0 ; i < navLink.length ; i++) {
    navLink[i].addEventListener('click', () => {
        btn.classList.toggle('change');
        nav.classList.toggle('noactive');
    });
}