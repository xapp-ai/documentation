---
title:  Overview
---

OC Studio offers the ability to quickly create conversational assistants through the user interface that can:

- Facilitate basic back and forth interactions
- Answer questions based on a knowledgebase
- Leverage built-in channels for Alexa, Google Assistant, Chat Widget, and more.

There may be some situations where you need to go beyond this functionality, which you can through custom development.  Most likely use cases for needing custom development:

- API integrations
- Custom logic not suppored by the built-in [conditions](/docs/dialog-manager/conditions)
- Custom or unavailable channels

## What's Involved

At a high-level, development will require you to:

- Create an application based on the open-source [Stentor SDK](https://github.com/stentorium/stentor)
    - Use one of the example projects below
- Configure the application to communicate with OC Studio using an access token
- Create custom handlers for workflows or custom channels for deploying
- Update existing channels with the new endpoint based on your deployed application

## Example Projects

- **Stentor Starter Template** - https://github.com/stentorium/stentor-starter-template 
    - Includes Alexa & Google Assistant channels with a custom handler example.
- **OC Studio Starter** - https://github.com/xapp-ai/oc-studio-starter 
    - Used as the template for all CSS4CCI projects, includes the [Question Answer Handler](https://github.com/xapp-ai/question-answering-handler) that facilitates AWS Kendra integration.
