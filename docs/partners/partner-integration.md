---
title: Partner Integration
sidebar_label: Integration
---

Our goal is to make integration with a partner's products and services as seemless as possible.  We can offer branded, and white label solutions that integrate with your APIs for lead capture, scheduling, etc.  We will then setup a bespoke runtime environment and necessary infrastructure that is specific to your services.  Your primary responsibility is send and receive the necessary events that allow us to automatically create the application and you receive the necessary information for installation. 

### Responsibility Matrix

|  Integration | XAPP  | Partner  | 
|---|---|---|
|  Partner API Integration | ✅ |   |
|  Assistant Runtime | ✅ | | 
| Assistant Management & QA |✅ | |
|  Assistant Infrastructure | ✅ | |
| Custom Templates | ✅ | | 
| Event Setup  | ✅ |  ✅ |
|  Custom Analytics Endpoint | ✅  | *Optional* | 

## Management Services

Any item related to creation, deletion and updating can be handled through integration with our APIs.  We recommend using an event style approach for communication between our services and yours.  We run on AWS and typically use AWS EventBridge for communication between our account and a partner's account.  CRMs such as Salesforce make it easy to send workflow triggered events through EventBridge.

![integration status](/img/partners/studio-partner-status-integration.png)

### Events

#### Create Subscription Event

A create subscription event is sent from your environment to ours upon either the creation or upgrade of a subscription that includes our offering.

When we receive it, we register the event in our CRM and also start the automation that creates the assistant application.

__Sample Event Payload__ 

```json
{
    "tier": "partner_tier",
    "contract_length": 1, // number of months; 1, 12, 24 are common values
    "id": "partner_customer_id",
    "website": "https://customer-site.com",
    "template": "existing_or_custom_template",
    "company_name": "Customer Name"
}
```

We receive the event in a custom partner specific event receiver that understands the tier to determine which products are required.  We then crawl the website looking for content, metadata, logos, and color scheme that we use to generate the channels that will be installed for the customer.  

We then run the generated asset through a manual quality assurance before we mark it as ready to for install.

#### Ready for Installation Event

We send a ready for installation event after we have completed the QA on the newly created assistant application and relevent channels.

This QA includes but is not limited to:

* Review of logo and color scheme to match customers website
* Review of content and any calls to action
* Review basic functionality & integrations

__Sample Event Payload__ 

```json
{
    "id": "partner_customer_id",
    "widget_snippet": "",
    "widget_key": "",
    "search_snippet": "",
    "search_key": "",
}
```

We will return all the necessary information for installation of the widget to the customer's website.  For the widget and search channels, the installation can be done through a script snippet or our Wordpress Plugin.

#### Cancellation Event

Cancellations are also all automated.  When we receive the event, we cease all automations for the assistant (such as web crawling), clean up any assets and delete any necessary residual data.

__Sample Event Payload__ 

```json
{
    "id": "partner_customer_id",
    "effective_date": "ISO-8601 of when cancellation is effective",
}
```

## Runtime Services

We define runtime services as anything that the virtual assistant will rely upon during an active session.  This can be the customers content from their website or from your APIs.

### Assistant Application

We will build a custom assistant application that is specific to and the services you offer your customers.  It is our responsibility to host and maintain the infrastructure as well as perform QA on each of the applications.  

### APIs

You, as a partner, most likely have APIs for the customer that help capture leads and facilitate scheduling.  We have abstracted workflows that we will hook up to your APIs for your customers.

### Answer Content

We pull answers to questions for users from the customers website content.  We automatically crawl and index the publically available content at a regular cadence.  This does not require any additional integrations.

## Analytic Services

Integration with your APIs will help push captured leads and scheduled appointments to your services for the customer.  Additionally, we can provide more data to the customer such as unique users and recent queries for the customer.  We can help build a custom endpoint specific to you, the partner, that you can use to query analytics for a customer.  You can then choose to display the data in your platform or however you choose.

__Example Response__

```json
{
    "partner_id": "3E7E87CB-447B-A150",
    "startDate": "2023-02-28T22:13:58-05:00",
    "endDate": "2023-03-08T03:13:55.700Z",
    "widget": {
        "totalUniqueSessions": 4,
        "totalUniqueUsers": 4,
        "queries": {
            "total": 10,
            "totalNoContent": 1,
            "topQueriesNoContent": [
                "do you have spanish speakers on staff"
            ],
            "topQueries": [
                "connect me with someone",
                "hi! i need a insurance card when i renewed it i did not get one",
            ]
        }
    }
}
```
