---
title:  API
---

OC Studio provides two primary APIs:

## GraphQL

This API is primarily used by Studio's web application and CLI.  You can access the graphical user interface at /graphql.  There you will find documentation and a method to run commands.  This is a [GraphQL](https://graphql.org/) based API which, through a single endpoint, allows queries and mutations through a query language.  You can access Studio's GraphQL UI [here](https://studio.xapp.ai/graphql).

__[Read More](/docs/development/api/graphql)__


## CMS

This API is used by the application's runtime environment to query content and also post events.  It provides end points for handler, entity, search, suggestions, and FAQ content.  

It also has a more limited version of the GraphQL API that allows you to CRUD entities, intents, handlers for a specific  It is meant for machine to machine communication and leverages a long-lived access token, which you can generate in Studio.  

__[Read More](/docs/development/api/cms)__