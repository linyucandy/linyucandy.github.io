const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../public');
const resume = () => fs.readFileSync(path.join(root, 'resume/index.html'), 'utf8');

test('resume uses yuanguo and includes the confirmed current employment', () => {
  const html = resume();
  const visibleText = html.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));
  assert.match(html, /<h1[^>]*>yuanguo/);
  assert.match(html, /履历更新于 2026 年 10 月/);
  assert.doesNotMatch(html, /2021(?:\.04)?\s*[—–-]\s*至今/);
  for (const fact of ['南京沃旭', '2023—至今', '2021—2023', '软件经理', 'UWB', 'EPD', 'BMC', 'OpenBMC', 'Yocto', 'IPMI', 'MSP430', 'ESC/POS', '中山大学', '行政管理', 'QE/PE', '终端固件', '基站/网关', '无线协议', 'STM32F407', 'STM32H743', 'Apollo', 'Nordic', 'OM6626', 'OM6629', 'DW1000', 'DW3000', 'MK8000']) {
    assert.ok(visibleText.includes(fact), 'Missing resume fact: ' + fact);
  }
  assert.doesNotMatch(html, /href="[^\"]*\.(?:docx?|zip)"|href="tel:/);
});

test('resume entry points and section anchors lead to actual content', () => {
  const html = resume();
  for (const route of ['', 'about']) {
    assert.match(fs.readFileSync(path.join(root, route, 'index.html'), 'utf8'), /href="\/resume\/"/);
  }
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(match => match[1]));
  for (const anchor of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor[1]), anchor[1]);
  assert.match(html, /\/css\/resume\.css/);
  assert.doesNotMatch(html, /property="og:image"[^>]*cover-sugar/);
  assert.match(html, /data-print-resume/);
});

test('English resume preserves the confirmed career and provides language and print navigation', () => {
  const englishPath = path.join(root, 'resume/en/index.html');
  assert.ok(fs.existsSync(englishPath), 'English resume must be generated');
  const html = fs.readFileSync(englishPath, 'utf8');
  const visibleText = html.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));
  assert.match(html, /<html lang="en"/);
  assert.match(html, /<h1[^>]*>yuanguo/);
  for (const fact of ['2023–Present', '2021–2023', 'Software Manager', 'Terminal firmware', 'base stations', 'wireless protocols', 'STM32F407', 'STM32H743', 'Apollo', 'Nordic', 'OM6626', 'OM6629', 'DW1000', 'DW3000', 'MK8000', 'OpenBMC', 'Yocto', 'IPMI', 'MSP430', 'ESC/POS', 'Sun Yat-sen University', 'Administrative Management']) {
    assert.ok(visibleText.includes(fact), 'Missing English resume fact: ' + fact);
  }
  const chinese = resume();
  assert.match(chinese, /href="\/resume\/en\/"[^>]*hreflang="en"/);
  assert.match(html, /href="\/resume\/"[^>]*hreflang="zh-CN"/);
  for (const lang of ['en', 'zh-CN']) {
    for (const page of [chinese, html]) {
      assert.match(page, new RegExp('<link rel="alternate" hreflang="' + lang + '"'));
    }
  }
  for (const label of ['Print / Save PDF', 'Skip to content', 'Main navigation', 'Switch to dark theme']) assert.ok(html.includes(label), label);
  assert.match(html, /data-print-resume/);
  assert.match(html, /\/css\/resume\.css/);
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(match => match[1]));
  for (const anchor of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor[1]), anchor[1]);
  assert.doesNotMatch(html, /郭述远|href="tel:|href="[^\"]*\.(?:docx?|zip)"/);
});
