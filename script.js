
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home');
    
    
    if (window.location.hash === '#home') {
        homeBtn.classList.add('active');
    }

    
    homeBtn.addEventListener('click', () => {
        homeBtn.classList.add('active');
    });

    
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        });
    });
});


