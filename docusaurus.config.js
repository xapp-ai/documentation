const remarkSnippet = require("./plugins/install-guides/remark-snippet");

// What the agent install guides' {{tags}} block shows on our help pages; ?appId= fills in YOUR_APP_ID.
// The same three tags as chat-widget-core's mcpDiscovery and stentor-api's agentTags: change all three together.
const XAPP_TAGS = `<link rel="mcp-server" href="https://agentic.xapp.ai/YOUR_APP_ID/mcp">
<link rel="mcp-manifest" href="https://agentic.xapp.ai/YOUR_APP_ID/.well-known/mcp/manifest.json">
<link rel="mcp-server-card" href="https://agentic.xapp.ai/YOUR_APP_ID/mcp/server-card">`;

// What the install guides' {{snippet}} block shows on our help pages.
const XAPP_SNIPPET = `<!-- Chat -->
<script
  id="xapp-js"
  src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
></script>
<!-- Form / Scheduler -->
<script
  id="xapp-form-js"
  src="https://form.xapp.ai/xapp-form-widget.js?key=YOUR_FORM_KEY"
></script>`;

module.exports = {
  title: "XAPP AI",
  tagline: "Documentation for XAPP AI's Optimal Conversation Studio",
  url: "https://documentation.xapp.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "xapp-ai", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  // ```mermaid code blocks render as diagrams (the partner setup flow).
  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [
    "./plugins/inject-widget",
    "./plugins/install-guides",
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
          to: "/help/install",
          label: "Installation Guides",
          position: "left",
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
          title: "Resources",
          items: [
            {
              label: "Support",
              to: "/help/support",
            },
            {
              label: "Install",
              to: "/help/install",
            },
            {
              label: "Install on Wordpress",
              to: "/help/install/wordpress",
            },
            {
              label: "Advanced Docs",
              to: "/docs/getting-started",
            },
          ],
        },

        {
          title: "XAPP AI",
          items: [
            {
              label: "xapp.ai",
              to: "https://xapp.ai/",
            },
            {
              label: "Pricing",
              to: "https://xapp.ai/pricing/",
            },
            {
              label: "Terms of Service",
              to: "https://xapp.ai/terms-service/",
            },
            {
              label: "Privacy Policy",
              to: "https://xapp.ai/privacy-policy/",
            },
          ],
        },
        {
          title: "External Links",
          items: [
            {
              label: "API Status",
              to: "https://status.xapp.ai/",
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
          remarkPlugins: [[remarkSnippet, { snippet: XAPP_SNIPPET, tags: XAPP_TAGS }]],
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
    require.resolve("@xapp/chat-widget-components/dist/index.css"),
  ],
};
