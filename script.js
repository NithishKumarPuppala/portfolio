// Theme toggle with persistence
(function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') body.classList.add('theme-light');
  function updateIcon() {
    if (!toggle) return;
    const isLight = body.classList.contains('theme-light');
    toggle.textContent = isLight ? '🌞' : '🌙';
    toggle.setAttribute('aria-label', isLight ? 'Toggle dark mode' : 'Toggle light mode');
  }
  if (toggle) {
    updateIcon();
    toggle.addEventListener('click', () => {
      body.classList.toggle('theme-light');
      localStorage.setItem('theme', body.classList.contains('theme-light') ? 'light' : 'dark');
      updateIcon();
    });
  }
})();

// Mobile nav
(function () {
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('primary-nav');
  if (!btn || !list) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    list.classList.toggle('show');
  });
  list.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      list.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    })
  );
})();

// Footer year
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();


