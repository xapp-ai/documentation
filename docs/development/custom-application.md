---
title: Custom Application
---

As some point during the life of your intelligent virtual assistant you may find you need to perform custom logic beyond the capabilities of the conditionals or integrate to one of your APIs.  

With OC Studio, you can accomplish all of this by taking over and extending the application that runs your assistant.

The assistant is built on the open source Apache 2.0 licensed [Stentor 📣](https://github.com/stentorium/stentor) framework.  Stentor takes care of all the heavy lifting of supporting different channels and dialog management with a straight forward way for extension.


## Self-hosted Runtime Environment

:::note
If you already launched a stack through Cloudformation, you can skip this step.
:::

:::caution
Anything you deploy onto your AWS account, you are responsible for the costs.  Some services, such as Kendra come with a 30 day trial however can be expensive to leave up and running if you are not using them.
:::

In order to customize the application, you will need to leverage AWS to setup your own Lambda & Lex instances.  The easiest way to get this up and running is by launching our CloudFormation based stack. 

Before launching a stack, you will need to setup a token in AWS Secrets Manager.  Detailed instructions can be found [here](/docs/infrastructure/aws/secrets-manager-setup), the token required can be generated under Developer --> Tokens.  

Once your secret is setup, you can launch your stack.  From Studio, go to Developer --> Infrastructure and click "Launch Stack".

## Development Environment

It is recommended to use either the Windows Subsystem for Linux, Linux, or macOS for your development environment.  You will need Node.js, at least version `12.22.9 || 14 || 16`.  

You will next need to clone the following [repository](https://github.com/xapp-ai/oc-studio-starter), which is the exact same application that is deployed by our CloudFormation script.  You can then modify the application by adding [custom handlers](/docs/development/custom-handlers) or by modifying which [channels](/docs/channels) you support.

```console
$ git clonse git@github.com:xapp-ai/oc-studio-starter.git
$ cd oc-studio-starter
$ npm install
$ npm run build
```

The repository is a monorepo powered by [Lerna](https://lerna.js.org/).  The two major packages are `packages/oc-studio-starter-template` and `packages/oc-studio-starter` which contains the content and runtime environment respectively.  

## Packaging to a ZIP file

Once you make the necessary changes and have added adequate unit tests, you can deploy the application by building a release and then uploading the resulting zip file directly to the Lambda console.

From the project root:

```console
$ cd packages/oc-studio-starter
$ npm run dist
```

The resulting zip file will be located at `./lib/oc-studio-starter.zip`
