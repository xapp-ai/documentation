---
title: IAM Policy for Stack Deployment
---

Typically the user launching the CloudFormation stack is an administrator on the account but in the situation where they are not, you can create a policy from the following JSON and apply it to the user that will be deploying:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:CreatePolicy",
        "iam:CreateRole",
        "iam:DeletePolicy",
        "iam:DeleteRole",
        "iam:DeleteRolePolicy",
        "iam:GetRole",
        "iam:GetRolePolicy",
        "iam:PassRole",
        "iam:PutRolePolicy"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogStream",
        "logs:DeleteLogStream",
        "logs:DeleteLogGroup",
        "logs:CreateLogGroup"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "lambda:CreateFunction",
        "lambda:InvokeFunction",
        "lambda:GetFunction",
        "lambda:DeleteFunction",
        "lambda:AddPermission",
        "lambda:RemovePermission"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:ListBucket",
        "s3:PutEncryptionConfiguration",
        "s3:DeleteBucket",
        "s3:PutBucketPublicAccessBlock",
        "s3:PutBucketPolicy",
        "s3:GetBucketPolicy",
        "s3:DeleteBucketPolicy"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:ListTables",
        "dynamodb:DescribeContinuousBackups",
        "dynamodb:UpdateContinuousBackups",
        "dynamodb:CreateTable",
        "dynamodb:DescribeTable",
        "dynamodb:DeleteTable"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "application-autoscaling:DescribeScalingPolicies",
        "application-autoscaling:RegisterScalableTarget",
        "application-autoscaling:DescribeScalableTargets",
        "application-autoscaling:DeleteScalingPolicy",
        "application-autoscaling:PutScalingPolicy",
        "application-autoscaling:DeregisterScalableTarget"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "kendra:CreateDataSource",
        "kendra:DescribeDataSource",
        "kendra:DeleteDataSource",
        "kendra:ListTagsForResource",
        "kendra:CreateIndex",
        "kendra:UpdateIndex",
        "kendra:DescribeIndex",
        "kendra:DeleteIndex"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "apigateway:GET",
        "apigateway:PATCH",
        "apigateway:PUT",
        "apigateway:POST",
        "apigateway:DELETE"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudformation:GetTemplateSummary",
        "cloudformation:ListStacks",
        "cloudformation:CreateStack"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": [
        "arn:aws:s3:::xapp-ai-deployment/precheck.zip",
        "arn:aws:s3:::xapp-ai-deployment/studio.zip",
        "arn:aws:s3:::xapp-ai-deployment/posttext.zip",
        "arn:aws:s3:::xapp-ai-deployment/startprov.zip"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:CreateSecret",
        "secretsmanager:TagResource",
        "secretsmanager:ListSecrets"
      ],
      "Resource": "*"
    }
  ]
}

```

You can make this more strict if you like but it will require some substitutions for `<accountNumber>`, `<stackName>` and `<appId>`.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:CreateRole",
                "iam:GetRolePolicy",
                "iam:PutRolePolicy",
                "iam:PassRole",
                "iam:DeleteRolePolicy",
                "iam:GetRole",
                "iam:DeleteRole"
            ],
            "Resource": [
                "arn:aws:iam::<accountNumber>:role/<stackName>-PostTextLambdaRole*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-PreCheckLambdaRole-*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-ProvisioningLambdaRole-*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-StudioLambdaRole-*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-XappAIKendraDataSourceRole-*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-XappAIKendraIndexRole-*",
                "arn:aws:iam::<accountNumber>:role/<stackName>-scalingRole-*",
                "arn:aws:iam::<accountNumber>:role/xapp-management-<appId>"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "kendra:CreateIndex"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "kendra:ListTagsForResource",
                "kendra:UpdateIndex",
                "kendra:DescribeIndex",
                "kendra:DeleteIndex",
                "kendra:CreateDataSource",
                "kendra:DescribeDataSource",
                "kendra:DeleteDataSource"
            ],
            "Resource": [
                "arn:aws:kendra:us-east-1:<accountNumber>:index/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:ListTables",
                "dynamodb:CreateTable"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:DescribeContinuousBackups",
                "dynamodb:UpdateContinuousBackups",
                "dynamodb:DescribeTable",
                "dynamodb:DeleteTable"
            ],
            "Resource": [
                "arn:aws:dynamodb:us-east-1:<accountNumber>:table/studio-user-<appId>"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:CreateFunction"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:InvokeFunction",
                "lambda:GetFunction",
                "lambda:DeleteFunction",
                "lambda:AddPermission",
                "lambda:RemovePermission"
            ],
            "Resource": [
                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-posttext-<appId>",
                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-precheck-<appId>",
                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-provisioning-<appId>",
                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-<appId>"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:CreateBucket"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:PutEncryptionConfiguration",
                "s3:DeleteBucket",
                "s3:PutBucketPublicAccessBlock",
                "s3:PutBucketPolicy",
                "s3:GetBucketPolicy",
                "s3:DeleteBucketPolicy"
            ],
            "Resource": [
                "arn:aws:s3:::<stackName>-xappairesourcebucket-*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogStream",
                "logs:DeleteLogStream",
                "logs:DeleteLogGroup",
                "logs:CreateLogGroup"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:GET",
                "apigateway:PATCH",
                "apigateway:PUT",
                "apigateway:POST",
                "apigateway:DELETE"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "application-autoscaling:DescribeScalingPolicies",
                "application-autoscaling:RegisterScalableTarget",
                "application-autoscaling:DescribeScalableTargets",
                "application-autoscaling:DeleteScalingPolicy",
                "application-autoscaling:PutScalingPolicy",
                "application-autoscaling:DeregisterScalableTarget"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::xapp-ai-deployment/precheck.zip",
                "arn:aws:s3:::xapp-ai-deployment/studio.zip",
                "arn:aws:s3:::xapp-ai-deployment/posttext.zip",
                "arn:aws:s3:::xapp-ai-deployment/startprov.zip"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:CreateSecret",
                "secretsmanager:TagResource",
                "secretsmanager:ListSecrets"
            ],
            "Resource": "*"
        }, 
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:GetTemplateSummary",
                "cloudformation:ListStacks",
                "cloudformation:CreateStack"
            ],
            "Resource": "*"
        },
    ]
}
```