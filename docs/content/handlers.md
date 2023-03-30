---
title: Handler Basics
sidebar_label: Handler
---

A handler is a unit of logic and content that handles a specific step in a conversational flow. It typically starts with an entry point, a specific intent from the user, and it facilitates the interaction, determining how to respond to the user's input.  It is the state of the dialog manager.  

A handler can return content for responses and can also help with:

- Slot Filling
- Contextual Help / Content
- Flow Routing

The primary components of a handler are the type, content, redirects & forwards,

## Content

### Response

The response contains the content that will be spoken, displayed or both by the assistant depending on the capability of the user's current channel.  

Responses include not just the message that is communicated but also suggestion chips and display templates (think lists or cards).  You can define when a response is selected through conditions.

## Redirects & Forwards

Beyond the content, redirects and forwards provide additional instructions to the dialog manager that help move the conversation to different handlers.  They both are triggered by intents, require a destination handler and have optional conditional statements.

### Redirects

Redirects are used to redirect a user before they even get to the content of the handler.  They can be used to check if all the preconditions are met before the user can access the content on the handler.

The most common use for redirects is ensuring the user is authenticated before they attempt to access content that.  If they are not authenticated then you redirect them to a login flow.  For this, use the following condition:

```ts
!hasLinkedAccount()
```

They can also be used in more creative ways such as redirecting to another flow based on slot values, which can help make your content more manageable.

### Forwards

Forwards are used after the user has had content from the handler and they respond.  They are primarily used to help split up complex flows into multiple handlers.  For example, if you have a complex slot filling process, each question to the user can be a single handler and the content on the handler is for handling the unexpected inputs from the user and get them back on track.  If the user ansers in a way that is expected, the forward will move them to the next step, or handler.

## Data

The data field gives you an open-ended key-value storage to pass data to the handler at runtime.  When designing [custom handlers](../development/custom-handlers.md), place configuration variables here that can be useful to modify the behavior of the handler without requiring a code update.
