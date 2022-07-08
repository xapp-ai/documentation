---
title: Context
sidebar_label: Context
---

A context object is provided with each call to the handler including the main methods of:

* `public canHandleRequest(request:Request, context: Context): boolean`
* `public async handleRequest(request:Request, context: Context): Promise<void>`

The context has access to the response builder, which is used to programmatically build responses, and also the user's long term and session storage.  

```typescript
export interface Context<S extends Storage = Storage> {
    /**
     * Long term storage for the user.
     */
    storage: S;
    /**
     * The response builder.
     */
    response: AbstractResponseBuilder;
    /**
     * Session data. Gets deleted when session (id) changes)
     */
    session?: SessionStore;
    /**
     * Services available for the handlers
     */
    services: ContextServices;
    /**
     * Milliseconds left from the execution (NOTE: infinity if not executing in a lambda)
     */
    timeLeftInMillis?(): number;

    // Note: Some fields omitted here for brevity
}
```

:::important
Stentor will automatically save `context.storage` to your UserStorageService after each transaction.
:::

## Customizing Context

You may want to add your own data and services to the context for use throughout your custom handlers.

First define your updated context.  It must extend the existing context object.

```typescript
import {  Context } from "stentor";

export interface CustomContext extends Context {
    foo: number;
}

```

Next, implement the runtime hook `postContextCreation` to modify your context before it is sent to a handler.

```typescript

// Note we are using CustomContext as the type for the second parameter
const postContextCreation = async (request: Request, context: CustomContext): Promise<{ request: Request, context: Context }> => {
    // Make the modifications to the request and context
    request.userId = "newID";
    context.foo = 1
    // Pass them back out
    return { request, context };
};

export const handler = new Assistant()
    .withHooks({ postContextCreation })
    .withUserStorage(new DynamoUserStorage())
    .withHandlerService(studioService)
    .withKnowledgeBaseService(studioService, {
        // Intent ID for your fallback to determine if we call  KnowledgeBase
        matchIntentId: "InputUnknown",
        // For KnowledgeBase results we will generate a request with the following ID
        setIntentId: "OCSearch"
    })
    .withHandlers({
        QuestionAnsweringHandler: QuestionAnsweringHandler
    })
    .withChannels([Alexa(), Dialogflow(), LexConnect(), LexV2Channel(), Stentor(nlu)])
    .lambda();

```

Finally, update your handler method signatures to use CustomContext.

```typescript

export class CustomContextHandler extends AbstractHandler {

    // Use the CustomContext instead of the Context in the method signature 
    public async handleRequest(request: Request, context: CustomContext): Promise<void> {
        // You now have access to the updated custom fields
        context.response.say(`${request.userId} ${context.foo}`);

        return;
    }
} 

```
