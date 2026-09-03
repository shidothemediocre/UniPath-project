// Get the search bar
const search = document.getElementById("search");

// Get all university cards
const universities = document.querySelectorAll(".university");

// Search function
search.addEventListener("keyup", function () {

    const keyword = search.value.toLowerCase();

    universities.forEach(function (university) {

        const name = university.textContent.toLowerCase();

        if (name.includes(keyword)) {
            university.style.display = "block";
        } else {
            university.style.display = "none";
        }

    });

});