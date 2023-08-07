---
title: Compiling Templated Responses
sidebar_label: Templated Responses
---

With a [custom handler](./custom-handlers.md) that is gathering information from the user and also pulling information from different data sources, instead of dynamically building the response you may instead want to leverage [templated responses](../content/responses.md#templated-responses).

The primary methods to accomplish this is either `getResponse` or `compileResponse` in a custom handler.

## Get Response

For situations where you have responses defined within studio, you can leverage `getResponse` to not just determine the right response but also then compile it for you.  It uses `compileResponse` within it to do the actual compilation.  Feel free to checkout the [source](https://github.com/stentorium/stentor/blob/master/packages/stentor-response/src/getResponse.ts[) and [tests](https://github.com/stentorium/stentor/blob/master/packages/stentor-response/src/__test__/getResponse.test.ts) for this method to get a better understanding.

### With Additional Context 

You can also pass in additional context that the compiler will take into consideration.  This can be information from APIs or other sources.

```ts
const response = getResponse(this.content, request, context, { user_name: "John" });
context.response.respond(response);
```

This will take a response like:

```
Hello ${user_name}
```

and compile it as:

```
Hello John!
```

### With Custom Macros

With this method, you can leverage the [default macros](../content/responses.md#default-macros) but you can also inject your own custom macros.

```ts
// Turns 2021-04-22 style dates to 2021/04/22
const date: (input: string) => string = (input: string) => {
    return input.replace(/-/g, "/")
}

const response = getResponse(this.content, request, context, {
    user_name: "John",
    date: {
        name: "date",
        value: "2021-09-11"
    }
}, { date });

context.response.respond(response);
```

This will turn a response with:

```
Delivery on the ${date('${date}')}, is that ok ${capitalize('${user_name}')}?
```

into

```
Delivery on the 2021/09/11, is that ok John?
```

Notice how it changed the `-` into `/`.

## Compile Response

Compile response takes a response and looks for templates to then replace with values found in the request, context, or additional context.  Feel free to checkout the [source](https://github.com/stentorium/stentor/blob/master/packages/stentor-response/src/compileResponse.ts) of the method and look at the [tests](https://github.com/stentorium/stentor/blob/master/packages/stentor-response/src/__test__/compileResponse.test.ts) for examples of what it can do.

```typescript
import { compileResponse } from "stentor";

const compiled = compileResponse(response, request, context);
context.response.respond(compiled);
```

In the example above, the method will compile any values you have on session storage or found in slots.  

### With Additional Context

You can also pass in additional context that the compiler will take into consideration.  

```ts
const compiled = compileResponse(response, request, context, { user_name: "John" });
context.response.respond(compiled);
```

Which can be references the same way in the templated response:

```
Hello ${user_name}!
```

will be compiled to `Hello John!`

### With Custom Macros

With this method, you can leverage the [default macros](../content/responses.md#default-macros) but you can also inject your own custom macros.

```ts
// Turns 2021-04-22 style dates to 2021/04/22
const date: (input: string) => string = (input: string) => {
    return input.replace(/-/g, "/")
}

const compiled = compileResponse(response, request, context, {
    user_name: "John",
    date: {
        name: "date",
        value: "2021-09-11"
    }
}, { date });
context.response.respond(compiled);
```

This will turn a response with:

```
Delivery on the ${date('${date}')}, is that ok ${capitalize('${user_name}')}?
```

into

```
Delivery on the 2021/09/11, is that ok John?
```

### With determineResponse

It is often helpful to have the responses defined in Studio with conditionals set to allow the dialog manager to best select the response for you.  From there, you can then programmatically modify the response before then passing it to compile response.

```typescript

import { keyFromRequest, findValueForKey,  determineResponse, getResponse } from "stentor";

const key = keyFromRequest(request);
const responses = findValueForKey(key, this.content);
const response = determineResponse(responses, request, context);
// Modify the response as you like before compilation
const compiled = compileResponse(response, request, context);
```

