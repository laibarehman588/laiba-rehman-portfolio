// ======================================
// LAIBA REHMAN PORTFOLIO
// JAVASCRIPT INTERACTIONS
// ======================================


// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

});


// 2. CLOSE MENU WHEN LINK IS CLICKED

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(function (element) {

    observer.observe(element);

});


// 4. ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll("main section[id]");

const navObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navItems.forEach(function (link) {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + currentId
                    );

                });

            }

        });

    },

    {
        rootMargin: "-30% 0px -60% 0px"
    }

);

sections.forEach(function (section) {

    navObserver.observe(section);

});


// 5. AUTOMATIC CURRENT YEAR

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// 6. CLOSE MENU IF USER CLICKS OUTSIDE

document.addEventListener("click", function (event) {

    if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        navLinks.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    }

});


// 7. CONSOLE MESSAGE

console.log("Welcome to Laiba Rehman's Portfolio!");