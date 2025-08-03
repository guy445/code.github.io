// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product filtering
    initProductFilters();
    
    // Initialize animations
    initAnimations();
});

// Product Filtering
function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter') + '-product';
            
            // Show/hide products based on filter
            productCards.forEach(card => {
                if (filter === 'all-product') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else if (card.classList.contains(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animations
function initAnimations() {
    // Animate university banner
    const universityBanner = document.querySelector('.university-banner');
    if (universityBanner) {
        universityBanner.classList.add('animated');
    }
    
    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    productCards.forEach(card => {
        observer.observe(card);
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Animate them in with a staggered delay
    setTimeout(() => {
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}



// Function to update the main index.html page with the new Amul logo
function updateAmulLogo() {
    const amulLogo = document.querySelector('.amul-logo');
    if (amulLogo) {
        amulLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/375px-Amul_official_logo.svg.png';
    }
}

// Call the function if we're on the main page
if (document.querySelector('.amul-logo')) {
    updateAmulLogo();
}