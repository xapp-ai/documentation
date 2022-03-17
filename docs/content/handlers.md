---
title: Handler Basics
sidebar_label: Handler
---

A handler is a unit of logic and content that handles a specific step in a conversational flow. It typically starts with an entry point, a specific intent from the user, and it facilitates the interaction, determining how to respond to the user's input.  It is the state of the dialog manager.  

A handler will help with:

- Slot Filling
- Contextual Help / Content
- Flow Routing

## Content

### Response

By default, the same response is used across display and voice channels.  You can override these if you like to help with pronunciation on voice (through SSML features) or have the display better formated with simple markdown.

### Display Text

Limitation of 640 characters.

**Supported Markdown & Characters**

| Format | Looks Like | Example | 
|--------|------------|-----------|
| Italic   |      _text_      |  \_text\_ |
| Bold | **text** | \**text\** |
| Hyperlink | [text](https://xapp.ai) | \[text\]\(https://xapp.ai) |
| New Line | text<br/>text | text\\ntext |

:::note
Depending on the platform and channel, some markdown and other special characters will be removed.
:::

### Suggestion Chips

Suggestions chips are displayed on supported channels with displays and not necessarily text input exclusive. 

#### Suggested Inputs

Suggested inputs are treated the same way as if the user typed or said the content of the suggested input.  

#### Suggested Websites

Clicking these opens websites and on some channels will take the user out of the flow while on others it is still open.

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