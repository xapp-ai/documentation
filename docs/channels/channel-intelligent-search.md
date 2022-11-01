---
title: Beta - Intelligent Search
sidebar_label: BETA - Intelligent Search
---


:::caution

This is a new channel currently in beta and is subject to change.  You will need to enable it in your app's settings to access it on the "Add Channel" dialog.

:::

## What is the intelligent search channel?

The intelligent search channel provide search capabilities for a website which includes your traditional keyword relevancy style search, FAQ search, and natural language powered suggested answers.

## Connecting to a Backend

The intelligent search channel requires a backend to communicate with.  By default, most deployed apps will support the intelligent search channel out of the box.  

### Connecting to existing Lex Channel

If you have an existing Lex Channel with a PostText URL, you can use this as your search bar's server.

When you copy and paste the URL, you must post-fix the PostText URL with `/studio`. For example, if you have a PostText URL of:

```
https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod
```

Then you want to append `/studio` like so:

```
https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod/studio
```

