// Show Hamburger menu
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
    // body.classList.toggle('overflow-hidden')
})

// Сhange-theme

function changeTheme() {
    const body = document.body
    const moon = document.querySelector(".moon")
    const tdnn = document.querySelector(".tdnn")
    const el = document.querySelector(".first-screen")
    body.classList.toggle("light")
    el.classList.toggle('light')
    moon.classList.toggle("sun")
    tdnn.classList.toggle("day")
}
