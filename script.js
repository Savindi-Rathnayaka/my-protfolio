// ===============================
// Portfolio JavaScript
// ===============================

// Show a message when the page is ready
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
});


// ===============================
// Navigation Active Link
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Initial card style
cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});