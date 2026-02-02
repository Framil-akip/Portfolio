document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Hamburger Animation
            hamburger.classList.toggle('toggle');
        });
    }

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for "View details" buttons on Projects page
    // Just alerts for now as per "Minimal JS" requirement, or could toggle visibility.
    // Given the prompt didn't ask for a modal, we'll keep it simple or just let them be visual for now.
    // I will add a simple console log to show intent.
    const detailButtons = document.querySelectorAll('.list-item button');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Ideally this would open a modal or expand the row
            // For this scope, we will just scroll to contact as a "CTA" behavior 
            // since the user wants them to "Request a demo"
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
