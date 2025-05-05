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
// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
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
