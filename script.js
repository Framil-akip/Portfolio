document.addEventListener('DOMContentLoaded', () => {
    // Page load transition
    document.body.classList.add('loaded');

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
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
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Chatbot Logic ---
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const optionBtns = document.querySelectorAll('.option-btn');

    if (chatbotToggle && chatbotWindow && chatbotMessages) {
        const responses = {
            ai: "We have over 50+ AI projects ranging from Computer Vision to NLP. You can view them in our catalog!",
            iot: "Our IoT projects feature hardware-software integration with Arduino, ESP32, and Raspberry Pi. View the full list in the catalog!",
            web: "We develop modern full-stack web applications using MERN and other advanced architectures. Check out our web archive!",
            guidance: "Our guidance includes source code, project reports, PPTs, and viva preparation. We ensure you're fully ready.",
            contact: "You can reach our experts directly via WhatsApp at +91 8526711688 for immediate assistance.",
            specs: "This project follows IEEE standards and includes detailed technical documentation and architecture overview.",
            delivery: "Standard delivery for academic projects is 3-7 days, including customization and documentation sessions."
        };

        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            const tooltip = document.querySelector('.chatbot-tooltip');
            if (tooltip) {
                tooltip.style.display = chatbotWindow.classList.contains('active') ? 'none' : 'block';
            }
        });

        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                const userText = btn.textContent;

                // Add user message
                addMessage(userText, 'user');

                // Add bot response with delay
                setTimeout(() => {
                    addMessage(responses[type], 'bot');
                }, 600);
            });
        });

        function addMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${sender}`;
            msgDiv.textContent = text;
            chatbotMessages.appendChild(msgDiv);

            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items if desired (optional)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) otherItem.classList.remove('active');
            // });
            item.classList.toggle('active');
        });
    });

    // Lazy Loading polyfill support (optional, since we use native loading="lazy")
    // Native lazy loading is supported in 90%+ of modern browsers.
});
