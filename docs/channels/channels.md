---
title: Channels
sidebar_label: Channels
---

## What are channels?

Channels are avenues with which users can interact with the intelligent voice assistant on. They can be text input based channels like a chat widget, Slack, Facebook Messenger, etc. or they can be voice input based channels like telephony and smart speakers.

## Text vs Voice

From a technological perspective, the biggest difference between text and voice channels is the need for speech to text and text to speech bookending the other components of the stack. This causes them to be slightly more expensive on a per interaction basis from text channels.

While all channels support the most basic user experience of user request and application response, there are many things to consider from a design perspective. On text channels users tend to be more terse and leverage emojis while on voice channels they may be more verbose to make sure you account for both in your model. Some text channels support rich responses that contain GUI elements such as lists and suggestion chips which can enhance the user experience however voice channels typically do not (smart speakers with screens do). Due to this, when designing this multi-channel multi-modal experiences it is recommended to practice a voice first methodology which prioritizes a focus on ensuring functionality for the most basic user experience without a GUI.

From a user experience design perspective, there are many things to consider. While all channels support basic user request, application response interactions, from a design perspective there are many things to consider. On text based channels users tend to be more terse and leverage emojis so make sure you account for these in your model. Depending on the text based channel, adding rich responses with GUI elements and suggestion chips will enhance the user experience. On voice based channels,

:::note
Not all NLUs support emoji ☹️
:::

## Custom Channels

You can also build custom channels to integrate with existing/new chat widgets, web applications, or customer support software.  Building a custom channel will require you to host the assistant and modify it's runtime environment.  More information can be found [here](../development/channels#custom-channels).