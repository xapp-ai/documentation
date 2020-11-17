---
title: IAM Roles Created during AWS Deployment
---

During the deployment of your infrastructure, Cloudformation will create the following IAM Roles

## XAPP-AI-Studio

The role used by the runtime fulfillment Lambda to read and write to the database, create logs, and access the secret in Secrets Manager.

## XAPP-AI-Provisioning

Provides the provisioning Lambda ability to create a log group that will be used by the Lambda and access to the secret within Secrets Manager that authorizes the deployment.

## XAPP-AI-Studio-Provisioning

Used by the provisioning Lambda to read, create, update the runtime fulfillment Lambda and Kendra index.

## {app-name}-scalingRole-{random}

Used to set auto scaling on the DynamoDB based user storage.

## {app-name}-XappAIKendraDataSourceRole-{random}

Provides the ability for Kendra to create logs in CloudWatch for debugging and provides the ability to for Kendra to access the contents of an S3 bucket for use as a data source in Kendra.

## {app-name}-XappAIKendraIndexRole-{random}

Provides
