module.exports = {
  title: "XAPP AI",
  tagline: "Documentation for XAPP AI's Optimal Conversation Studio",
  url: "https://documentation.xapp.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "xapp-ai", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  plugins: [
    "./plugins/inject-widget",
    "./plugins/inject-search",
    [
      "@docusaurus/plugin-content-docs",
      // This is to support the advanced documentation
      {
        id: "docs",
        path: "docs",
        routeBasePath: "docs",
        sidebarPath: "./sidebars-adv.js",
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "XAPP AI",
      logo: {
        alt: "XAPP AI",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "https://xapp.ai/product",
          label: "Product",
          position: "left",
        },
        {
          to: "https://xapp.ai/pricing",
          label: "Pricing",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
        {
          to: "https://studio.xapp.ai/",
          label: "Login",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "External Links",
          items: [
            {
              label: "XAPP AI",
              to: "https://xapp.ai",
            },
            {
              label: "Github",
              to: "https://github.com/xapp-ai",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XAPP AI, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "help",
          path: "help",
          routeBasePath: "help",
          sidebarPath: require.resolve("./sidebars-help.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/xapp-ai/documentation/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/xapp-ai/documentation/edit/main/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  clientModules: [
    require.resolve(
      "./node_modules/@xapp/chat-widget-components/dist/index.css"
    ),
  ],
};
