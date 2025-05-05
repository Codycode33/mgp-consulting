// Scroll fade-ins
/*
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fader.classList.add('visible');
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check localStorage on load
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true; // Turn slider ON
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
