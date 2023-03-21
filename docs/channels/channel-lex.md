---
title: BETA - AWS Lex (V2) Channel
sidebar_label: BETA - AWS Lex (V2) Channel
slug: /channels/aws-lex
---

## Overview

The AWS Lex channel provides you two options for integration; either with fulfillment where all requests first go through Lex or as a pure NLU without fulfillment defined in Lex and instead Lex is called from within Stentor.

## Requirements

- AWS Account and user with appropriate permissions to:
  - To create a Lex Bot
  - To create IAM Roles

### What is the PostText URL?

The PostFix URL is generated for you automatically when you leverage the provided CloudFormation script for deployment. It is a lambda exposed through API Gateway that calls your Lex bot's [PostText API](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html). The PostText is part of the Lex Runtime Service that receives user input and returns the bot's response. The PostText URL takes Stentor requests and then returns Stentor responses

## Setup

:::caution

This is a new channel currently in beta and is subject to change.  You will need to enable it in your app's settings to access it on the "Add Channel" dialog.

:::

### Create a Lex V2 Bot (optional)

1. In your AWS console, create a Lex V2 bot
   - [Create a bot in us-east-1](https://us-east-1.console.aws.amazon.com/lexv2/home?region=us-east-1#createBot)
1. Select "Create a blank bot"
1. Add a name, we recommend the appId of your application in Studio
   - [How do you find your application ID?](/docs/development/development-faqs#how-do-i-find-my-application-id)
1. Select "Create a role with basic Amazon Lex Permissions"
1. Take note of the ID of your newly created bot
   - You will add it to the policy we create below

### Create Lex V2 Channel

1. In Studio within your application, select Publish --> Channels
1. Click the + button in the Channels header
1. Select "Amazon Lex V2"
  * Note: If you don't see this option, you may need to first enable this channel in your app's settings

### Create IAM Policy for Studio Management

1. Create IAM Policy
1. Click JSON tab and copy paste the following:
   - Update the resource ARN with your region, AWS account, and bot ID

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": "arn:aws:iam::<accountId>:role/<name-of-management-role-being-created>"
        },
        {
            "Effect": "Allow",
            "Action": [
                "lex:Build*",
                "lex:Create*",
                "lex:Delete*",
                "lex:Describe*",
                "lex:Get*",
                "lex:List*",
                "lex:Put*",
                "lex:Recognize*",
                "lex:Search*",
                "lex:Start*",
                "lex:Stop*",
                "lex:Tag*",
                "lex:Update*",
                "lex:Untag*"
            ],
            "Resource": [
                "arn:aws:lex:<region>:<account>:bot/*",
                "arn:aws:lex:<region>:<account>:bot-alias/*",
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lex:CreateUploadUrl",
                "lex:ListBuiltInSlotTypes",
                "lex:ListBots",
                "lex:ListBuiltInIntents",
                "lex:ListImports",
                "lex:ListExports"
            ],
            "Resource": "*"
        }
    ]
}
```

1. Add optional tags
1. For policy name we recommend `xapp-studio-lex-management` or similar.

### Create an IAM Role for Studio Management

1. Create IAM Role
1. Select AWS account
1. Select 'Another AWS account' and enter account ID: `204595997473`
1. Check 'Require external ID'
    * The external ID an be any string but we recommend generating a UUID
    * Add your external ID to both the role creation page and to your Lex V2 Channel in studio under setting "Management Role External ID"
1. Click "Next"
1. Search for you policy you created above and select it, click "Next"
1. For role name we recommend `xapp-studio-lex-management`
1. When you create it, click `View Role` in the green banner at the top.
1. Copy the role's ARN and paste it to the channel under "Management Role"
