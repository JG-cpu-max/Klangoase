document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  if (!toggle || !navUl) return;

  toggle.addEventListener('click', function () {
    const isOpen = navUl.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  // Menü schließen wenn ein Link geklickt wird
  navUl.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navUl.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
});
