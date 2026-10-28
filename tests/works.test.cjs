const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = route => fs.readFileSync(path.resolve(__dirname, '../public', route, 'index.html'), 'utf8');

test('both novels are discoverable from the homepage and bookshelf', () => {
  for (const route of ['', 'works']) {
    const page = html(route);
    assert.match(page, /逆命纹章/);
    assert.match(page, /href="\/works\/defiant-sigil\/"/);
    assert.match(page, /href="\/works\/sugar-is-cold\/"/);
  }
});

test('the fantasy introduction identifies its protagonist and offers no unpublished reading links', () => {
  const page = html('works/defiant-sigil');
  for (const fact of ['逆命纹章', 'yuanguo', '林烬', '苏瑾璃', '铁无涯', '灰烬之醒', '学院逆鳞', '帝国风暴', '天命终章']) assert.ok(page.includes(fact), fact);
  assert.match(page, /作品介绍.*暂未开放试读/);
  assert.match(page, /property="og:image"[^>]*cover-niming\.svg/);
  assert.doesNotMatch(page, /href="\/read\//);
  assert.match(page, /id="story"/);
});
