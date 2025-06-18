const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Find the image element within the card's face
    const cardImage = card.querySelector('.card-face img');
    
    // Store the original image source
    const originalSrc = cardImage.getAttribute('src');
    
    // Create the source for the flipped image (e.g., 'images/card1.png' becomes 'images/cardf1.png')
    const flippedSrc = originalSrc.replace('card', 'cardf');

    card.addEventListener('click', () => {
        // Toggle the 'flipped' class to trigger the CSS animation
        card.classList.toggle('flipped');

        // Check if the card is now in the 'flipped' state
        if (card.classList.contains('flipped')) {
            // If it's flipped, change the image to the 'f' version
            cardImage.src = flippedSrc;
        } else {
            // If it's flipped back, change the image to the original version
            cardImage.src = originalSrc;
        }
    });
});