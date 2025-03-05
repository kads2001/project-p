document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const line1 = document.querySelector(".line-1");
    const line2 = document.querySelector(".line-2");
    const line3 = document.querySelector(".line-3");

    // Apply initial transition styles
    [line1, line2, line3].forEach(line => {
        line.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    });

    menu.addEventListener("click", function () {
        if (!menu.classList.contains("active")) {
            line1.style.transform = "translateY(10px) rotate(45deg)";
            line3.style.transform = "translateY(-10px) rotate(-45deg)";
            line2.style.opacity = "0";
        } else {
            line1.style.transform = "";
            line3.style.transform = "";
            line2.style.opacity = "1";
        }
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-text");

    const options = {
        root: null, // viewport
        threshold: 0.5, // When 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Set opacity to 1 for the visible section
                entry.target.style.opacity = "1";
            } else {
                // Fade out previous sections
                entry.target.style.opacity = "0";
            }
        });
    }, options);

    sections.forEach((section) => {
        // Apply transition styles dynamically
        section.style.transition = "opacity 1s ease-in-out";
        section.style.opacity = "0"; // Initially hidden
        observer.observe(section);
    });
});