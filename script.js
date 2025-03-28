document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Sample portfolio data (in a real scenario, this would come from an API)
    const portfolioItems = [
        {
            id: 1,
            title: "Instagram Reel Edit",
            category: "short-form",
            thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            videoUrl: "https://www.youtube.com/embed/4-v7z0PF6a0"
        },
        {
            id: 2,
            title: "YouTube Documentary",
            category: "long-form",
            thumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/embed/R03cSvH6Hyg"
        },
        {
            id: 3,
            title: "Gaming Montage",
            category: "gaming",
            thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/embed/5WCewtLjwhs"
        },
        {
            id: 4,
            title: "Football Highlights",
            category: "football",
            thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1293&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        },
        {
            id: 5,
            title: "Product Ad",
            category: "ecommerce",
            thumbnail: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        },
        {
            id: 6,
            title: "Travel Documentary",
            category: "documentary",
            thumbnail: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        },
        {
            id: 7,
            title: "Color Grading Sample",
            category: "color-grading",
            thumbnail: "https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        },
        {
            id: 8,
            title: "Anime AMV",
            category: "anime",
            thumbnail: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        },
        {
            id: 9,
            title: "Brand Commercial",
            category: "ads",
            thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/embed/P0tJa9EEVbQ"
        }
    ];
    
    // Display all portfolio items initially
    displayPortfolioItems(portfolioItems);
    
    // Filter portfolio items
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                displayPortfolioItems(portfolioItems);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === filterValue);
                displayPortfolioItems(filteredItems);
            }
        });
    });
    
    // Function to display portfolio items
    function displayPortfolioItems(items) {
        portfolioGrid.innerHTML = '';
        
        if (items.length === 0) {
            portfolioGrid.innerHTML = '<p class="no-items">No items found in this category.</p>';
            return;
        }
        
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <div class="play-btn" data-video="${item.videoUrl}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Initialize video lightbox for the new items
        initVideoLightbox();
    }
    
    // Video Lightbox functionality
    function initVideoLightbox() {
        const playButtons = document.querySelectorAll('.play-btn');
        const lightbox = document.querySelector('.video-lightbox');
        const closeBtn = document.querySelector('.close-btn');
        const videoContainer = document.querySelector('.video-container iframe');
        
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoUrl = this.getAttribute('data-video');
                videoContainer.setAttribute('src', videoUrl);
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active');
            videoContainer.setAttribute('src', '');
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                videoContainer.setAttribute('src', '');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real scenario, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Initialize video lightbox on page load
    initVideoLightbox();
});