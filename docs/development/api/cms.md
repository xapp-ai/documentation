---
title: CMS API
---

The CMS API has both RESTful components and a GraphQL endpoint.  It is the main source of content and events push for your assistant application and allows you to programmatically CRUD intents, handlers, and entities for a specific application.  

The base URL for OC Studio is https://api.xapp.ai but this will depend on your environment, for example if you have a single tenant instance.

:::info
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3454397-e7916289-8f94-4c96-89bf-cef081d50205?action=collection%2Ffork&collection-url=entityId%3D3454397-e7916289-8f94-4c96-89bf-cef081d50205%26entityType%3Dcollection%26workspaceId%3Daf98e5eb-4de7-4539-b698-06cc23716e64)

We have all the requests documented on Postman if you want to test them out.  You will need to generate a token for your application and add that as a variable along with the appId.  If you are using a single-tenant version, you will need to update your API.
:::

:::info
You can see a full implementation of this API in the source for the [Studio Service](https://github.com/stentorium/stentor/blob/master/packages/stentor-service-studio/src/StudioService.ts)
:::


## Authorization

Authorization is required to access data from this endpoint.  A token can be generated from within Studio under Application --> Developer --> Tokens.

Generate a new token and append it as a header on each request in the form:

```
Authorize | Bearer {token}
```

### Organization Level Token

For situations where you are serving multiple apps from the same organization from the same runtime environment, you can use an organization token.  If you use this you can specify on the Handler content endpoints the appId you are requesting by appending the query parameter `?appId={appId}`

## Headers

You will need to use the `Authorize` header and `Content-Type | application-json` header.

```js
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
```

## Handler Content

At runtime, the [handler](../../content/handlers) contains information about how to respond to certain incoming requests. 

### GET /cms/handler

Get a list of all available handlers.

### GET /cms/handler/\{id\}

Get a specific handler by ID.

## App Content

### GET /cms/app

Get information about the app.

## Entity Content

### GET /cms/entity

Get a list of entities.

### GET /cms/entity/\{entityId\}

Get a specific entity.

## Search

### GET /cms/search

Search for provided text through query string `?question="{text}"`, for example `/cms/search/question="my query"`.

#### Optional Filter Location ID

Add an optional query parameter `locationId` to filter by a specific location.  In order to use this, you must have documents with this field set.  

```
?question="{text}"&locationId="{locationId}"
```

## GET /cms/rag

### GET /cms/faq/query

Search within FAQs.

## Events

### PUT /cms/app/events

Put runtime events to your assistant application.

__[Read More](/docs/development/api/runtime-events)__

## Suggestions

### GET /cms/suggestions

Get autocomplete suggestions, you must provide query parameters `key=` and `queryText=`.  Key is from the respective channel the suggestions are being served from.  Additionally, you can filter by types, `type=INTENT,FAQ` will just return model and FAQ based suggestions while omitting HISTORICAL.  Excluding `type=` defaults to returning all three.

## GraphQL

### POST /cms/graphql

An identical API with our dedicated [GraphQL](/docs/development/api/graphql) endpoint, the one found at `/cms/graphql` expect with more limited access.  Since the token used for authentication only allows you access to a specific application, you are only allowed to CRUD (create, read, update, delete) intents, handlers, & entities.

This endpoint is meant for programmatic management of your models within Studio.  For example you can update a list of entities based on an external catalog of data at regular intervals or based on modifications to the catalog.
