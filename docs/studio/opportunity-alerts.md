---
title: Opportunity Alerts with Live Take Over
sidebar_label: BETA - Opportunity Alerts
---

:::caution

This is documentation for a beta feature and are subject to change until final release.

:::

Opportunity Alerts with Live Take Over are a way for members of your organization to view a chat and optionally take over from the assistant.  

Opportunity Alerts are the configurable notification sent to your phone or email that let you know a conversation has started or some other key event has been reached.

## Sample Live Take Over Timeline

* Visitor starts to engage with the assistant application through a supported channel
  * They open the chat widget
  * They engage with Google Business Messages
* A notification is sent to the preregistered contacts
  * Configuration can be done in Studio to register contacts and which alerts they want to receive
* Within the notification is a link the contact clicks on to open the conversation in a browser
  * The link will start with https://agent.xapp.ai
* The contact can view the conversation taking place between the visitor and the assistant application.
* The contact can choose, at any time, to jump in to the conversation by entering their name and clicking Join.
* The contact will not directly engage with the visitor while the assistant application no longer responds
* The conversation ends when either party leaves
  * The link will no longer be active if the visitor leaves

## Different type of Opportunity Alerts

* __Conversation Started (New Session)__ - A new conversation has started with the visitor.  

* __Live Agent Request__ - A visitor has requested to speak with a live human agent

* __Unanswered Question__ - The assistant application was asked a question it did not know the answer to

* __Buying Intent Detected__ - The visitor has expressed buying intent such as requesting a quote or asking for assistant with a project
