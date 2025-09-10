// Accesibilidad: menú hamburguesa y foco
const menuBtn = document.getElementById('menu-btn');
const navCollapse = document.getElementById('navbarNav');

if (menuBtn && navCollapse) {
  menuBtn.addEventListener('click', () => {
    navCollapse.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', navCollapse.classList.contains('show'));
  });
}

// Navegación por teclado para menú
if (navCollapse) {
  navCollapse.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navCollapse.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }
  });
}
