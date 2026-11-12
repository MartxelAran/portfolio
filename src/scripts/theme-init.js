// Se ejecuta en <head>, antes de pintar el contenido y sin esperar al módulo de interacción.
(() => {
  const root = document.documentElement;
  let preference = 'system';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') preference = saved;
  } catch {
    // La web sigue funcionando si el navegador bloquea el almacenamiento.
  }
  const resolved = preference === 'system'
    ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : preference;
  root.dataset.theme = preference;
  root.dataset.resolvedTheme = resolved;
  root.classList.add('js');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#1e1e1e' : '#ffffff');
})();
