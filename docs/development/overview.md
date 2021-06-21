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

## Custom Handlers

The [handler](/docs/content/handlers) defines a single state of the [dialog manager](/docs/dialog-manager/overview).  The dialog manger will take care of selecting it and instantiating it for you, you just need to focus on the custom logic and integrations within the handler.  

:::important
You must both 1. tell the assistant application about the handler and 2. update the handler type within OC Studio with your class name in order to leverage it.
:::

Example Custom Handler File

```ts
import { AbstractHandler, Context, keyFromRequest, Request } from "stentor";

// 1. Rename to something that describes what the handler does like "SearchHandler"
export class CustomHandler extends AbstractHandler {

    // The start method is called at the beginning of a workflow.
    // It is called every time the request is for itself unless overridden
    // in the handleRequest method below
    public async start(request: Request, context: Context): Promise<void> {
        // Implement the start method.
        context.response.say('Hello world!')
            .reprompt("The reprompt is used on voice channels when the user doesn't respond.")
            .withCard({
                type: "CARD",
                title: "Card",
                content: "This is an example of a card"
            });
    }
    // The handleRequest is called 
    public async handleRequest(request: Request, context: Context): Promise<void> {
        // 2. Write your custom logic
        const key = keyFromRequest(request);

        switch (key) {

            case 'HelpIntent':
                // Provide contextual help
                context.response.say('This is handler specific help that is returned.');
                // Exit from the flow
                return;
            default:
            // Let it fall through to the super
        }

        // 3. Let remaining requests fall through to the super
        //    It is not recommended to remove this
        return super.handleRequest(request, context);
    }

    public canHandleRequest(request: Request, context: Context): boolean {
        // 4. You may need to override this behavior, otherwise let it fall through to the super
        return super.canHandleRequest(request, context);
    }
}
```

You then must register the custom handler with the dialog manager in the application builder:

```ts
export const handler = new Assistant()
    .withHandlers({
        CustomHandler
    })
    .withChannels([Alexa(), Dialogflow()])
    .lambda();
```

:::important
If you are using a minifier that changes the class names then instead of using the shorthand notation when the key and value are the same like in the above example, you must use the longer `CustomHandler: CustomerHandler` 

```ts
    .withHandlers({
        CustomHandler: CustomHandler
    })
```
:::

Once you have registered it with the application, you must 
