---
title:  API
---

OC Studio provides three APIs:

## GraphQL

This API is primarily used by Studio's web application and CLI.  You can access the graphical user interface at /graphql.  There you will find documentation and a method to run commands.  This is a [GraphQL](https://graphql.org/) based API which, through a single endpoint, allows queries and mutations through a query language.  You can access Studio's GraphQL UI [here](https://studio.xapp.ai/graphql).

__[Read More](/docs/development/api/graphql)__


## CMS

This API is used by the application's runtime environment to query content and also post events.  It provides end points for handler, entity, search, suggestions, and FAQ content.  

It also has a more limited version of the GraphQL API that allows you to CRUD entities, intents, handlers for a specific  It is meant for machine to machine communication and leverages a long-lived access token, which you can generate in Studio.  

__[Read More](/docs/development/api/cms)__

**Reference:** [api.xapp.ai/cms/docs](https://api.xapp.ai/cms/docs) lists every CMS endpoint; the spec is at [api.xapp.ai/cms/openapi.json](https://api.xapp.ai/cms/openapi.json).

## Partner

This API is for white-label partners that set up and manage businesses on XAPP AI for their own customers. A partner sends events to set up a business, then reads each business's status, install snippet and steps, booking link, leads and traffic. It has REST endpoints under `/partner/v1` and a read-only GraphQL endpoint at `/partner/graphql`. Both use partner keys, which partners create in Studio on their organization's **Developer Tools** page.

- **Guide:** [Partner Integration](/docs/partners/partner-integration)
- **Reference:** [api.xapp.ai/partner/docs](https://api.xapp.ai/partner/docs)
- **OpenAPI spec:** [api.xapp.ai/partner/openapi.json](https://api.xapp.ai/partner/openapi.json)
