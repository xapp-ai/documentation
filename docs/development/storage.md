---
title: Storage
sidebar_label: Storage
---

There are two types of storage available to you during development; session storage and permanent storage.  Both of these are available on the context object passed through to the handler functions.

## Session Storage

Session storage persist only as long as the session.  Stentor will automatically purge and create a new session storage once the session ends and a new one begins.


The session storage is on the context object available to the handler.

```ts

    public async handleRequest(request: Request, context: Context): Promise<void> {

        const sessionSlots = context.session.get("slots");

        context.session.set("current_state", 2);

    }

```

### Session Values Managed by Stentor

Stentor will manage a couple of session values for you.  Feel free to access these however editing them may cause unexpected behavior.

| Key        |      Description      |   Values |
| ------------- | :-----------: | -----: |
| new_user      | True if the user is brand new | true, false |
| unknownInputs      | Current number of consecutive UnknownInputs received | 0, 1, 2 |
| slots | Current slots received throughout the entire session | Object with all slot values |


## Permanent Storage

Permanent storage persists indefinitely and is saved within the user table.  The permanent storage also contains the session storage but it's lifecycle is managed by stentor.  The storage can be accessed directly on the context object.  

```ts

    public async handleRequest(request: Request, context: Context): Promise<void> {

        const lifetimeScore = context.storage.score;

        // Later, update the score

        context.storage.score = lifetimeScore + 1;

    }

```

### Values Managed by Stentor

Stentor will manage a couple of permanent values for you that you have access to.

| Key        |      Description      |   Values |
| ------------- | :-----------: | -----: |
| createdTimestamp      | When the user first used the assistant | ISO-8601 string|
| lastActiveTimestamp      | When the user was last seen by the assistant | ISO-8601 string |
| currentHandler | The current active handler | Handler object |
| previousHandler | The previous handler before the current one | Handler object |
| previousResponse | The previous response given to the user | Response object |
| sessionStore | The session storage data and metadata | SessionStorageData object |

