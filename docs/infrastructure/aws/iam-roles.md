---
title: IAM Roles Created during AWS Deployment
---

During the deployment of your infrastructure, Cloudformation will create the following IAM Roles

## {app-id}-StudioLambdaRole-{random}

The role used by the runtime fulfillment Lambda to read and write to the database, create logs, and access the secret in Secrets Manager.

## {app-id}-ProvisioningLambdaRole-{random}

Provides the provisioning Lambda ability to create a log group that will be used by the Lambda and access to the secret within Secrets Manager that authorizes the deployment.

## {app-id}-PreCheckLambdaRole-{random}

Used by the pre-check lambda that does quick verification, making sure you have added a secret to the SecretsManager and are authorized.

It has access to the OCStudio secret in SecretsManager and can put logs to the CloudWatch log group. It can also create the log group if it doesn't exist yet.

## {app-id}-scalingRole-{random}

Used to set auto scaling on the DynamoDB based user storage.

## {app-id}-XappAIKendraIndexRole-{random}

Provides the ability for Kendra to create logs in CloudWatch for debugging and provides the ability to for Kendra to access the contents of an S3 bucket for use as a data source in Kendra.
