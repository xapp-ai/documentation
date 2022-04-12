---
title: Channels
---

A channel is a method with which end users can communcate with the assistant application.  They have different characteristics and capabilities such as voice vs text inputs, browser availability and ability to display certain types of media (if any display is provided at all).  Example channels are chat widget, smart speakers, telephony, intelligent search, and social chat (e.g. Slack).

Channels are injected within the assistant application when you build the assistant.

```typescript
export const handler = new Assistant()
    // Add the supported channels
    .withChannels([Alexa(), Dialogflow(), LexConnect(), LexV2Channel(), Stentor()])
    .lambda();
```

The above application supports the Alexa, Dialogflow, Lex (V1 & V2) and Stentor channels.  At runtime, the payload that is sent to your assistant is tested against all of these channels and a channel is then selected based on which recognizes the shape of the payload.  

At a high level, channels are relatively straight forward.  They consist of:

* `test(body: object)` - A function that is called that tests the incoming request payload to determine if it recognizes it
* `capabilities(body: Record<string, unknown>)` - A function that is passed the request payload and returns a set of the current channel capabilities
* `request` Translator - A class that translates the incoming request payload to an abstracted stentor request.
* `response` Translator - A class that translates the outgoing response payload from a stentor response to one the channel understands.

## Supported Channels

### Stentor

The most basic of channels, it powers the chat widget and intelligent search bar.  It is able to understand the stentor requests and generates stentor responses.

```bash
npm install stentor-channel
```

```ts
import { Stentor } from "stentor-channel";
```

The Stentor channel takes an optional NLU Service as a configuration parameter, which is required if you are calling the channel directly without first passing the request through an NLU.

### Alexa 

Smart speaker channel that supports multiple modalities; voice only, voice & screen, and voice & screen with touch.

```bash
npm install @xapp/stentor-alexa
```

```ts
import { Alexa } from "@xapp/stentor-alexa";
```

Alexa comes with her own NLU, Speech to Text (STT) and Text to Speech (TTS).

### Dialogflow

The Dialogflow channel provides integration to Dialogflow ES, which is an NLU with it's own set of supported channels.  Adding this gains access to those other Dialogflow supported channels.

```bash
npm install @xapp/stentor-dialogflow
```

```ts
import { Dialogflow } from "@xapp/stentor-dialogflow"
```

## Custom Channels

You can provide your own custom channels by implementing the `test` and `capabilities` functions as well as providing request and response translators. 

### Reasons for Building a Custom Channel

* Support channels not yet supported
* Support existing/3rd party chat widget GUI
* Support custom GUI

### Building a Custom Channel

To build a custom channel, we recommend using the `stentor-channel` [source](https://github.com/stentorium/stentor/tree/master/packages/stentor-channel) as a guide.  You can see the `src/Channel.ts` file, reproduced below, to see how we can take the definition of a `Channel` and create a wrapper function `Stentor` to return a new copy of the stentor channel.

```typescript
/*! Copyright (c) 2019, XAPPmedia */
import { Channel, Device, NLUService } from "stentor-models";

import { DEFAULT_DEVICE, STENTOR_PLATFORM } from "./Constants";
import { isDeviceable, isStentorRequest } from "./Guards";
import { TranslateStentorRequest, TranslateStentorResponse } from "./Translators";

export function capabilities(body: Record<string, unknown>): Device {

    if (isDeviceable(body)) {
        return body.device;
    }

    return DEFAULT_DEVICE;
}

export const STENTOR_CHANNEL: Channel = {
    name: STENTOR_PLATFORM,
    test: isStentorRequest,
    request: new TranslateStentorRequest(),
    response: new TranslateStentorResponse(),
    capabilities
};

export function Stentor(nlu?: NLUService): Channel {
    return {
        ...STENTOR_CHANNEL,
        nlu
    };
}
```
