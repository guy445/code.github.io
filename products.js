// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product filtering
    initProductFilters();
    
    // Initialize animations
    initAnimations();
    
    // Create revenue comparison chart
    createRevenueComparisonChart();
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

// Revenue Comparison Chart
function createRevenueComparisonChart() {
    const ctx = document.getElementById('revenueComparisonChart');
    
    if (!ctx) return;
    
    // Sample data for revenue comparison between decision 1 and decision 2
    const data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {
                label: 'Decision 1 (Optimal)',
                data: [250, 290, 340, 400, 480, 550, 630, 720],
                backgroundColor: 'rgba(30, 86, 49, 0.7)',
                borderColor: 'rgba(30, 86, 49, 1)',
                borderWidth: 1
            },
            {
                label: 'Decision 2 (Alternative)',
                data: [250, 275, 310, 350, 400, 460, 520, 590],
                backgroundColor: 'rgba(247, 181, 56, 0.7)',
                borderColor: 'rgba(247, 181, 56, 1)',
                borderWidth: 1
            }
        ]
    };
    
    // Calculate the difference between the two decisions
    const differenceData = {
        label: 'Revenue Difference',
        data: data.datasets[0].data.map((value, index) => value - data.datasets[1].data[index]),
        backgroundColor: 'rgba(77, 140, 87, 0.7)',
        borderColor: 'rgba(77, 140, 87, 1)',
        borderWidth: 1,
        type: 'bar'
    };
    
    // Create the chart
    const revenueChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                data.datasets[0],
                data.datasets[1],
                differenceData
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Comparison: Optimal vs Alternative Decision Path',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'INR',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(context.parsed.y) + ' Cr';
                            }
                            return label;
                        },
                        footer: function(tooltipItems) {
                            if (tooltipItems[0].datasetIndex === 2) {
                                return 'This represents the missed potential revenue';
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '₹' + value + ' Cr';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Revenue (₹ Crores)',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
    
    // Add hover animation to the chart
    ctx.addEventListener('mousemove', (e) => {
        const activePoints = revenueChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (activePoints.length > 0) {
            const firstPoint = activePoints[0];
            const datasetIndex = firstPoint.datasetIndex;
            const index = firstPoint.index;
            
            // Highlight the hovered bar
            revenueChart.data.datasets.forEach((dataset, i) => {
                const backgroundColor = dataset.backgroundColor;
                const borderColor = dataset.borderColor;
                
                if (i === datasetIndex) {
                    // Highlight the hovered dataset
                    if (Array.isArray(backgroundColor)) {
                        dataset.backgroundColor = backgroundColor.map((color, j) => 
                            j === index ? color.replace('0.7', '0.9') : color
                        );
                    } else {
                        dataset.backgroundColor = backgroundColor.replace('0.7', '0.9');
                    }
                    
                    if (Array.isArray(borderColor)) {
                        dataset.borderColor = borderColor.map((color, j) => 
                            j === index ? color : color
                        );
                    }
                    dataset.borderWidth = 2;
                } else {
                    // Dim other datasets
                    if (Array.isArray(backgroundColor)) {
                        dataset.backgroundColor = backgroundColor.map(color => 
                            color.replace('0.7', '0.4')
                        );
                    } else {
                        dataset.backgroundColor = backgroundColor.replace('0.7', '0.4');
                    }
                    dataset.borderWidth = 1;
                }
            });
            
            revenueChart.update();
        } else {
            // Reset all datasets to original state
            revenueChart.data.datasets.forEach(dataset => {
                if (Array.isArray(dataset.backgroundColor)) {
                    dataset.backgroundColor = dataset.backgroundColor.map(color => 
                        color.replace(/0\.[0-9]/, '0.7')
                    );
                } else {
                    dataset.backgroundColor = dataset.backgroundColor.replace(/0\.[0-9]/, '0.7');
                }
                dataset.borderWidth = 1;
            });
            
            revenueChart.update();
        }
    });
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