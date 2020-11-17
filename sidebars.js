module.exports = {
  docs: {
    ["Getting Started"]: ["getting-started"],
    Basics: [
      "basics/basics-intents",
      "basics/basics-entities",
      "basics/basics-handlers",
      "basics/basics-crawler",
      // "basics/basics-documents",
      // "basics/basics-faqs",
    ],
    Infrastructure: [
      "infrastructure/infrastructure-architecture",
      "infrastructure/infrastructure-aws",
    ],
    /* Channels: [
      "channels/channel-lex",
      "channels/channel-alexa",
      "channels/channel-dialogflow",
    ],
    Integrations: [
      "integrations/integration-aws-connect",
      "integrations/integration-genesys",
    ], */
  },
  aws: {
    ["AWS"]: [
      "infrastructure/aws/secrets-manager-setup",
      "infrastructure/aws/description-of-services",
      "infrastructure/aws/iam-roles",
      "infrastructure/aws/verify-deployment",
    ],
  },
};
