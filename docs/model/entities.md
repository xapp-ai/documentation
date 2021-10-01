---
title: Entity
sidebar_label: Entity
---

## What is an entity?

An entity is a collection of common words that have an association with the real world. They can be objects, places, temporal, or quantitative. When coupled with intents, they are used to extract information from natural language.

## Built-In Entities


OC Studio provides a set of built-in slots that are the based on the built-ins from the major NLUs.  The chart below is the abstracted Studio version and how they then translate to the different NLUs. 

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

## Custom Entities

You can define you own entities that correspond to your business or usecase.  They can be the names of your products and typical modifiers associated with them, ingredients for a recipe, or
a list of symptoms.  Think of them as a group of similar items. 

## Values vs Synonyms

The entity itself is just the category, such as drink sizes, and it then needs values such as "small", "medium", and "large".  You can also assign synonyms to each value such as "tall" and "little" for the value "small".  Keep the values unique and do not use the same synonym for two different values in the same entity.
