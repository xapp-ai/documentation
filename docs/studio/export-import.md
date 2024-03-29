---
title: Exporting & Importing
---

You can export your app for backups, local execution, making copies, or for migrating between Studio environments.

## Export File

The same file format is used during export and then import.  The file is JSON format and contains app, all the handlers, all the intents, and all the entities.  

__It contains:__

* App Information
* Handlers
* Intents
* Entities

__It does not contain:__

* Channels, you should set these up new however some you can copy and paste the JSON to a new channel
* FAQs, which can be exported independently as a CSV.
* Analytics, which also can be exported independently as a CSV.
* Documents, from website crawled are not exported however they can be recrawled.

## Exporting

You can quickly export from an app's settings page.

![app export](/img/studio/studio-app-export.png)

Clicking the button to the left of the delete button will start the export and download of the JSON file.

### Exporting with the CLI

You can also export with the [XAPP CLI](/docs/development/cli)

```bash
xapp export [options] <directory> [appId]
```

For example:

```bash
xapp export ./temp appId
```

The above will export an application with ID `appId` to a directory `./temp`

### Exporting with GraphQL

You can use the `/graphql` GUI on Studio or you can use this for programmatic exporting as part of a broader script.

```graphql
mutation exportApp($appId:ID!, $organizationId:ID!){
  app(organizationId:$organizationId) {
    update(appId:$appId) {
      exportApp {
        url
      }
    }
  }
}
```

## Importing

:::important

Importing requires you have the exported JSON file hosted on a public URL.

:::

### Importing with the CLI

To import an application JSON file to an existing organization:

```bash
xapp import --organizationId <organizationId> [uri]
```

You will need an existing organization to import the application and you must host the JSON file to a publically available URL.

### Importing with GraphQL

You can use the `/graphql` GUI on Studio or you can use this for programmatic importing as part of a broader script.

```graphql
mutation importApp($organizationId: ID!, $appUrl: URL!, $overwrite: Boolean, $modelOnly: Boolean) {
  app(organizationId: $organizationId) {
    importApp(url: $appUrl, overwrite:$overwrite, modelOnly:$modelOnly) {
      appId
      organizationId
      name
    }
  }
}
```

With required variables:

```json
{
  "organizationId": "",
  "appUrl": ""
}
```


## Sample File

You can see a full export here: https://templates.xapp.ai/assistant.json 

Below, is a partial version of the above to help illustrate the format.

```json
{
  "app": {
    "templateType": "OC_STUDIO_STARTER_TEMPLATE",
    "icon": "https://assets.xapp.ai/prod/xapp-ai/assistant/icons/bf7bdf1c-d790-4003-9ba6-7ee475f1ffb9.png",
    "largeBanner": "https://assets.xapp.ai/prod/xapp-ai/assistant/banners/1920x1080/415fa5de-7128-434c-9e96-050dc4aa8475.png",
    "banner": "https://assets.xapp.ai/prod/xapp-ai/assistant/banners/415fa5de-7128-434c-9e96-050dc4aa8475.png",
    "largeIcon": "https://assets.xapp.ai/prod/xapp-ai/assistant/icons/512x512/bf7bdf1c-d790-4003-9ba6-7ee475f1ffb9.png",
    "keywords": [
      "XAPP",
      "XAPPmedia",
      "XAPP AI"
    ],
    "mediumIcon": "https://assets.xapp.ai/prod/xapp-ai/assistant/icons/192x192/bf7bdf1c-d790-4003-9ba6-7ee475f1ffb9.png",
    "smallIcon": "https://assets.xapp.ai/prod/xapp-ai/assistant/icons/108x108/bf7bdf1c-d790-4003-9ba6-7ee475f1ffb9.png",
    "examplePhrases": [],
    "name": "Assistant"
  },
  "intents": [ 
    {
      "slots": [
        {
          "name": "email",
          "nlu": {
            "lex-connect": {
              "type": "AMAZON.EmailAddress"
            }
          }
        }
      ],
      "intentId": "Email",
      "name": "📧Email",
      "contexts": [
        {
          "name": "expecting_email"
        }
      ],
      "utterancePatterns": [
        "my email is ${email}"
      ]
    }
  ],
  "handlers": [
    {
      "content": {
        "ByeIntent": [
          {
            "outputSpeech": {
              "displayText": "${BYE}",
              "ssml": "${BYE}",
              "suggestions": []
            },
            "segments": {
              "BYE": [
                {
                  "segment": {
                    "displayText": "Goodbye",
                    "ssml": "Goodbye"
                  }
                },
                {
                  "segment": {
                    "displayText": "Bye",
                    "ssml": "Bye"
                  }
                }
              ]
            }
          }
        ]
      },
      "data": {},
      "slots": [],
      "intentId": "ByeIntent",
      "langCode": "en-US",
      "name": "👋 Bye",
      "type": "ConversationHandler",
      "utterancePatterns": [
        "adios",
        "bye bye",
        "ciao",
        "farewell",
        "goodbye",
        "see ya",
        "see you",
        "so long",
        "bye"
      ]
    }
  ],
  "entities": [
    {
      "values": [
        {
          "name": "mr"
        },
        {
          "name": "mrs"
        },
        {
          "name": "ms",
          "synonyms": [
            "ms",
            "miss"
          ]
        },
        {
          "name": "dr"
        },
        {
          "name": "esq"
        },
        {
          "name": "hon"
        },
        {
          "name": "jr"
        },
        {
          "name": "sir"
        }
      ],
      "displayName": "👩‍⚕️Titles",
      "entityId": "TITLES"
    }
  ]
}
```
