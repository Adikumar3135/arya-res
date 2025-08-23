// ✅ Smooth scroll to a specific section on the page
function scrollToSection(id) {
    const section = document.getElementById(id); // Get section by ID
    section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
}

// ✅ Handle "View More" button click
function viewMore() {
    alert("Sorry, right now it's not available");
}

// ✅ Handle "Order Now" button click
function orderNow() {   // fixed typo (was oderNow)
    alert("Sorry, currently this is not available");
}

// ✅ Handle "Menu" button click
function menu() {
    alert("Sorry, currently this is not available");
}
document.getElementById("menu").addEventListener("click", function () {
    window.location.href = "menu.html";  // Change this to your page name
});
// ================================
// HAMBURGER MENU LOGIC
// ================================
const hamburger = document.getElementById("menu-icon"); // Hamburger icon
const navLinks = document.getElementById("nav-links"); // Navigation links container

// Toggle menu open/close when hamburger clicked
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change icon
    if (navLinks.classList.contains("active")) {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-times");
    } else {
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    }
});

// Close menu automatically when clicking a nav link
document.querySelectorAll("#nav-links li").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    });
});
