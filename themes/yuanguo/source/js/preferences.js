// Apply the saved theme before CSS paints. Reading remains usable when storage is blocked.
(() => {
  try {
    const theme = localStorage.getItem('yuanguo-theme');
    if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
  } catch (_) { /* Private or restricted storage: use the default paper theme. */ }
})();
