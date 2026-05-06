// ============================
// Helpers
// ============================
const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches

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
// Skills: Tilt + Depth Fallback
// ============================
const skillCards = document.querySelectorAll(".skills__item[data-tilt]")

if (skillCards.length) {
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(skillCards, {
      max: 8,
      speed: 550,
      glare: true,
      "max-glare": 0.12,
      perspective: 1100,
      scale: 1.02,
      gyroscope: false,
    })
  } else if (!isTouch && canHover) {
    skillCards.forEach((card) => {
      let rafId = 0
      let pointerX = 0
      let pointerY = 0

      const updateTilt = () => {
        rafId = 0
        const rect = card.getBoundingClientRect()
        const x = pointerX - rect.left
        const y = pointerY - rect.top
        const rotateY = ((x / rect.width) - 0.5) * 9
        const rotateX = (0.5 - (y / rect.height)) * 9

        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }

      card.addEventListener("pointermove", (event) => {
        pointerX = event.clientX
        pointerY = event.clientY

        if (!rafId) {
          rafId = requestAnimationFrame(updateTilt)
        }
      })

      card.addEventListener("pointerleave", () => {
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = 0
        }
        card.style.transform = ""
      })
    })
  }
}

// ============================
// Neon Cursor (disabled)
// ============================
const neonCursor = document.querySelector(".neon-cursor")
if (neonCursor) neonCursor.remove()
