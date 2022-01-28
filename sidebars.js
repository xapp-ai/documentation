module.exports = {
  docs: {
    ["Getting Started"]: ["getting-started"],
    Basics: [
      "basics/basics-conversational-ai",
      "basics/basics-model",
      "basics/basics-content",
    ],
    ["Dialog Management"]: [
      "dialog-manager/overview",
      "dialog-manager/conditions",
    ],
    Model: ["model/intents", "model/slots", "model/entities"],
    Content: [
      "content/handlers",
      "content/ssml",
      // "content/documents",
      //  "content/answers",
      "content/crawler",
    ],
    /*
    Channels: [
      "channels/channels",
      "channels/channel-lex",
      "channels/channel-alexa",
      "channels/channel-dialogflow",
    ], */
    Infrastructure: [
      "infrastructure/infrastructure-architecture",
      "infrastructure/infrastructure-aws",
    ],
    /*
    Integrations: [
      "integrations/integration-aws-connect",
      "integrations/integration-genesys",
    ], */
    Data: ["data/types-of-data", "data/analytics-basics"],
    Development: [
      "development/overview",
      "development/custom-handlers",
      "development/running-locally",
      "development/runtime-environment-variables",
    ],
  },
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
    ],
  },
};
