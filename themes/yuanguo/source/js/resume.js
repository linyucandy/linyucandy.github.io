(() => {
  const button = document.querySelector('[data-print-resume]');
  if (!button) return;
  button.hidden = false;
  button.addEventListener('click', () => window.print());
})();
