// ...existing code...
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

// Performance helpers
const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

const prefersHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches

const LARGE_SCREEN_MIN = 820

// Parallax card (throttled via rAF)
const card = document.querySelector(".parallax-card")
if (card && typeof gsap !== "undefined" && !isTouchDevice() && window.innerWidth >= LARGE_SCREEN_MIN) {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out",
  })

  let targetX = 0
  let targetY = 0
  let rafPending = false

  function flushCard() {
    rafPending = false
    if (!card) return
    gsap.to(card, {
      x: targetX,
      y: targetY,
      duration: 0.6,
      ease: "power3.out",
    })
  }

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      targetX = x
      targetY = y
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(flushCard)
      }
    },
    { passive: true }
  )

  window.addEventListener("mouseleave", () => {
    if (!card) return
    gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: "power3.out" })
  })
} else if (card) {
  // Ensure no transform left on touch/small devices
  card.style.transform = ""
}

// Neon cursor (disabled on touch / small screens)
const neonCursor = document.querySelector(".neon-cursor")
if (neonCursor) {
  if (isTouchDevice() || window.innerWidth < LARGE_SCREEN_MIN) {
    neonCursor.style.display = "none"
  } else {
    neonCursor.style.opacity = 0
    let cx = 0
    let cy = 0
    let tx = 0
    let ty = 0
    let rafId = null

    function renderCursor() {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      neonCursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      rafId = requestAnimationFrame(renderCursor)
    }

    window.addEventListener(
      "mousemove",
      (e) => {
        neonCursor.style.opacity = 1
        tx = e.clientX
        ty = e.clientY
        if (!rafId) renderCursor()
      },
      { passive: true }
    )

    window.addEventListener("mouseleave", () => {
      neonCursor.style.opacity = 0
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    })

    const interactiveSelectors = "a, button, .interactive, .parallax-card"

    if (prefersHover && typeof gsap !== "undefined") {
      document.addEventListener(
        "pointerover",
        (e) => {
          if (e.target.closest(interactiveSelectors)) {
            gsap.to(neonCursor, {
              scale: 2.5,
              opacity: 1,
              duration: 0.45,
              ease: "power3.out",
            })
          }
        },
        { passive: true }
      )

      document.addEventListener(
        "pointerout",
        (e) => {
          if (e.target.closest(interactiveSelectors)) {
            gsap.to(neonCursor, {
              scale: 1,
              opacity: 1,
              duration: 0.25,
              ease: "power3.out",
            })
          }
        },
        { passive: true }
      )
    }
  }
}
// ...existing code...
