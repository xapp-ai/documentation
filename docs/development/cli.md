---
title: CLI
---

The CLI, command line interface, is a helpful tool that allows you to perform some management functions and additional utilities related to your assistant application.  The full source code is available on [github.com/xapp-ai/xapp-cli](https://github.com/xapp-ai/xapp-cli).

## Installation

```bash
npm install -g @xapp/cli
```

Confirm your installation with

```bash
xapp -V
```

:::warning
Currently only Windows WSL2 and macOS are supported.  The behavior on Windows Shell is unknown.
:::

## Authenticating

Before running any command, you will need to first authenticate

```bash
xapp login
```

And while not required, you can also logout

```bash
xapp logout
```

You can confirm who you are with:

```bash
xapp whoami
```

## Configuration

You can configure the CLI to point to different OC Studio environments.

Recommended approach is to modify the configuration JSON file found at `~/.xapp/cli_config` and then adding different profiles.

For example, if you want to add a profile called `stentor`, fill in the parameters under `

```json
{
  "profiles": {
    "default": {},
    "stentor": {
      "basePath": "",
      "authPath": "",
      "clientId": "",
      "path": "auth",
      "tokenPath": "oauth/token"
    }
  },
  "created": "2021-02-23T22:30:17.345Z",
  "modified": "2021-11-09T17:17:32.694Z",
  "currentProfile": "stentor"
}
```

Then, to use this profile run:

```bash
xapp set -p stentor
```

To reset back to the default, run:

```bash
xapp set -p default
```

### Single Tenant Configuration

Here is a sample configuration used for configuring the CLI for single-tenancy.

```
{
  "profiles": {
    "default": {},
    "single-tenant": {
      // API base path, this is the same as the apiUrl in you single-tenant instance /config.js file
      "basePath": "",
      // In Cognito, this is the Cognito Domain for your user pool, or it is the auth.domain in your /config.js
      // this must start with https:// or the browser might now open to log you in 
      "authPath": "https://{cognito}.amazoncognito.com",
      // Client ID for the app client in Cognito
      "clientId": "",
      // Client Secret for the app client in Cognito
      "clientSecret": "",
      // This should be oauth2/token
      "tokenPath": "oauth2/token",
      // Single-tenant scope is different from default, you need at least @xapp/cli 1.8.3 to use this, otherwise it won't work
      "scope": "xappai/api",
      "token": {
        "access_token": "",
        "refresh_token": "",
        "expires_in": 86400,
        "token_type": "Bearer"
      }
    },
  },
  "created": "2021-02-23T22:30:17.345Z",
  "modified": "2021-11-09T17:17:32.694Z",
  "currentProfile": "single-tenant"
}
```

You will need to remove the comments when copy pasting the above example.

## Information

You can query general descriptive information about an application by application ID.

```bash
xapp info {{appId}}
```

## Generating Types

When developing, it can be helpful to have access to the intents requests and their possible slot values.  You can use the CLI to generate a TypeScript file with all the requests that are specific to your interaction model.

```bash
xapp types -h "/*! Copyright (c) 2022, XAPP AI */" -f requests.ts -m 50 ./src/models  {{appId}}
```

The above command will generate a file named `requests.ts` at the `./src/models` directory with a header at the top to prevent any lint errors.  The `-m 50` states to generate a type based on an entities values up to a max of 50 values, otherwise it will set the type as `string`.  Optional fields are `-h`, `-f`, and `-m`.

## Exporting

You can export an existing app in to one JSON file.  Exporting can be helpful for creating backups or in preparation for importing either as a new app or to another environment.

```bash
xapp export <directory> [appId] 
```

For example: 

```bash
xapp export ./temp appId 
```

Will export your app to a directory ./temp.  It will make a new directory in that directory `{organizationId}-{appId}-{timestamp}`

### Exporting with Channels

You can also export with all the channel information by adding flag `-c`

```bash
xapp export <directory> [appId] -c
```

This will create another directory `/channels` with independent JSON files for each channel.




### Prerequisites 

* Studio Organization
* GCP Service Account with Dialogflow Admin permissions credentials JSON file

```bash
xapp import -p d -c {path-to-JSON-credentials-file} -o {orgId-for-import}
```

:::warning
Some Dialogflow features are not supported and will not be imported.
:::