---
title: Intents
sidebar_label: Intents
---

## What is an intent?

An intent is a set of utterances that a user may say that all describe a single action. It is a fundamental component of natural language understanding. In the context of conversational AI, one you have what the user has typed in or spoken in text form, it is then classified into a specific intent. For example "yes" and "sure" have the same meaning and can be part of an named `Yes` or `AffirmativeConfirmation`.

| Intent         | Sample Values                                                                |
| -------------- | ---------------------------------------------------------------------------- |
| Product Search | <p> "i'm looking for diet cola" <br/> "where can i find sugar free pop" </p> |
| Order Coffee   | <p> "may i have a small french roast" <br /> "large americano please" </p>   |
| Filter by Date | <p> "only look last month" <br /> "within the next couple of days" </p>      |

## Built Ins

Some natural language understanding (NLU) services like Amazon Lex & Microsoft Luis provide general usage built in intents that have predefined values.

| Built In | Sample Values                 |
| -------- | ----------------------------- |
| Cancel   | "cancel", "cancel please"     |
| Back     | "go back", "return"           |
| Yes      | "yes", "yes please            |
| Agent    | "agent", "real person please" |

**References**

- [Microsoft Luis Prebuilt Intents](https://docs.microsoft.com/en-us/azure/cognitive-services/luis/howto-add-prebuilt-models#add-a-prebuilt-intent)
- [Amazon Lex](https://docs.aws.amazon.com/lex/latest/dg/howitworks-builtins-intents.html)

## Special Intents

Another feature of NLU services are special (or pseudo) intents that do not necessarily match with an utterance. A common special intent it the `Input Unknown` or `No Match` intents that is used when a natural language input cannot be matched with a set of known intents. Other special intents can be channel specific, such as the [`AMAZON.KendraSearchIntent`](https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html) which uses the natural language input to search an Amazon Kendra index.
