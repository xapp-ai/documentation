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
| Payload | payload | The details of the event | string, can be stringified object|


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