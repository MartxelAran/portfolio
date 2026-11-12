const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mainNav = document.querySelector<HTMLElement>('.main-nav');

if (menuButton && mainNav) {
  menuButton.hidden = false;
  const setMenu = (open: boolean, restoreFocus = false) => {
    menuButton.setAttribute('aria-expanded', String(open));
    mainNav.dataset.open = String(open);
    const label = menuButton.querySelector('.menu-label');
    if (label) label.textContent = open ? 'Cerrar' : 'Menú';
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mainNav.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !mainNav.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
}

const pagePath = (pathname: string) => {
  if (pathname.endsWith('/')) return `${pathname}index.html`;
  return pathname.endsWith('.html') ? pathname : `${pathname}.html`;
};
const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('.main-nav a, .case-sidebar a')].filter((link) => {
  const target = new URL(link.href);
  return pagePath(target.pathname) === pagePath(window.location.pathname) && target.hash;
});

if ('IntersectionObserver' in window && sectionLinks.length) {
  const targets = sectionLinks.map((link) => document.getElementById(new URL(link.href).hash.slice(1))).filter((target): target is HTMLElement => target !== null);
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks) {
        if (new URL(link.href).hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-5% 0px -60% 0px', threshold: 0 });
  targets.forEach((target) => observer.observe(target));
}

const progressBar = document.querySelector<HTMLElement>('[data-reading-progress]');
if (progressBar) {
  let scheduled = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('load', updateProgress);
  updateProgress();
}
