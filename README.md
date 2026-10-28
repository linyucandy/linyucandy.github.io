# yuanguo · 小说与故事

yuanguo 的作家主页与作品阅读站，基于 Hexo 8 和自定义 EJS 主题。**林屿是《糖是凉的》的主人公，不是作者署名。**

正式地址：https://linyucandy.github.io/

## 本地预览

需要 Node.js 22 或更新版本。

```sh
npm ci
npm run build
npm test
npm run server
```

浏览器打开 http://localhost:4000/ 。`public/` 是构建产物，不应提交。更换主题或移除页面后，先运行 `npm run clean` 再构建。

## 内容维护

| 内容 | 位置 |
| --- | --- |
| 作者介绍 | `source/about/index.md` |
| 求职简历 | `source/resume/index.md` |
| 手记文章 | `source/_posts/*.md` |
| 作品目录与开放章节 | `source/_data/sugar.yml` |
| 前两章试读 | `source/read/sugar/01/index.md`、`02/index.md` |
| 首页与作品页排版 | `themes/yuanguo/layout/` |
| 颜色、排版与移动布局 | `themes/yuanguo/source/css/style.css` |
| 原创 SVG 封面 | `themes/yuanguo/source/images/cover-sugar.svg` |

新增手记可执行 `npx hexo new post "文章标题"`，编辑生成的 Markdown；可在 front matter 添加 `description` 和 `note_type`。现有三篇为根据作品阅读稿整理的导读，页面已标明来源，未冒充作者原始自述。

前两章逐段取自本地《糖是凉的》终校阅读稿。其他章节仅展示标题，未公开全文。开放新章节时，在 `source/read/` 添加 `layout: reading` 的页面，填写 `chapter`、`volume`、`reading_minutes`、`previous`、`next`，再更新作品目录和导航。当前的正文指纹检查保存在 `tests/chapter-hashes.json`，只有经确认的原文修订才应更新指纹。

阅读支持深浅主题、17–26px 字号和上下章切换；偏好仅存于访客浏览器。未启用 JavaScript 时仍能浏览和阅读，无第三方字体、图片或运行时脚本依赖。

求职简历位于 `/resume/`，署名统一为 yuanguo。历史资料据旧简历整理，追加本人确认的 2021—2023 年洲斯物联软件经理、2023 年至今南京沃旭 UWB / 无线 / EPD 系统开发经历。工作和项目内容维护于 `source/resume/index.md`；页面与打印排版分别位于 `themes/yuanguo/layout/resume.ejs` 和 `themes/yuanguo/source/css/resume.css`。页面提供“打印 / 保存 PDF”按钮，也可使用浏览器打印快捷键。原始简历及私人联系方式未收录到公开站点。

## GitHub Pages 发布

工作流位于 `.github/workflows/pages.yml`，推送到 `main` 后使用 Node 22 和 `npm ci` 构建，运行测试，然后通过 GitHub 官方 Pages Actions 发布 `public/`。

1. 将本次功能分支的变更合并到仓库 `main`。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 查看仓库 **Actions** 中的 `Deploy author site to GitHub Pages`；也可手动运行工作流。
4. 工作流部署成功后，访问正式地址。

工作流使用 GitHub 自动提供的权限，无需创建或提交个人访问令牌。若仓库仍用旧的“从分支发布”模式，需要切换上述 Source，否则会继续展示旧页面。

## 验证

```sh
npm run check
```

测试检查作者与路由、试读原文 SHA-256、渲染后的正文、所有生成 HTML 的内部页面和资源链接，以及阅读偏好、受限存储、字号边界、阅读进度和文字对比度。偏好测试运行实际浏览器脚本，使用轻量 DOM fixture；不替代真实浏览器的视觉验收。

需要从经确认的新阅读稿重新提取试读时，可离线运行 `python tools/import-samples.py "阅读稿路径"`，此操作会更新前两章及其指纹。部署状态须以 GitHub Actions 的成功记录为准，本地构建成功并不代表已发布。
