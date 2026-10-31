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

test('the entrepreneurship note is discoverable and clearly separated from actual career history', () => {
  const page = html('notes/linyu-device-doctor');
  for (const phrase of ['创作幕后', '概念策划', '小说人物', '并非作者的创业履历']) assert.ok(page.includes(phrase), phrase);
  assert.doesNotMatch(page, /本站整理的作品导读，依据《糖是凉的》阅读稿编写/);
  for (const route of ['', 'archives', 'about']) assert.ok(html(route).includes('/notes/linyu-device-doctor/'), route);
});

test('the sequel and Same Star have distinct introductions and covers without publishing drafts', () => {
  const additions = [
    ['sugar-is-cold-2', '糖是凉的2', 'cover-sugar-2.svg', ['林屿', '乔宁', '创作中']],
    ['the-same-star', '同一颗星', 'cover-same-star.svg', ['何长庚', '梁昭', '初稿完成']]
  ];
  for (const [slug, title, cover, facts] of additions) {
    const route = 'works/' + slug;
    assert.ok(fs.existsSync(path.resolve(__dirname, '../public', route, 'index.html')), title + ' introduction missing');
    const page = html(route);
    for (const fact of [title, 'yuanguo', ...facts]) assert.ok(page.includes(fact), fact);
    assert.ok(page.includes('/images/' + cover));
    assert.match(page, /id="story"/);
    assert.match(page, /暂未开放试读/);
    assert.doesNotMatch(page, /href="\/read\//);
    assert.doesNotMatch(page, /FANTASY|奇幻小说|从灰石镇/);
    assert.ok(page.includes('property="og:image" content="https://linyucandy.github.io/images/' + cover + '"'));
    const image = fs.readFileSync(path.resolve(__dirname, '../public/images', cover), 'utf8');
    assert.match(image, /viewBox="0 0 420 590"/);
    assert.ok(image.includes(title));
    assert.ok(image.includes('yuanguo'));
    for (const entry of ['', 'works', 'about']) assert.ok(html(entry).includes('/' + route + '/'), entry + ' missing ' + slug);
    assert.ok(html('works').includes('/images/' + cover));
  }
  assert.doesNotMatch(html('works/the-same-star'), /1900\s*万|第17项|原帖\s*404/);
});
