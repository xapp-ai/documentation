---
title: Governance
---

OC Studio provides a robust set of features for building, managing and maintaining a conversational virtual assistant.  How your organization leverages Studio and who has access to it largely depends on the type of assistant application you are building and the size of your organization.

## Primary Team Roles and Responsibilities

Below are some standard roles that make up teams which require access to OC Studio.  Depending on project scope and size, some of these roles will overlap.

### Administrator

An account administrator is someone who acts as the main point of contact for the account from the perspective of billing and managing the users. 

### Developer

The developer is involved in building any customer workflow, API integrations, or components.  They will be more heavily involved early on and then after launch, only to fix bugs or add new features.  They will need full write access to the entire application as they will need to create new handlers and sometimes make small edits to the interaction model.  If you have separate development and production environment, they will rarely need full write access to the production environment.

### Designer

A designer will help with crafting the responses and configuring the styles on the components.  They will be heavily involved early on building the initial responses and then after launch, editing them for clarity.   

### Analyst 

An analyst role will typically help with testing during early phases of an assistant and then post initial launch they will help monitor and optimize the assistant, typically through one of the optimization workflows.

## Model & Content Modification

There are a lot of assets in Studio and it is helpful to also look at who is primarily responsible for editing and adding elements.

### Intents

__Creation__ Both designer and developer will collaborate on the creation.  Developers will simple just create intents needed with a few sample utterances to start while the designer can then make them more robust with more samples.

__Maintenance__ The designer will take over the responsibility of updating the intents, responding to missed utterances and making the set of sample utterances more robust.  Often the analyst can make small edits to the utterances to improve performance post launch.

### Entities

__Creation__ Both designer and developer will collaborate on the creation.  Developers will create simple intents as needed with a few sample utterances to start while the designer can then make them more robust with more samples.

__Maintenance__ The designer will take over the responsibility of updating the intents, responding to missed utterances and making the set of sample utterances more robust.

### Handlers

__Creation__ Both designer and developer will collaborate on the creation, starting with a "happy path".  

__Maintenance__ Designer will be focused on adding content beyond the "happy path", adding content on how to respond to unexpected or improper input.
