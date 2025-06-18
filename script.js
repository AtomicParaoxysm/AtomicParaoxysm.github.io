const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Get the front and back image elements
    const frontImage = card.querySelector('.card-face img');
    const backImage = card.querySelector('.card-back img');

    // Get the source for the front image
    const originalSrc = frontImage.getAttribute('src');
    
    // Create the source for the flipped (back) image
    const flippedSrc = originalSrc.replace('card', 'cardf');

    // Set the image source for the back of the card immediately
    backImage.src = flippedSrc;

    // The click only needs to handle the flip animation now
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
