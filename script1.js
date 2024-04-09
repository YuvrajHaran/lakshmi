document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0; // The index of the current slide
    
    // Function to change to the next slide
    function nextSlide() {
        // Hide the current slide
        slides[currentSlide].style.display = 'none';
        
        // Increment the currentSlide index. If it's the last slide, go back to the first slide.
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show the new current slide
        slides[currentSlide].style.display = 'block';
    }
    
    // Function to start the slideshow
    function startSlideshow() {
        // Initially, hide all slides except the first one
        slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none';
        });

        // Change slide every 3 seconds
        setInterval(nextSlide, 3000);
    }

    // Start the slideshow
    startSlideshow();

    // Smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Check if the target element exists to prevent errors
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

