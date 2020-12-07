---
title: Setting up Slack through AWS Lex
---

:::tip

Slack can be a quick and easy way to expose your newly created AWS Lex based virtual agent internally to your organization or externally to a limited audience.

:::

### Requirements

- AWS Lex Bot (deployed through Cloudformation)
  - With console access for configuring the integration with Slack
- Slack account
  - With administrative access to setup a new Slack application

### Setup

Through an AWS Lex bot, you can expose it's functionality through other channels, including Slack. The integration will allow you to converse with the Bot as if it is another user within your Slack workspace.

AWS provides excellent documentation on how to set it up. You can find them [here](https://docs.aws.amazon.com/lex/latest/dg/slack-bot-association.html). Assuming you already have a Lex bot and Slack account, you can skip to step three found [here](https://docs.aws.amazon.com/lex/latest/dg/slack-bot-assoc-create-app.html).

### External Documentation

- [AWS - Integrating an Amazon Lex Bot with Slack](https://docs.aws.amazon.com/lex/latest/dg/slack-bot-association.html)
