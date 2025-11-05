// Initialize WOW after DOM is ready (script tag is 'defer')
document.addEventListener('DOMContentLoaded', () => {
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  } else {
    // Fallback: if WOW failed to load, remove 'wow' classes to avoid invisible content
    document.querySelectorAll('.wow').forEach(el => el.classList.remove('wow'));
  }
});

