// ============================
// Helpers
// ============================
const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
const isSmall = window.innerWidth < 820
const hasGSAP = typeof gsap !== "undefined"

// ============================
// Mobile Menu
// ============================
const hamburger = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".menu-overlay")
const closeBtn = document.querySelector(".menu-item-close")
const links = document.querySelectorAll(".menu-link")
const body = document.body

if (hamburger && menu) {
  const openMenu = () => {
    menu.classList.add("active")
    hamburger.classList.add("active")
    overlay?.classList.add("active")
    body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    menu.classList.remove("active")
    hamburger.classList.remove("active")
    overlay?.classList.remove("active")
    body.style.overflow = ""
  }

  const toggleMenu = () => (menu.classList.contains("active") ? closeMenu() : openMenu())

  hamburger.addEventListener("click", toggleMenu)
  overlay?.addEventListener("click", closeMenu)
  closeBtn?.addEventListener("click", closeMenu)
  links.forEach((link) => link.addEventListener("click", closeMenu))

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu()
  })
}

// ============================
// Neon Cursor (disabled)
// ============================
const neonCursor = document.querySelector(".neon-cursor")
if (neonCursor) neonCursor.remove()
