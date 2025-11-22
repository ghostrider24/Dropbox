// Main JavaScript functionality for Dropbox Job Description Webapp

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeRoleExplorer();
    initializeSkillsMatcher();
    initializeScrollEffects();
});

// Animation initialization
function initializeAnimations() {
    // Hero title typewriter effect
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        // Split text for animation
        Splitting({ target: heroTitle, by: 'chars' });
        
        anime({
            targets: '#hero-title .char',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(50),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
    
    // Hero subtitle typing effect
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) {
        const typed = new Typed('#hero-subtitle', {
            strings: [
                'Media Workflows & Collaboration',
                'Shaping the Future of Work',
                'Cross-Functional Leadership',
                'Strategic Product Innovation'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    }
    
    // Floating element animation
    anime({
        targets: '.floating-element',
        translateY: [-10, 10],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
    
    // Card hover animations
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.02,
                rotateX: 5,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Role explorer functionality
function initializeRoleExplorer() {
    const categories = document.querySelectorAll('.role-category');
    const contentPanels = document.querySelectorAll('.content-panel');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const targetCategory = category.dataset.category;
            
            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');
            
            // Hide all content panels
            contentPanels.forEach(panel => {
                panel.classList.remove('active');
                anime({
                    targets: panel,
                    opacity: 0,
                    translateY: 20,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
            
            // Show target content panel
            setTimeout(() => {
                const targetPanel = document.getElementById(`${targetCategory}-content`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    anime({
                        targets: targetPanel,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutCubic'
                    });
                }
            }, 200);
        });
    });
}

// Skills matcher functionality
function initializeSkillsMatcher() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const matchScore = document.getElementById('match-score');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateMatchScore);
    });
    
    function updateMatchScore() {
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const totalBoxes = checkboxes.length;
        const checkedCount = checkedBoxes.length;
        
        const percentage = Math.round((checkedCount / totalBoxes) * 100);
        
        if (matchScore) {
            anime({
                targets: matchScore,
                innerHTML: [parseInt(matchScore.textContent) || 0, percentage],
                duration: 800,
                round: 1,
                easing: 'easeOutCubic'
            });
            
            // Change color based on match percentage
            const scoreElement = matchScore.parentElement.querySelector('div');
            if (percentage >= 75) {
                scoreElement.className = 'text-3xl font-bold text-green-600';
            } else if (percentage >= 50) {
                scoreElement.className = 'text-3xl font-bold text-yellow-600';
            } else {
                scoreElement.className = 'text-3xl font-bold text-red-600';
            }
        }
    }
}

// Scroll effects and parallax
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-gradient');
        const floatingElement = document.querySelector('.floating-element');
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (floatingElement) {
            floatingElement.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate cards on scroll
                if (element.classList.contains('card-hover')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        delay: Math.random() * 200,
                        easing: 'easeOutCubic'
                    });
                }
                
                // Animate sections on scroll
                if (element.tagName === 'SECTION') {
                    const children = element.querySelectorAll('.card-hover, h2, h3, p');
                    anime({
                        targets: children,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        delay: anime.stagger(100),
                        easing: 'easeOutCubic'
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .card-hover').forEach(el => {
        observer.observe(el);
    });
}

// Button interactions
document.addEventListener('click', function(e) {
    // Apply Now buttons
    if (e.target.textContent.includes('Apply Now') || e.target.textContent.includes('Start Application')) {
        e.preventDefault();
        showNotification('Redirecting to application portal...', 'info');
        setTimeout(() => {
            window.location.href = 'apply.html';
        }, 1000);
    }
    
    // Explore Role button
    if (e.target.textContent.includes('Explore Role')) {
        e.preventDefault();
        window.location.href = 'role.html';
    }
    
    // Culture Quiz button
    if (e.target.textContent.includes('Take Culture Quiz') || e.target.textContent.includes('Learn More About Culture')) {
        e.preventDefault();
        window.location.href = 'culture.html';
    }
    
    // Complete Assessment button
    if (e.target.textContent.includes('Complete Assessment')) {
        e.preventDefault();
        showNotification('Taking you to the full skills assessment...', 'info');
        setTimeout(() => {
            window.location.href = 'role.html#skills-matcher';
        }, 1000);
    }
});

// Navigation interactions
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.endsWith('.html')) {
            e.preventDefault();
            
            // Add loading animation
            anime({
                targets: 'body',
                opacity: [1, 0.8],
                duration: 300,
                easing: 'easeOutCubic',
                complete: () => {
                    window.location.href = href;
                }
            });
        }
    });
});

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-6 z-50 px-6 py-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300`;
    
    // Set colors based on type
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close any open modals or menus
    if (e.key === 'Escape') {
        // Close any open dropdowns or modals
        const openElements = document.querySelectorAll('.dropdown-open, .modal-open');
        openElements.forEach(el => el.classList.remove('dropdown-open', 'modal-open'));
    }
    
    // Tab navigation for accessibility
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        // Add focus-visible class for styling
        document.activeElement.classList.add('focus-visible');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'resources/hero-main.png',
        'resources/media-workflows.png',
        'resources/virtual-first.png',
        'resources/product-team.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();