const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeMenuButton = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll("#menu a");

function toggleMenu() {
    menu.classList.toggle("hide");
    burger.classList.toggle("burger-active")
}

burger.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("hide");
    }
});

closeMenuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.remove("hide");
});

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menu.classList.remove("hide");
    });
});
