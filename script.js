// Select all sections and images
const elementsToAnimate = document.querySelectorAll('section, img, .statistics-container, .course-container, .recruiters-section, .reservation');

// Add fade-in-hidden class initially
elementsToAnimate.forEach(element => {
    element.classList.add('fade-in-hidden');
});

// Trigger the fade-in animation on load
window.addEventListener('load', () => {
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        element.classList.remove('fade-in-hidden');
    });
});
