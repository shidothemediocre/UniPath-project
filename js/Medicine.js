// Get search input
const search = document.getElementById("search");

// Get all university cards
const cards = document.querySelectorAll(".card");

const list = document.querySelector(".university-list");
const emptyMessage = document.createElement("p");
emptyMessage.textContent = "No universities found";
emptyMessage.style.display = "none";
list.appendChild(emptyMessage);

// Search function
search.addEventListener("input", () => {

    const keyword = search.value.toLowerCase().trim();
    let matches = 0;

    cards.forEach(card => {

        const university = card.textContent.toLowerCase();

        if (university.includes(keyword)) {
            card.style.display = "flex";
            matches++;
        } else {
            card.style.display = "none";
        }

    });
    emptyMessage.style.display = matches ? "none" : "block";

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