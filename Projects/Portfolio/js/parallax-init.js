// Parallax.js Initialization and Custom Effects
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initParallax();
        initCursorGlow();
        initScrollReveal();
    });
    
    // Initialize Parallax Scene
    function initParallax() {
        const scene = document.getElementById('parallax-scene');
        
        if (!scene) {
            console.warn('Parallax scene not found');
            return;
        }
        
        // Check if Parallax library is loaded
        if (typeof Parallax === 'undefined') {
            console.error('Parallax.js library not loaded');
            return;
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
            onReady: function() {
                console.log('Parallax ready!');
                document.querySelector('.parallax-hero').classList.add('loaded');
            }
        });
        
        // Store instance for potential later use
        window.parallaxInstance = parallaxInstance;
        
        // Enable/disable based on device
        if (isMobile()) {
            parallaxInstance.disable();
            console.log('Parallax disabled on mobile');
        }
    }
    
    // Cursor glow effect
    function initCursorGlow() {
        const hero = document.querySelector('.parallax-hero');
        
        if (!hero || isMobile()) return;
        
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        hero.appendChild(glow);
        
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;
        
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        // Smooth follow animation
        function animateGlow() {
            const dx = mouseX - glowX;
            const dy = mouseY - glowY;
            
            glowX += dx * 0.1;
            glowY += dy * 0.1;
            
            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';
            
            requestAnimationFrame(animateGlow);
        }
        
        animateGlow();
    }
    
    // Scroll reveal for hero content
    function initScrollReveal() {
        const hero = document.querySelector('.parallax-hero');
        
        if (!hero) return;
        
        let ticking = false;
        
        function updateParallaxOnScroll() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            const scrollPercentage = scrolled / heroHeight;
            
            if (scrollPercentage <= 1) {
                hero.style.opacity = 1 - (scrollPercentage * 0.5);
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallaxOnScroll);
                ticking = true;
            }
        });
    }
    
    // Helper: Check if mobile device
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               window.innerWidth < 768;
    }
    
    // Ensure buttons are always clickable
    function ensureButtonsClickable() {
        const buttons = document.querySelectorAll('.hero-cta a, .cta-primary, .cta-secondary, .cta-tertiary');
        
        buttons.forEach(button => {
            button.style.pointerEvents = 'auto';
            button.style.cursor = 'pointer';
            button.style.position = 'relative';
            button.style.zIndex = '1000';
            
            // Add click feedback
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-2px) scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Call after a brief delay to ensure DOM is fully loaded
    setTimeout(ensureButtonsClickable, 500);
    
    // Re-enable on window resize
    window.addEventListener('resize', function() {
        if (window.parallaxInstance) {
            if (isMobile()) {
                window.parallaxInstance.disable();
            } else {
                window.parallaxInstance.enable();
            }
        }
    });
    
    // Debug helper
    window.debugParallax = function() {
        console.log('Parallax Instance:', window.parallaxInstance);
        console.log('Scene Element:', document.getElementById('parallax-scene'));
        console.log('Is Mobile:', isMobile());
    };
    
})();

