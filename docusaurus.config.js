// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VidyaSikha",
  tagline: `Don't let others mouth to spoil your dream`,
  favicon: "img/favicon.ico",

  url: "https://vidyasikha.github.io/",

  baseUrl: "/Notes/",

  organizationName: "Vidyasikha", // Usually your GitHub org/user name.
  projectName: "Notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          routeBasePath: "/",
        },
        blog: {
          blogTitle: "VidyaSikha Blog",
          blogDescription:
            "blog where I share information on various topics related web development",
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          blogSidebarTitle: "All our posts",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
        showLastUpdateTime: true,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "VidyaSikha",
        logo: {
          alt: "VidyaSikha Logo",
          src: "img/logo1.svg",
        },
        hideOnScroll: true,
        items: [{ to: "/blog", label: "Blog", position: "left" }],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Main Page",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notes, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
