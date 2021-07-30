---
title: Pricing
slug: /pricing
---

## Features

|                         |    Pro    | Enterprise |
| :---------------------- | :-------: | :--------: |
| Contacts / month        | 45,000\*  |   Custom   |
| Document Crawls / month |  4,000\*  |   Custom   |
| Utterance Test Executions / month | 20,000\*  |   Custom   |
| Content Management      |    ✅     |     ✅     |
| Optimization Workflow   |    ✅     |     ✅     |
| Channels                | Unlimited | Unlimited  |
| Handlers                | Unlimited | Unlimited  |
| Intents                 | Unlimited | Unlimited  |
| Entities                | Unlimited | Unlimited  |

\* There will be [external platform costs](pricing#external-platform-costs) associated with these features.

## Support

|                   |              Pro               |    Enterprise    |
| :---------------- | :----------------------------: | :--------------: |
| Customer Success  | Customer Success Manager (CSM) |  Dedicated CSM   |
| Technical Support |   Self-service, Email, Phone   | Pro + Custom SLA |

## Price

|                                 |      Pro           |  Enterprise        |
| :------------------------------ | :----------------: | :----------------: |
| OC Studio Subscription / month  |    $ 3,999\*\*     |        Custom      |
| Estimated AWS Fees / month      |    $2,000\*\*\*     |        Custom      |
| Estimated Monthly Total / month |  **$5,999\*\*\***  |        Custom      |
| Estimated Cost per Contact      |    $0.13\*\*\*     |        Custom      |
| 30 Free Trial Available         |      ✅            |  ✅  (Through Pro) |

\*\* Billed annually.  Monthly price for monthly billing is $4799

\*\*\* Conservative estimate based on 45,000 contacts / month and Kendra Enterprise Edition

## Definitions

- **Contact** - A contact is any instance where the end user contacts the application and includes all subsequent requests that follow the initial contact.  It is counted by the number of unique session IDs, where the session ID is provided by the integrated channel.  

- **Page Crawl** - A page crawl accessing, reading, analyzing, and storage of derived metadata for a single unique URL.  It does not include additional crawls for URLs found while analyzing the content of the page, those would be additional crawls.     

- **Utterance Test Execution** - A test execution consists of a single execution where a test case utterance is used to call the external NLU and the results of which are then compared to the expected results of the test case.  

## External Platform Costs

In most use cases for OC Studio, you will need to provide external services such as NLU, compute, and storage capabilities.

For example, when using AWS Lex as your NLU, you will be charged additionally based on the [Lex pricing](https://aws.amazon.com/lex/pricing/) for each text or voice request that are required for utterance testing and conversations with end users.

**These external costs are not included in your subscription to OC Studio and you have sole responsibility for them.**
