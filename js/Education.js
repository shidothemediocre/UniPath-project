var search = document.getElementById("search");
var cards = document.querySelectorAll(".card");
var list = document.querySelector(".university-list");
var emptyMessage = document.createElement("p");
emptyMessage.textContent = "No universities found";
emptyMessage.style.display = "none";
list.appendChild(emptyMessage);

search.addEventListener("input", function () {
    var keyword = search.value.toLowerCase().trim();
    var matches = 0;

    cards.forEach(function (card) {
        var university = card.textContent.toLowerCase();
        var visible = university.includes(keyword);
        card.style.display = visible ? "flex" : "none";
        if (visible) matches++;
    });

    emptyMessage.style.display = matches ? "none" : "block";
});