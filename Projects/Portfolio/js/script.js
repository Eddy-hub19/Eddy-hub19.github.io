// Show Hamburger menu
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
  // body.classList.toggle('overflow-hidden')
})
