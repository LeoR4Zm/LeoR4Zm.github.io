// Mobile menu toggle
const navToggle = document.querySelector('.site-nav__toggle');
const menu = document.getElementById('site-menu');

if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open');
  });
}

// Submenu accordions on mobile
document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.parentElement.classList.toggle('open');
  });
});

