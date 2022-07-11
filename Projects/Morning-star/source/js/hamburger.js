// Show Hamburger menu
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})

menu.addEventListener("click", function (event) {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
})