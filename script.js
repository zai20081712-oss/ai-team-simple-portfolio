document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Dynamic Footer Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Contact Form Validation & Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const formSuccess = document.getElementById('formSuccess');

            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            messageInput.classList.remove('error');
            formSuccess.style.display = 'none';

            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name.';
                nameInput.classList.add('error');
                isValid = false;
            }

            // Validate Email
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal) {
                emailError.textContent = 'Please enter your email address.';
                emailInput.classList.add('error');
                isValid = false;
            } else if (!emailRegex.test(emailVal)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('error');
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please type a message.';
                messageInput.classList.add('error');
                isValid = false;
            }

            // If valid, show success message and clear form
            if (isValid) {
                formSuccess.style.display = 'block';
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
});
