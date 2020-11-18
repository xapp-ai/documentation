---
title: Amazon Web Services
sidebar_label: Run on AWS
---

Amazon Web Services (AWS) provides a robust set of services and AI/ML suite you can run your virtual agent on.

### Quick Links

- [Free Trial on AWS](aws/free-trial)
- [Deployment: Services](aws/description-of-services)
- [Deployment: IAM Roles](aws/iam-roles)

## Architecture

<div style={{textAlign: 'center'}}>

![architecture](../../static/img/infrastructure/aws-architecture.svg)

</div>

OC Studio leverages an architecture where the runtime environment is controlled by the customer. While this architecture doesn't let us take full advantage of typical SaaS features, we believe the pros outweigh the cons.

Advantages:

- **Security** You are in 100% control of your runtime environment and subsequently your customer's data.
- **Access** With full control, you also get access to the underlying services leveraged, like Lex & Kendra, which allow you to directly take advantage of their additional features
- **Independence** We can guarantee zero-vendor lock-in. If you cancel your subscription to OC Studio, your application will continue running.

## AWS Marketplace

Existing AWS customers can easily pay and deploy their application & infrastructure through our [AWS Marketplace listing](https://aws.amazon.com/marketplace/pp/B08N39KTFR) for Conversational Self Service for Contact Center Intelligence.

You must have an existing AWS account and we **highly recommend** setting up a new account under an [AWS Organization](https://aws.amazon.com/organizations/). This will isolate the installation from other resources you manage.

- [Free Trial on AWS](aws/free-trial)

## Securing your Application

Before you can deploy your application to an AWS account, you must setup a new secret in AWS Secrets Manager. The secret will ensure you have the authority to deploy the application and secures content retrieval and event posting at runtime.

You can find detailed step by step instructions [here](aws/secrets-manager-setup).

## Deploying to AWS

The deployment to your AWS account leverages a CloudFormation script with a custom provisioning lambda.

### Provisioning Lambda

One of the first tasks for the CloudFormation script is to deploy a lambda that will help coordinate deployment. It will move crawled web pages to your account and setup a Kendra Data Source, help establish the connection between Kendra and Lex, and kick off an initial build of your Lex bot for immediate use.

### Deployed Resources

The CLoudFormation script also deploys the necessary compute, storage, AI/ML, and security resources for your application.

You can find a detailed description of all the services [here](aws/description-of-services)

The deployment will take between 15 to 40 minutes, with setting up Kendra typically taking the longest and has the most variance. Another variable contributing to the deployment is the amount of web pages crawled.

## Additional Resources

- [Secrets Manager Setup](aws/secrets-manager-setup)
- [Deployment: Services](aws/description-of-services)
- [Deployment: IAM Roles](aws/iam-roles)
- [Common Errors in AWS Deployment](aws/common-errors-in-stack-deployment)
- [Verifying your AWS deployment](aws/verify-deployment)
