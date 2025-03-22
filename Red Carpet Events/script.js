let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);






// Events Carousel Script
let currentEventIndex = 0;
const eventImages = document.querySelectorAll('.events-carousel .carousel-img');
const carouselImages = document.querySelector('.events-carousel .carousel-images');

function showEventSlide(index) {
    const totalWidth = (eventImages.length * 399) + ((eventImages.length - 1) * 1);
    const offset = -(index * (399 + 1));
    carouselImages.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.prev-button').addEventListener('click', () => {
    currentEventIndex = (currentEventIndex > 0) ? currentEventIndex - 1 : eventImages.length - 1;
    showEventSlide(currentEventIndex);
});

document.querySelector('.next-button').addEventListener('click', () => {
    currentEventIndex = (currentEventIndex + 1) % eventImages.length;
    showEventSlide(currentEventIndex);
});





function showCallMessage() {
    alert("Please call us at  9838908981");
}



function showMore(event, index) {
    event.preventDefault();
    const moreText = document.querySelectorAll('.more-text')[index];
    moreText.style.display = 'inline';
    event.target.style.display = 'none';
}






function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function countUp(element) {
    const target = parseInt(element.getAttribute('data-count'));
    let current = 0;
    const increment = target > 100 ? Math.ceil(target / 100) : 1; 
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / (target / increment)));

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.querySelector('h3').textContent = current;
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', () => {
    const achievementsSection = document.querySelector('.achievements-section');
    const achievements = document.querySelectorAll('.achievement');

    function handleScroll() {
        if (isElementInViewport(achievementsSection)) {
            achievements.forEach(achievement => countUp(achievement));
            window.removeEventListener('scroll', handleScroll); 
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});






//get in touch

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var formMessage = document.getElementById('form-message');
    formMessage.style.display = 'block';
    this.reset();
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 3000); 
});