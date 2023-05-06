const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Get all the flip-card elements
const flipCards = document.getElementsByClassName('flip-card-item');

// Add touch event listeners for mobile devices
for (let i = 0; i < flipCards.length; i++) {
    flipCards[i].addEventListener('touchstart', function () {
        // Toggle the 'flipped' class on the flip-card-inner element
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
}