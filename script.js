// Get all the slides into a NodeList (similar to an array)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // The index of the current slide

// Function to change to the next slide
function nextSlide() {
    // Hide the current slide by removing the 'active' class
    slides[currentSlide].style.display = 'none';
    
    // Increment the currentSlide index. If it's the last slide, go back to the first slide.
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Show the new current slide by adding the 'active' class
    slides[currentSlide].style.display = 'block';
}

// Function to start the slideshow
function startSlideshow() {
    // Initially, hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.display = 'block'; // Show the first slide
        } else {
            slide.style.display = 'none'; // Hide other slides
        }
    });

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// Start the slideshow when the document is ready
document.addEventListener('DOMContentLoaded', startSlideshow);


