// Scroll animation for text block
window.addEventListener('scroll', function() {
    const textBlock = document.getElementById('text-block');
    const textBlockPosition = textBlock.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (textBlockPosition < screenPosition) {
        textBlock.classList.add('visible');
    }
});

// Trigger scroll event once to check initial position
window.dispatchEvent(new Event('scroll'));