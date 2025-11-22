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

const card = document.querySelector(".parallax-card")

gsap.from(card, {
  opacity: 0,
  y: 60,
  scale: 0.9,
  duration: 1.2,
  ease: "power3.out",
})

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20
  const y = (e.clientY / window.innerHeight - 0.5) * 20

  gsap.to(card, {
    x: x,
    y: y,
    duration: 0.8,
    ease: "power3.out",
  })
})

const neonCursor = document.querySelector(".neon-cursor")

window.addEventListener("mousemove", (e) => {
  neonCursor.style.opacity = 1

  gsap.to(neonCursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.18,
    ease: "power2.out",
  })
})

window.addEventListener("mouseleave", () => {
  neonCursor.style.opacity = 0
})

const interactiveSelectors = "a, button, .interactive, .parallax-card"

// Увеличение при наведении
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(interactiveSelectors)) {
    gsap.to(neonCursor, {
      scale: 2.5,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    })
  }
})

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(interactiveSelectors)) {
    gsap.to(neonCursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    })
  }
})
