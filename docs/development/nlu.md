---
title: NLU
---

The NLU helps translate a user's natural language query to something you can use to develop a custom workflow, specifically to an intent and optional slots.  An NLU is a required component for your virtual assistant.

### Types of NLU

Some platforms such as Alexa have their own built-in NLU and it is nearly impossible to use another NLU with Alexa.  Some NLU, like Lex and Dialogflow, can be used similar to Alexa as a platform where they also come equipped with built-in channels and they can also can be used as a stand-alone NLU.  Last, there are just pure NLUs that don't have platform channels and are purely used for translating natural queries to intents and slots.

1. **Integrated NLU** - Part of a platform, unable to be decoupled.  Best example of this is Alexa where the NLU (and text to speech and speech to text) are all integrated together. 
1. **NLU with Channels** - Can be used just as an NLU but they also have some channels you can use.  Amazon Lex and Google Dialogflow are your best examples and most popular NLUs. 
1. **Pure NLU** - Is just an NLU, no channels provided out of the box.  Example: These are typically more bespoke solutions such as [compromise](https://compromise.cool/).

### Hooking up an NLU

There are two main ways of hooking stentor up to an NLU, major factor is the type of NLU you are using.

#### NLU to the Channel

**Preferred**

For either NLUs with Channels or pure NLUs, you can pass the NLU to the channel directly (where supported) and stentor will handle when to call the NLU.

This method is preferred as it gives you greater control over when to call the NLU.  

#### Fulfillment

For NLUs with channels, like Lex & Dialogflow, you can set fulfillment (either a Lambda or URL) for when a intent is matched.  This method typically restricts you to only the channels they provided _or_ you can leverage an API call that also calls their fulfillment and returns the response.

If this method sounds interesting and you want to leverage more than just the channels the NLU provides you, we recommend taking a look at the [PostText Lambda](/docs/development/posttext-lambda).

