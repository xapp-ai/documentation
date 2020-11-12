---
title: Amazon Web Services
sidebar_label: Run on AWS
---

Amazon Web Services (AWS) provides a robust set of services you can run your virtual agent on.

## Application Architecture

<div style={{textAlign: 'center'}}>

![architecture](../../static/img/infrastructure/aws-architecture.svg)

</div>

Your application will leverage the following AWS Services:

### Amazon Lex

[Lex](https://aws.amazon.com/lex/) provides a conversational interface for applications. It provides automatic speech recognition (ASR), natural language understanding (NLU), and an application programming interface (API) to integration with different channels.

### Amazon Kendra

[Kendra](https://aws.amazon.com/kendra/) is a natural language search engine powered by machine learning. It will serve as the knowledge base for you application.

### AWS S3

[S3](https://aws.amazon.com/s3/) is an object store that is used to securely store your training documents that are fed into Kendra.

### AWS Lambda

[Lambda](https://aws.amazon.com/lambda/) is a function as a service that is cost-effective, scalable, easy to maintain. It is the primary compute engine for you application.

### AWS DynamoDB

[DynamoDB](https://aws.amazon.com/dynamodb/) is a NoSQL database. It will be used as storage for your users.

### AWS Secrets Manager

[Secrets Manager](https://aws.amazon.com/secrets-manager/) is used to securely store your OC Studio API token that authenticates deployment and all application runtime communication.

## AWS Marketplace

Existing AWS customers can easily pay and deploy their application & infrastructure through our [AWS Marketplace listing](https://aws.amazon.com/marketplace/pp/B08N39KTFR) for Conversational Self Service for Contact Center Intelligence.

You must have an existing AWS account and we **highly recommend** setting up a new account under an [AWS Organization](https://aws.amazon.com/organizations/). This will isolate the installation from other resources you manage.

## Securing your Application

Before you can deploy your application to an AWS account, you must setup a new secret in AWS Secrets Manager. You can find detailed step by step instructions [here](infrastructure-aws-secrets-manager-setup).

## Deploying to AWS

The deployment to your AWS account leverages a CloudFormation script with a custom provisioning lambda. The CloudFormation script will deploy the individual resources while the provisioning lambda will help make the connections between the resources as they are built.

Also during deployment, the necessary IAM roles will be setup that are required for the services to connect and establishing a connection between your infrastructure and OC Studio.

The deployment will take between 15 to 40 minutes, with setting up Kendra typically taking the longest and has the most variance.

- [Verifying your AWS deployment](infrastructure-aws-verify-deployment)
