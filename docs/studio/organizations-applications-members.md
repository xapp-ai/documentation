---
title: Organizations, Applications and Members
---

## Organizations

An organization is a group of one or more applications and people that manage those applications. 

Unless you are under an enterprise agreement, the organization has a plan and payment method associated with it.  Consumption from all the applications under the organization counts towards the plan the organization is under.  This allows you to have your sandbox, development, staging, and production versions of the application under the same organization.  

## Applications

An application belongs to an organization.  It contains all the content for running the conversational assistant and gives you analytical information about the assistant's performance.  Tokens, for accessing this content programmatically, are also at the application level.  One applications token cannot access another application's information nor can it post events to another application.

## Members and Roles

You can invite new members under the organization’s members page, which can be accessed by clicking the organizations name in the header then selecting the members tab.  

__Organization Owners__ - The owner can modify the billing (when applicable), invite new owners, admins, and generic members.  They also have read, write, update, and delete access to all application resources.

:::info
The person who makes the new organization is automatically designated as the organization owner. 
:::

__Organization Admins__ - Admins have all the same privileges as owners except they cannot invite new owners or modify the billing. 

__Organization Member__ - These members can access all the applications, and depending on their other permissions they can either read or edit content in the applications.  They cannot invite new members. 

### Application Permissions

__App Editors__ - *Not Recommended* - For some legacy scenarios, we can define certain application templates that we can restrict users to edit. 

__App Readers__ - *Not Recommend*  - For some legacy scenarios, we can defined certain application templates that we can restrict users to read.

__Custom App Editor__ - The default for newly invited users.  This user can edit every aspect of the application.

__Custom App Reader__ - This user can only read (view) information for an application, any attempted edits will error.
