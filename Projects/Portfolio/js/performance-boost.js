// Performance Optimization Script

// Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth reveal for sections
    const sections = document.querySelectorAll('section');
    
    const revealSection = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Smooth scroll polyfill for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add cursor trail effect for desktop
    if (window.innerWidth > 1024) {
        let cursorTrail = [];
        const trailLength = 10;
        
        document.addEventListener('mousemove', function(e) {
            cursorTrail.push({
                x: e.clientX,
                y: e.clientY,
                time: Date.now()
            });
            
            if (cursorTrail.length > trailLength) {
                cursorTrail.shift();
            }
        });
    }
    
    // Optimize animations on scroll
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    function updateParallax() {
        const scrolled = window.scrollY;
        const delta = scrolled - lastScrollY;
        lastScrollY = scrolled;
        
        // Update parallax elements
        const parallaxElements = document.querySelectorAll('.float-3d');
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Add active state to navigation
    const navLinks = document.querySelectorAll('.menuLink');
    const sections2 = document.querySelectorAll('section[id]');
    
    function setActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections2.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
    
    // Preload critical images
    const criticalImages = [
        './Projects/Portfolio/img/portfolio3.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-3d').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Enhance portfolio item interactions
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Add loading state for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
        });
    });
    
    // Detect if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
    }
    
    // Add visibility change handler to pause animations when tab is hidden
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.style.animationPlayState = 'paused';
        } else {
            document.body.style.animationPlayState = 'running';
        }
    });
    
    // Console welcome message
    console.log('%c👋 Welcome to Eduard\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c🎨 Redesigned with modern 3D effects and animations', 'color: #764ba2; font-size: 14px;');
    console.log('%c⚡ Optimized for performance and accessibility', 'color: #23a6d5; font-size: 14px;');
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-3d {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .menuLink.active {
        color: #667eea;
        border-bottom: 2px solid #667eea;
    }
    
    .reduced-motion * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
`;
document.head.appendChild(style);

