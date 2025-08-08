// Toggle transparent header on hero and solid on scroll
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const hero = document.querySelector('#heima');
  if (!header) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
    },
    { root: null, threshold: 0.3 }
  );

  // Any section with .transparent-trigger will make header transparent when in view
  document.querySelectorAll('.transparent-trigger').forEach((sec) => {
    observer.observe(sec);
  });

  // Reveal headings on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.6 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // Cards reveal (about)
  const cards = document.querySelectorAll('.about-card');
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => cardObserver.observe(card));

  // Feature cards reveal
  const features = document.querySelectorAll('.feature-card');
  features.forEach((el) => cardObserver.observe(el));

  // Package overlay toggles
  document.querySelectorAll('.package').forEach((pkg) => {
    const toggle = pkg.querySelector('.pkg-toggle');
    const close = pkg.querySelector('.pkg-close');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isOpen = pkg.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        const overlay = pkg.querySelector('.pkg-overlay');
        if (overlay) overlay.setAttribute('aria-hidden', String(!isOpen));
      });
    }
    if (close) {
      close.addEventListener('click', () => {
        pkg.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        const overlay = pkg.querySelector('.pkg-overlay');
        if (overlay) overlay.setAttribute('aria-hidden', 'true');
      });
    }
  });

  // Mobile hamburger
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('primary-nav');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      })
    );
  }
});