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
    const modeIcon = document.getElementById('modeIcon');

    // Load state from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
        modeIcon.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png')";
    } else {
        modeIcon.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/sun--v1.png')";
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            modeIcon.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png')";
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            modeIcon.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/000000/sun--v1.png')";
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
