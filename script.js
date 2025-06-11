let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Interactive Security Checklist
document.getElementById("security-checklist").addEventListener("submit", (event) => {
    event.preventDefault();
    const checkedItems = document.querySelectorAll("#security-checklist input:checked").length;
    document.getElementById("security-score").textContent = `Your security score: ${checkedItems}/3`;
});
