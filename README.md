# dengemo.com

站点 [dengemo.com](https://dengemo.com) 是我的个人博客。
本站基于Dar-Xs的个人博客 [darxs.com.cn](https://darxs.com.cn/)为蓝本构建，鸣谢@[Dar-Xs](https://github.com/Dar-Xs)的鼎力相助，没有他就没有本站。
站点由 Docusaurus 构建, 托管在 Netlify 上。

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Translation

Translate the original text into the corresponding language in this folder: `i18n`
