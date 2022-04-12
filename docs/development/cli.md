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

## Information

You can query general descriptive information about an application by application ID.

```bash
xapp info {appId}
```

## Importing

### Importing from Dialogflow

You can import an existing project from Dialogflow ES.  

### Prerequisites 

* Studio Organization
* GCP Service Account with Dialogflow Admin permissions credentials JSON file

```bash
xapp import -p d -c {path-to-JSON-credentials-file} -o {orgId-for-import}
```

:::warning
Some Dialogflow features are not supported and will not be imported.
:::