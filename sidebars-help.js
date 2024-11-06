const sidebars = {
  help: [
    "getting-started",
    "get-more-leads",
    {
      type: "category",
      label: "AI",
      items: ["ai/business-description", "ai/high-value-lead", "ai/ai-faqs"],
    },
    "use-cases",
    {
      type: "category",
      label: "Installation Guides",
      items: [
        "install",
        "install/wordpress",
        "install/wix",
        "install/shopify",
        "install/squarespace",
        "install/drupal",
        "install/joomla",
        "install/godaddy",
        "install/duda",
        "install/framer",
        "install/zyro",
        "install/javascript",
        "install/voolt",
        "install/landing-page",
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
        "integrations/integration-jobber",
        "integrations/integration-service-titan",
        "integrations/integration-housecall-pro",
        "integrations/integration-lacrm",
        "integrations/integration-zapier",
      ],
    },
    {
      type: "category",
      label: "Leads",
      items: ["leads/lead-alerts", "leads/lead-capture"],
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
