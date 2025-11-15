// JavaScript functionality for the landing page

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnButton) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('.faq-icon');
            
            // Toggle current FAQ
            answer.classList.toggle('hidden');
            answer.classList.toggle('active');
            icon.classList.toggle('active');
            
            // Optional: Close other FAQs when opening a new one
            // Uncomment the code below if you want accordion behavior
            /*
            const allFaqItems = document.querySelectorAll('.faq-item');
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherIcon = item.querySelector('.faq-icon');
                    otherAnswer.classList.add('hidden');
                    otherAnswer.classList.remove('active');
                    otherIcon.classList.remove('active');
                }
            });
            */
        });
    });
});

// Email form handling with Netlify
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form[data-netlify="true"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Validate email
            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            `;
            
            try {
                // Submit to Netlify
                const formData = new FormData(this);
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    // Show success state
                    submitButton.innerHTML = `
                        <svg class="h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="ml-2">Success!</span>
                    `;
                    submitButton.classList.add('bg-green-500');
                    
                    // Reset form
                    this.reset();
                    
                    // Redirect to calendar after 1.5 seconds
                    setTimeout(() => {
                        window.location.href = 'https://calendar.app.google/JRWrp2fPdzt28PA17';
                    }, 1500);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Show error state
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                showNotification('Something went wrong. Please try again.', 'error');
                console.error('Form submission error:', error);
            }
        });
    });
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Smooth scroll to element
                const navHeight = 64; // Height of fixed navbar
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
        
        lastScroll = currentScroll;
    });
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Handle "Load More" button on blog page
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.querySelector('button');
    
    if (loadMoreBtn && loadMoreBtn.textContent.includes('Load More')) {
        loadMoreBtn.addEventListener('click', function() {
            showNotification('More articles coming soon!', 'success');
            // Here you would typically load more blog posts
            // Example: loadMoreBlogPosts();
        });
    }
});

// Form input validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.classList.add('border-red-500');
                this.classList.remove('border-gray-300');
            } else {
                this.classList.remove('border-red-500');
                this.classList.add('border-gray-300');
            }
        });
        
        input.addEventListener('focus', function() {
            this.classList.remove('border-red-500');
        });
    });
});

// Track CTA button clicks (for analytics)
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('a[href*="contact"], button[type="submit"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('CTA clicked:', buttonText);
            // Here you would typically send to analytics
            // Example: gtag('event', 'cta_click', { button_text: buttonText });
        });
    });
});
