---
title: Single Tenancy
---

:::warning
🚧This documentation is under construction 🚧
:::

Single tenancy allows you to host all of OC Studio on your AWS account.  Typically this is necessary when you have sensitive information that you work with that needs to have restricted access.  

## Deploying

At a high level, for deployment we will provide you with a Cloudformation script that you will then deploy to your AWS account.  This script will automatically deploy all the necessary services, application code and the necessary IAM roles them to communicate with each other.  You will then have a [runtime API](/docs/development/api/runtime), a [management API](/docs/development/api/graphql) and a Studio web application URL.

From there you can start to build out your application in Studio and point your assistant application to use the new runtime API.

## Development, Staging, Production

As part of onboarding, we will work closely with you getting your initial development environment setup. 

We suggest separate development, staging and production environments on isolated cloud accounts as part of your deployment process.

* Development - All development and changes to the environment start in your development environment.  All data within the environment is mocked data and should be considered ephemeral. 
* Staging - Staging is as close to production as you can make it.  Depending on your data security requirements, you can either use a copy of production data or generated mocked data.  The staging environment is your final testing environment.  
All of your development starts in your development environment.  
* Production - Production is a completely isolated environment with limited access to the backend that your customers interact with.

### Flow from Development --> Staging --> Production

We believe in following infrastructure as code for reliably moving the application and it's content through the different steps of your release cycle.  We will provide you with a Cloudformation script that will allow you to manage and deploy Studio to different environments.  You are then responsible for developing the necessary scripts to manage the rest of your infrastructure, such as the runtime environment.  For migrating your model and other content between environments, we recommend leveraging the [management API](/docs/development/api/graphql) to create exports of your application and then importing to the next environment.

## Authentication

For authentication, there are two primary options for the single-tenant architecture.  You can:

* Provide your OAuth 2.0 compatible endpoint
* Leverage Amazon Cognito which allows multiple options for third-party (federated) login.  [Read more](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html)

Both of these options allow you to bring your own identity provider.

## Studio Configuration


### Studio Client

A configuration file is loaded when the application loads and is used as the runtime configuration.




