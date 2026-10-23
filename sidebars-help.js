const sidebars = {
  help: [
    "getting-started",
    "get-more-leads",
    "get-xapp-ai",
    {
      type: "category",
      label: "AI",
      items: ["ai/business-description", "ai/high-value-lead", "ai/ai-faqs"],
    },
    "use-cases",
    {
      type: "category",
      label: "Analyst",
      link: { type: "doc", id: "analyst" },
      items: ["analyst/getting-access", "analyst/sample-queries"],
    },
    {
      type: "category",
      label: "Installation Guides",
      // Same order as help/install.md: WordPress (featured), site builders A–Z, hosted pages, then developer guides
      items: [
        "install",
        "install/wordpress",
        "install/drupal",
        "install/duda",
        "install/framer",
        "install/godaddy",
        "install/hubspot",
        "install/joomla",
        "install/shopify",
        "install/site123",
        "install/squarespace",
        "install/webflow",
        "install/weebly",
        "install/wix",
        "install/zyro",
        "install/voolt",
        "install/landing-page",
        "install/javascript",
        "install/react",
        "install/vue",
        "install/angular",
        "install/svelte",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/create-google-business-profile"],
    },
    {
      type: "category",
      label: "Channels",
      items: [
        /*"channels", */
        "channels/chat-widget",
        "channels/form-widget",
        "channels/intelligent-search",
        "channels/reserve-with-google",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations",
        "integrations/call-connect",
        "integrations/integration-jobber",
        "integrations/integration-service-titan",
        "integrations/integration-housecall-pro",
        "integrations/integration-fieldpulse",
        "integrations/integration-serviceminder",
        "integrations/integration-lacrm",
        "integrations/integration-zapier",
        "integrations/integration-gohighlevel",
      ],
    },
    {
      type: "category",
      label: "Leads",
      items: ["leads/lead-capture"],
    },
    "live-chat/overview",
    /*
    {
      type: "category",
      label: "Live Chat",
      items: ["live-chat/overview"],
    }, */
    {
      type: "category",
      label: "Videos",
      items: ["videos/chat", "videos/search", "videos/gbm"],
    },
    {
      type: "category",
      label: "Training-Series",
      items: [
        "training-series/welcome",
        "training-series/crawling",
        "training-series/content",
        "training-series/styling-chat",
        "training-series/deployment",
        "training-series/metrics",
      ],
    },
    "technology",
    "faqs",
  ],
};

module.exports = sidebars;
