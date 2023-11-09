---
title: GraphQL API
---

The GraphQL API powers our web application, Studio, and our [CLI](../cli.md).  Management of all the resources for an assistant application are done through GraphQL.

## GraphQL 

The API can be found at https://api.xapp.ai/graphql

Authentication requires adding a header with token:

```ts
{
    headers: {
        "Content-Type": "application/json",
        "x-xapp-usertoken": token
    }
}
```

If you want to programmatically access the API, you can reuse the token used by the [CLI](/docs/development/cli)'s configuration found at `~/.xapp/cli_config`


:::important
We currently don't have a way to generate long living machine to machine tokens.  If you want want, please contact your customer support representative.
:::

## API Documentation

We provide a GraphiQL based UI within Studio at https://studio.xapp.ai/graphql.  Here you can build and test queries as well as access the documentation.

## Helpful Queries

### App Events

All app events can be access through the API and various filters can be applied to get exactly what you want.  Here is a starter query:

```graphql
query events($appId:ID!){
  app(appId:$appId) {
    events {
      total
      events {
        userId
        rawQuery
      }
    }
  }
}
```

And necessary query variables:

```json
{
  "appId":""
}

```

### App Errors

Stentor has built-in error handling that will capture errors and send them to Studio.  To query them use:

```graphql
query errors($appId:ID!){
  app(appId:$appId) {
    events(byType:["ERROR"]) {
      total
      events {
        eventTime
        sessionId
        userId
        channel
        platform
        errorCode
        errorMessage
        payload
      }
    }
  }
}
```

```json
{
  "appId":""
}
```

The above query will give you the 10 most recent errors.  The `errorMessage` contains the error message and the payload is a JSON string that also contains the error message and the stack trace.

### Exporting an App

You can programmatically export your application with the following mutation:

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

And query variables:

```json
{
  "organizationId":"",
  "appId":""
}
```

The result will contain a URL that has the content of your requested application in JSON format.  This URL is only available temporarily.

### Importing an App

Using the export format from the above app export mutation, you can then import it to an existing organization.

```graphql
mutation importApp($organizationId: ID!, $appUrl: URL!) {
  app(organizationId: $organizationId) {
    importApp(url: $appUrl) {
       appId
      organizationId
      name
    }
  }
}
```

Variables

```json
{
  "appUrl": "https://...",
  "organizationId": ""
}
```

### Creating a New App  

You can create a new app with:

```graphql
mutation createApp($input: AppInput) {
  app {
    addApp(app:$input){
      appId
      organizationId
      name
    }
  }
}
```

with variables

```json
{
  "input":{
    "name":"Name of New App",
    "organizationId": "existing-org-id",
    "templateType": "OC_STUDIO_STARTER_TEMPLATE"
  }
}
```

Where `name` and `organizationId` are the only required input parameters but more can be provided when leveraging this mutation.

### Uploading PDFs to Knowledgebase

This will upload a PDF for a specific appId to the multitenant knowledgebase.

```graphql
mutation addPDF($appId:ID!, $url:URL!, $locationId: String, $makePublic: Boolean){
  app {
    update(appId:$appId) {
      addDocumentToKnowledgebase(url:$url, locationId:$locationId, makePublic:$makePublic)
    }
  }
}
```

with variables

```json
{
  "appId": "required",
  "url":"https://publicly.available.url",
  "makePublic": true,
  "locationId": "optional"
}
```

`makePublic`