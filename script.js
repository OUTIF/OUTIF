// ==================== //
// FOUC Fix — Theme     //
// ==================== //
// This runs immediately. We add .no-transition to <html> so the
// correct theme is applied instantly with zero flash, then remove
// it 50ms later so normal CSS transitions resume.

(function () {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    document.documentElement.classList.add('no-transition');
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.documentElement.classList.remove('no-transition');
        }, 50);
    });
})();

// ==================== //
// EmailJS Init         //
// ==================== //

(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('k5w0XFL2xGykKbg9o');
    }
})();

// ==================== //
// Theme Toggle         //
// ==================== //

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Set correct icon on load
updateThemeIcon(htmlElement.getAttribute('data-theme') || 'light');

themeToggle.addEventListener('click', () => {
    const current = htmlElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== //
// Mobile Menu Toggle   //
// ==================== //

const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when a nav link is tapped
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when tapping outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on swipe up (mobile UX)
let touchStartY = 0;
navMenu.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
navMenu.addEventListener('touchend', (e) => {
    if (touchStartY - e.changedTouches[0].clientY > 50) closeMenu();
}, { passive: true });

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== //
// Project Filter       //
// ==================== //

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards  = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const match = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
                card.style.display = match ? 'block' : 'none';
                if (match) card.style.animation = 'fadeIn 0.5s ease-in';
            });
        });
    });
}

// ==================== //
// Navbar Shadow Scroll //
// ==================== //

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    navbar.style.boxShadow = scrollTop > 50
        ? '0 4px 12px var(--shadow)'
        : '0 2px 10px var(--shadow)';
}, { passive: true });

// ==================== //
// Scroll Animations    //
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .info-card').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== //
// Dynamic Year         //
// ==================== //

document.querySelectorAll('.footer-bottom p').forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, new Date().getFullYear());
});

// ==================== //
// Form Input Animation //
// ==================== //

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.01)';
    });
    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ==================== //
// Active Nav Link      //
// ==================== //

window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ==================== //
// Console Message      //
// ==================== //

console.log('%cWelcome to Yousif Hussein\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #4b5563; font-size: 14px;');