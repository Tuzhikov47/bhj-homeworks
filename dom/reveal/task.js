document.addEventListener('scroll', activeReveal);
const revealBlocks = document.querySelectorAll('.reveal');

let isInViewport = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false; 
};

function activeReveal() {
    for (const block of revealBlocks) {
        if (isInViewport(block)) {
            block.classList.add('reveal_active');
        }
    }
}