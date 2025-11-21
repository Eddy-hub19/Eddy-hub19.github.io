// 3D Parallax Effect
class Parallax3D {
    constructor() {
        this.hero = document.querySelector('.hero-3d');
        this.layers = document.querySelectorAll('.hero-3d-layer');
        this.cards = document.querySelectorAll('.card-3d');
        this.tiltCards = document.querySelectorAll('.tilt-card');
        
        this.init();
    }
    
    init() {
        if (this.hero && this.layers.length > 0) {
            this.initHeroParallax();
        }
        
        if (this.cards.length > 0) {
            this.initCardEffects();
        }
        
        if (this.tiltCards.length > 0) {
            this.initTiltCards();
        }
        
        this.initParticles();
    }
    
    initHeroParallax() {
        this.hero.addEventListener('mousemove', (e) => {
            const rect = this.hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;
            
            this.layers.forEach((layer, index) => {
                const depth = (index + 1) * 20;
                const moveX = percentX * depth;
                const moveY = percentY * depth;
                
                layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            });
        });
        
        this.hero.addEventListener('mouseleave', () => {
            this.layers.forEach((layer) => {
                layer.style.transform = 'translateX(0) translateY(0)';
            });
        });
    }
    
    initCardEffects() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                const content = card.querySelector('.card-3d-content');
                if (content) {
                    content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const content = card.querySelector('.card-3d-content');
                if (content) {
                    content.style.transform = 'rotateX(0) rotateY(0)';
                }
            });
        });
    }
    
    initTiltCards() {
        this.tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }
    
    initParticles() {
        const particleContainer = document.querySelector('.hero-3d');
        if (!particleContainer) return;
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createParticle(particleContainer);
            }, i * 100);
        }
        
        // Continue creating particles
        setInterval(() => {
            this.createParticle(particleContainer);
        }, 3000);
    }
    
    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new Parallax3D();
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

