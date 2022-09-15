---
title: AWS Lex Channel
sidebar_label: AWS Lex Channel
slug: /channels/aws-lex
---

## Overview

The AWS Lex channel provides you two options for integration; either with fulfillment where all requests first go through Lex or as a pure NLU without fulfillment defined in Lex and instead Lex is called from within Stentor.

## Requirements

- AWS Account with appropriate permissions.

### What is the PostText URL?

The PostFix URL is generated for you automatically when you leverage the provided CloudFormation script for deployment. It is a lambda exposed through API Gateway that calls your Lex bot's [PostText API](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html). The PostText is part of the Lex Runtime Service that receives user input and returns the bot's response. The PostText URL takes Stentor requests and then returns Stentor responses


### Lex V2

You can hook up a Lex V2 channel to an existing Lex V2 bot.

Bot Name: "pawnee-v2"

Management Role - 

Name: "LexRole"

Has policy PassToLexRole

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "iam:PassRole",
            "Resource": "arn:aws:iam::766395801190:role/LexRole"
        }
    ]
}



Trust Relationship

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::204595997473:root"
            },
            "Action": "sts:AssumeRole",
            "Condition": {
                "StringEquals": {
                    "sts:ExternalId": "c30e08c"
                }
            }
        },
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lex.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```


```
{
  "botName": "studio-xapp-remodel",
  "botRegion": "us-east-1",
  "enableModelImprovements": true,
  "id": "studio-cf-channel",
  "idleSessionTTLInSeconds": 600,
  "lexFulfillmentLambdaARN": "arn:aws:lambda:us-east-1:766395801190:function:stentor-surefire-prod-app",
  "managementRole": "arn:aws:iam::766395801190:role/LexRole",
  "type": "lex-v2",
  "voiceId": "Matthew"
}
```