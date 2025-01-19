const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel-slides');

// Move the carousel to the left (previous image)
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -500, // Adjust the scroll distance to move one image
    behavior: 'smooth' // Smooth transition
  });
});

// Move the carousel to the right (next image)
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 500, // Adjust the scroll distance to move one image
    behavior: 'smooth' // Smooth transition
  });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Apply animation when elements come into view
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in'); // All elements with the 'fade-in' class
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('visible'); // Add the 'visible' class when the element is in view
    }
  });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScrollAnimations);

// Initialize the scroll animations when the page loads
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
