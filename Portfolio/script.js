window.onscroll = () => {
let header = document.querySelector('.header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


header.classList.toggle('sticky', window.scrollY > 100);
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
    };
});
};