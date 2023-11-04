// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yimo DENG",
  tagline: "Dare to face the Xs.", // TODO: 换成你的slogan
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
          editUrl: "https://github.com/Dar-Xs/darxs-blog/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Dar-Xs/darxs-blog/tree/main",
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
        logo: {
          alt: "DarXs Logo",
          src: "img/site/logo_black.svg",
          srcDark: "img/site/logo_white.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/portfolio", label: "Portfolio", position: "left" },
          {
            href: "https://github.com/Dar-Xs/darxs-blog",
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
                href: "https://discord.gg/YbgrhdmQ9F",
              },
            ],
          },
          {
            title: "Friend",
            items: [
              {
                label: "DarXs 微分",
                href: "https://darxs.com.cn/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Yimo DENG · Built with Docusaurus · Powered by Netlify`,
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
