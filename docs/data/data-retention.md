---
title: Data Retention
sidebar_label: Retention
---

## Application Data Retention

All application data for defining information related to an application, it's corresponding metadata, all related content in handlers, intents, entities, and frequently asked questions (FAQs) are maintained permanently and not automatically deleted.

These data are backed up continuously for you. 

## Event Data Retention

All event driven data that is used for analytics and application optimizations is stored in two locations, fast access and cold storage.  The fast access data is available through the web application for three months.  The cold storage data is stored indefinitely.

These data are backed up at an hourly rate while in fast access storage.

## Customer Responsibility

Only if you require further retention for your event data, you do not have any responsibility for backing up or exporting the data. 

## Exporting Data

All application data can be exported to a JSON file from the application's settings page.  

All event driven data can be exported programmatically through the [GraphQL API](../development/api/graphql.md).

