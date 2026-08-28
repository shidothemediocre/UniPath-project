// Get search input
const search = document.getElementById("search");

// Get all university cards
const cards = document.querySelectorAll(".card");

// Search function
search.addEventListener("keyup", () => {

    const keyword = search.value.toLowerCase();

    cards.forEach(card => {

        const university = card.textContent.toLowerCase();

        if (university.includes(keyword)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});

// Fade-in animation when the page loads
window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {
            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);

    });

});

// Click animation
cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.95)";

        setTimeout(() => {
            card.style.transform = "";
        }, 150);

    });

});