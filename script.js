/*==================== toggle icon navbar ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections link ==================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    // Sticky navbar
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon navbar when clicking navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/*==================== scroll reveal ==================== */
if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.home-content, .heading, .home-img, .education-row, .project-box, .slider, .contact form');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

/*==================== typing animation ==================== */
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.multiple-text')) {
        new Typed('.multiple-text', {
            strings: ['Junior Developer', 'High School Student'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
});

function sendEmail() {
    // Pull data from a form
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const messageContent = document.getElementById('messageContent').value;

    // Generate an email message
    const emailBody = `Full Name: ${fullName}%0AEmail Address: ${emailAddress}%0AMobile Number: ${mobileNumber}%0A%0AMessage:%0A${messageContent}`;

    // Open the email client
    window.location.href = `mailto:kiadtisakpreechanon05@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
}
