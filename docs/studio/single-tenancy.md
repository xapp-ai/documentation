---
title: Single Tenancy
---

Single tenancy allows you to host all of OC Studio on your AWS account.  Typically this is necessary when you have sensitive information that you work with that needs to have restricted access.  

## Deploying

At a high level, for deployment we will provide you with an authentication method and command line script that you will use to then deploy a OC Studio instance to your AWS account.  This script will automatically deploy all the necessary services, application code and the necessary IAM roles them to communicate with each other.  You will then have a [CMS API](/docs/development/api/cms), a [GraphQL API](/docs/development/api/graphql) and a Studio web application URL.

From there you can start to build out your application in Studio and point your assistant application to use the new runtime API.

### Setup AWS

1. Create an AWS account in which to deploy Studio.
2. Create an IAM user with administrator privileges that allows this script to assume. The policy attached to this user is also the policy that CloudFormation will use to deploy the client and API
3. Create a programmatic access and secret access key for the IAM user and save these credentials as a profile in the `~/.aws/credentials` file.
4. Create two S3 buckets. One bucket will be used to deploy the client to and the other will be used to deploy the API code to. These buckets must be in the same region that the Studio is to be deployed to.
5. Optional - Create a Amazon Cognito domain that you will use to authenticate your Studio users

### Setup Deployment Script

1. Install the script

  Either globally
  ```bash
  npm install -g @xapp/studio-deploy
  ```
  or as a `devDependency` in your package.json

1. Set your AWS_PROFILE
* `export AWS_PROFILE=<profile>`

1. Add the following environment variables to your current terminal or environment
  * `STUDIO_CLIENT_S3_BUCKET` - This is the name of the bucket that was created to store the client.
  * `STUDIO_API_S3_BUCKET` - This is the name of the bucket that was created to store the api client.
  * `STUDIO_COGNITO_DOMAIN` - This is the domain name unique to your organization that Amazon Cognito will use for signing in.

1. Add the signed URL to your environment to authorize your deployment

*  `STUDIO_SIGNED_URL` - A url in the format `https://single-tenant.xapp.ai?Policy=<token>` provided by XAPP

### Deploy Studio

You will need to deploy the client and API seperately with the following commands:

```$
studio-deploy deploy-client [ver]
```

and 

```$
studio-deploy deploy-api [ver]
```

These scripts will deploy all necessary assets. 

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

## Updating your Assistant Application

Your assistant application, the main runtime environment, will need to point to your single-tenant instance's [CMS API](/docs/development/api/cms) for retrieving content and pushing events.

The easiest way to configure your assistant application to point to your single tenant environment is to update the environment variable `STUDIO_BASE_URL` to be your single-tenants API URL.

## Studio Configuration

### Studio Client

A configuration file is loaded when the application loads and is used as the runtime configuration.  The file is located at `/config.js` and looks like this:

```js
window["xaStudioConfig"] = {
  apiUrl: "",
  wsUrl: "",
  widgetUrl: "",
  documentationUrl: "https://documentation.xapp.ai",
  feedbackEmail: "feedback@xapp.ai",
  supportEmail: "support@xapp.ai",
  auth: {
    provider: "",
    domain: "",
    clientId: "",
    audience: "",
  },
};
```




