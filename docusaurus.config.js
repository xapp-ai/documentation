module.exports = {
  title: "XAPP AI",
  tagline: "Documentation for XAPP AI's Optimal Conversation Studio",
  url: "https://documentation.xapp.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "xapp-ai", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "XAPP AI",
      logo: {
        alt: "XAPP AI",
        src: "img/logo.svg",
      },
      items: [
        /* {
          to: "docs/getting-started",
          activeBasePath: "docs",
          label: "Getting Started",
          position: "left",
        },
        {
          to:
            "docs/conversational-self-service-for-contact-center-intelligence",
          activeBasePath: "docs",
          label: "CSS4CCI",
          position: "left",
        }, */
        {
          to: "docs/pricing",
          label: "Pricing",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/xapp-ai/documentation/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/xapp-ai/documentation/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
