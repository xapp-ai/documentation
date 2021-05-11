---
title: Running Locally
---

It is often helpful during development to run the application locally and have requests go to your computer. At a high level, this is a

If you are using Lex, you can setup a lambda that is a proxy to your local machine that is running NGROK

1. Setup [NGROK](https://ngrok.com/), optional if you already have NGROK (or similar) installed
    - NGROK allows you to expose your local development environment as a public URL

1. Setup a lambda that is a proxy to your machine
    - This will then be used instead of a cloud based lambda as the fulfillment for your Lex bot.
    - Create a new Lambda on the AWS console, a recommended name is `{initials}-proxy` so you can recognize your proxy.
    - Copy and paste the following into the code block for the lambda.

    ```js

    var https = require('https');

    exports.handler = (event, context, callback) => {

        const finalEvent = JSON.stringify(event);

        try {
            const options = {
                host: process.env.HOST,
                path: "/",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(finalEvent)
                },
            };

            const req = https.request(options, (res) => {

                let data = '';
                console.log('STATUS: ' + res.statusCode);
                res.setEncoding('utf8');

                res.on('data', (chunk) => {
                    console.log("data");
                    console.log(chunk);
                    data += chunk;

                });
                res.on('end', () => {
                    console.log('No more data in response.');
                    let result;
                    try {
                        result = JSON.parse(data.toString());
                        callback(null, result);
                    } catch (e) {
                        callback(null, {'error': 'Unable to parse response: ' + e.toString()});
                    }
                });
            });
            req.on('error', (err) => {
                console.log('problem with request:', err.toString());
            });
            // write data to request body
            console.log('writing request');
            console.log(finalEvent);
            req.write(finalEvent);
            req.end();
        } catch (ex) {
            console.log(ex.message);
            callback(null, ex.message);
        }
    };
    ```

1. Configure the Lambda to point to your machine 
    - Create an environment variable `HOST` and set it to your NGROK proxy, for example `213cd.ngrok.io`.
    - If you are a paid NGROK customer, this will be constant, if you are not this will be created new every time you start NGROK.

1. Create an IAM policy that allows you to run your application locally
    - For the IAM policy to run the application, create one based on the template below while replacing REGION, ACCOUNT_NUMBER, LAMBDA_NAME and TABLE_NAME fields with the app you will be running locally.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": [
                    "logs:CreateLogStream",
                    "logs:CreateLogGroup"
                ],
                "Resource": [
                    "arn:aws:logs:{{REGION}}:{{ACCOUNT_NUMBER}}:log-group:/aws/lambda/{{LAMBDA_NAME}}:*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": [
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:{{REGION}}:{{ACCOUNT_NUMBER}}:log-group:/aws/lambda/{{LAMBDA_NAME}}:*:*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": [
                    "dynamodb:PutItem",
                    "dynamodb:UpdateItem",
                    "dynamodb:GetItem"
                ],
                "Resource": [
                    "arn:aws:dynamodb:{{REGION}}:{{ACCOUNT_NUMBER}}:table/{{TABLE_NAME}}"
                ],
                "Effect": "Allow"
            },
            {
                "Action": [
                    "lex:*",
                    "kendra:*"
                ],
                "Resource": [
                    "*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": [
                    "secretsmanager:GetSecretValue"
                ],
                "Resource": [
                    "arn:aws:secretsmanager:{{REGION}}:{{ACCOUNT_NUMBER}}:secret:{{SECRET_NAME}}*"
                ],
                "Effect": "Allow"
            }
        ]
    }
    ```

1. Create a new user with programmatic access and apply the policy to the user.
    - Download the credentials, add them to your `.aws/credentials` file as a profile.
    - Run `export AWS_PROFILE=profile-name` before you start your local server.

1. Make sure you have the correct settings in your .env file at the root of the project you are running:

    ```env
    AWS_REGION={{REGION}}
    STUDIO_APP_ID={{APP_ID}}
    STUDIO_TOKEN={{TOKEN_FROM_STUDIO_SPECIFIC_TO_APP_ID}}
    USER_STORAGE_TABLE=studio-{{APP_ID}}
    ```
