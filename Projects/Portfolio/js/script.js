// Elements
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".menu-overlay")
const links = document.querySelectorAll(".menu-link")
const closeBtn = document.querySelector(".menu-close-btn")
const body = document.body

if (hamburger && menu) {
  function openMenu() {
    menu.classList.add("active")
    hamburger.classList.add("active")
    overlay?.classList.add("active")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    menu.classList.remove("active")
    hamburger.classList.remove("active")
    overlay?.classList.remove("active")
    body.style.overflow = ""
  }

  function toggleMenu() {
    menu.classList.contains("active") ? closeMenu() : openMenu()
  }

  // Events
  hamburger.addEventListener("click", toggleMenu)
  overlay?.addEventListener("click", closeMenu)
  closeBtn?.addEventListener("click", closeMenu)

  links.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu()
  })
}
