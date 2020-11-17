---
title: Description of AWS Services
---

## Services

<div style={{textAlign: 'center'}}>

![architecture](../../../static/img/infrastructure/aws-architecture.svg)

</div>

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

### AWS CloudWatch

[CloudWatch](https://aws.amazon.com/cloudwatch/) is a robust logging and monitoring solution used for observing your application.

### AWS Identity and Access Management (IAM)

[IAM](https://aws.amazon.com/iam/) provides access management for your users and services. It secures communication between your services and between your application and OC Studio.
