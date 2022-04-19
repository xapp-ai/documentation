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
        //"channels/channel-lex",
        //"channels/channel-alexa",
        //"channels/channel-dialogflow",
        "channels/channel-chat-widget",
        // "channels/channel-intelligent-search",
        "channels/slack-through-lex",
      ],
    },
    {
      type: "category",
      label: "Data",
      items: ["data/types-of-data", "data/analytics-basics"],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "development/getting-started",
        "development/custom-application",
        "development/custom-handlers",
        "development/tokens",
        "development/channels",
        "development/storage",
        "development/compiling-templated-responses",
        "development/running-locally",
        "development/runtime-environment-variables",
        "development/cli",
        "development/api",
      ],
    },
    {
      type: "category",
      label: "Studio",
      items: [
        "studio/organizations-applications-members",
        "studio/governance",
        "studio/architectures",
        "studio/single-tenancy",
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
