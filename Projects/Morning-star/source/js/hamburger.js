// Show Hamburger menu
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})
