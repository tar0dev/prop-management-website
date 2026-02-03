// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        }
    });
});

// Contact Form Handling
// FormSubmit handles the form submission automatically
// The form will submit to FormSubmit and redirect to the thank you page
// No JavaScript needed for form submission, but we can add client-side validation if needed

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Optional: Add any additional client-side validation or tracking here
    contactForm.addEventListener('submit', () => {
        // Let the form submit naturally to FormSubmit
        // You can add analytics tracking here if needed
        console.log('Form submitting to FormSubmit...');
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .area-card, .service-item, .stat-card, .team-member');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        e.target.value = value;
    });
}

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Click-to-call tracking (for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone call initiated:', link.getAttribute('href'));
        // In a real application, you would send this to your analytics platform
    });
});

// Email link tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email link clicked:', link.getAttribute('href'));
        // In a real application, you would send this to your analytics platform
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't already open
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Free Rental Analysis Modal
const rentalAnalysisModal = document.getElementById('rentalAnalysisModal');
const openModalBtn = document.getElementById('openRentalAnalysis');
const openModalBtnBottom = document.getElementById('openRentalAnalysisBottom');
const closeModalBtn = document.getElementById('closeModal');

function openModal() {
    if (rentalAnalysisModal) {
        rentalAnalysisModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (rentalAnalysisModal) {
        rentalAnalysisModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
}

if (openModalBtnBottom) {
    openModalBtnBottom.addEventListener('click', openModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (rentalAnalysisModal) {
    rentalAnalysisModal.addEventListener('click', (e) => {
        if (e.target === rentalAnalysisModal) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rentalAnalysisModal && rentalAnalysisModal.classList.contains('active')) {
        closeModal();
    }
});

// Rental Analysis Form Validation
const rentalAnalysisForm = document.getElementById('rentalAnalysisForm');
const modalPhoneInput = document.getElementById('modal-phone');
const modalEmailInput = document.getElementById('modal-email');

// Phone number formatting for modal
if (modalPhoneInput) {
    modalPhoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        e.target.value = value;
    });
}

// Form validation
if (rentalAnalysisForm) {
    rentalAnalysisForm.addEventListener('submit', (e) => {
        const phone = modalPhoneInput.value.replace(/\D/g, '');
        const email = modalEmailInput.value;
        let isValid = true;
        let errorMessage = '';

        // Clear previous error styles
        modalPhoneInput.style.borderColor = '';
        modalEmailInput.style.borderColor = '';

        // Validate phone (must have exactly 10 digits)
        if (phone.length !== 10) {
            isValid = false;
            errorMessage = 'Please enter a complete 10-digit phone number.';
            modalPhoneInput.style.borderColor = '#ef4444';
            modalPhoneInput.focus();
        }

        // Validate email (must contain @)
        if (isValid && !email.includes('@')) {
            isValid = false;
            errorMessage = 'Please enter a valid email address with @.';
            modalEmailInput.style.borderColor = '#ef4444';
            modalEmailInput.focus();
        }

        // Additional email validation (must have something before and after @)
        if (isValid) {
            const emailParts = email.split('@');
            if (emailParts.length !== 2 || emailParts[0].length === 0 || emailParts[1].length < 3) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
                modalEmailInput.style.borderColor = '#ef4444';
                modalEmailInput.focus();
            }
        }

        if (!isValid) {
            e.preventDefault();
            alert(errorMessage);
        }
    });
}
