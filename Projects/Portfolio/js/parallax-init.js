// Parallax.js Initialization and Custom Effects
;(function () {
  "use strict"

  // Wait for DOM to be ready
  document.addEventListener("DOMContentLoaded", function () {
    initParallax()
    initCursorGlow()
    initScrollReveal()
  })

  // Helper: Check if mobile / touch-first device
  function isMobile() {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    const noHover = window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches
    return touch || noHover || window.innerWidth < 768
  }

  // Initialize Parallax Scene
  function initParallax() {
    const scene = document.getElementById("parallax-scene")

    if (!scene) {
      console.warn("Parallax scene not found")
      return
    }

    // Check if Parallax library is loaded
    if (typeof Parallax === "undefined") {
      console.error("Parallax.js library not loaded")
      return
    }

    // Initialize parallax with options
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: false,
      hoverOnly: false,
      inputElement: null,
      calibrateX: true,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: 40,
      limitY: 40,
      scalarX: 10,
      scalarY: 10,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.5,
      originY: 0.5,
      pointerEvents: false, // Important: don't block pointer events
      precision: 1,
      onReady: function () {
        console.log("Parallax ready!")
        const heroEl = document.querySelector(".parallax-hero")
        if (heroEl) heroEl.classList.add("loaded")
      },
    })

    // Store instance for potential later use
    window.parallaxInstance = parallaxInstance

    // Enable/disable based on device — guard methods
    if (isMobile()) {
      if (parallaxInstance && typeof parallaxInstance.disable === "function") {
        parallaxInstance.disable()
        console.log("Parallax disabled on mobile")
      }
    } else {
      if (parallaxInstance && typeof parallaxInstance.enable === "function") {
        parallaxInstance.enable()
      }
    }
  }

  // Cursor glow effect (with start/stop and cleanup)
  function initCursorGlow() {
    const hero = document.querySelector(".parallax-hero")

    if (!hero || isMobile()) return

    // Prevent duplicate glow elements
    if (hero.querySelector(".cursor-glow")) return

    const glow = document.createElement("div")
    glow.className = "cursor-glow"
    glow.style.position = "absolute"
    glow.style.pointerEvents = "none"
    glow.style.left = "0px"
    glow.style.top = "0px"
    glow.style.transform = "translate3d(0,0,0)"
    hero.appendChild(glow)

    let mouseX = 0
    let mouseY = 0
    let glowX = 0
    let glowY = 0
    let rafId = null
    let active = false

    function onPointerMove(e) {
      const rect = hero.getBoundingClientRect()
      mouseX = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left
      mouseY = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top
      if (!active) {
        active = true
        startGlow()
      }
    }

    function onPointerLeave() {
      active = false
      // gently move glow to center and reduce opacity
      const rect = hero.getBoundingClientRect()
      mouseX = rect.width / 2
      mouseY = rect.height / 2
      glow.style.transition = "opacity 300ms ease"
      glow.style.opacity = "0"
      // stop loop after short delay
      setTimeout(stopGlow, 400)
    }

    function startGlow() {
      glow.style.opacity = "1"
      glow.style.transition = "opacity 200ms ease"
      if (!rafId) {
        rafId = requestAnimationFrame(animateGlow)
      }
    }

    function stopGlow() {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      // keep element for reuse (no full removal) to avoid reflows
    }

    function animateGlow() {
      const dx = mouseX - glowX
      const dy = mouseY - glowY

      glowX += dx * 0.12
      glowY += dy * 0.12

      glow.style.left = glowX + "px"
      glow.style.top = glowY + "px"

      if (active || Math.hypot(dx, dy) > 0.5) {
        rafId = requestAnimationFrame(animateGlow)
      } else {
        stopGlow()
      }
    }

    // Pointer events (works for mouse and touch)
    hero.addEventListener("pointermove", onPointerMove, { passive: true })
    hero.addEventListener("pointerleave", onPointerLeave, { passive: true })
    hero.addEventListener("pointercancel", onPointerLeave, { passive: true })

    // Cleanup on DOM removal (optional)
    const observer = new MutationObserver(() => {
      if (!document.body.contains(hero)) {
        stopGlow()
        observer.disconnect()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }

  // Scroll reveal for hero content
  function initScrollReveal() {
    const hero = document.querySelector(".parallax-hero")

    if (!hero) return

    // Hint for browser to optimize transforms
    hero.style.willChange = "transform, opacity"

    let ticking = false

    function updateParallaxOnScroll() {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop
      const heroRect = hero.getBoundingClientRect()
      const heroTop = Math.max(0, window.pageYOffset + heroRect.top)
      const heroHeight = hero.offsetHeight || 1
      let scrollPercentage = (scrolled - heroTop) / heroHeight
      // Clamp to [0,1]
      scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1)

      if (scrollPercentage <= 1) {
        hero.style.opacity = String(1 - scrollPercentage * 0.5)
        hero.style.transform = `translateY(${scrolled * 0.03}px)`
      }

      ticking = false
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallaxOnScroll)
          ticking = true
        }
      },
      { passive: true }
    )
  }

  // Ensure buttons are always clickable
  function ensureButtonsClickable() {
    const buttons = document.querySelectorAll(".hero-cta a, .cta-primary, .cta-secondary, .cta-tertiary")

    buttons.forEach((button) => {
      // prefer minimal inline changes; only ensure pointerEvents
      button.style.pointerEvents = "auto"
      button.style.cursor = "pointer"
      button.style.position = button.style.position || "relative"
      // avoid forcing very large z-index unless necessary
      if (!button.style.zIndex) button.style.zIndex = "10"

      // Use pointer events for consistent touch support
      function onDown() {
        this.style.transform = "translateY(-2px) scale(0.98)"
      }
      function onUp() {
        this.style.transform = ""
      }

      button.addEventListener("pointerdown", onDown)
      button.addEventListener("pointerup", onUp)
      button.addEventListener("pointercancel", onUp)
    })
  }

  // Call after a brief delay to ensure DOM is fully loaded
  setTimeout(ensureButtonsClickable, 500)

  // Debounced resize handler to enable/disable parallax safely
  let resizeTimer = null
  window.addEventListener("resize", function () {
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      if (window.parallaxInstance) {
        if (isMobile()) {
          if (typeof window.parallaxInstance.disable === "function") window.parallaxInstance.disable()
        } else {
          if (typeof window.parallaxInstance.enable === "function") window.parallaxInstance.enable()
        }
      }
    }, 150)
  })

  // Debug helper
  window.debugParallax = function () {
    console.log("Parallax Instance:", window.parallaxInstance)
    console.log("Scene Element:", document.getElementById("parallax-scene"))
    console.log("Is Mobile:", isMobile())
  }
})()
