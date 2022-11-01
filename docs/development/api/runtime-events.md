---
title: Runtime Events
---

Studio supports a wide variety of events, both standard and custom, that allows you keep track of runtime usage data.


## Event Keys

| Name      | Key |  Description | Type|
| ----------- | ----------- |----------- |----------- |
| App ID      | appId       | Application ID | string |
| Session ID   | sessionId        | Unique ID that persists throughout an entire session | string |
| User ID | userId | Unique ID that is specific to the user and persists across sessions | string |
| Type | type | Type of event, a category for organizing events. | "REQUEST", "ERROR", "AnalyticsEvent"
| Name | name | A subcategory of type. | string |
| Payload | payload | The details of the event | string, boolean, object, number or undefined |

## REQUEST Type Events

### LAUNCH_REQUEST

A `LAUNCH_REQUEST` is used to document if a new session has started.

*Example Event*

```json
{
    "appId": "{{appId}}",
    "channel": "postman",
    "type": "REQUEST",
    "name": "LAUNCH_REQUEST",
    "platform": "postman",
    "selectedHandler": "LaunchRequest",
    "sessionId": "session-test-{{$randomUUID}}",
    "userId": "user-test-{{$randomUUID}}"
}
```

## AnalyticsEvents Type Events

### REQUEST_RESPONSE

A `REQUEST_RESPONSE` event is used to document both the request from the user and the response back from the application.  The payloadload is a stringified object that contains the request, response, and optional tag.

```ts
import {
    Request,
    Response
} from "stentor-models";

let payload: { request: Request, response: Response, tag?: string };
```

*Example Event*

```json
{
    "events": [
        {
            "appId": "{{appId}}",
            "channel": "my-channel",
            "type": "REQUEST",
            "name": "LAUNCH_REQUEST",
            "platform": "my-platform",
            "selectedHandler": "LaunchRequest",
            "sessionId": "session-test-{{$randomUUID}}",
            "userId": "user-test-{{$randomUUID}}"
        }
    ]
}

```

## Events API

You can PUT your own events to the API by using the following format:

**PUT** `https://{{url}}/cms/apps/events`

Body

```json
{
    "events": [
        {
            "appId": "{{appId}}",
            "channel": "my-channel",
            "type": "REQUEST",
            "name": "LAUNCH_REQUEST",
            "platform": "my-platform",
            "selectedHandler": "LaunchRequest",
            "sessionId": "session-test-{{$randomUUID}}",
            "userId": "user-test-{{$randomUUID}}"
        }
    ]
}
```