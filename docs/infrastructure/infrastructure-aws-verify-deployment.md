---
title: Verify your AWS Application Deployment
---

## Amazon Kendra

A new Kendra index will be created. It will have a data source setup that is pointed at a newly created S3 bucket. You will want to confirm that the data source has synced the documents within the S3 bucket.

You can open the Search Console for the new index to test the search.

## AWS Lambda

There will be a new AWS Lambda function on your account.

If you want more verbose logging, add the following environment variable to your lambda function:

```
STENTOR_LOG_LEVEL=debug
```

You can configure the following test payload to ensure the lambda is working correctly. This will test connection with OC Studio and that you have the Lex channel configured properly.

Test Payload

```json
{
  "messageVersion": "1.0",
  "invocationSource": "FulfillmentCodeHook",
  "userId": "userId",
  "sessionAttributes": {},
  "bot": {
    "name": "Test Bot",
    "alias": "$LATEST",
    "version": "$LATEST"
  },
  "outputDialogMode": "Text",
  "currentIntent": {
    "name": "LaunchRequest",
    "slots": {},
    "confirmationStatus": "None"
  }
}
```
