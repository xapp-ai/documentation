---
title: Runtime Environment Variables
---

Environment variables provide a way to configure the runtime without needing to redeploy.

| Variable        |      Description      |   Values |
| ------------- | :-----------: | -----: |
| STENTOR_LOG_LEVEL      | Configurable logging | "debug", "info", "warn", "error" (default) |
| STUDIO_TOKEN     |   Access token to OC Studio    |  Generated token specific to the APP ID |
| STUDIO_SECRET_NAME |  Optional, name of the secret within AWS Secrets Manager to use     |    The name of the secret, see below for more information |
| STUDIO_APP_ID | The application ID within studio | String |
| STUDIO_BASE_URL | Configure the Studio Service to point to another environment | Defaults to "https://api.xapp.ai" |

## Using AWS Secrets Manager

AWS Secrets Manager allows you to securely store API credentials, access tokens, and other sensitive information for use at runtime.  This is the recommended approach for production environments as opposed to storing this type of information in environment variables.

If you provide `STUDIO_SECRET_NAME` as an environment variable, then before every request all the key value based information from the provided secret name will be loaded as environment variables to the runtime and can be access from:

```js
process.env[`NAME_OF_VALUE_IN_SECRET`]
```

:::caution
Do not print out this information to the console.
:::

:::important
Make sure your runtime Lambda has the proper IAM policy to read the secret.
:::