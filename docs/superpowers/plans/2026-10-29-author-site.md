# yuanguo Author Site Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成可维护的作家主页、作品介绍及前两章试读。
**Architecture:** 复用 Hexo，自定义 EJS 主题；Markdown 内容生成静态页面，浏览器脚本仅增强阅读体验。
**Tech Stack:** Hexo 8、EJS、CSS、原生 JavaScript、Node test、GitHub Actions。
**Spec:** `docs/superpowers/specs/2026-10-29-author-site-design.md`

## Global Constraints
- 作者为 yuanguo，林屿仅为小说主人公。
- 复用本地未提交的 Hexo 环境，不覆盖其他项目，不增加运行依赖。
- 前两章来自终校阅读稿；不公开创作聊天与内部制作资料。
- 使用 GitHub Pages，而非 Sites 托管。

## Review Focus
- 所有内部链接和资源在最终生成目录里存在。
- 未开放章节无伪链接，第二章无不存在的下一章。
- 无 JavaScript 或本地存储不可用时仍能阅读。
- 小屏无横向溢出；键盘能访问导航与阅读控制。
- CI 使用锁文件安装、构建、测试，再上传静态产物。

## Tasks
### 1. Site shell and content
Files: `_config.yml`, `themes/yuanguo/layout/*`, `themes/yuanguo/source/*`, `source/**`, `tests/site.test.cjs`.
- [x] 写生成产物的署名、路由、链接和原文一致性测试，先构建默认站并观察失败。
- [x] 实现主页、书架、作品页、作者页、手记与试读 Markdown。
- [x] 实现共享导航、主题、响应式排版、SVG 封面与阅读设置。
- [x] `npm run build` 与 `npm test` 均通过。

### 2. Publishing and handoff
Files: `.github/workflows/pages.yml`, `README.md`, `package.json`.
- [x] 配置 GitHub Pages Actions，补充新增文章和试读维护说明。
- [ ] 浏览器检查首页、作品、试读、移动布局及偏好持久化（环境没有可用浏览器，见下方验证限制）。
- [x] 复查差异、运行完整验证，报告预览位置与发布状态。

## Execution notes
直接在用户指定目录的功能分支实施，保留现有未提交内容。用户已同意实施，不重复请求计划批准。先完成本地成品，验证后再处理远端发布。

## Verification record
- 默认站的署名、试读和链接检查先失败；新站构建后通过。
- `npm run check`：7/7 测试通过，包括试读原文指纹与每段渲染、全部 HTML 内链和资源、主题与字号持久化、存储受限降级、字号边界和阅读进度。
- 独立代码审查发现浅色辅助文字对比度不足；补充回归测试观察失败，将 `--muted` 从 `#74776b` 调深至 `#676b5f` 后 7/7 通过。
- 预览 HTTP 200：`http://localhost:4000/`。
- 浏览器 QA 限制：cua 的 iab 不可用，应用和浏览器清单为空；未声称完成桌面或手机的真实视觉验收。响应式规则已实现，偏好功能以实际脚本的 Node VM 测试验证。
- Git 网络：默认 OpenSSL TLS 连接失败，使用单次 `http.sslBackend=schannel` 成功读取远端（保留证书校验且未修改持久 Git 配置）。远端 main 比起始本地多一个修改旧 Hello World 页简介的提交，本次未覆盖远端。
- 发布状态：自动部署流程已就绪；本次未推送或切换远端 Pages 设置。
