---
title: AWS Lex (V2) Channel
sidebar_label: AWS Lex (V2) Channel
slug: /channels/aws-lex
---

## Overview

The AWS Lex channel provides you two options for integration; either with fulfillment where all requests first go through Lex or as a pure NLU without fulfillment defined in Lex and instead Lex is called from within Stentor.

## Requirements

- AWS Account and user with appropriate permissions to:
  - To create a Lex Bot
  - To create IAM Roles

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
1. Delete the first intent that is created for you automatically.

### Create Lex V2 Channel

1. In Studio within your application, select Publish --> Channels
1. Click the + button in the Channels header
1. Select "Amazon Lex V2"
  * Note: If you don't see this option, you may need to first enable this channel in your app's settings

### Create IAM Policy for Studio Management

1. Create IAM Policy
1. Click JSON tab and copy paste the following:
   - Update the resource ARN with your region, `region`, AWS account `account`, and bot ID `bot-id`
   - __Note:__ `bot-id` is different from the name, it is alphanumeric.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": "arn:aws:iam::<account>:role/<name-of-management-role-being-created>"
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
1. For policy name we recommend `xapp-studio-lex-management-{appId}` or similar.

### Create an IAM Role for Studio Management

1. Create IAM Role
1. Select AWS account
1. Select 'Another AWS account' and enter account ID: `204595997473`
   * If you are running a single tenant version with Lex in the same account, this will be the account number where your Studio instance is deployed.
1. Check 'Require external ID', paste in the external ID from your newly created Lex channel under setting "Management Role External ID"

   ![external role](/img/channel/lex/lex-v2-management-external-id.png)

1. Back in the AWS Console, click "Next"

  ![new role](/img/channel/lex/aws-iam-role-lex-v2-management.png)

1. Search for you policy you created above and select it, click "Next"
1. For role name we recommend `xapp-studio-lex-management-{appId}`
1. When you create it, click `View Role` in the green banner at the top.
1. Copy the role's ARN and paste it to the channel under "Management Role"

## Configuration

### Bot Name

The name of the bot you will be managing with Studio.  This is not the ID but is the name.

### PostText Lex URL

The PostFix URL is generated for you automatically when you leverage the provided CloudFormation script for deployment. It is a lambda exposed through API Gateway that calls your Lex bot's [PostText API](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html). The PostText is part of the Lex Runtime Service that receives user input and returns the bot's response. The PostText URL takes Stentor requests and then returns Stentor responses.

**Read More**

* [PostText Lambda](/docs/development/posttext-lambda)

### Fulfillment Lambda ARN

Optional, if you provide this it will set it as the fulfillment ARN for each intent.  It will then be called whenever an intent is resolved.

### Management Role

The role, as described above in configuration, this is the ARN for the IAM Role you setup to allow management by Studio.

### Management Role External ID

Readonly, use this when setting up your management role.  It helps further secure the connection betwen AWS accounts.
