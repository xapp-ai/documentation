const sidebars = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "Basics",
      items: [
        "basics/basics-conversational-ai",
        "basics/basics-model",
        "basics/basics-content",
      ],
    },
    {
      type: "category",
      label: "Dialog Management",
      items: ["dialog-manager/overview", "dialog-manager/conditions"],
    },
    {
      type: "category",
      label: "Model",
      items: [
        "model/intents",
        "model/slots",
        "model/entities",
        "model/input-context",
        "model/model-best-practices",
      ],
    },
    {
      type: "category",
      label: "Content",
      items: [
        "content/handlers",
        "content/responses",
        "content/response-groups",
        "content/tags",
        // "content/documents",
        // "content/answers",
        "content/crawler",
      ],
    },
    {
      type: "category",
      label: "Infrastructure",
      items: [
        "infrastructure/infrastructure-architecture",
        "infrastructure/infrastructure-aws",
      ],
    },
    {
      type: "category",
      label: "Channels",
      items: [
        "channels/channels",
        "channels/channel-lex",
        //"channels/channel-alexa",
        //"channels/channel-dialogflow",
        "channels/channel-chat-widget",
        "channels/channel-intelligent-search",
        "channels/slack-through-lex",
      ],
    },
    /* {
      type: "category",
      label: "Security",
      items: ["security/security"],
    }, */
    {
      type: "category",
      label: "Data",
      items: [
        "data/types-of-data",
        "data/analytics-basics",
        "data/data-retention",
      ],
    },
    {
      type: "category",
      label: "Studio",
      items: [
        "studio/architectures",
        "studio/opportunity-alerts",
        "studio/autocomplete-suggestions",
        "studio/single-tenancy",
        "studio/export-import",
        "studio/organizations-applications-members",
        "studio/governance",
      ],
    },
    {
      type: "category",
      label: "Partners",
      items: ["partners/partner-integration", "partners/partner-tools"],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "development/getting-started",
        "development/custom-application",
        "development/custom-handlers",
        "development/context",
        "development/storage",
        "development/compiling-templated-responses",
        "development/tokens",
        "development/channels",
        "development/running-locally",
        "development/runtime-environment-variables",
        "development/cli",
        "development/api",
        "development/arachne-cli",
        "development/development-faqs",
      ],
    },
  ],
  aws: {
    ["AWS"]: [
      "infrastructure/aws/usage-instructions",
      "infrastructure/aws/free-trial",
      "infrastructure/aws/secrets-manager-setup",
      "infrastructure/aws/description-of-services",
      "infrastructure/aws/iam-roles",
      "infrastructure/aws/common-errors-in-stack-deployment",
      "infrastructure/aws/verify-deployment",
      "infrastructure/aws/iam-policy-for-deployment",
      "infrastructure/aws/single-tenancy",
    ],
  },
};

module.exports = sidebars;

/*
module.exports = {
  docs: {

    Integrations: [
      "integrations/integration-aws-connect",
      "integrations/integration-genesys",
    ],

    Studio: ,
  },

}; */
