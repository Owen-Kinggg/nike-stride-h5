# H5 Web Page

这个目录已经整理成一个可以部署的 React H5 网页项目。页面入口是 `APP.jsx`。

## 本地预览

```bash
npm install
npm run dev
```

打开终端显示的本地地址，例如 `http://localhost:5173`。

## 生成可部署文件

```bash
npm run build
```

构建结果会生成在 `dist/` 目录。

## 发布成别人能访问的网址

推荐用 Vercel、Netlify 或 Cloudflare Pages：

1. 把整个项目上传到 GitHub 仓库。
2. 在 Vercel / Netlify / Cloudflare Pages 中导入这个仓库。
3. 构建命令填 `npm run build`。
4. 输出目录填 `dist`。
5. 部署完成后平台会给你一个公开网址。

也可以直接把 `npm run build` 生成的 `dist/` 上传到静态网站托管服务。

## 生成二维码

拿到公开网址后，用任意二维码生成工具生成二维码即可。微信、草料二维码、Vercel 分享页或浏览器插件都可以生成。
