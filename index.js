const NavToggle = document.querySelector(".nav-toggle");
const NavMenu = document.querySelector(".nav-menu");

NavToggle.addEventListener("click", () => {
    NavMenu.classList.toggle("nav-menu_visible");
});