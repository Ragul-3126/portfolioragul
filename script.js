// ========== Typed.js Animation ==========
var typed = new Typed('.text', {
    strings: ['GOOD COMMUNICATOR', 'FRONTEND DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ========== Radial Bars Animation ==========
document.querySelectorAll('.radial-bars').forEach((bar) => {
    const circle = bar.querySelector('.path-1');
    const percentageElem = bar.querySelector('.percentage');

    // Target percentage
    const targetPercent = parseInt(percentageElem.textContent);

    // Hardcoded radius of the circle
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Set initial stroke
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    // Animate circle fill
    setTimeout(() => {
        const offset = circumference - (targetPercent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }, 300);

    // Animate percentage number
    let count = 0;
    const interval = setInterval(() => {
        if (count <= targetPercent) {
            percentageElem.textContent = count + '%';
            count++;
        } else {
            clearInterval(interval);
        }
    }, 15);
});

// ========== Smooth Scroll & Active Nav ==========
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Highlight active link on scroll
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // adjust for navbar
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
