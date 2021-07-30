---
title: Conditions
sidebar_title: Conditions
---

## What are conditions?

Conditions are logical statements that allow you to control the dialog manager by telling it when to play certain content or when to apply a particular redirect or forward. For example, you can define unique greetings depending on the time of day or if the user is new vs returning.

## Common Examples

### Disabling a Response

You can completely disable a response by settting the condition to `false`

```javascript
false;
```

### Slot Filling

You want to provide a specific response a particular slot is not provided to then prompt for the slot value.

```javascript
slotDoesNotExist("required_slot_name");
```

:::important
The name must match the name of the slot exactly, it is case sensitive.
:::

### New vs Returning User

You want to provide a specific welcome message, by using a segment, depending on when the user was last seen.

```js
activeWithin(2, "months");
```

This treats all users, if they have been active within two months as returning users. User's not seen within two months or ever, can be given a new user response.

### Restricted Content

You want redirect a user to another handler depending on if they have linked their account (logged in) or not.

```js
!hasLinkedAccount();
```

:::important
In the above example, the `!` is the [logical not operater](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) which negates the value (i.e. turns false to true and true to false). If the user does not have a linked account the `hasLinkedAccount()` macros will return `false`, which when you add `!` it then returns `true`.
:::

## Notation

The statements respect JavaScript logical operators such as `true`, `false`, `&&`, `||`, and `!` as well as comparison operators `===`, `!==`, `>`, `<`, `<=` and `>=`. You can also apply order of operations with `()` around a statement.

**Valid Conditional Statements**

```javascript
true; // return true
```

```javascript
true && false; // returns false
```

```javascript
false || 3 === 3; // returns true
```

Some common macros are also provided to make common tasks like slot comparisons or date comparisons easier. For more information see [Provided Macros](#provided-macros)

### Required condition and one of two possibilities

You may need to set one required condition with two other possibilities. All logical JavaScript operators are supported so the pattern is:

```js
REQUIRED && (OPTION_1 || OPTION_2);
```

To then translate this to an actual use case, you have scheduled content that can be accessed through two possible slot values, like a sporting event.

```ts
fitsSchedule("2019-09-11T18:40", "YYYY-MM-DDTmm:ss", 210, "minutes") && ( slotEquals("team", "one") || slotEquals("team", "two")
```


## Provided Macros

### What are conditional macros?

Conditional macros are predefined functions that perform a specific task. The functions they perform can be complicated to repeatedly construct so they make it easier to build and less error prone.

### Slots

You can check if a slot exists:

```ts
hasSlot(name: string);
```

or

```ts
slotExists(name: string);
```

Where name is the name of the slot and both will return true if the slot exists and does not equal an empty string.

You can check is a slots value equals a particular value:

```ts
slotEquals(name: string, value: string);
```

For example, you are expecting slot named "university" to equal "University of Virginia"

```ts
slotEquals("university", "University of Virginia");
```

:::important
The value you enter **must** but the primary entity value, not a synonym.
:::

### Active Within

The user has been active within the provided amount. This can be used to provide a response to a user that has used the application before but are coming back after some time and need a refresher.

```ts
activeWithin(amount: number, format: DurationFormat)
```

For example, the user is active within the last five days.

```ts
activeWithin(5, "days");
```

The available formats are "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds".

### Fits Schedule

The current time for the user fits within the provided schedule.

```ts
fitsSchedule(start: string, startFormat: string, durationAmount: number, durationFormat: string, timeZone?: string)
```

For example, for a schedule that starts on September 11, 2019 at midnight and runs for five days.

```ts
fitsSchedule("2019-09-11T00:00", "YYYY-MM-DDTmm:ss", 5, "days");
```

### System

To check if the user has linked their account, i.e. logged in.

```js
hasLinkedAccount();
```

### Request Specific

To check the platform:

```ts
isPlatform(platform: string)
```

### Request Type

The following are available to check the type of request:

```js
isIntentRequest();
```

```js
isLaunchRequest();
```

```js
isInputUnknownRequest();
```

### Request IDs

To match based on the ID of the request:

```ts
isRequestID(id: string | string[])
```

You can either provide a single string or an array of strings.

```ts
isRequestID("LaunchRequest");
```

or

```ts
isRequestID(["FooIntent", "BarIntent"]);
```

which will return true for either of the two IDs provided.

## Accessing the Request & Context Directly

You can add conditional statements beyond what is provided with the macros by accessing the context or request directly.  The request has information about the specific request from the user and the context has information about the user that is both session specific and historical.  Let's look at some examples:

Accessing the session storage:
```ts
"${$.context.storage.sessionStore.data.some_boolean_value}" === "true"
```

Accessing information on the request:
```ts
"${$.request.rawQuery}".startsWith("no")
```

## Syntax & Evaluation

The syntax is a mix of JavaScript's [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and JSONPath.  The outer `${}` is the template literal and the internal `$.request.rawQuery` is [JSONPath](https://goessner.net/articles/JsonPath/).

First the JSONPath is evaluated and then the template literal is evaluated.  For the JSONPath evaluation, an object with the request and context are passed in:
```json
{
    "request": {...the request },
    "context": {...the context }
}
```
The starting `$` means the root element.  Then you can follow through from the root to access the context `$.context.` and on the request `$.request.`

## On the object model

When modifying the object model directly through JSON, the key on paths and responses is `conditions`.

```

"conditions": "\"${$.request.platform}\" === \"dialogflow-telephony\""

```

:::important
You will need to escape quotes to keep the JSON valid, see the example above.
:::
