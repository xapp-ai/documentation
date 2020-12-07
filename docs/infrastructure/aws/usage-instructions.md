---
title: CSS4CCI on AWS Usage Instructions
---

:::tip
Although not required, have these instructions open while you walk through onboarding, deployment, and initial steps.
:::

### Prerequisites

- **AWS Account**
  - You must have console access with access to creating resources & IAM roles
  - We recommend creating a new AWS account within an organization
  - Kendra's free tier can only be used once, either for an account or organization, you may need to create a new independent account to get another trial
- **Publicly accessible self-serve knowledge base**
  - It will be crawled and used as initial training material
  - It helps if the knowledge base is on a unique subdomain or path

### Onboarding

These steps follow along the individual onboarding steps that you go through after you sign up through AWS Marketplace.

1. Name your application and organization
   - You can change these later
   - Usage plans are associated with the organization, which allows you to create many applications that share the same resources
2. Crawl knowledge base
   - Provide the URL to your publicly available knowledge base that will be used as initial training material
   - We will begin crawling immediately, the HTML pages crawled will be copied over to your infrastructure after deployment for use within AWS Kendra
3. Secure your Deployment and Application
   - Set up the secret in AWS Secrets Manager
   - Detailed instructions can be found [here](secrets-manager-setup)
4. Deploy your stack
   - Leveraging AWS Cloudformation, the application will deploy to your AWS account
   - If you have multiple AWS accounts, make sure you signed in with the same one your earlier linked
   - If any errors occur during deployment, see [common errors](common-errors-in-stack-deployment) for possible help.

## Next Steps

- **Verify deployment**
  - Ensure your crawled content is what you expected by asking questions in the AWS Kendra Search Console
  - Talk to your application through the AWS Lex test console
  - More verification steps can be found [here](verify-deployment)
- **Setup a Channel**
  - [Slack through Lex](../../channels/slack-through-lex)
