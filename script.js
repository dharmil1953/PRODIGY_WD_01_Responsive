// JavaScript to change the style of the menu on scroll
window.addEventListener("scroll", function() {
const navbar = document.getElementById("navbar");
if (window.scrollY > 500) {
    navbar.classList.add("scrolled");
} else {
    navbar.classList.remove("scrolled");
}
});
// JavaScript to add a hover effect
const menuItems = document.querySelectorAll("#navbar a");

menuItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
        item.style.color = "blue";
    });

    item.addEventListener("mouseleave", function() {
        item.style.color = "#fff"; 
    });
});
