---
title:  API
---

OC Studio provides two primary APIs, Management and Runtime.   GraphQL & RESTful JSON.  

__Management__ - GraphQL - This API is primarily used by Studio's web application.  You can access the graphical user interface at /graphql.  There you will find documentation and a method to run commands.  This is a [GraphQL](https://graphql.org/) based API which, through a single endpoint, allows queries and mutations through a query language.  You can access Studio's GraphQL UI [here](https://studio.xapp.ai/graphql).


__Runtime__ - RESTful - This API is used by the application's runtime environment to query content and also post events.  For more information about this API, please read [here](/docs/development/api/runtime).