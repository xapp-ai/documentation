---
title: Types of Data
sidebar_label: Types of Data
---

It is important to understand the different types of data, what they store, and where they are stored for the audit or risk management purposes.

## User Data
The user data consists of contextual information for the user such as when was the first time they were seen, when was the last time they were seen, and it keeps track of where the user is in the conversational flow.  This data is required to conduct a fluid multi-turn conversation.

Every user that interacts with the system will be considered an anonymous user and have a record generated, either by studio or the channel, in a user database for them.  All users are considered anonymous until they willingly disclose some type of personal identifying information either through an account link, permission grant or direct user input.

### User Data Collected
The following is collected on every user, the text in bold corresponds to the key (or column) that the data is stored.  

| Key | Description |
| ------------ | ------- |
| userId        | Random alphanumeric code, generated by the user’s current channel. | 
| createdTimestamp | When a user with the provided userId was first seen |
| lastActiveTimestamp | When the user was last seen |
| currentHandler | Reference to the user’s current state within the conversation |
| previousHandler | Reference to the user’s previous state within the conversation |
| previousResponse | What was last communicated to the user, used when the user asks to repeat what was said |
| unknownInputs | How many times the user has said something that is not understood by the assistant |

:::important
This list is not exhaustive as you may choose to add additional information about the user to it's database entry.
:::

### Optional User Data Collected
The following is optional and only provided voluntarily by the user:

| Key | Description |
| ------------ | ------- |
| phoneNumber | The user’s phone number.  This is only needed when the user is on a voice channel and wants to be contacted by a customer support representative. |
| email | The user’s email.  This is only needed on some channels when escalation is needed | 
| name | The user’s name.  |

### Storage Location - Customer Infrastructure
This data is stored on the customer's infrastructure, typically in a document store such as AWS DynamoDB.  This data may contain PII and should have restricted access.

## System Logs
Information generated by the application(s), platform and infrastructure during execution.  This information is used to evaluate and measure the applications performance as well as investigate and debug any issues that may occur.

These are generated directly from the application through console statements and then are gathered by the platform the application runs on.  These are then made available to view by the platform provider.  Additionally, the platform itself will generate logs containing performance and relevant billing information to track platform usage.

System logs typically have a configurable level of verbosity ranging from debug, which is the most verbose, to error only which is least verbose.  At these higher levels of verbosity, it is possible to start logging information that contains some level personally identifiable information.  

### Storage Location - Customer Infrastructure
This data is stored on the customer's infrastructure, typically a log management system that the cloud platform provides such as AWS CloudWatch.

It is possible at higher levels of verbosity to log the raw requests, which may contain the user’s phone number in a deconstructed form.  For this reason, in most circumstances log files should have restricted access unless they are thoroughly scrubbed of any PII.

## OC Studio Events
Similar to logs however much more structured and designed to be tracked for not just debugging but also analytics purposes. 

These events are generated within the application, sent through a data processing pipeline and are then stored in a database for a limited period of time and also stored statically within a file system for later access.   

### Storage Location - XAPP AI's Infrastructure 
XAPP stores the events in two primary locations:

- AWS ElasticSearch Service (short-term, ~6 months) - Fast retrieve for analytics and optimizations
- AWS S3 (long term, indefinite) - For use in the event of data recovery or auditing purposes.

This data is thoroughly scrubbed of PII before being sent to XAPP's infrastructure however may still contain PII in a deconstructed form.  It has restricted access.

## Content - Assistant Responses
How the assistant responds to requests from the user is determined during the design process and then stored in a database to be accessed in real time.  Some of this data contains instructions on how to programmatically inject variables, such as when confirming the user’s telephone number, in the response.  For example, a response “${PHONE_NUMBER} is your number correct?” is injected with the number the user provided at application runtime.  The numbers are not stored with the responses. 

### Storage Location - XAPP AI's Infrastructure 
XAPP stores this information on behalf of the customer in three primary locations:

- AWS DynamoDB - For access by the customer application's runtime environment.
- AWS ElasticSearch - For easier search by OC Studio
- AWS S3 - For backup purposes.

It does not contain any PII.

## Model - Interaction Model
The interaction model defines how the user will interact with the assistant.  It consists of intents, which contain sample utterances a user may speak, and entities, the tangible parts of an utterance typically nouns, adjectives, and adverbs.

### Storage - XAPP AI's Infrastructure
XAPP stores this information on behalf of the customer in three primary locations:

- AWS DynamoDB - For access by the customer application's runtime environment.
- AWS ElasticSearch - For easier search by OC Studio
- AWS S3 - For backup purposes.

It does not contain any PII.