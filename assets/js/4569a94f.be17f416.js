"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[4361],{1538:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"infrastructure/aws/iam-policy-for-deployment","title":"IAM Policy for Stack Deployment","description":"Typically the user launching the CloudFormation stack is an administrator on the account but in the situation where they are not, you can create a policy from the following JSON and apply it to the user that will be deploying:","source":"@site/docs/infrastructure/aws/iam-policy-for-deployment.md","sourceDirName":"infrastructure/aws","slug":"/infrastructure/aws/iam-policy-for-deployment","permalink":"/docs/infrastructure/aws/iam-policy-for-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IAM Policy for Stack Deployment"},"sidebar":"aws","previous":{"title":"Verify your AWS Application Deployment","permalink":"/docs/infrastructure/aws/verify-deployment"},"next":{"title":"Single Tenancy on AWS","permalink":"/docs/infrastructure/aws/single-tenancy"}}');var o=a(4848),c=a(8453);const i={title:"IAM Policy for Stack Deployment"},r=void 0,s={},l=[];function u(n){const e={code:"code",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Typically the user launching the CloudFormation stack is an administrator on the account but in the situation where they are not, you can create a policy from the following JSON and apply it to the user that will be deploying:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "iam:CreatePolicy",\n        "iam:CreateRole",\n        "iam:DeletePolicy",\n        "iam:DeleteRole",\n        "iam:DeleteRolePolicy",\n        "iam:GetRole",\n        "iam:GetRolePolicy",\n        "iam:PassRole",\n        "iam:PutRolePolicy"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "logs:CreateLogStream",\n        "logs:DeleteLogStream",\n        "logs:DeleteLogGroup",\n        "logs:CreateLogGroup"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "lambda:CreateFunction",\n        "lambda:InvokeFunction",\n        "lambda:GetFunction",\n        "lambda:DeleteFunction",\n        "lambda:AddPermission",\n        "lambda:RemovePermission"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:CreateBucket",\n        "s3:ListBucket",\n        "s3:PutEncryptionConfiguration",\n        "s3:DeleteBucket",\n        "s3:PutBucketPublicAccessBlock",\n        "s3:PutBucketPolicy",\n        "s3:GetBucketPolicy",\n        "s3:DeleteBucketPolicy"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "dynamodb:ListTables",\n        "dynamodb:DescribeContinuousBackups",\n        "dynamodb:UpdateContinuousBackups",\n        "dynamodb:CreateTable",\n        "dynamodb:DescribeTable",\n        "dynamodb:DeleteTable"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "application-autoscaling:DescribeScalingPolicies",\n        "application-autoscaling:RegisterScalableTarget",\n        "application-autoscaling:DescribeScalableTargets",\n        "application-autoscaling:DeleteScalingPolicy",\n        "application-autoscaling:PutScalingPolicy",\n        "application-autoscaling:DeregisterScalableTarget"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "kendra:CreateDataSource",\n        "kendra:DescribeDataSource",\n        "kendra:DeleteDataSource",\n        "kendra:ListTagsForResource",\n        "kendra:CreateIndex",\n        "kendra:UpdateIndex",\n        "kendra:DescribeIndex",\n        "kendra:DeleteIndex"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "apigateway:GET",\n        "apigateway:PATCH",\n        "apigateway:PUT",\n        "apigateway:POST",\n        "apigateway:DELETE"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "cloudformation:GetTemplateSummary",\n        "cloudformation:ListStacks",\n        "cloudformation:CreateStack"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": [\n        "arn:aws:s3:::xapp-ai-deployment/precheck.zip",\n        "arn:aws:s3:::xapp-ai-deployment/studio.zip",\n        "arn:aws:s3:::xapp-ai-deployment/posttext.zip",\n        "arn:aws:s3:::xapp-ai-deployment/startprov.zip"\n      ]\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "secretsmanager:CreateSecret",\n        "secretsmanager:TagResource",\n        "secretsmanager:ListSecrets"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n\n'})}),"\n",(0,o.jsxs)(e.p,{children:["You can make this more strict if you like but it will require some substitutions for ",(0,o.jsx)(e.code,{children:"<accountNumber>"}),", ",(0,o.jsx)(e.code,{children:"<stackName>"})," and ",(0,o.jsx)(e.code,{children:"<appId>"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "iam:CreateRole",\n                "iam:GetRolePolicy",\n                "iam:PutRolePolicy",\n                "iam:PassRole",\n                "iam:DeleteRolePolicy",\n                "iam:GetRole",\n                "iam:DeleteRole"\n            ],\n            "Resource": [\n                "arn:aws:iam::<accountNumber>:role/<stackName>-PostTextLambdaRole*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-PreCheckLambdaRole-*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-ProvisioningLambdaRole-*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-StudioLambdaRole-*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-XappAIKendraDataSourceRole-*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-XappAIKendraIndexRole-*",\n                "arn:aws:iam::<accountNumber>:role/<stackName>-scalingRole-*",\n                "arn:aws:iam::<accountNumber>:role/xapp-management-<appId>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "kendra:CreateIndex"\n            ],\n            "Resource": [\n                "*"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "kendra:ListTagsForResource",\n                "kendra:UpdateIndex",\n                "kendra:DescribeIndex",\n                "kendra:DeleteIndex",\n                "kendra:CreateDataSource",\n                "kendra:DescribeDataSource",\n                "kendra:DeleteDataSource"\n            ],\n            "Resource": [\n                "arn:aws:kendra:us-east-1:<accountNumber>:index/*"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "dynamodb:ListTables",\n                "dynamodb:CreateTable"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "dynamodb:DescribeContinuousBackups",\n                "dynamodb:UpdateContinuousBackups",\n                "dynamodb:DescribeTable",\n                "dynamodb:DeleteTable"\n            ],\n            "Resource": [\n                "arn:aws:dynamodb:us-east-1:<accountNumber>:table/studio-user-<appId>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "lambda:CreateFunction"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "lambda:InvokeFunction",\n                "lambda:GetFunction",\n                "lambda:DeleteFunction",\n                "lambda:AddPermission",\n                "lambda:RemovePermission"\n            ],\n            "Resource": [\n                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-posttext-<appId>",\n                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-precheck-<appId>",\n                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-provisioning-<appId>",\n                "arn:aws:lambda:us-east-1:<accountNumber>:function:xapp-<appId>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:CreateBucket"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket",\n                "s3:PutEncryptionConfiguration",\n                "s3:DeleteBucket",\n                "s3:PutBucketPublicAccessBlock",\n                "s3:PutBucketPolicy",\n                "s3:GetBucketPolicy",\n                "s3:DeleteBucketPolicy"\n            ],\n            "Resource": [\n                "arn:aws:s3:::<stackName>-xappairesourcebucket-*"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "logs:CreateLogStream",\n                "logs:DeleteLogStream",\n                "logs:DeleteLogGroup",\n                "logs:CreateLogGroup"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "apigateway:GET",\n                "apigateway:PATCH",\n                "apigateway:PUT",\n                "apigateway:POST",\n                "apigateway:DELETE"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "application-autoscaling:DescribeScalingPolicies",\n                "application-autoscaling:RegisterScalableTarget",\n                "application-autoscaling:DescribeScalableTargets",\n                "application-autoscaling:DeleteScalingPolicy",\n                "application-autoscaling:PutScalingPolicy",\n                "application-autoscaling:DeregisterScalableTarget"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": "s3:GetObject",\n            "Resource": [\n                "arn:aws:s3:::xapp-ai-deployment/precheck.zip",\n                "arn:aws:s3:::xapp-ai-deployment/studio.zip",\n                "arn:aws:s3:::xapp-ai-deployment/posttext.zip",\n                "arn:aws:s3:::xapp-ai-deployment/startprov.zip"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "secretsmanager:CreateSecret",\n                "secretsmanager:TagResource",\n                "secretsmanager:ListSecrets"\n            ],\n            "Resource": "*"\n        }, \n        {\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:GetTemplateSummary",\n                "cloudformation:ListStacks",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n    ]\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var t=a(6540);const o={},c=t.createContext(o);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);