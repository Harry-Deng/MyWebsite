# dengemo.com

站点 [dengemo.com](https://dengemo.com) 是我的个人博客、玩具和一些笔记。
站点由 Docusaurus 构建, 托管在 Netlify 上, 
构建状态: 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e62cdcbc-1862-42a8-bb23-3aa2203003ab/deploy-status)](https://app.netlify.com/sites/darxs/deploys)

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
