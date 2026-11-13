type Theme = 'light' | 'dark' | 'system';
const storageKey = 'portfolio-theme';
const isTheme = (value: string | null | undefined): value is Theme => value === 'light' || value === 'dark' || value === 'system';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;
const choices = [...document.querySelectorAll<HTMLButtonElement>('[data-theme-choice]')];
let preference: Theme = isTheme(root.dataset.theme) ? root.dataset.theme : 'system';

const applyTheme = () => {
  const resolved = preference === 'system' ? (systemTheme.matches ? 'dark' : 'light') : preference;
  root.dataset.theme = preference;
  root.dataset.resolvedTheme = resolved;
  const background = getComputedStyle(root).getPropertyValue('--editor-background').trim();
  if (background) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
  choices.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preference)));
  document.querySelectorAll('[data-theme-name]').forEach((label) => { label.textContent = resolved === 'dark' ? 'Eclipse oscuro' : 'Eclipse claro'; });
};

choices.forEach((button) => button.addEventListener('click', () => {
  if (!isTheme(button.dataset.themeChoice)) return;
  preference = button.dataset.themeChoice;
  applyTheme();
  try { localStorage.setItem(storageKey, preference); } catch { /* La elección se aplica también sin almacenamiento. */ }
}));

systemTheme.addEventListener('change', () => { if (preference === 'system') applyTheme(); });
window.addEventListener('storage', (event) => {
  if (event.key === storageKey || event.key === null) {
    preference = isTheme(event.newValue) ? event.newValue : 'system';
    applyTheme();
  }
});
window.addEventListener('pageshow', () => {
  try {
    const saved = localStorage.getItem(storageKey);
    preference = isTheme(saved) ? saved : 'system';
  } catch { /* Mantener la preferencia de esta página. */ }
  applyTheme();
});
applyTheme();
