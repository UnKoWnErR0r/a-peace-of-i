document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.width = '100%';
        }, index * 2000);
    });

    // Scroll Reveal Effect for Sections
    document.addEventListener("scroll", function() {
        const sections = document.querySelectorAll('.section-box');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    });
});

// Dummy functions for login and signup buttons
function googleLogin() {
    alert("Google Login functionality to be implemented!");
}

function signUp() {
    alert("Sign Up functionality to be implemented!");
}
