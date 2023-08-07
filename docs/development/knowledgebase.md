---
title: Integrations with a Knowledgebase
sidebar_label: Knowledgebase Integration
---

A knowledgebase service can be used when your NLU is unable to match to one of your known intents and returns an input unknown.  This gives then gives another opportunity to respond to the user with something from your knowledgebase.

The `Assistant()` builder has a method `withKnowledgeBaseService()` that accepts an object that implements the `KnowledgeBaseService` and which intent should be used to then query the service with.


```typescript
    const assistant = new Assistant()
        .withKnowledgeBaseService(studioService, {
            // Intent ID for your fallback to determine if we call  KnowledgeBase
            matchIntentId: "InputUnknown",
            // For KnowledgeBase results we will generate a request with the following ID
            setIntentId: "OCSearch"
        })
```
You can write your own KnowledgeBaseService or leverage some of our service we provide below.

## OC Studio's Knowledgebase

OC Studio has built-in knowledgebase features to search your crawled documents and your FAQs. 

The StudioService, which can be used to query all of Studio's runtime APIs, implements the necessary `KnowledgebaseService` interface that is required to pass to the `Assistant()` builder.

```typescript
import { StudioService } from "stentor-service-studio";

//... the rest of your imports

// Create your StudioService
const studioService: StudioService = new StudioService({ appId: process.env.STUDIO_APP_ID, token: process.env.STUDIO_TOKEN });


const assistant = new Assistant()

    // Add this following to your builder
    .withKnowledgeBaseService(studioService, {
        // Intent ID for your fallback to determine if we call  KnowledgeBase
        matchIntentId: "InputUnknown",
        // For KnowledgeBase results we will generate a request with the following ID
        setIntentId: "OCSearch"
    })
    // ... remaining functions
    .lambda();
```

## Kendra

Lex & Lex V2 both support native integrations with Amazon Kendra through the AMAZON.KendraSearchIntent, you can also call Kendra independently.

```typescript

import { KendraService } from "@xapp/stentor-service-kendra";

const kendraService: KendraService = new KendraService();

// Return the handler for running in an AWS Lambda function.
const assistant = new Assistant()
    .withKnowledgeBaseService(kendraService, {
        // Intent ID for your fallback to determine if we call  KnowledgeBase
        matchIntentId: "InputUnknown",
        // For KnowledgeBase results we will generate a request with the following ID
        setIntentId: "OCSearch"
    })
```

## Handler Configuration

In the above examples, the configuration requires a `setIntentId` field, which is the handler that can receive requests with knowledge base information.

You can leverage our [Question Answering Handler](https://github.com/xapp-ai/question-answering-handler), either by itself or through extending it.
