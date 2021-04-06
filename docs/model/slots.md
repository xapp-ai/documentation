---
title: Slots
sidebar_label: Slots
---

import { ChatMessageBubble } from "@xapp/chat-widget";

## What is a slot?

Think of slots as the data within the utterance of the intent that you want to capture. You have one or many slots per utterance and not all sample utterances need to include all the slots define in the intent.

Slots then have an entity (sometimes referred to as a slot type) associated with it. The entity can be either custom lists or some type of structured/semi-structured data like numbers, dates (both relative and absolute) and addresses. NLUs provide both built in lists style entities and the structured style of dates.

## When to use a slot?

The primary reason for using a slot is when there is information you want to capture from a user to then use within your application. For example when scheduling an appointment you want to include the date you have availability or when you are requesting to listen to a radio station you want to capture the requested station.

Beyond information capture, slots can be used to more precisely understand what the user is saying. Capturing negative modifiers and prepositions in slots can help with precision in your model. This additional context can help you provide your user with better responses and can sometimes be the difference between correct and incorrect responses.

Additionally, slots can help you greatly increase the amount of possible matches for an intent by turning common carrier phrases into a slot. Carrier phrases don't include the important information, like the entity value, but are added to help communicate intent and can vary significantly. For example, for an intent that searches for recipes carrier phrases include: "find", "give me", "search for". Putthing these into a custom list entity and then leveraged as a slot increases your model's ability to match to a user's utterance and allows you to reuse them in other intents however there is some risk of causing problems with utterance ambiguity in the model.

In summary, when to use slots:

- **Data Capture** Capture data from the user such as dates or entity values
- **Increase Precision** Capture information adjacent to the data to better understand the user's request
- **Define More Matches** Put carrier phrases in a slot to define more matches without more sample utterances

## Adding Slots to an Intent

In order to add a slot to an intent, you first need to add the slot to the utterance pattern with `${slot_name}` and you then need to associate it with an entity (or slot type). 

For naming the slot, we recommend to use lowercase letters only and use underscores instead of spaces.  

When attempting to capture more than one value of the same entity, it feels natural to have two slots with the same name and type however this is not allowed.  Instead either use a list slot type, which captures more than one or postfix the second slot with a number.  

### List Slot Example
Lists make it easier to capture one to many of a entity.  Ingredients are a great example:

<ChatMessageBubble owner="mine" hasTail>
  i'm looking for a recipe with strawberries, blueberries, and kiwi
</ChatMessageBubble>
<br />

Can be entered as:

<ChatMessageBubble owner="mine" hasTail>
  {"i'm looking for a recipe with "}<b>{"${ingredients}"}</b>
</ChatMessageBubble>
<br />

Where `${ingredients}` is a custom slot with a list of possible ingredients.

### Multiple Slots without List Example

When there is a known number of items of the same entity, you may instead want to just postfix the slot name.

<ChatMessageBubble owner="mine" hasTail>
  play the UVA vs Virginia Tech game
</ChatMessageBubble>
<br />

Can be entered as:

<ChatMessageBubble owner="mine" hasTail>
  play the <b>{"${team}"}</b> vs <b>{"${team_two}"}</b>
</ChatMessageBubble>
<br />

Where `${team}` and `${team_two}` both have the same entity value which is a list of teams.

## Types of Built-In Entity (Slot Types)

OC Studio provides a set of built-in slots that are the based on the built-ins from the major NLUs.  

| Built-In         | Example | Amazon Lex | Amazon Alexa | Dialogflow ES | 
| ------------ | ------- |  ------- |  ------- |  ------- |
| COLOR        | "blue"    | AMAZON.Color* | AMAZON.Color | @sys.color |
| TIME | "noon" "twelve o'clock" | AMAZON.TIME | AMAZON.TIME | @sys.time |
| DATE | "april fifth" | AMAZON.DATE | AMAZON.DATE| @sys.date |
| DATE_TIME | "noon" "april fifth at two"   | AMAZON.DATE & AMAZON.TIME** | AMAZON.DATE & AMAZON.TIME** | @sys.date-time |
| DURATION | "2 months" "4 seconds" | AMAZON.DURATION | AMAZON.DURATION | @sys.duration |
| NUMBER | "two" | AMAZON.NUMBER | AMAZON.NUMBER | @sys.cardinal |
| ORDINAL | "first" | AMAZON.Ordinal | AMAZON.Ordinal | @sys.ordinal |
| PHONE_NUMBER | "eight oh four..." | AMAZON.PhoneNumber | AMAZON.PhoneNumber | @sys.phone-number | 
| SEARCH_QUERY*** | Returns the raw query | AMAZON.SearchQuery | Not Supported | @sys.any |

*  *en-US language support only
* **Synthetically built with AMAZON.DATE & AMAZON.TIME 
* *** Use sparingly, limited support and requires special considerations

## Slot Best Practices

- **Naming Convention** We recommend to use lowercase, underscores instead of spaces, letters only. For example: 'name' or 'ingredient_one'. This tends to work the best across all the currently available NLUs.
- **Same Name Across Intents** It is highly recommended to keep the same name across intents for a slot that has the same type. This makes it much easier to use multiple intents for a given state (or handler)
- **Slot Only Intents** Instead of adding a sample utterance with just the slot value, create a new intent with this single sample to allow for better reuse and higher precision.

## External References

- [Amazon Lex - Built-in Slot Types](https://docs.aws.amazon.com/lex/latest/dg/howitworks-builtins-slots.html)
- [Amazon Alexa - Slot Type Reference](https://developer.amazon.com/en-US/docs/alexa/custom-skills/slot-type-reference.html)
- [Dialogflow ES - System entities reference](https://cloud.google.com/dialogflow/es/docs/reference/system-entities)