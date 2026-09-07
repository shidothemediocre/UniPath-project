window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 80);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbars = document.querySelectorAll(".navbar");

    navbars.forEach(function (navbar) {
        const links = navbar.querySelector(".nav-links");

        if (!links || navbar.querySelector(".menu-toggle")) {
            return;
        }

        const menuToggle = document.createElement("button");
        menuToggle.type = "button";
        menuToggle.className = "menu-toggle";
        menuToggle.setAttribute("aria-label", "Toggle navigation");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "<span></span><span></span><span></span>";
        navbar.insertBefore(menuToggle, links);

        menuToggle.addEventListener("click", function () {
            const isOpen = navbar.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        links.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                navbar.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });
});
