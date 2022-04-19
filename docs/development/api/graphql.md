---
title: Management GraphQL API
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
  "start": "2020-01-01T00:00:00Z",
  "end": "2020-01-02T00:00:00Z",
  "appId":""
}

```

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

