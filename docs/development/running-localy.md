It is often helpful during development to run the application locally and have requests go to your computer. At a high level, this is a

If you are using Lex, you can setup a lambda that is a proxy to your local machine that is running NGROK

1. Setup a lambda that is a proxy to your machine

- This will then be used instead of a cloud based lambda as the fulfilment for your Lex bot.

```JavaScript

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

Create an environment variable `HOST` and set it to your NGROK proxy, for example `213cd.ngrok.io`.

For the IAM policy to run the application, create one based on the template below while replacing REGION, ACCOUNT_NUMBER, LAMBDA_NAME and TABLE_NAME fields with the app you will be running locally.

```
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

Once you have the policy, create a new user with programmatic access and apply the policy to the user.

Add the keys to a profile in your local AWS config file and run

```
export AWS_PROFILE=profile-name
```

before you start the local server.

Make sure you have the correct settings in your .env file at the root of the project you are running:

```
AWS_REGION={{REGION}}
STUDIO_APP_ID={{APP_ID}}
STUDIO_TOKEN=
USER_STORAGE_TABLE=studio-{{APP_ID}}
```
