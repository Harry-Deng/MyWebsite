// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yimo DENG",
  tagline: "Carpe Diem", // TODO: 换成你的slogan
  favicon: "img/site/favicon.ico",

  // Set the production url of your site here
  url: "https://dengemo.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Harry-Deng", // Usually your GitHub org/user name.
  projectName: "MyWebsite", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Harry-Deng/MyWebsite/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Harry-Deng/MyWebsite/tree/main",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Yimo DENG",
        // logo: {
        //   alt: "Logo",
        //   src: "img/site/logo_black.svg",
        //   srcDark: "img/site/logo_white.svg",
        // },
        items: [
          { to: "/blog", label: "Blogs", position: "left" },
          { to: "/Project", label: "Projects", position: "left" },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Doc",
          // },
          {
            href: "https://github.com/Harry-Deng",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Find me",
            items: [
              {
                label: "Github",
                href: "https://github.com/Harry-Deng",
              },
              {
                label: "Discord",
                href: "https://discord.gg/",
              },
            ],
          },
          {
            title: "Exchange Links",
            items: [
              {
                label: "Qiongpeng KONG",
                href: "https://kqp1227.github.io/",
              },
              {
                label: "Ruohan Xiong",
                href: "https://darxs.com.cn/en/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Yimo DENG · 备案号曾在此 · Built with Docusaurus · Powered by Netlify`,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
