const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const chapterHashes = require('./chapter-hashes.json');
const root = path.resolve(__dirname, '..', 'public');
const read = route => fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');

test('author pages identify yuanguo and expose all main destinations', () => {
  const home = read('');
  assert.match(home, /yuanguo/);
  assert.doesNotMatch(home, /John Doe|Welcome to Hexo|Hello World/);
  for (const route of ['works', 'works/sugar-is-cold', 'about', 'archives', 'read/sugar/01', 'read/sugar/02']) {
    assert.ok(read(route).includes('yuanguo'), route);
  }
  assert.match(read('about'), /林屿.*主人公/);
});

test('sample chapters preserve the final reading manuscript and stop after chapter two', () => {
  for (const n of ['01', '02']) {
    const markdown = fs.readFileSync(path.resolve(__dirname, '../source/read/sugar', n, 'index.md'), 'utf8');
    const chapter = markdown.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
    assert.equal(createHash('sha256').update(chapter).digest('hex'), chapterHashes[n], 'Original manuscript fingerprint');
    const html = read('read/sugar/' + n);
    for (const paragraph of chapter.split(/\n\s*\n/).filter(p => p.trim() && !p.trim().startsWith('#') && p.trim() !== '---')) {
      assert.ok(html.includes(paragraph.trim()), 'Missing source paragraph: ' + paragraph.slice(0, 35));
    }
  }
  assert.match(read('read/sugar/01'), /href="\/read\/sugar\/02\/"/);
  assert.doesNotMatch(read('read/sugar/02'), /href="\/read\/sugar\/03\/"/);
});

test('generated pages contain no broken local links or missing assets', () => {
  let count = 0;
  function visit(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith('.html')) {
        count++;
        const html = fs.readFileSync(file, 'utf8');
        for (const match of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
          if (/^(https?:|mailto:|data:|tel:|\/\/)/.test(match[1])) continue;
          const url = decodeURIComponent(match[1].split('?')[0]);
          let target = url.startsWith('/') ? path.join(root, url) : path.resolve(path.dirname(file), url);
          if (url.endsWith('/')) target = path.join(target, 'index.html');
          assert.ok(fs.existsSync(target), `${path.relative(root, file)} -> ${url}`);
        }
      }
    }
  }
  visit(root);
  assert.ok(count >= 9, 'Expected a complete author and reading site');
});
