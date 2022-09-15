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
   * [How do you find your application ID?](http://localhost:3000/docs/development/development-faqs#how-do-i-find-my-application-id)

```bash
STUDIO_APP_ID=your-app-id
```

### Deploy

1. Navigate to the root of the runtime package:

```bash
cd packages/oc-studio-starter
```

2. Set your AWS_PROFILE to one that has necessary credentials to launch the stack:

```bash
export AWS_PROFILE=your-profile
```