---
title: Partner Integration
sidebar_label: Integration
---

Our goal is to make integration with a partner's products and services as seemless as possible.

# Responsibility Matrix

|  Integration |   |   |   |   |
|---|---|---|---|---|
|  Partner APIs |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

High Level Timeline  

## Runtime Services

We define runtime services as anything that the virtual assistant will rely upon during an active session.  This can be the customers content from their website or from your APIs.

### Answer Content

We pull answers to questions for users from the customers website content.  We automatically crawl and index the publically available content at a regular cadence.  This does not require any additional integrations.

### APIs

You, as a partner, most likely have APIs for the customer that help capture leads and facilitate scheduling.  We have abstracted workflows that we will hook up to your APIs for your customers.

## Management Services

Any item related to creation, deletion and updating can be handled through integration with our APIs.  We recommend using an event style approach 

## Analytic Services

Integration with your APIs will help push captured leads and scheduled appointments to your services for the customer.  Additionally, we can provide more data to the customer such as unique users and recent queries for the customer.  We can help build a custom endpoint specific to you, the partner, that you can use to query analytics for a customer.


