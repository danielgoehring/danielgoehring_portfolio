const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const flipCard = document.getElementById('flip-card');

    // Add touch event listener for mobile devices
    flipCard.addEventListener('touchstart', function () {
        // Toggle the 'flipped' class on the flip-card-inner element
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });

    const flipCard2 = document.getElementById('flip-card2');

    // Add touch event listener for mobile devices
    flipCard2.addEventListener('touchstart', function () {
        // Toggle the 'flipped' class on the flip-card-inner element
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });

    const flipCard3 = document.getElementById('flip-card3');

    // Add touch event listener for mobile devices
    flipCard3.addEventListener('touchstart', function () {
        // Toggle the 'flipped' class on the flip-card-inner element
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });

    