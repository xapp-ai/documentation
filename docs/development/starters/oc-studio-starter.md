---
title: OC Studio Starter
---

## Features

* Deployed to your environment
* Lex V2
* Leverages Studio's Content API for Handler & Knowledgebase content
* Monorepo

## Requirements

* AWS Account with administrative access

## Instructions

### Setup

1. Clone a copy of https://github.com/xapp-ai/oc-studio-starter or click "Use this template" on Github
2. From project root:
   * `nvm use`
   * `yarn install`
   * `yarn build`
3. Create a `.env` file in `packages/oc-studio-starter` with your APP ID from Studio for the app you are going to deploy.
   * [How do you find your application ID?](/docs/development/development-faqs#how-do-i-find-my-application-id)

```bash
AWS_REGION=us-east-1
STUDIO_APP_ID=
STUDIO_TOKEN=
LEX_BOT_ID=
LEX_BOT_ALIAS_ID=TSTALIASID
USER_STORAGE_TABLE=
```

4. Add a `STUDIO_TOKEN`, found in Studio under your app's Developer --> Tokens 
   * [Tokens](/docs/development/tokens)

### Create a Lex V2 Instance

1. Create a new Lex bot (v2)
2. When you create a new bot in the console, it automatically adds a Fallback Intent.
3. Update your .env file with the bot ID: `LEX_BOT_ID=`
   * You can find it when you first click on the bot name.
4. Update your .env file with the alias ID for the TestBotAlias: `LEX_BOT_ALIAS_ID=` 
   * Within your bot, look under Deployment --> Aliases, then select TestBotAlias
   * It should be `TSTALIASID` if you copy and pasted from above, this is a constant.

:::info
You should only have one item left in your `.env` not filled out at this point, the `USER_STORAGE_TABLE`, that will be complete after the deployment.
:::

### Deploy

1.  Navigate to the root of the runtime package:

```bash
cd packages/app
```

2.  Set your AWS_PROFILE to one that has necessary credentials to launch the stack:

```bash
export AWS_PROFILE=your-profile
```

3.  Deploy to your desired stage, either staging or production:

```bash
yarn deploy:prod
```
A successfull deployment will look something like this:

```bash
yarn run v1.22.19
$ rimraf ./lib && yarn build && serverless deploy --stage production
$ tsc -d true -p .

Deploying studio-runtime to stage production (us-east-1)
Cleaning dependency symlinks
Creating dependency symlinks

✔ Service deployed to stack all-pro-plumbing-app-production (142s)

endpoints:
  POST - https://{cloudfront-id}.execute-api.us-east-1.amazonaws.com/production/
  POST - https://{cloudfront-id}.execute-api.us-east-1.amazonaws.com/production/{proxy+}
functions:
  app: studio-runtime-{appId}-app-production (46 MB)

2 deprecations found: run 'serverless doctor' for more details

Monitor all your API routes with Serverless Console: run "serverless --console"
Done in 152.19s.
```

Your new endpoint for your assistant application will be under `endpoints` and your main runtime lambda is under `functions`.

The first `endpoint` (without the /{proxy+}) is how you can interact with your newly created assistant and is what you will use when you setup chat and search widgets.

### Updating Lex

With the XAPP CLI, push your model to your Lex bot

```bash
xapp push -p l2 -a {appId} --botName {bot-name}
```

### Setting up Chat Widget

1.  Create a chat widget or navigate to an existing chat widget
2.  Click the connection icon from the chat widget menu
2.  Paste the first endpoint URL from the output of your cloudformation script.
2.  Make sure you select the checkbox next to "Direct"
2. Save and test



### Updating from Template

We will make updates to the template and you may want to merge them in to your project.  This process is a bit manual but the following will allow you to then manually go through all the changes and accept/reject them.

```bash
git remote add template git@github.com:xapp-ai/oc-studio-starter.git
```

Fetch updates

```bash
git fetch --all
```

The merge

```bash
git merge template/main --allow-unrelated-histories
```