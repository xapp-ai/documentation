---
title: Common Errors in Stack Deployment
---

### Status ROLLBACK_COMPLETE

A status of ROLLBACK_COMPLETE on your CloudFormation deployment means a step in the deployment failed and CloudFormation then automatically removed the resources it already created. You will want to then find

### How to find the failure reason?

On the Cloudformation stack detail page, you should see a tab labelled "Events". On this tab is a list of the events created during the deployment for resource creation and deletion. They are in reverse chronological order so on a failure the top status is ROLLBACK_COMPLETE and as you scroll down you will see DELETE_COMPLETE & DELETE_IN_PROGRESS. At some point you will see it switch over to CREATE_IN_PROGRESS & CREATE_COMPLETE and the boundary between the creations and deletions is a CREATE_FAILED. The status reason will contain the relevent information

### LexResource CREATE_FAILED Failed to create resource. States.TaskFailed

### XAPP-AI-PreCheck-\{appId\} Failed

The pre-check does a quick validation before the stack deploys to ensure you have properly setup your secret in SecretsManager and are authorized to deploy the stack.

#### PreCheckResource - Failed to create resource. Unable to start provisioning: Secrets Manager can't find the specified secret.

Follow these instructions [here](secrets-manager-setup) to setup a secret.
