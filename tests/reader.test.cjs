const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const themeRoot = path.resolve(__dirname, '../themes/yuanguo/source');

// A small DOM fixture exercises the shipped scripts without adding a browser dependency.
function loadReader(storage = new Map(), blocked = false, lang = 'zh-CN') {
  const element = extra => ({ hidden: true, style: {}, attributes: {}, handlers: {}, dataset: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, callback) { this.handlers[name] = callback; }, ...extra });
  const root = { lang, dataset: { theme: 'light' } };
  const toggle = element();
  const minus = element({ dataset: { font: '-1' } });
  const plus = element({ dataset: { font: '1' } });
  const output = element();
  const toolbar = element();
  const reader = element({ offsetTop: 400, offsetHeight: 2400 });
  const progress = element();
  const elements = { '[data-theme-toggle]': toggle, '[data-reading-content]': reader,
    '[data-reader-toolbar]': toolbar, '[data-font-value]': output, '[data-progress]': progress };
  const window = { scrollY: 0, innerHeight: 800, handlers: {}, addEventListener(name, fn) { this.handlers[name] = fn; } };
  const context = vm.createContext({ window, document: { documentElement: root,
    querySelector: selector => elements[selector], querySelectorAll: () => [minus, plus] },
    localStorage: {
      getItem(key) { if (blocked) throw Error('Storage denied'); return storage.get(key) ?? null; },
      setItem(key, value) { if (blocked) throw Error('Storage denied'); storage.set(key, value); }
    }
  });
  for (const file of ['preferences.js', 'main.js']) {
    vm.runInContext(fs.readFileSync(path.join(themeRoot, 'js', file), 'utf8'), context);
  }
  return { root, toggle, minus, plus, output, reader, progress, toolbar, window };
}

test('theme and bounded reading size persist across page loads', () => {
  const storage = new Map();
  const first = loadReader(storage);
  assert.equal(first.toggle.hidden, false);
  first.toggle.handlers.click();
  assert.equal(first.root.dataset.theme, 'dark');
  assert.equal(first.toggle.attributes['aria-label'], '切换为浅色主题');
  for (let i = 0; i < 20; i++) first.plus.handlers.click();
  assert.equal(first.reader.style.fontSize, '26px');
  assert.equal(first.plus.disabled, true);
  const second = loadReader(storage);
  assert.equal(second.root.dataset.theme, 'dark');
  assert.equal(second.reader.style.fontSize, '26px');
  for (let i = 0; i < 20; i++) second.minus.handlers.click();
  assert.equal(second.reader.style.fontSize, '17px');
  assert.equal(second.minus.disabled, true);
});

test('restricted storage and invalid preferences do not break reading controls', () => {
  const blocked = loadReader(new Map(), true);
  assert.equal(blocked.reader.style.fontSize, '20px');
  assert.doesNotThrow(() => blocked.toggle.handlers.click());
  assert.doesNotThrow(() => blocked.plus.handlers.click());
  assert.equal(blocked.reader.style.fontSize, '21px');
  const invalid = loadReader(new Map([['yuanguo-font-size', 'NaN'], ['yuanguo-theme', 'unexpected']]));
  assert.equal(invalid.reader.style.fontSize, '20px');
  assert.equal(invalid.root.dataset.theme, 'light');
});

test('English theme controls keep English labels when toggled and restored', () => {
  const storage = new Map();
  const first = loadReader(storage, false, 'en');
  assert.equal(first.toggle.attributes['aria-label'], 'Switch to dark theme');
  first.toggle.handlers.click();
  assert.equal(first.toggle.attributes['aria-label'], 'Switch to light theme');
  assert.equal(first.toggle.title, 'Switch to light theme');
  const restored = loadReader(storage, false, 'en');
  assert.equal(restored.root.dataset.theme, 'dark');
  assert.equal(restored.toggle.attributes['aria-label'], 'Switch to light theme');
});

test('reading progress is clamped at the start and end of the chapter', () => {
  const ui = loadReader();
  assert.equal(ui.progress.style.transform, 'scaleX(0)');
  ui.window.scrollY = 1200;
  ui.window.handlers.scroll();
  assert.equal(ui.progress.style.transform, 'scaleX(0.5)');
  ui.window.scrollY = 5000;
  ui.window.handlers.scroll();
  assert.equal(ui.progress.style.transform, 'scaleX(1)');
});

test('small muted text meets AA contrast on both light theme backgrounds', () => {
  const css = fs.readFileSync(path.join(themeRoot, 'css/style.css'), 'utf8').split(':root[data-theme=dark]')[0];
  const color = name => css.match(new RegExp('--' + name + ':(#[0-9a-f]{6})'))[1];
  const luminance = hex => {
    const channels = hex.slice(1).match(/../g).map(c => parseInt(c, 16) / 255)
      .map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  for (const background of ['paper', 'surface']) {
    const light = luminance(color(background));
    const dark = luminance(color('muted'));
    const contrast = (Math.max(light, dark) + .05) / (Math.min(light, dark) + .05);
    assert.ok(contrast >= 4.5, `${background} muted contrast ${contrast.toFixed(2)} must be >= 4.5`);
  }
});
