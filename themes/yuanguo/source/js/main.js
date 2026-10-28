(() => {
  const root = document.documentElement;
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const themeButton = document.querySelector('[data-theme-toggle]');
  if (themeButton) {
    const updateLabel = () => {
      const dark = root.dataset.theme === 'dark';
      themeButton.setAttribute('aria-label', dark ? '切换为浅色主题' : '切换为深色主题');
      themeButton.setAttribute('aria-pressed', String(dark));
      themeButton.title = dark ? '切换为浅色主题' : '切换为深色主题';
    };
    themeButton.hidden = false;
    updateLabel();
    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      save('yuanguo-theme', root.dataset.theme);
      updateLabel();
    });
  }
  const reader = document.querySelector('[data-reading-content]');
  if (!reader) return;
  const toolbar = document.querySelector('[data-reader-toolbar]');
  let size = 20;
  try {
    const stored = Number(localStorage.getItem('yuanguo-font-size'));
    if (Number.isFinite(stored) && stored >= 17 && stored <= 26) size = stored;
  } catch (_) {}
  const updateFont = () => {
    reader.style.fontSize = `${size}px`;
    document.querySelector('[data-font-value]').value = size;
    document.querySelectorAll('[data-font]').forEach(button => {
      button.disabled = Number(button.dataset.font) < 0 ? size <= 17 : size >= 26;
    });
  };
  toolbar.hidden = false;
  updateFont();
  document.querySelectorAll('[data-font]').forEach(button => button.addEventListener('click', () => {
    size = Math.max(17, Math.min(26, size + Number(button.dataset.font)));
    updateFont();
    save('yuanguo-font-size', String(size));
  }));
  const progress = document.querySelector('[data-progress]');
  const updateProgress = () => {
    const start = reader.offsetTop;
    const length = Math.max(1, reader.offsetHeight - window.innerHeight);
    const value = Math.max(0, Math.min(1, (window.scrollY - start) / length));
    progress.style.transform = `scaleX(${value})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
