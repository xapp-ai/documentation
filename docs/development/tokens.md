---
title: Tokens
---

:::warning
Do not share your tokens.
:::

A token is required to call the [runtime content management API](/docs/development/api/graphql.md).  It is used to pull content and send events to your application when running in the [hybrid architecture](/docs/studio/architectures#hybrid) where the application is on your infrastructure.

Tokens are specific to an app and they can only access that app's content.

### Generating a Token

:::important
You are only able to have two tokens active at one time.  This allows you to rotate your tokens for a specific application's runtime environment.
:::

You can generate a token within Studio under a specific app then Developer --> Tokens.

When you generate the token, you will only see it once on generation.  You can still view a masked version of the token in Studio and when it was created.

### Deleting a Token

You can delete a token within Studio under a specific app then Developer --> Tokens.

### Safe Storage

The token is secret and should not be shared publically.  For AWS, we recommend (and require for some use cases) storage within Amazon Secrets Manager.  You can find instructions [here](/docs/infrastructure/aws/secrets-manager-setup).
