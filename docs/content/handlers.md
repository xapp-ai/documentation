---
title: Handler Basics
sidebar_label: Handler
---

A handler is a unit of logic and content that handles a specific step in a conversational flow. It typically starts with an entry point, a specific intent from the user, and it facilitates the interaction, determining how to respond to the user's input.

A handler will help with:

- Slot Filling
- Contextual Help / Content
- Flow Routing

## Handler Content

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
