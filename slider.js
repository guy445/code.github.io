// Amul Product Image Slider Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Validate images first
    validateSliderImages().then(validImages => {
        // Initialize all sliders with valid images
        initHomeHeroSlider(validImages);
        initProductsPageSlider(validImages);
        initFeaturedProductsSlider(validImages);
    });
});

// Image URLs for the sliders
const productImages = [
    'https://www.amuldairy.com/assets/img/product/9/afghandryfruit.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8sqlsSaBdSkDRz1Mm7x3Qk5Aydc2hKXeqQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShl2VICZnykZq4WX7qbKIxS2i0bj2Y8q6xfQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTKUJs3tAXRRDP9wCCyqElFCShBCQrEjOQA&s',
    'https://www.amuldairy.com/assets/img/product/5/refresho_Mango.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3kEpnPzURSQTI1OnK4igAgVUpSfMv6g2aNfmrmqKhGz6KiGsuX1hTWctc0re0EXV_lY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmG2Ywqn1AFfhTcJihdDbg8AWGLz9Pvkkww&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHL2U9HrBCJNA-dSh2CAcYQF8Wff-7_tFYtRsrQKJVrtzsdQyRc4rdQ0MvfgLk8XZ2No&usqp=CAU',
    'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/0152bec3606b4dba9c6fbc1487395054',
    'https://5.imimg.com/data5/BH/RK/MY-30494656/chocolate-ice-cream.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt11EgbY9b9t7fE3oYrCunN33Nck2qCTWhHutjjUKgxQ9HoSwAMEmtIwy7FDkBAekVYdM&usqp=CAU',
    'https://www.bbassets.com/media/uploads/p/l/40214944_1-amul-whole-wheat-atta.jpg',
    'https://www.defreshbox.com/images/media/2021/08/large1628859720ambH613101.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUAp0WCYSa2UhWPuNl-SCjmWUMvkhMOKeDQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTth-RRgUzI5moHpZOtonnl9HxKqHa1j2LDmw&s'
];

// Validate images and filter out invalid ones
function validateSliderImages() {
    return new Promise((resolve) => {
        const validImages = [];
        let loadedCount = 0;
        
        productImages.forEach(src => {
            const img = new Image();
            img.onload = function() {
                validImages.push(src);
                checkComplete();
            };
            img.onerror = function() {
                console.warn(`Image failed to load: ${src}`);
                checkComplete();
            };
            img.src = src;
        });
        
        function checkComplete() {
            loadedCount++;
            if (loadedCount === productImages.length) {
                console.log(`Validated ${validImages.length} of ${productImages.length} images`);
                resolve(validImages.length > 0 ? validImages : productImages.slice(0, 5)); // Fallback to first 5 images if none valid
            }
        }
    });
}

// Initialize the homepage hero slider
function initHomeHeroSlider(validImages) {
    const heroSliderContainer = document.querySelector('.hero-slider-container');
    if (!heroSliderContainer) return;
    
    // Create slides
    createSlides(heroSliderContainer.querySelector('.swiper-wrapper'), validImages);
    
    // Initialize Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            }
        }
    });
}

// Initialize the products page slider
function initProductsPageSlider(validImages) {
    const productsSliderContainer = document.querySelector('.products-slider-container');
    if (!productsSliderContainer) return;
    
    // Create slides with validated images
    createSlides(productsSliderContainer.querySelector('.swiper-wrapper'), validImages);
    
    // Initialize Swiper with enhanced options
    const productsSwiper = new Swiper('.products-swiper', {
        loop: true,
        autoplay: {
            delay: 3500, // Slightly longer delay than hero slider
            disableOnInteraction: false,
        },
        pagination: {
            el: '.products-swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.products-swiper-button-next',
            prevEl: '.products-swiper-button-prev',
        },
        effect: 'coverflow', // Use coverflow effect for products
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        speed: 700,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 10
            }
        }
    });
}

// Initialize the featured products slider
function initFeaturedProductsSlider(validImages) {
    const featuredSliderContainer = document.querySelector('.featured-slider-container');
    if (!featuredSliderContainer) return;
    
    // Create slides with validated images
    createSlides(featuredSliderContainer.querySelector('.swiper-wrapper'), validImages);
    
    // Initialize Swiper with enhanced options
    const featuredSwiper = new Swiper('.featured-swiper', {
        loop: true,
        autoplay: {
            delay: 4000, // Longer delay for featured products
            disableOnInteraction: false,
        },
        pagination: {
            el: '.featured-swiper-pagination',
            clickable: true,
            type: 'progressbar', // Use progressbar for featured slider
        },
        navigation: {
            nextEl: '.featured-swiper-button-next',
            prevEl: '.featured-swiper-button-prev',
        },
        effect: 'cards', // Use cards effect for featured products
        cardsEffect: {
            perSlideOffset: 8,
            perSlideRotate: 2,
        },
        speed: 600,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
}

// Helper function to create slides with enhanced features
function createSlides(swiperWrapper, images) {
    if (!swiperWrapper || !images || images.length === 0) return;
    
    // Clear existing slides
    swiperWrapper.innerHTML = '';
    
    // Shuffle images for variety if there are more than 5
    const shuffledImages = images.length > 5 ? shuffleArray([...images]) : images;
    
    // Create slide elements with enhanced features
    shuffledImages.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        
        // Add animation delay based on index
        slide.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Amul Product ${index + 1}`;
        img.loading = 'lazy'; // Lazy load images for better performance
        
        // Add data attributes for potential filtering or interaction
        img.dataset.index = index;
        
        // Add error handling
        img.onerror = function() {
            console.warn(`Failed to load image: ${src}`);
            slide.remove();
        };
        
        // Add load event for fade-in effect
        img.onload = function() {
            img.classList.add('loaded');
        };
        
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });
}

// Helper function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}