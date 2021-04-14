---
title: AWS Lex Channel
sidebar_label: AWS Lex Channel
slug: /channels/aws-lex
---

## Overview

The AWS L

## Requirements

- AWS Account

### What is the PostText URL?

The PostFix URL is generated for you automatically when you leverage the provided CloudFormation script for deployment. It is a lambda exposed through API Gateway that calls your Lex bot's [PostText API](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html). The PostText is part of the Lex Runtime Service that receives user input and returns the bot's response. The PostText URL takes Stentor requests and then returns Stentor responses
