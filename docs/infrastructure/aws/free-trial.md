---
title: Free Trial on AWS
---

A free trial on AWS is available by leveraging:

- Free Trial offer on the Marketplace listing
- AWS Free Tier for each service

## AWS Marketplace Free Trial

Through the CSS4CCI AWS Marketplace listing, a free trial tier is offered. This tier gives you access to the Pro tier features for 30 days without paying for the subscription of CSS4CCI.

## AWS Free Tier

CSS4CII requires the runtime application, Lex, and Kendra to run on your AWS account (deployed through CloudFormation). These AWS costs are your responsibility and in order to keep your trial free of additional infrastructure costs, you must meet the requirements of [AWS Free Tier](https://aws.amazon.com/free) for each service. The requirements are generous and it would be extraordinary for you to exceed these limits during the 30 day trial period.

If you are using AWS within your organization, most likely your usage already surpasses the Free Tier requirements. If this is the case, we recommend creating an independent isolated AWS account, independent of your organization. If desired, it can be transferred into your organization at the conclusion of the trial.

The following services will be deployed to your AWS account using CloudFormation:

| Service             | Free Tier Available  |                          Details                           |
| :------------------ | :------------------: | :--------------------------------------------------------: |
| Amazon Lex          |          ✅          |       [Pricing](https://aws.amazon.com/lex/pricing/)       |
| Amazon Kendra       |          ✅          |     [Pricing](https://aws.amazon.com/kendra/pricing/)      |
| AWS S3              |          ✅          |       [Pricing](https://aws.amazon.com/s3/pricing/)        |
| AWS Lambda          |          ✅          |     [Pricing](https://aws.amazon.com/lambda/pricing/)      |
| AWS DynamoDB        |          ✅          |    [Pricing](https://aws.amazon.com/dynamodb/pricing/)     |
| AWS Secrets Manager |          ✅          | [Pricing](https://aws.amazon.com/secrets-manager/pricing/) |
| AWS CloudWatch      |          ✅          |   [Pricing](https://aws.amazon.com/cloudwatch/pricing/)    |
| AWS IAM             | No Additional Charge |           [Service](https://aws.amazon.com/iam/)           |

**Note** During the Free Trial, the Kendra Developer Edition will be used, which has a Free Tier option that includes 750 hours for the first 30 days (see [here](https://aws.amazon.com/kendra/pricing/)). After this period you will then be charged full price for Kendra Developer Edition, which starts at $2.50 / hour.

## FAQS

### What happens after the free trial?

At the end of the 30 day free trial you can either upgrade to the paid Pro tier through AWS Marketplace or your account will be downgraded where your data is preserved but you no longer have access to a majority of the features.

You must delete your stack on your AWS account's CloudFormation console to prevent further AWS charges. If you fail to delete your stack after the Free Tier limits

### How do I delete my Kendra instance?

You can delete it, along with the entire stack of resources, by deleting the CloudFormation stack. You can also delete it independent of the stack but at the risk of complicating redeployment of the stack.
