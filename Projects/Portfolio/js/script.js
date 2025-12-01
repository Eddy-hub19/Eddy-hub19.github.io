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
const closeBtn = document.querySelector(".menu-close-btn")
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
// Parallax Card
// ============================
const card = document.querySelector(".parallax-card")

if (card && hasGSAP && !isTouch && !isSmall) {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out",
  })

  let targetX = 0
  let targetY = 0
  let ticking = false

  const updateCard = () => {
    ticking = false
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
      targetX = (e.clientX / window.innerWidth - 0.5) * 20
      targetY = (e.clientY / window.innerHeight - 0.5) * 20

      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateCard)
      }
    },
    { passive: true }
  )

  window.addEventListener("mouseleave", () => {
    gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: "power3.out" })
  })
}

// ============================
// Neon Cursor
// ============================
const neonCursor = document.querySelector(".neon-cursor")

if (neonCursor) {
  if (isTouch || isSmall) {
    neonCursor.style.display = "none"
  } else {
    neonCursor.style.opacity = 0

    let cx = 0,
      cy = 0,
      tx = 0,
      ty = 0
    let rafId = null

    const render = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      neonCursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      rafId = requestAnimationFrame(render)
    }

    window.addEventListener(
      "mousemove",
      (e) => {
        neonCursor.style.opacity = 1
        tx = e.clientX
        ty = e.clientY
        if (!rafId) render()
      },
      { passive: true }
    )

    window.addEventListener("mouseleave", () => {
      neonCursor.style.opacity = 0
      cancelAnimationFrame(rafId)
      rafId = null
    })

    // Hover effects
    if (hasGSAP) {
      const interactive = "a, button, .interactive, .parallax-card"

      document.addEventListener(
        "pointerover",
        (e) => {
          if (e.target.closest(interactive)) {
            gsap.to(neonCursor, {
              scale: 2.5,
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
            })
          }
        },
        { passive: true }
      )

      document.addEventListener(
        "pointerout",
        (e) => {
          if (e.target.closest(interactive)) {
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
