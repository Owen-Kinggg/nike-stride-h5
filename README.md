# H5 Web Page

这是一个 Vite + React 静态页面项目，页面入口是根目录的 `APP.jsx`，通过 `src/main.jsx` 挂载到页面中。

## 本地预览

```bash
npm install
npm run dev
```

打开终端显示的本地地址，例如 `http://localhost:5173`。

## 构建静态文件

```bash
npm run build
```

构建结果会生成在 `dist/` 目录。项目已经在 `vite.config.js` 中设置了 `base: "./"`，所以构建后的资源路径适合部署到 GitHub Pages。

## 发布到 GitHub Pages

本仓库已经包含 `.github/workflows/deploy.yml`。推送到 `main` 分支后，GitHub Actions 会自动构建并发布 `dist/`。

首次使用时需要在 GitHub 仓库里开启 Pages：

1. 打开仓库的 `Settings`。
2. 进入 `Pages`。
3. 在 `Build and deployment` 的 `Source` 中选择 `GitHub Actions`。
4. 推送代码到 `main` 分支。
5. 等待 `Actions` 里的 `Deploy to GitHub Pages` 工作流完成。

发布完成后，页面地址通常是：

```text
https://<你的 GitHub 用户名>.github.io/<仓库名>/
```

如果仓库名是 `<你的 GitHub 用户名>.github.io`，页面地址通常是：

```text
https://<你的 GitHub 用户名>.github.io/
```
