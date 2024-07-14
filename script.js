window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const worksSection = document.querySelector('.works');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const heroSectionHeight = heroSection.offsetHeight;
    const worksOffset = worksSection.offsetTop;

    if (scrollPosition > heroSectionHeight - window.innerHeight / 2) {
        worksSection.classList.add('visible');
    } else {
        worksSection.classList.remove('visible');
    }
});


window.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container');
    const numStars = 50; // Adjust the number of stars as desired

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }

    starsContainer.addEventListener('mousemove', function(e) {
        const stars = document.querySelectorAll('.star');
        const centerX = e.clientX - starsContainer.offsetLeft;
        const centerY = e.clientY - starsContainer.offsetTop;

        stars.forEach(star => {
            const starX = star.offsetLeft + star.offsetWidth / 2;
            const starY = star.offsetTop + star.offsetHeight / 2;
            const distance = Math.sqrt(Math.pow(centerX - starX, 2) + Math.pow(centerY - starY, 2));
            const maxDistance = Math.sqrt(Math.pow(starsContainer.offsetWidth / 2, 2) + Math.pow(starsContainer.offsetHeight / 2, 2));
            const opacity = 1 - (distance / maxDistance);
            star.style.opacity = opacity;
        });
    });
});
window.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container-1');
    const numStars = 100; // Adjust the number of stars as desired

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }
});



// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// const slideWidth = slides[0].offsetWidth;

// function showSlide(n) {
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${(index - n) * slideWidth}px)`;
//         const card = slide.querySelector('.card');
//         card.classList.toggle('active', index === n);
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// showSlide(currentSlide);
// setInterval(nextSlide, 6000);


showSlide(currentSlide);
setInterval(nextSlide, 3000);
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slidesRow = document.querySelector('.slides-row');
    const slides = Array.from(document.querySelectorAll('.slide'));

    // Clone the slides to create an infinite effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slidesRow.appendChild(clone);
    });
});



const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

mobileNavToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show');
});
